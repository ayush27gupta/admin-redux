import React from "react";
import "./home.css";
export default function Home() {
  return (
    <div className="home-container">
      <a
        href="https://ww1.gogoanime2.org/anime/ansatsu-kyoushitsu-tv-"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="head-home">Assasination Classroom</h1>
      </a>
      <div className="sub-home">
        <div className="sub-box-home">
          <p className="sub-head-head-home">
            <span className="sub-head-home">Plot Summary:</span> A humorous and
            action-packed story about a class of misfits who are trying to kill
            their new teacher – an alien octopus with bizarre powers and super
            strength! The teacher has just destroyed the moon and is threatening
            to destroy the earth – unless his students can destroy him first.
            What makes things more complicated is that he's the best teacher
            they've ever had!
          </p>
        </div>
        <div className="sub-box-home">
          <span className="sub-head-home-genre">Genre:</span> Action , Comedy ,
          School , Shounen , Supernatural
        </div>
        <div className="sub-box-home">
          <span className="sub-head-home-release">Released:</span> 2015
        </div>
      </div>
      <img
        src="https://wallpaper.dog/large/10918968.jpg"
        alt=""
        height="300px"
        className="img-home"
      />
    </div>
  );
}
