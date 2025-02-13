import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick, modalSrc }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={s.img}
      onClick={() => onClick({ modalSrc, alt })}
    />
  );
};

export default ImageCard;
