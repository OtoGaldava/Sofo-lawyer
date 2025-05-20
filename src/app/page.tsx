import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/header/header";
import Section from "./Components/firstSection/firstSection";
import Bottom from "./Components/bottom/bottom";
import Services from "./services/page";
import About from "./about/page";
import Links from "./Components/links/links";

export default function Home() {
  return (
    <div>
      {/* <Header></Header> */}
      <Section></Section>
      <About></About>
      <Services></Services>
      <Links></Links>

      {/* <Bottom></Bottom> */}
    </div>
  );
}
