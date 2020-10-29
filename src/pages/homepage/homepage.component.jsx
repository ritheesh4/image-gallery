import React from "react";
import "./homepage.styles.scss";
import  CardsContainer  from "../../components/cards-container/cards-container.component";
import PrimarySearchAppBar from '../../components/nav-bar/nav-bar.component';

const HomePage = () => (
  <div className="homepage">
    <PrimarySearchAppBar/>
    <CardsContainer />    
  </div>
);

export default HomePage;
