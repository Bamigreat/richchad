import { useState } from "react";
import Hero from "./Components/Hero/Hero";
import Chadter_1 from "./Components/Chadter_1/Chadter_1";
import Chadter_2 from "./Components/Chadter_2/chadter_2";
import Chadter_3 from "./Components/Chadter_3/chadter_3";
import Chadter_4 from "./Components/Chadter_4/chadter_4";
import Chadter_5 from "./Components/Chadter_5/chadter_5";
import Footer from "./Components/Footer/footer";

import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <Chadter_1 />
      {/* <Chadter_2 /> */}
      <Chadter_3 />
      <Chadter_4 />
      <Chadter_5 />
      <Footer />
    </>
  );
}

export default App;
