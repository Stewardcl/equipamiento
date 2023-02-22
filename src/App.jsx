import React, { useState, useEffect, Suspense } from "react";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import useScreenSize from "./components/useScreenSize";
import "./css/App.css";
const Navigation = React.lazy(() => import("./components/navigation"));
const About = React.lazy(() => import("./components/about"));
const Header = React.lazy(() => import("./components/header"));
const Features = React.lazy(() => import("./components/features"));
const Category = React.lazy(() => import("./components/category"));
const Services = React.lazy(() => import("./components/services"));
const Gallery = React.lazy(() => import("./components/gallery"));
const Testimonials = React.lazy(() => import("./components/testimonials"));
const Team = React.lazy(() => import("./components/Team"));
const Contact = React.lazy(() => import("./components/contact"));


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const { width } = useScreenSize()
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <Navigation/>
        {width >= 1366 && <Header data={landingPageData.Header}/>}
        <Features data={landingPageData.Features} />
        <Category data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      </Suspense>
    </>
  );
};

export default App;
