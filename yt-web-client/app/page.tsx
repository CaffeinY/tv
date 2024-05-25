import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import { getVideos, getUserInfo } from "./utils/firebase/functions";





export default async function Home() {
  const videos = await getVideos();
  const userInfo = await getUserInfo();

  return (
    <main>
      {
        videos.map((video) => (
          video.filename !== undefined && video.status !== 'failed' &&
          <Link href={`/watch?v=${video.filename}`} key={video.id}>
            <Image src={'/thumbnail.png'} alt='video' width={120} height={80}
              className={styles.thumbnail}/>
          </Link>
        ))
      }
    </main>
  );
}

// refetch getVideos every 30 seconds, so that new videos can be shown
export const revalidate = 30;