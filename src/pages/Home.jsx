import Navbar from "../components/Navbar";
import CookieCard from "../Components/CookieCard";
import VideoShowcase from "../Components/VideoShowcase";
import CardSection from "../Components/CardSection";
import StateseSection from "../Components/StatsSection";
import Ecosystem from "../components/Ecosystem";
import FAQ from "../components/FAQ";
import NewSection from "../Components/NewSection";
import Waitlist from "../Components/Waitlist";
import Footer from "../components/Footer";
import AirDrop from "../Components/AirDrop";
import WhyTokenization from "../Components/WhyTokenization";
import Title from "../Components/Title";
import Chain from "../Components/Chain";
import InfoBlockGroup from "../Components/TokenInfoCards";
export default function Home() {
  return (
    <>
    <Navbar/>
    <CookieCard/>
    <VideoShowcase/>
    <CardSection/>
    <StateseSection/>
    <Ecosystem/>
    <FAQ/>
    <NewSection/>
    <Title/>
    <WhyTokenization/>
    <Chain/>
    <InfoBlockGroup/>
    <AirDrop/>
    <Waitlist/>
    <Footer/>
    </>
  );
}
