import { getFunctions, httpsCallable } from "firebase/functions";
import { functions } from './firebase';


const generateUploadUrlFunction = httpsCallable(functions, "generateUploadUrl");
const getVideosFunction = httpsCallable(functions, 'getVideos');
const getUserInfoFunction = httpsCallable(functions, 'getUserInfo');

export async function uploadVideo(file: File) {
  const response: any = await generateUploadUrlFunction({
    fileExtension: file.name.split('.').pop()
  });

  // Upload the file to the signed URL
  const uploadResult = await fetch(response?.data?.url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    }
  });

  return uploadResult;
}



export interface Video {
  id?: string,
  uid?: string,
  filename?: string,
  status?: 'processing' | 'processed' | 'failed',
  title?: string,
  description?: string
}

export async function getVideos() {
  const response: any = await getVideosFunction();
  return response.data as Video[];
}

export interface userInfo {
  email?: string,
  photoURL?: string,
  uid?: string,
  upload?: boolean
}

export async function getUserInfo(auth: any) {
  const response: any = await getUserInfoFunction(auth);
  return response.data as userInfo;
}
