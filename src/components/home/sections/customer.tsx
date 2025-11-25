import React from 'react'
import checkSvg from "../../../assets/check.svg"
import mobileSvg from "../../../assets/mobile.svg"
import emailSvg from "../../../assets/email.svg"


// Qurilish materiallari rasmlari
let customer1 = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80" // Sement va qurilish
let customer2 = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80" // Qurilish jarayoni
let customer3 = "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80" // G'isht va materiallar
let customer4 = "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" // Zamonaviy qurilish

// import customer4 from "../../../assets/customer4.png"



export default function Customer() {
    return (
        <div id="Customer" className='Customer w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 min-h-[400px] flex flex-col items-center space-y-4 md:space-y-6 text-center'>

            <span className='text-primary bg-secondary rounded-full px-4 sm:px-6 py-2 text-sm md:text-base'>Bizning imkoniyatlar</span>
            <p className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-textColor max-w-[900px] px-4'>
                Bizning asosiy afzalliklarimiz
            </p>

            <p className='text-base md:text-lg text-textColor max-w-[700px] px-4 opacity-90'>
                Bizning xizmatlarimiz sizning maxsus ehtiyojlaringiz va maqsadlaringizni hisobga olgan holda ishlab chiqilgan.
            </p>
            <div className='h-8 md:h-12'></div>
            
            <div className='flex flex-col lg:flex-row w-full gap-8 lg:gap-12 justify-between items-center lg:items-start'>
                <div className='w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 items-start max-w-[600px] text-left'>
                    <div className='flex flex-col gap-2 items-start hover-lift p-4 md:p-6 rounded-xl hover:bg-secondary/30 transition-all duration-300 w-full'>
                        <div className='bg-gradient-to-br from-primary to-primary/70 text-white rounded-xl w-[48px] h-[48px] md:w-[56px] md:h-[56px] object-center flex items-center justify-center shadow-lg flex-shrink-0'>
                            <img src={checkSvg} alt="" className='w-[22px] h-[22px] md:w-[26px] md:h-[26px]' />
                        </div>
                        <span className='text-lg md:text-xl font-semibold text-textColor mt-2'>
                            Halol
                        </span>
                        <span className='text-sm md:text-base text-textColor opacity-80'>
                            To'lovni kechiktirish uchun foiz olinmaydi
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 items-start hover-lift p-4 md:p-6 rounded-xl hover:bg-secondary/30 transition-all duration-300 w-full'>
                        <div className='bg-gradient-to-br from-primary to-primary/70 text-white rounded-xl w-[48px] h-[48px] md:w-[56px] md:h-[56px] object-center flex items-center justify-center shadow-lg flex-shrink-0'>
                            <img src={mobileSvg} alt="" className='w-[22px] h-[22px] md:w-[26px] md:h-[26px]' />
                        </div>
                        <span className='text-lg md:text-xl font-semibold text-textColor mt-2'>
                            Tez va qulay
                        </span>
                        <span className='text-sm md:text-base text-textColor opacity-80'>
                            Ro'yxatdan o'ting va ilova orqali bir zumda xarid qiling
                        </span>
                    </div>

                    <div className='flex flex-col gap-2 items-start hover-lift p-4 md:p-6 rounded-xl hover:bg-secondary/30 transition-all duration-300 w-full'>
                        <div className='bg-gradient-to-br from-primary to-primary/70 text-white rounded-xl w-[48px] h-[48px] md:w-[56px] md:h-[56px] object-center flex items-center justify-center shadow-lg flex-shrink-0'>
                            <img src={emailSvg} alt="" className='w-[22px] h-[22px] md:w-[26px] md:h-[26px]' />
                        </div>
                        <span className='text-lg md:text-xl font-semibold text-textColor mt-2'>
                            24/7 qo'llab-quvvatlash
                        </span>
                        <span className='text-sm md:text-base text-textColor opacity-80'>
                            Har qanday savol yoki muammoga zudlik bilan javob oling
                        </span>
                    </div>
                </div>







                <div className='hidden lg:flex flex-row justify-between gap-6 xl:gap-8'>
                    <div className='w-[240px] xl:w-[280px] flex flex-col justify-center gap-6 xl:gap-8'>
                        <img className='w-full h-[280px] xl:h-[332px] rounded-2xl bg-secondary object-cover hover-lift shadow-lg hover:shadow-2xl transition-all duration-300' src={customer1}>

                        </img>

                        <img className='w-full h-[160px] xl:h-[198px] rounded-2xl bg-secondary object-cover hover-lift shadow-lg hover:shadow-2xl transition-all duration-300' src={customer2}>

                        </img>

                    </div>
                    <div className='w-[240px] xl:w-[280px] flex flex-col justify-center gap-6 xl:gap-8'>

                        <img className='w-full h-[160px] xl:h-[198px] rounded-2xl object-cover hover-lift shadow-lg hover:shadow-2xl transition-all duration-300' src={customer3}>

                        </img>
                        <img className='w-full h-[280px] xl:h-[332px] rounded-2xl object-cover hover-lift shadow-lg hover:shadow-2xl transition-all duration-300' src={customer4}>

                        </img>



                    </div>

                </div>
            </div>

            <div className='h-12 md:h-16 lg:hidden'></div>

            <div className='w-full flex flex-row gap-4 md:gap-6 lg:hidden overflow-x-auto pb-4'>
                    <div className='min-w-[240px] sm:min-w-[280px] flex flex-col justify-center gap-4 md:gap-6'>
                        <img className='w-full h-[280px] sm:h-[332px] rounded-xl object-cover shadow-lg' src={customer1}>

                        </img>

                        <img className='w-full h-[160px] sm:h-[198px] rounded-xl object-cover shadow-lg' src={customer2}>

                        </img>

                    </div>
                    <div className='min-w-[240px] sm:min-w-[280px] flex flex-col justify-center gap-4 md:gap-6'>

                        <img className='w-full h-[160px] sm:h-[198px] rounded-xl object-cover shadow-lg' src={customer3}>

                        </img>
                        <img className='w-full h-[280px] sm:h-[332px] rounded-xl object-cover shadow-lg' src={customer4}>

                        </img>



                    </div>

                </div>
        </div>
    )
}
