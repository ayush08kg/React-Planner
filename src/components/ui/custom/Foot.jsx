import React from 'react';

function Foot() {
  return (
    <div className='mt-20 p-5 shadow-sm flex flex-col justify-center items-center bg-[#9bcdcb4e] rounded-3xl rounded-b-none shadow-[#65c5ca]'>
      <div className='text-center font-semibold text-lg mb-1'>
        Built By The One & Only A.K.G
      </div>
      <div className='flex gap-5'>
        <button className='px-4 py-2 bg-[#9bcdcb00] text-white rounded-full hover:bg-white hover:border-red-600'><img src="/linkedin.svg" alt="" className=' w-7 h-7'/></button>
        <button className='px-4 py-2 bg-[#9bcdcb00] text-white rounded-full hover:bg-white hover:border-red-600'><img src="/github.svg" alt="" className=' w-8 h-8'/></button>
      </div>
    </div>
  );
}

export default Foot;
