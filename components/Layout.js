import React, { useState } from "react";
import dynamic from "next/dynamic";

// Components

import Navbar from "./Navbar";
import Menu from "./Menu";
import Carousel from "./home/Carousel";
import News from "./home/News";
import Events from "./home/Events";
import Footer from "./home/Footer";

// Dynamic Components

const Hero = dynamic(() => import("./home/Hero"), { ssr: false });
const CorporateSponsors = dynamic(() => import("./home/CorporateSponsors"), {
  ssr: false,
});

const Layout = ({ news, events }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Menu props={{ isMenuOpen, setIsMenuOpen }} />
      <Navbar props={{ isMenuOpen, setIsMenuOpen }} />
      {/* <Hero /> */}
      <Carousel />
      <News news={news} />
      <Events events={events} />
      <CorporateSponsors />
      <Footer />
    </>
  );
};

export default Layout;
