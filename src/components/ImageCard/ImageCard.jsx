import css from "./ImageCard.module.css";

const ImageCard = ({ src, desc, regular, openModal }) => {
  return (
    <img
      className={css.modalImg}
      src={src}
      alt={desc}
      onClick={() => openModal({ urls: { regular }, desc })}
    />
  );
};

export default ImageCard;
