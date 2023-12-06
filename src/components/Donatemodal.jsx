import React, { useState } from "react";
import { parseEther } from "viem";
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'


function DonateModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState(''); 

 

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: 'moxey.eth',
    value: parseEther(amount)
  })

  
  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 max-w-xl rounded-lg shadow-lg relative text-center">
        {/* Modal Close Button */}
        <button
          className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <span className="text-2xl">&times;</span>
        </button>
        <h2 className="text-3xl font-bold mb-4">Support Founders with a Slice of Motivation!</h2>
        
        {/* Pizza Image */}
        <img src={"https://i.ibb.co/khfGJjK/pizza.png"} alt="Pizza" className="mx-auto mb-4" style={{ height: '150px' }} />

        {/* Modal Content */}
        <p className="mb-4 font-semibold">Join us in supporting innovative founders by donating pizza to fuel their hard work and creativity. Your contribution can be made with cryptocurrency, offering a slice of support to these pioneers!</p>
        <input
          type="text"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-center mb-4 py-2 px-4 border rounded"
        />
        {/* Donation Form or Button */}
        <div className="flex justify-center">
          
          <button
            className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => sendTransaction()} // Replace with your donation logic
          >
            {isLoading && <div>confirm the tx</div>
            }
             {!isLoading && <div>Donate with ETH</div>
            }
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonateModal;