import { promisify } from '../utils';

export const saveImageToPhotosAlbum = promisify(uni.saveImageToPhotosAlbum);
