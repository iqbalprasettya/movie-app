import classes from "./style.module.scss";

import { FaRegStar } from "react-icons/fa6";

const Card = ({ title,releaseYear,duration,genre,rating,desc, onClick, imageUrl }) => {

  return (
    <div>
      <div className={classes.box} onClick={onClick}>
        <img className={classes.image} src={imageUrl} />
        <div className={classes.boxContent}>
          <h2 className={classes.title}>
            {title} ({releaseYear})
          </h2>
          <p className={classes.textMini}>
            {duration} menit/ {genre}
          </p>
          <div className={classes.summary}>
            <p className={classes.textSum}>SUMMARY</p>
            <p>
              <FaRegStar color="yellow" /> {rating}/10
            </p>
          </div>
          <div className={classes.descSummary}>{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
