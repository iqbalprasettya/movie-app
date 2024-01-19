import React from "react";
import Navbar from "../../components/Navbar";

import classes from "./style.module.scss";

import { FaStar, FaCircleUser, FaAngleLeft } from "react-icons/fa6";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { CallAPI } from "../../domain/CallAPI";

import { Button } from "@mui/material";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchMovieData = async () => {
    const responseMovie = await CallAPI({
      endpoint: `/movie/${id}`,
      method: "GET",
    });
    setData(responseMovie);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <>
      <Navbar />
      <div className={classes["container"]}>
        <Button onClick={handleBack} className={classes["back-btn"]} variant="contained">
          <FaAngleLeft /> Back
        </Button>
        <div className={classes["movie-detail"]}>
          <div className={classes["movie-image"]}>
            <img src={data.imageUrl} alt={data.title} />
          </div>
          <div className={classes["movie-desc"]}>
            <h1>{data.title}</h1>
            <div className={classes["rating-duration"]}>
              <span>
                <FaStar className={classes["stars"]} /> {data.rating}
              </span>
              <span>
                {data.releaseYear} | {data.duration}
              </span>
            </div>
            <div className={classes["movie-genre"]}>
              <h5>{data.genre}</h5>
            </div>
            <br />
            <div className={classes["desc"]}>
              <p>{data.desc}</p>
            </div>
          </div>
        </div>
        <div className={classes["movie-comments"]}>
          <h2>Comments</h2>
          <br />
          <div className={classes["comment-item"]}>
            <div className={classes["avatar"]}>
              <FaCircleUser className={classes["user"]} />
            </div>
            <div className={classes["comment"]}>
              <h3>{data.commentUser}</h3>
              <p>{data.comments}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
