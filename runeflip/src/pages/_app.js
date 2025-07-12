// Import global CSS (required)
import '../styles/globals.css';

// Optional: Import fonts if not using globals.css
import '@fontsource/rajdhani/400.css';
import '@fontsource/rajdhani/700.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#0C0D12] text-white font-sans min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
