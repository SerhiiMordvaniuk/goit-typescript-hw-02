import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ gallery, onClick }) => {
  if (!gallery) {
    return;
  }

  return (
    <>
      <div className={s.gallery}>
        <ul className={s.list}>
          {gallery.map((item) => {
            return (
              <li key={item.id} className={s.item}>
                <ImageCard
                  src={item.urls.small}
                  alt={item.description}
                  onClick={onClick}
                  modalSrc={item.urls.regular}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ImageGallery;
