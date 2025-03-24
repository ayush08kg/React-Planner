import React from 'react';

function Foot() {
  return (
    <div className='mt-20 p-5 shadow-sm flex flex-col justify-center items-center bg-[#9bcdcb4e] rounded-3xl rounded-b-none shadow-[#65c5ca]'>
      <div className='text-center font-semibold text-lg mb-1'>
        Built By The One & Only A.K.G
      </div>

      {/* Buttons */}
      <div className='flex gap-5'>
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/akg08/"
          target="_blank"
          rel="noopener noreferrer"
          className='px-4 py-2 bg-[#9bcdcb00] text-white rounded-full hover:bg-white hover:border-red-600 flex justify-center items-center'
        >
          <img src="/linkedin.svg" alt="LinkedIn" className='w-7 h-7' />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/ayush08kg"
          target="_blank"
          rel="noopener noreferrer"
          className='px-4 py-2 bg-[#9bcdcb00] text-white rounded-full hover:bg-white hover:border-red-600 flex justify-center items-center'
        >
          <img src="/github.svg" alt="GitHub" className='w-8 h-8' />
        </a>
      </div>
    </div>
  );
}

export default Foot;
