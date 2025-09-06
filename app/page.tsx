import Banner from '@/features/banner/components/banner';
import Footer from '@/features/footer/components/footer';
import Header from '@/features/header/components/header';

export default function Home() {
  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Banner />
      <Footer />
    </main>
  );
}
