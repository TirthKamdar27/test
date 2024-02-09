import React from 'react';
import './ImageModal.css';

const ImageModal = ({ selectedImage, description, onClose }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <img src={selectedImage} alt="Selected" />
      </div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default ImageModal;