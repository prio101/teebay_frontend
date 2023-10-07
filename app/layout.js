export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <script src="https://cdn.tailwindcss.com"></script>
        <body>{children}</body>
      </html>
    )
  }