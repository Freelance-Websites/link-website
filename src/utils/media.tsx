export const isVideo = (media: string) => {
  const videoExtensions = ['mp4', 'webm', 'ogg'];
  const extension = media.split('.').pop();
  return videoExtensions.includes(extension || '');
};

export const isTransparentBackground = (media: string) => {
  const imageExtensions = ['png'];
  const extension = media.split('.').pop();
  return imageExtensions.includes(extension || '');
}