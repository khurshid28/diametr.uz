import React from 'react'
import checkSvg from "../../../assets/check.svg"
import mobileSvg from "../../../assets/mobile.svg"
import emailSvg from "../../../assets/email.svg"


import customer1 from "../../../assets/customer1.png"
import customer2 from "../../../assets/customer2.png"
import customer3 from "../../../assets/customer3.png"
import customer4 from "../../../assets/customer4.png"

export default function Customer() {
    return (
        <div id="Customer" className='Customer w-full px-4 md:px-10 py-20 min-h-[500px]  flex flex-col items-center space-y-1 text-center'>

            <span className='text-primary bg-secondary rounded-full px-4 py-2 '>Наши возможности</span>
            <p className='font-semibold md:text-[36px] text-[24px] text-textColor'>
                Наши ключевые преимущества
            </p>

            <p className='text-[18px] text-textColor max-w-[600px] '>
                Наши услуги разработаны с учетом ваших конкретных потребностей и целей.
            </p>
            <div className='h-[60px]'></div>
            
            <div className='flex flex-row w-full  min-h-[400px] justify-between'>
                <div className='lg:w-1/2 w-full flex flex-col gap-[40px] p-4 items-start  lg:max-w-[540px] text-left'>
                    <div className='flex flex-col gap-1 items-start'>
                        <div className='bg-secondary text-primary rounded-xl w-[40px] h-[40px] object-center flex items-center justify-center'>
                            <img src={checkSvg} alt="" />
                        </div>
                        <span className='text-[20px] font-semibold text-textColor'>
                            Честный
                        </span>
                        <span className='text-[16px] text-textColor'>
                            За просрочку платежа проценты не начисляются
                        </span>
                    </div>
                    <div className='flex flex-col gap-1 items-start'>
                        <div className='bg-secondary text-primary rounded-xl w-[40px] h-[40px] object-center flex items-center justify-center'>
                            <img src={mobileSvg} alt="" />
                        </div>
                        <span className='text-[20px] font-semibold text-textColor'>
                            Быстро и удобно
                        </span>
                        <span className='text-[16px] text-textColor'>
                            Зарегистрируйтесь и совершайте покупки мгновенно через приложение
                        </span>
                    </div>

                    <div className='flex flex-col gap-1 items-start'>
                        <div className='bg-secondary text-primary rounded-xl w-[40px] h-[40px] object-center flex items-center justify-center'>
                            <img src={emailSvg} alt="" />
                        </div>
                        <span className='text-[20px] font-semibold text-textColor'>
                            Круглосуточная поддержка
                        </span>
                        <span className='text-[16px] text-textColor'>
                            Получите немедленные ответы на любые вопросы или проблемы
                        </span>
                    </div>
                </div>







                <div className='hidden flex-row justify-between gap-[32px] lg:flex'>
                    <div className=' w-[280px] flex flex-col  justify-center gap-[32px]'>
                        <img className='w-full h-[332px] rounded-[15px]' src={customer1}>

                        </img>

                        <img className='w-full  h-[198px] rounded-[15px]' src={customer2}>

                        </img>

                    </div>
                    <div className=' w-[280px] flex flex-col  justify-center gap-[32px]'>

                        <img className='w-full  h-[198px] rounded-[15px]' src={customer3}>

                        </img>
                        <img className='w-full  h-[332px]  rounded-[15px]' src={customer4}>

                        </img>



                    </div>

                </div>
            </div>

            <div className='h-[60px] lg:hidden'></div>

            <div className='w-full flex flex-row  gap-[32px] lg:hidden'>
                    <div className=' w-[280px] flex flex-col  justify-center gap-[32px]'>
                        <img className='w-full h-[332px] rounded-[15px] object-cover' src={customer1}>

                        </img>

                        <img className='w-full  h-[198px] rounded-[15px] object-cover' src={customer2}>

                        </img>

                    </div>
                    <div className=' w-[280px] flex flex-col  justify-center gap-[32px]'>

                        <img className='w-full  h-[198px] rounded-[15px] object-cover' src={customer3}>

                        </img>
                        <img className='w-full  h-[332px]  rounded-[15px] object-cover' src={customer4}>

                        </img>



                    </div>

                </div>
        </div>
    )
}
