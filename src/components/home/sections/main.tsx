import React from 'react'
import phone from "../../../assets/phone.png"
import bg_mask from "../../../assets/bg.png"
export default function Main() {
    return (
        <div className='flex flex-col w-full overflow-hidden'>
            <div id="Main" className='Main w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-12 bg-gradient-to-br from-white via-secondary/30 to-secondary/50 relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none'></div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-6 relative z-10 animate-fadeInUp'
                 
                 style={{
                    backgroundImage: `url(${bg_mask})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    animationDelay: '0.2s',
                    opacity: 0
                  }}
                >
                    <p className='font-semibold text-textColor text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>
                        Biz bilan istalgan xaridingizni oson amalga oshiring
                    </p>
                    <p className='text-textColor text-base md:text-lg opacity-80'>
                        Biz orqali mahsulotlarni qulay va oson xarid qiling
                    </p>
                    <div className='w-full flex flex-col gap-4 mt-4'>
                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full'>
                            <button className="btn bg-gradient-to-r from-primary to-primary/80 text-white text-sm md:text-base border-none hover:text-white hover:from-primary/90 hover:to-primary/70 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 min-h-[48px] px-8 font-semibold rounded-xl w-full sm:w-auto">
                                Yuklash
                            </button>
                            <button className="btn bg-white hover:bg-primary border-2 border-primary hover:border-primary text-primary hover:text-white gap-2 flex flex-row font-semibold items-center justify-center px-6 sm:px-8 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300 min-h-[48px] text-sm md:text-base rounded-xl w-full sm:w-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                                Tomosha qilish
                            </button>
                        </div>
                        <p className='text-textColor text-base md:text-lg mt-2'>
                            Bizga 1 milliondan ortiq mijozlar ishonadi
                        </p>

                        <div className="rating rating-md md:rating-lg">
                            <input type="radio" name="rating-9" className="rating-hidden" />
                            <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" checked />
                            <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                            <input type="radio" name="rating-9" className="mask mask-star-2 bg-primary" />
                        </div>
                    </div>

                </div>
                <div className='w-full lg:w-1/2 flex flex-row justify-center items-center relative z-10 mt-8 lg:mt-0'>
                    <img src={phone} alt="Phone" className='mix-blend-multiply object-contain w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[500px] xl:max-w-[600px] h-auto animate-float drop-shadow-2xl' />
                </div>
            </div>
        </div>






    )
}

