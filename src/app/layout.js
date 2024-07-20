export const metadata = {
  title: "React Training App",
  description: "An app to learn React & Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
