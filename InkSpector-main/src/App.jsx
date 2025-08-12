import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Analysis from "./components/Analysis";
import DeepFake from "./components/DeepFake";
import VoiceAuthenticity from "./components/VoiceAuthenticity"; 
import BioAuthenticity from "./components/BioAuthenticity";
import MetaVerification from "./components/MetaVerification";
import DocumentVerification from "./components/DocumentVerification";
import TrustScore from "./components/TrustScore";
import CaseStudy from "./components/CaseStudy";
import Tools from "./components/Tools";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
<Navbar />
      <Routes>
        {/* Home page with all sections */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Features />
            </>
          }
        />
        
        {/* Standalone Features page (optional) */}
        <Route path="/features" element={<Features />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/deepfake" element={<DeepFake />} />
        <Route path="/voiceauthenticity" element={<VoiceAuthenticity />} />
        <Route path="/bioauthenticity" element={<BioAuthenticity />} />
        <Route path="/metaverification" element={<MetaVerification />} />
        <Route path="/documentverification" element={<DocumentVerification />} />
        <Route path="/trustscore" element={<TrustScore />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;