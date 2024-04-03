import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();

// let the server know that we are using json
app.use(express.json());

// handle upload video file
app.post("/process-video", (req, res) => {
    // Get path of the input video file from the request body
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath;

    // handle bad request if missing arguments
    if (!inputFilePath || !outputFilePath) {
        res.status(400).send("Bad Request: Missing file path.")
    }


    // use ffmpeg to process
    // ffmpeg ascnchronously process the video file
    ffmpeg(inputFilePath)
        .outputOptions("-vf", "scale=-1:360") // 360p
        .on("end", () => {
            res.status(200).send("Video processing started.");  
        })
        .on("error", (err) => {
            console.log(`An error occurred: ${err.message}`);
            res.status(500).send(`Internal Server Error: ${err.message}`);
        })
        .save(outputFilePath);
});

// standard way to provide the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    // service listen on this port
    console.log(`Video processing service listening at "http://localhost:${port}"`);
});






