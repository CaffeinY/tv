"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

function VideoPlayer() {
  const searchParams = useSearchParams();
  const videoSrc = searchParams.get("v");
  const videoPrefix =
    "https://storage.googleapis.com/caff1enn-yt-processed-videos/";

  return <video className={styles.responsiveVideo} controls src={`${videoPrefix}${videoSrc}`} />;
}

export default function Watch() {
  return (
    <div>

      <Suspense fallback={<div>Loading video...</div>}>
        <VideoPlayer />
      </Suspense>
    </div>
  );
} 