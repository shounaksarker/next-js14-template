import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Share Rides',
  description: 'Pathao',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-[88vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
