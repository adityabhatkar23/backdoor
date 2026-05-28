import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Install from "./components/Install"
import Usage from "./components/Usage"
import Architecture from "./components/Architecture"
import Work from "./components/Work"
import Footer from "./components/Footer"
import Cta  from "./components/Cta";

function App() {

  return (
    <>
      <div className="relative min-h-screen bg-black text-fg-primary font-sans antialiased selection:bg-fg-primary selection:text-bg-black">
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Install/>
          <Usage />
          <Architecture />
          <Work />
          <Cta />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
