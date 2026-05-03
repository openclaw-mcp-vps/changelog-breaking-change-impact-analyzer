import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Breaking Change Impact Analyzer",
  description: "Predicts which users will be affected by breaking changes in your API changelog."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="90cb626b-30ff-4429-80ad-c4046bc4d425"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
