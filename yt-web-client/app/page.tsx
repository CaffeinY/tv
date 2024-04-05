import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import { getVideos } from "./utils/firebase/functions";







export default async function Home() {
  const videos = await getVideos();
  
  return (
    <main>
      {
        videos.map((video) => (
          <Link href={`/watch?v=${video.filename}`} key={video.id}>
            <Image src={'/thumbnail.png'} alt='video' width={120} height={80}
              className={styles.thumbnail}/>
          </Link>
        ))
      }
    </main>
  );
}