import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0C0D12] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
