import { useState } from 'react';
import { data } from 'autoprefixer';

export default function ProductCard() {
  const [quantity, setQuantity] = useState(1);
  const price = 250;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className='w-[300px] bg-white shadow rounded-lg p-4 flex flex-col items-center gap-4'>
      <img
        src='https://i5.walmartimages.com/asr/801a510a-393a-448d-8948-8db4e9a61d46.087caa804f41116326d917b101e43b24.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff'
        alt='Michael Kors Jet Set Large Tote'
        className='w-[200px] h-[200px] object-cover rounded-md'
      />
      <h2 className='font-title text-lg text-neutral-950 text-center'>
        Michael Kors Jet Set Large Tote
      </h2>
      <p className='text-neutral-700'>${price * quantity}</p>
      <div className='flex items-center gap-4'>
        <button
          onClick={decrementQuantity}
          className='w-[40px] h-[40px] bg-primary-500 text-primary-50 rounded-full text-lg flex justify-center items-center'
        >
          -
        </button>
        <span className='text-neutral-950'>{quantity}</span>
        <button
          onClick={incrementQuantity}
          className='w-[40px] h-[40px] bg-primary-500 text-primary-50 rounded-full text-lg flex justify-center items-center'
        >
          +
        </button>
      </div>
    </div>
  );
}