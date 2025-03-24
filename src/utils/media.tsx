export const isVideo = (media: string) => {
  const videoExtensions = ['mp4', 'webm', 'ogg'];
  const extension = media.split('.').pop();
  return videoExtensions.includes(extension || '');
};