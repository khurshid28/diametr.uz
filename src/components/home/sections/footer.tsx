import React from 'react'
import logo from "../../../assets/logo.png"
import mobileSvg from "../../../assets/mobile.svg"
import emailSvg from "../../../assets/email.svg"


export default function Footer() {
    const elements = [
        {
            "to": "",
            "title": "Главная",
            "id": "Main"
        },
        {
            "to": "",
            "title": "Функции",
            "id": "Customer"
        },
        {
            "to": "",
            "title": "Вопросы",
            "id": "Questions"



        },
        // {
        //     "to": "",
        //     "title": "Команда",
        //     "id": "Team"

        // },
        {
            "to": "",
            "title": "Контакт",
            "id": "Footer"
        }
    ];
    return (
        <div id="Footer" className='Footer   w-screen  px-4 md:px-5 pt-20  flex flex-col items-center space-y-1 text-center'>

            <div className='w-full min-h-[228px] flex md:flex-row md:items-start items-center gap-y-10 flex-col  mb-[32px] justify-between'>
                <div className='max-w-[420px]  flex flex-col md:items-start items-center justify-between gap-y-2'>
                    <div className='md:items-start gap-2 flex flex-col items-center'>   <img src={logo} alt="Diametr" className='max-w-[187px] cursor-pointer' />
                        <span className='text-[16px] text-textColor md:text-start text-center'>Biz bilan istalgan xaridingizni oson amalga oshiring </span>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 stroke-2'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                            <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="#97A1AF" />
                            <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="#97A1AF" />
                            <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="#97A1AF" />
                            <path d="M17.25 7.875C17.25 8.49632 16.7463 9 16.125 9C15.5037 9 15 8.49632 15 7.875C15 7.25368 15.5037 6.75 16.125 6.75C16.7463 6.75 17.25 7.25368 17.25 7.875Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75ZM12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 11.7C4.5 9.17976 4.5 7.91965 4.99047 6.95704C5.4219 6.11031 6.11031 5.4219 6.95704 4.99047C7.91965 4.5 9.17976 4.5 11.7 4.5H12.3C14.8202 4.5 16.0804 4.5 17.043 4.99047C17.8897 5.4219 18.5781 6.11031 19.0095 6.95704C19.5 7.91965 19.5 9.17976 19.5 11.7V12.3C19.5 14.8202 19.5 16.0804 19.0095 17.043C18.5781 17.8897 17.8897 18.5781 17.043 19.0095C16.0804 19.5 14.8202 19.5 12.3 19.5H11.7C9.17976 19.5 7.91965 19.5 6.95704 19.0095C6.11031 18.5781 5.4219 17.8897 4.99047 17.043C4.5 16.0804 4.5 14.8202 4.5 12.3V11.7ZM11.7 6H12.3C13.5849 6 14.4583 6.00117 15.1334 6.05633C15.7911 6.11006 16.1274 6.20745 16.362 6.32698C16.9265 6.6146 17.3854 7.07354 17.673 7.63803C17.7926 7.87263 17.8899 8.20893 17.9437 8.86656C17.9988 9.54169 18 10.4151 18 11.7V12.3C18 13.5849 17.9988 14.4583 17.9437 15.1334C17.8899 15.7911 17.7926 16.1274 17.673 16.362C17.3854 16.9265 16.9265 17.3854 16.362 17.673C16.1274 17.7926 15.7911 17.8899 15.1334 17.9437C14.4583 17.9988 13.5849 18 12.3 18H11.7C10.4151 18 9.54169 17.9988 8.86656 17.9437C8.20893 17.8899 7.87263 17.7926 7.63803 17.673C7.07354 17.3854 6.6146 16.9265 6.32698 16.362C6.20745 16.1274 6.11006 15.7911 6.05633 15.1334C6.00117 14.4583 6 13.5849 6 12.3V11.7C6 10.4151 6.00117 9.54169 6.05633 8.86656C6.11006 8.20893 6.20745 7.87263 6.32698 7.63803C6.6146 7.07354 7.07354 6.6146 7.63803 6.32698C7.87263 6.20745 8.20893 6.11006 8.86656 6.05633C9.54169 6.00117 10.4151 6 11.7 6Z" fill="white" />
                        </svg>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                            <circle cx="12" cy="12" r="10.5" fill="#97A1AF" />
                            <path d="M15.9103 15.2112L16.3767 12.2476H13.4589V10.3252C13.4589 9.51428 13.8657 8.7233 15.1726 8.7233H16.5V6.20024C16.5 6.20024 15.2959 6 14.1452 6C11.7411 6 10.1712 7.4197 10.1712 9.98883V12.2476H7.5V15.2112H10.1712V22.3759C10.7075 22.458 11.2562 22.5 11.8151 22.5C12.374 22.5 12.9226 22.458 13.4589 22.3759V15.2112H15.9103Z" fill="white" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                            <path d="M8.84156 21C6.41531 21 4.15363 20.2943 2.25 19.0767C3.86624 19.1813 6.71855 18.9308 8.49268 17.2386C5.82381 17.1161 4.6202 15.0692 4.4632 14.1945C4.68997 14.2819 5.77148 14.3869 6.382 14.142C3.31192 13.3722 2.84095 10.678 2.94561 9.85573C3.52125 10.2581 4.49809 10.3981 4.88185 10.3631C2.02109 8.31618 3.05027 5.23707 3.55613 4.57226C5.60912 7.4165 8.6859 9.01393 12.4923 9.10278C12.4205 8.78802 12.3826 8.46032 12.3826 8.12373C12.3826 5.70819 14.3351 3.75 16.7435 3.75C18.0019 3.75 19.1358 4.28457 19.9318 5.13963C20.7727 4.94258 22.0382 4.4813 22.6569 4.0824C22.3451 5.20208 21.3742 6.13612 20.7869 6.48231C20.7821 6.47048 20.7918 6.49408 20.7869 6.48231C21.3028 6.40428 22.6986 6.13603 23.25 5.76192C22.9773 6.39094 21.948 7.4368 21.1033 8.02232C21.2605 14.9535 15.9574 21 8.84156 21Z" fill="#97A1AF" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                            <rect x="1.5" y="1.5" width="21" height="21" rx="10.5" fill="#97A1AF" />
                            <path d="M9.46392 7.26911C9.46392 7.97002 8.85639 8.53822 8.10696 8.53822C7.35753 8.53822 6.75 7.97002 6.75 7.26911C6.75 6.5682 7.35753 6 8.10696 6C8.85639 6 9.46392 6.5682 9.46392 7.26911Z" fill="white" />
                            <path d="M6.93557 9.47107H9.25515V16.5H6.93557V9.47107Z" fill="white" />
                            <path d="M12.9897 9.47107H10.6701V16.5H12.9897C12.9897 16.5 12.9897 14.2872 12.9897 12.9036C12.9897 12.0732 13.2732 11.2392 14.4046 11.2392C15.6833 11.2392 15.6756 12.3259 15.6696 13.1678C15.6618 14.2683 15.6804 15.3914 15.6804 16.5H18V12.7903C17.9804 10.4215 17.3631 9.33006 15.3325 9.33006C14.1265 9.33006 13.379 9.87754 12.9897 10.3729V9.47107Z" fill="white" />
                        </svg>







                    </div>
                </div>


                <div className='max-w-[150px]  md:min-h-[228px] px-[20px] md:items-start items-center flex flex-col gap-[16px]'>

                    <span className='font-semibold text-[18px] text-black'>Компания</span>
                    {
                        elements.map((e) => {
                            return <span key={e.id} onClick={() => {
                                var element = document.getElementById(e.id);
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }} className='font-medium text-[16px] text-textColor cursor-pointer  hover:text-primary'>{e.title}</span>
                        })
                    }
                </div>
                <div className='max-w-[240px]  md:min-h-[228px] px-[20px] md:items-start items-center flex flex-col gap-[16px]'>

                    <span className='font-semibold text-[18px] text-black'>Поддерживать</span>
                    <span className='font-medium text-[16px] text-textColor cursor-pointer'>Центр помощи</span>
                </div>
                <div className='max-w-[320px] md:min-h-[228px] px-[20px] items-center flex flex-col gap-[16px]'>

                    <span className='font-semibold text-[18px] text-black'>Связаться с нами</span>
                    <div className='flex flex-col items-start'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer'>


                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#667085">
                                <path d="M3.33333 5.83329L8.49999 9.70829C9.38889 10.375 10.6111 10.375 11.5 9.70828L16.6667 5.83325M4.16667 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1666V5.83329C17.5 4.91282 16.7538 4.16663 15.8333 4.16663H4.16667C3.24619 4.16663 2.5 4.91282 2.5 5.83329V14.1666C2.5 15.0871 3.24619 15.8333 4.16667 15.8333Z" stroke="#97A1AF" stroke-width="1.5" stroke-linecap="round" />
                            </svg>


                            <span className='font-medium text-[16px] text-textColor tracking-normal'>alpdiametr@gmail.com</span>
                        </div>


                        <div className='flex flex-row items-center gap-2 cursor-pointer'>


                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#667085">
                                <path d="M10.7026 15.1307C12.0871 15.8275 13.7097 16.3358 15.6047 16.5679C16.1781 16.6382 16.6667 16.1777 16.6667 15.6001V14.1141C16.6667 13.6553 16.3544 13.2553 15.9092 13.144L13.8826 12.6374C13.5418 12.5522 13.1814 12.652 12.933 12.9004L10.7026 15.1307ZM10.7026 15.1307C8.10624 13.824 6.34755 11.8542 5.20097 9.79907M5.20097 9.79907C4.14691 7.90974 3.61018 5.94831 3.41555 4.36365C3.34663 3.80252 3.80188 3.33337 4.36722 3.33337H5.84687C6.32355 3.33337 6.73396 3.66983 6.82745 4.13726L7.39504 6.97525C7.46062 7.30311 7.35799 7.64205 7.12157 7.87847L5.20097 9.79907Z" stroke="#97A1AF" stroke-width="1.5" />
                            </svg>


                            <span className='font-medium text-[16px] text-textColor tracking-normal'>+99899 0099955</span>
                        </div>

                        <div className='flex flex-row items-center gap-2 cursor-pointer text-left'>


                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#667085" className='scale-125' >
                                <path d="M12.5 8.33333C12.5 9.71404 11.3807 10.8333 10 10.8333C8.61929 10.8333 7.5 9.71404 7.5 8.33333C7.5 6.95262 8.61929 5.83333 10 5.83333C11.3807 5.83333 12.5 6.95262 12.5 8.33333Z" stroke="#97A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.8333 8.125C15.8333 12.8125 10 17.5 10 17.5C10 17.5 4.16666 12.8125 4.16666 8.125C4.16666 5.0184 6.77834 2.5 10 2.5C13.2217 2.5 15.8333 5.0184 15.8333 8.125Z" stroke="#97A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>



                            <span className='font-medium text-[16px] text-textColor tracking-normal'>Toshkent shahar , shayxontoxur tumani nurafshon kochasi 1 uy</span>
                        </div>
                    </div>

                </div>


            </div>





            <div className="divider text-textGrey "></div>
            <div className='w-full py-[32px] flex flex-row justify-between items-center '>
                <span className='text-[16px] text-black'>
                    © 2024 Diametr.uz - Все права защищены
                </span>
                <div className='text-[16px] text-primary flex flex-row gap-2 items-center'>
                    <span>Terms of Service</span><div className="h-[16px] rounded-full w-[1px] bg-textGrey "></div> <span>Privacy Policy</span>
                </div>

            </div>
        </div>
    )
}
