import Card from "../../components/Card";
import "./style.module.scss";
import classes from "./style.module.scss";
import Navbar from "../../components/Navbar";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CallAPI } from "../../domain/CallAPI";

const Home = () => {
  const [dataMovie, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await CallAPI({
        endpoint: `/movie/`,
        method: "GET",
      });
      setData(response);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDetail = (value) => {
    navigate(`detail/${value}`);
  };

  return (
    <div className={classes.container}>
      <Navbar />
      <div></div>
      <div className={classes.content}>
        {dataMovie.map((data, index) => {
          return (
            <div key={index}>
              <Card
                title={data.title}
                desc={data.desc}
                duration={data.duration}
                genre={data.genre}
                rating={data.rating}
                releaseYear={data.releaseYear}
                imageUrl={data.imageUrl}
                onClick={() => handleDetail(data.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
