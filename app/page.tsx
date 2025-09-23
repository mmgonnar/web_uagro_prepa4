import { Carousel } from '@/components/ui/carousel';
import Banner from '@/features/banner/components/banner';
import ContentSection from '@/features/content-section/components/content-section';
import Footer from '@/features/footer/components/footer';
import Header from '@/features/header/components/header';
import Team from '@/features/team/components/team';
import { TeamCarousel } from '@/features/team/components/team-carousel';
import TeamMemberCard from '@/features/team/components/team-member';
import { administrativeTeam } from '@/features/team/utils/constants';
import { TeamMember } from '@/features/team/utils/types';
import TimeLine from '@/features/timeline/components/my-timeline';
import { TimelineLayout } from '@/features/timeline/components/timeline-layout';
//import TimeLine from '@/features/timeline/components/my-timeline';
import { historyData } from '@/features/timeline/utils/constants';
import Cards from '@/features/ui/components/cards';

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
        mainText="Conoce a nuestros subdirectores, un equipo de profesionales comprometidos con la excelencia educativa y el desarrollo integral de cada estudiante.

"
        href="/"
        buttonText="Plantilla Docente"
      >
        <TeamCarousel />
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
      ></ContentSection>
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
