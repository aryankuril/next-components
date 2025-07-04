import HeroSlider from "./component/HeroSlider";
import HeroBanner from './component/HeroBanner';
import Blogs from './component/Blogs'
import TestimonialCarousel from "./component/TestimonialCarousel";
// import CardHover from '@/app/component/CardHover'
import Faq from "./component/Faq"
import ImageBox from "./component/ImageBox";
import ListBox from './component/ListBox'
import NumberCounter from './component/NumberCounter'
import Pricing from './component/Pricing'
import Tab from './component/Tab'
import VideoEmbed from './component/VideoEmbed'
import Slider from "./component/Slider";

export default function Home() {
  return (
   <div >
    <HeroSlider/>
    <HeroBanner/>
     <Blogs/>
      <TestimonialCarousel/>
      {/* <CardHover/> */}
        <Faq/>
         <ImageBox/>
          <ListBox/>
          <NumberCounter/>
            <Pricing/>
             <Tab/>
              <div className="max-w-3xl mx-auto p-4">
      <VideoEmbed
        videoUrl="/video/desktop-video.mp4" // Custom video or HLS stream
        thumbnail="/images/desktop-banner.png"
      />
        <main className="min-h-screen max-w-8xl flex items-center justify-center">
      <Slider/>
      </main>
    </div>

   </div>
  );
}
