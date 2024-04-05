1. express typescript ts-node

2. --save-dev   devDependence -> needed when develop but not needed when build and deploy

3. tyconfig
```json
    {
    "compilerOptions": {
      "target": "es6",  // version of js language 
      "module": "commonjs", // 
      "rootDir": "src",
      "outDir": "dist",
      "strict": true,       // type check
      "esModuleInterrop": true
    },
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules"]
  }
```

4. ts-node src/index/ts   compile
5.  package.json    scripts: build and  serve for deployment
6. fluent-ffmpeg    process video; wrapper; CLI, command line tool 

7. docker : Containers allow us to package our app and all its dependencies into a single image. 

8. next.js

9. firebase SDK Auth in firebase.ts

10. server side component -> client : "use client";

11. <Fragment> 不会添加额外的节点在DOM

12. signed url: short-live server side with privileged credential

13. CORS: block request from not specific region


14. 遇到的问题， service的log一直在尝试delete某个文件 已经不存在的/ pubsub 出问题， 
a)通过PURGE MESSAGES解决/
b) deadline 10 too early, I change it to 600s
  status
 another 问题， 触发了两次，已经删除了 但还要继续


 15. docker build push deploy
  docker build -t us-central1-docker.pkg.dev/yt-clone-6ce39/video-processing-repo/video-processing-service .

  docker push us-central1-docker.pkg.dev/yt-clone-6ce39/video-processing-repo/video-processing-service

  gcloud run deploy video-processing-service --image us-central1-docker.pkg.dev/yt-clone-6ce39/video-processing-repo/video-processing-service   --region=us-central1   --platform managed   --timeout=3600   --memory=2Gi   --cpu=1   --min-instances=0   --max-instances=1   --ingress=internal

  for client:

  docker build -t us-central1-docker.pkg.dev/yt-clone-6ce39/yt-web-client-repo/yt-web-client .

  docker push us-central1-docker.pkg.dev/yt-clone-6ce39/yt-web-client-repo/yt-web-client

  # Deploy container to cloud run
  gcloud run deploy yt-web-client --image us-central1-docker.pkg.dev/yt-clone-6ce39/yt-web-client-repo/yt-web-client \
    --region=us-central1 \
    --platform managed \
    --timeout=3600 \
    --memory=2Gi \
    --cpu=1 \
    --min-instances=0 \
    --max-instances=1
