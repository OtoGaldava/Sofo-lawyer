import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/header/header";
import Section from "./Components/firstSection/firstSection";
import Bottom from "./Components/bottom/bottom";
import Services from "./services/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      {/* <Header></Header> */}
      <Section></Section>
      <About padd="yes"></About>
      <Services></Services>

      {/* <Bottom></Bottom> */}
    </div>
  );
}
