'use client';

import { useState, type FC } from 'react';

import { Modal } from '@/components/primitives/modal';

interface HeroProps { }

const Hero: FC<HeroProps> = ({ }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          anchor="center"
        >
          <div>
            <h2>Modal Title</h2>
            <p>This is the modal content. It can contain any elements, such as text, buttons, forms, etc.</p>
            <button className="" onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Hero;