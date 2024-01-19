import Card from "../../components/Card";
import "./style.module.scss";
import classes from "./style.module.scss";
import { useEffect, useState } from "react";
import { callAPIJSON } from "../../domain/api";
import Navbar from "../../components/Navbar";
const Home = () => {
  const [dataMovie, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await callAPIJSON("/movie", "GET");
      setData(response);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              imageUrl={data.imageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
