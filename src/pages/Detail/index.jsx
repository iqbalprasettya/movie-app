import React from "react";
import Navbar from "../../components/Navbar";

import classes from "./style.module.scss";

import { FaStar, FaCircleUser } from "react-icons/fa6";

const index = () => {
  return (
    <>
      <Navbar />
      <div className={classes["container"]}>
        <div className={classes["movie-detail"]}>
          <div className={classes["movie-image"]}>
            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="" />
          </div>
          <div className={classes["movie-desc"]}>
            <h1>The Shawshank Redemption</h1>
            <div className={classes["rating-duration"]}>
              <span>
                <FaStar className={classes["stars"]} /> 9.3
              </span>
              <span>2023 | 2j 35m</span>
            </div>
            <div className={classes["movie-genre"]}>
              <h5>Drama</h5>
            </div>
            <br />
            <div className={classes["desc"]}>
              <p>The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.</p>
            </div>
          </div>
        </div>
        <div className={classes["movie-comments"]}>
          <h2>Comments</h2>
          <br />
          <div className={classes["comment-item"]}>
            <FaCircleUser className={classes["user"]} />
            <div className={classes["comment"]}>
              <h3>John Doe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Nemo quas voluptatem eaque nisi, fuga laboriosam od
                itaque repudiandae! Quod, dolorum?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
