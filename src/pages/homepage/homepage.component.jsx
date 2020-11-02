import React from "react";
import "./homepage.styles.scss";
import CardsContainer from "../../components/cards-container/cards-container.component";
import PrimarySearchAppBar from "../../components/nav-bar/nav-bar.component";
import Modal from "../../components/modal/modal.component";

const HomePage = () => (
  <div className="homepage">
    <PrimarySearchAppBar />
    {/* <CardsContainer /> */}
    <Modal />
  </div>
);

export default HomePage;
