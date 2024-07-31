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
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">Modal Title</h2>
            <p>This is the modal content. It can contain any elements, such as text, buttons, forms, etc.</p>
            <button className="mt-4" onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Hero;