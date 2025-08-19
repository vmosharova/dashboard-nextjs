import "@/app/ui/global.css";
import { inter } from '@/app/ui/fonts';
import { Metadata } from "next";

// add Metadata to the nested pages in case of overriding the metadata in the parent:

export const metadata: Metadata = {
  title:  {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'Next.js Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
