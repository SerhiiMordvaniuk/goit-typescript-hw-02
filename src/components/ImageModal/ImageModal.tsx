import Modal from "react-modal";
import { Gallery } from "../../App.types";
Modal.setAppElement("#root");

interface ImageModalProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  image: string | undefined;
  alt: string | undefined;
}

const ImageModal = ({
  modalIsOpen,
  closeModal,
  image,
  alt,
}: ImageModalProps) => {
  const styles = {
    content: {
      overflow: "hidden",
      top: "50%",
      left: "50%",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      borderRadius: "16px",
      maxHeight: "680px",
    },
    overlay: {
      backgroundColor: "rgb(40, 40, 40, 0.9)",
    },
  };
  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={styles}>
        <img src={image} alt={alt} />
      </Modal>
    </>
  );
};

export default ImageModal;
