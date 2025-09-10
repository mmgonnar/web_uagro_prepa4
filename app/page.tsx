import Banner from '@/features/banner/components/banner';
import ContentSection from '@/features/content-section/components/content-section';
import Footer from '@/features/footer/components/footer';
import Header from '@/features/header/components/header';
import Label from '@/features/ui/components/label';
import { History } from 'lucide-react';

export default function Home() {
  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Banner />
      <ContentSection
        icon="History"
        labelText="Nuestra Historia"
        title=" 60 Años de Tradición Educativa"
        mainText='Desde 1965, la Preparatoria No. 4 "Pablo Neruda" ha sido pilar fundamental en la formación de jóvenes taxqueños, manteniendo siempre el compromiso con la excelencia académica.'
      >
        <div>Timeline Here</div>
      </ContentSection>
      <Footer />
    </main>
  );
}
