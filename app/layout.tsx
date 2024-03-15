import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export const metadata: Metadata = {
  title: {
    template: '%s | youssef marzoug vercel',
    default: 'youssef marzoug vercel',
  },
  description: 'he official Next.js Learn Dashboard built with App Router.T',
  metadataBase: new URL('https://next-by-vercel-seven.vercel.app'),
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
