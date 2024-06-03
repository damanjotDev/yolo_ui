import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import StoreProviders from './store/storeProvider'
import { ScrollToTop } from '@/components/scrollToTop/scrollToTop';
import { getAboutsWithServer, getPagesWithServer, getPropertiesWithServer } from './services';
import { Navbar } from '@/components/navbars/navbar';
import { Footer } from '@/components/footer/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'YOLO Backpackers » Sociable And Unique Stays in Himachal',
  description: 'YOLO Backpackers Home page',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [abouts, properties, pages] = await Promise.all([
    getAboutsWithServer(), 
    getPropertiesWithServer(),
    getPagesWithServer(),
  ]);
  return (
    <html lang="en">
      <body className={`${inter.className} p-0 m-0`}>
        <StoreProviders>
          <ScrollToTop/>
          <Navbar properties = {properties}/>
          {children}
          <Footer abouts = {abouts} pages={pages}/>
           <Toaster />
        </StoreProviders>
      </body>
    </html>
  )
}
