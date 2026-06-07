import "./globals.css";

export const metadata = {
  title: "Paul Benjie Bongaos | AI Automation Specialist & Full Stack Developer",
  description:
    "Portfolio of an AI Automation Specialist & Full Stack Developer showcasing projects in AI, automation, and modern web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
