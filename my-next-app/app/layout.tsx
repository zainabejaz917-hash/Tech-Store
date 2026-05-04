import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voltex Electronics - Premium Tech Store",
  description: "Shop premium laptops, phones, audio gear, and smart devices at Voltex Electronics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#050814' }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}