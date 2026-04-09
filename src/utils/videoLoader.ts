/**
 * Custom video loader for BunnyCDN
 * @param src Video source path
 * @returns Full BunnyCDN URL
 */
export const bunnyVideoLoader = (src: string) => {
  // Extract just the filename from the path
  const filename = src.split('/').pop();
  
  // BunnyCDN domain and path
  const cdnBase = 'https://site-and-site-miller-design-images.b-cdn.net';
  const videoPath = `miller-design-images/${filename}`;
  
  // Construct the full URL
  const videoUrl = `${cdnBase}/${videoPath}`;
  
  // Debug log
  console.log(`Loading video: ${src} → ${videoUrl}`);
  
  return videoUrl;
};

export default bunnyVideoLoader; 