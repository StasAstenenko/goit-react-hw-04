import Modal from "react-modal";

Modal.setAppElement("#root");

function ImageModal({ image, closeModal, isOpen }) {
  if (!image || !image.urls) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(171, 169, 169, 0.8)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <img src={image.urls.regular} width="800" height="600" />
    </Modal>
  );
}

export default ImageModal;
