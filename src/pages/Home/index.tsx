import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer3.png"
    
        id="intro"
      />
      
      
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="slideshow2"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.png"
        id="about"
        images={["https://ateressi.sirv.com/IMG_20230421_173711.jpg", "https://ateressi.sirv.com/IMG_20230421_174539.jpg", "https://ateressi.sirv.com/DSC_0775.jpg"]}
        />
      <ContentBlock
        type="slideshow"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="waving.png"
        id="mission"
        images={["https://ateressi.sirv.com/IMG_20230421_173711.jpg", "https://ateressi.sirv.com/IMG_20230421_174539.jpg", "https://ateressi.sirv.com/DSC_0775.jpg"]}

      />
      <ContentBlock
        type="slideshow2"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="family.png"
        id="product"
        images={["https://ateressi.sirv.com/IMG_20230421_173711.jpg", "https://ateressi.sirv.com/IMG_20230421_174539.jpg", "https://ateressi.sirv.com/DSC_0775.jpg"]}

      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
