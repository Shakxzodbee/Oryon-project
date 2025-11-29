import Navbar from "../components/Navbar";
import CookieCard from "../Components/CookieCard";
import VideoShowcase from "../Components/VideoShowcase";
import CardSection from "../Components/CardSection";
// import HeroStats from "../components/HeroStats";
import Ecosystem from "../components/Ecosystem";
import FAQ from "../components/FAQ";
import Waitlist from "../Components/Waitlist";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <CookieCard />
      <VideoShowcase />
      <CardSection />
      {/* <HeroStats /> */}
      <Ecosystem />
      <FAQ />
      <Waitlist />
      <Footer />
    </>
  );
}
