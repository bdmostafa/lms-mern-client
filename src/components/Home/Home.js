import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import Banner from "./Banner";
import './Home.css';
import FeaturedBooks from "../Books/FeaturedBooks";
import { Container } from "react-bootstrap";


const Home = () => {
  return (
    <>
      <div className="headerBg">
        <Header />
        <Banner />
      </div>
      <Container className="mainBody">
        <FeaturedBooks />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
