import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import styles from "./Card.module.css";
import { useState } from "react";
const slideImg = "../images/slide1.png";
const isSelected = false;

const Card = () => {
  const [slideImage, setSlideImage] = useState(slideImg);
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(1);
  const [displayCounter, setDisplayCounter] = useState(false);

  const handleSlider = () => {
    setSlideImage((slide) =>
      slide === "../images/slide1.png"
        ? "../images/slide2.png"
        : "../images/slide1.png"
    );
  };

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
  };

  const handleAddToCard = () => {
    setDisplayCounter(!displayCounter);
  };

  const handleIncreament = () => {
    if (count) {
      setCount((c) => c + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((c) => c - 1);
    }
  };

  const favCircleClass = isFavorite
    ? `${styles.favCircle} ${styles.active}`
    : styles.favCircle;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageSection}>
        <div className={favCircleClass} onClick={toggleFavorite}>
          <BsHeart className={styles.favIcon} />
        </div>
        <img src={slideImage} alt="slide1" />

        <div onClick={handleSlider} className={styles.scrollLeft}>
          <AiOutlineLeft />
        </div>
        <div onClick={handleSlider} className={styles.scrollRight}>
          <AiOutlineRight />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.contentSection}>
          <span className={styles.title}>Standard Cactus</span>
          <span className={styles.price}>$20.0</span>
        </div>
        <span className={styles.description}>Succulent</span>
      </div>

      <div className={styles.reviewSection}>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <span>2 reviews</span>
      </div>

      {displayCounter === true ? (
        <div className={styles.counter}>
          <div className={styles.minusIcon} onClick={handleDecrement}>
            <AiOutlineMinus />
          </div>
          <span>{count}</span>
          <div className={styles.plusIcon} onClick={handleIncreament}>
            <AiOutlinePlus />
          </div>
        </div>
      ) : (
        <button className={styles.cartBtn} onClick={handleAddToCard}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Card;
