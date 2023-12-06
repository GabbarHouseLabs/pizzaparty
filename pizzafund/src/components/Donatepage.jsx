import React, { useState } from 'react';
import DonateModal from "./Donatemodal"

const backgroundImageUrl = 'https://i.ibb.co/zJHK5TM/DALL-E-2023-12-06-16-15-41-Create-a-vibrant-and-detailed-background-image-suitable-for-a-website-s-l.png';


function DonatePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className="flex flex-col bg-cover  h-screen "
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex-grow" />
      <button
        className="bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded fixed bottom-4 left-1/2 transform -translate-x-1/2"
        onClick={() => setIsModalOpen(true)}
      >
        Donate Pizza
      </button>
      {/* Donate Modal */}
      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default DonatePage;