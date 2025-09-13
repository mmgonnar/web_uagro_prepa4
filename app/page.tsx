import Banner from '@/features/banner/components/banner';
import ContentSection from '@/features/content-section/components/content-section';
import Footer from '@/features/footer/components/footer';
import Header from '@/features/header/components/header';
import TimeLine from '@/features/timeline/components/my-timeline';
import { TimelineLayout } from '@/features/timeline/components/timeline-layout';
//import TimeLine from '@/features/timeline/components/my-timeline';
import { historyData } from '@/features/timeline/utils/constants';

export default function Home() {
  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Banner />
      <ContentSection
        icon="History"
        labelText="Nuestra Historia"
        title="60 Años de Tradición Educativa"
        mainText='Desde 1965, la Preparatoria No. 4 "Pablo Neruda" ha sido pilar fundamental en la formación de jóvenes taxqueños, manteniendo siempre el compromiso con la excelencia académica.'
        buttonText="Más de nuestra historia"
        background="default"
        href="/nosotros"
      >
        <div>
          {/* <TimeLine items={historyData} />
          <TimelineLayout items={historyData} /> */}
        </div>
      </ContentSection>
      <ContentSection
        background="grey"
        icon="UserStar"
        labelText="Nuestra Equipo"
        title="Liderazgo Comprometido"
        mainText="Un equipo de profesionales dedicados a la excelencia educativa y al desarrollo integral de nuestros estudiantes."
        href="/"
        buttonText="Directivos"
      >
        <div>Team Here</div>
      </ContentSection>
      <ContentSection
        icon="CircleAlert"
        labelVariant="secondary"
        labelText="Anuncios Importantes"
        title="Mantente Informado"
        mainText="No te pierdas las noticias más importantes y fechas clave de nuestra institución."
        background="default"
        href="/"
        buttonText="Ver todos los anuncios"
      >
        <div>Announcements</div>
      </ContentSection>
      <ContentSection
        icon="Newspaper"
        labelText="Noticias"
        title="Lo que está pasando"
        mainText="Mantente al día con los logros, eventos y novedades de nuestra comunidad educativa."
        background="default"
        href="/"
        buttonText="Más noticias"
      >
        <div>News</div>
      </ContentSection>
      <Footer />
    </main>
  );
}
