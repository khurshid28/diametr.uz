import React from 'react'
import phone from "../../../assets/phone.png"
export default function Main() {
    return (
       <div className='flex flex-col w-screen '>
         <div id="Main" className='Main  w-screen  px-4 md:px-10 py-20  flex flex-row '>
            <div className='w-1/2 flex flex-col justify-center gap-4 space-y-1 md:pr-10 pr-2'>
                <p className='font-semibold text-textColor md:text-[48px] text-[28px]'>
                Biz bilan istalgan xaridingizni oson amalga oshiring
                </p>
                <p className='font-serif text-textColor text-[18px]'>
                    Покупайте товары удобно и легко через нас
                </p>
               <div className='w-full md:flex flex-col  gap-4 space-y-1  hidden'>
               <div className='h-[40px]'></div>
                <div className='flex flex-row gap-4'>
                    <button className="btn bg-primary  text-white  text-md  hover:text-white focus:text-white">Yuklash</button>
                    <button className="btn btn-outline hover:bg-primary  border-2 border-textColor hover:border-primary text-textColor gap-2 flex flex-row font-semibold items-center px-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6  object-center">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                        Tomosha qilish</button>
                </div>
                <p className='font-serif text-textColor text-[18px]'>
                    Нам доверяют более 1 миллиона клиентов
                </p>

                <div className="rating rating-lg">
                    <input type="radio" name="rating-9" className="rating-hidden" />
                    <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                    <input type="radio" name="rating-9" className="mask mask-star-2  bg-primary" checked />
                    <input type="radio" name="rating-9" className="mask mask-star-2  bg-primary" />
                    <input type="radio" name="rating-9" className="mask mask-star-2  bg-primary" />
                    <input type="radio" name="rating-9" className="mask mask-star-2  bg-primary" />
                </div>
               </div>

            </div>
            <div className='w-1/2 flex flex-row justify-center items-center'>
                <img src={phone} alt="Phone" className=' mix-blend-multiply object-center min-h-[240px] max-h-[600px]' />
            </div>
        </div>




             



        <div className='w-screen flex flex-col justify-center items-center gap-4 space-y-1 pr-10 md:hidden px-4 md:px-10 pb-20'>
<div className='h-[40px]'></div>
 <div className='flex flex-row gap-4'>
     <button className="btn bg-primary  text-white  text-md ">Yuklash</button>
     <button className="btn btn-outline hover:bg-primary  border-2 border-textColor hover:border-primary text-textColor gap-2 flex flex-row font-semibold items-center px-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6  object-center">
         <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
     </svg>
         Tomosha qiling</button>
 </div>
 <p className='font-serif text-textColor text-[18px]'>
     Нам доверяют более 1 миллиона клиентов
 </p>

 <div className="rating rating-lg">
     <input type="radio" name="rating-9" className="rating-hidden" />
     <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
     <input type="radio" name="rating-9" className="mask mask-star-2  bg-primary" checked />
     <input type="radio" name="rating-9" className="mask mask-star-2  bg-primary" />
     <input type="radio" name="rating-9" className="mask mask-star-2  bg-primary" />
     <input type="radio" name="rating-9" className="mask mask-star-2  bg-primary" />
 </div>
</div>







       </div>
      




       
    )
}

