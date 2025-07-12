module.exports = {
  output: 'export',  // Required for static exports
  trailingSlash: true,  // Fixes path issues
  images: { unoptimized: true }  // Avoids Vercel optimization errors
};
