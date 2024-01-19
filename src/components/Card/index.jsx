import classes from "./style.module.scss";

import { FaRegStar } from "react-icons/fa6";

const Card = ({
  title,
  releaseYear,
  duration,
  genre,
  rating,
  desc,
  onClick,
  imageUrl,
}) => {
  const convertMinutesToHours = (minutes) => {
    if (minutes === 0) {
      return null; // Jika 0 menit, kembalikan null untuk tidak menampilkan durasi
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (remainingMinutes === 0) {
      return `${hours} jam`; // Jika 0 menit, hanya tampilkan jam
    }
    return `${hours} jam ${remainingMinutes} menit`;
  };
  return (
    <div>
      <div className={classes.box} onClick={onClick}>
        <img className={classes.image} src={imageUrl} />
        <div className={classes.boxContent}>
          <h2 className={classes.title}>
            {title} ({releaseYear})
          </h2>
          <p className={classes.textMini}>
            {convertMinutesToHours(duration)} / {genre}
          </p>
          <div className={classes.summary}>
            <p className={classes.textSum}>SUMMARY</p>
            <p>
              <FaRegStar color="yellow" /> {rating}/10
            </p>
          </div>
          <div className={classes.descSummary}>
            {desc.length >= 100 ? desc.substring(0, 100) + "..." : desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
