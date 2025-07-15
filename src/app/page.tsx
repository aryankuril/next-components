import HeroSlider from "./component/HeroSlider";
import HeroBanner from './component/HeroBanner';
import Blogs from './component/Blogs'
import TestimonialCarousel from "./component/TestimonialCarousel";
import Cardhover2 from './component/CardHover2'
import Faq from "./component/Faq"
import ImageBox from "./component/ImageBox";
import ListBox from './component/ListBox'
import NumberCounter from './component/NumberCounter'
import Pricing from './component/Pricing'
import Slider from "./component/Slider";
import Tab from './component/Tab'
import VideoEmbed from './component/VideoEmbed'


import HorizontalAccordion from "./component/HorizontalAccordion";
import AdvHeroSlider from "./component/AdvHeroSlider";
import VerticalCarousel from "./component/VerticalCarousel";
import TimeLine  from "./component/TimeLine";
import FadeInSection from "./component/FadeInSection"
import HighlightCards from "./component/HighlightCards";
import TextScroll from "./component/TextScroll";
import Cradhover from "./component/Cradhover";
import ProgressCard from "./component/ProgressCard";
import Slider2 from "./component/Slider2";
import FoldUpCard from "./component/FoldUpCard";
import StackedCards from "./component/StackedCards";
import Blackhole from "./component/Blackhole";

export default function Home() {
  return (
    <div>
    
      {/* Other homepage sections */}
      <HeroSlider />
      <HeroBanner />
      <Blogs />
      <TestimonialCarousel />
      <Cardhover2/>
      <Faq />
      <ImageBox />
      <ListBox />
      <NumberCounter />
      <Pricing />
      <Tab />
      <div className="max-w-3xl mx-auto p-4">
        <VideoEmbed
          videoUrl="/video/desktop-video.mp4"
          thumbnail="/images/desktop-banner.png"
        />
        <main className="min-h-screen max-w-8xl flex items-center justify-center">
          <Slider />
        </main>
        <HorizontalAccordion />
      </div>
      <AdvHeroSlider />
      <VerticalCarousel />
      <TimeLine />

      <section className="bg-black text-white p-10 flex flex-col items-center justify-center">
        <FadeInSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Fade-in Section</h2>
            <p className="text-gray-300">
              This content will smoothly fade in from the bottom when it enters the viewport.
            </p>
          </div>
        </FadeInSection>
      </section>

      <section className="text-white p-10 flex flex-col items-center justify-center">
        <div className="">
          <HighlightCards />
        </div>
      </section>

      <TextScroll />
      <Cradhover />
      <ProgressCard />
      <Slider2 />
      <FoldUpCard />
      <StackedCards />
      {/* Blackhole as Hero section */}
      <section className="relative w-full h-screen overflow-hidden">
        <Blackhole />
      </section>

    </div>
  );
}

