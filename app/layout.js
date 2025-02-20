import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import { dbConnect } from '@/services/mongo';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Project Eventry',
  description: 'It is a project Event Organiazation function.',
  icons: {
    icon: '/eventry.png', // Path to your favicon
  },
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className='py-8'>{children}</main>
      </body>
    </html>
  );
}
