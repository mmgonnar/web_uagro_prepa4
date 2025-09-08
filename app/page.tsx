import Banner from '@/features/banner/components/banner';
import Footer from '@/features/footer/components/footer';
import Header from '@/features/header/components/header';
import Label from '@/features/ui/components/label';
import { History } from 'lucide-react';

export default function Home() {
  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Banner />
      <Label text="Nuestra Historia">
        <History size={14} />
      </Label>
      <Label variant="announcement" text="DIrector"></Label>
      <Label variant="secondary" text="Nuestra Historia"></Label>
      <Footer />
    </main>
  );
}
