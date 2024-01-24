import Modal from 'react-modal';

const AlbumModal = ({ albumId, isOpen, onRequestClose }) => {
  // Дополнительная логика, связанная с модальным окном

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Album ID: {albumId}</h2>
      {/* Добавьте дополнительный контент для модального окна, если необходимо */}
    </Modal>
  );
};

export default AlbumModal;
