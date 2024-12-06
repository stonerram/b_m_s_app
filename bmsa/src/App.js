import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MenuBar from "./components/MenuBar";
import AdCarousel from "./components/Carousel";
import RecommendedMovies from "./components/RecommendedMovies";
import Footer from "./components/Footer";
import LiveEvents from "./components/LiveEvents";
import Premieres from "./components/Primieres";
import MusicStudios from "./components/MusicStudios";
import OutDoorEvents from "./components/OutDoorEvents";
import LaughterTherapy from "./components/LaughterTherapy";
import PapularEvents from "./components/PapularEvents";
import LatestPlay from "./components/LatestPlayes";
import LatestPlayes from "./components/LatestPlayes";
import Sports from "./components/Sports";
import TrendingSearches from "./components/TrendingSearches";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import About from "./components/About";


const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <Routes>
        <Route path="/" element = {
          <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MenuBar />
      <AdCarousel />
      <RecommendedMovies />
      <LiveEvents/>
      <br/><br/><br/>
     <AdCarousel />
     <br/><br/>
     <Premieres/>
     <MusicStudios/>
     <OutDoorEvents/>
     <br/><br/><br/><br/>     
      <AdCarousel />
     <LaughterTherapy/>
     <PapularEvents/>
     <LatestPlayes/>
     <br/><br/><br/><br/>     
     <AdCarousel />
     <Sports/>
     <TrendingSearches/>
      <Footer />
    </>
        }/>
    <Route path="/movies" element={
      <>
      <AdCarousel />
      <br/>
      <Movies />
      <br/><br/>
      <About/>
      <Footer/>
      </>
    } />

    <Route path="/movie/:id" element={
      <>
      <MovieDetails /> 
      <br/> 
      <RecommendedMovies />     
      <Footer /> 
      </>
    } />
    </Routes>
    </Router> 
  );
};

export default App;
