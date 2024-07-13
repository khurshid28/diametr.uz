import React, { useState } from 'react'



export default function Chatbox() {
    const [showed, setshowed] = useState(true)


    return (
        <div>

            <div className={`w-64  h-72  md:w-80 md:h-96  flex-col border shadow-md bg-white rounded-[24px] transition-all ease-in-out delay-300 ` +(showed ? "flex" :"hidden")}>
                <div className="flex items-center justify-between border-b p-2">
                    <div className="flex items-center">
                        <img className="rounded-full w-10 h-10"
                            src="https://img.freepik.com/premium-vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support-bot-vector-stock-illustration_100456-34.jpg" />
                        <div className="pl-2">
                            <div className="font-semibold">
                                <span >Support bot</span>
                            </div>
                            <div className="text-xs text-gray-600">Online</div>
                        </div>
                    </div>

                    <div>


                        <button className="inline-flex hover:bg-indigo-50 rounded-full p-2" type="button" onClick={()=>setshowed(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                </div>

                <div className="flex-1 px-4 py-4 overflow-y-auto">


                    <div className="flex items-center mb-4">
                        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
                            <img className="rounded-full w-10 h-10"
                                src="https://img.freepik.com/premium-vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support-bot-vector-stock-illustration_100456-34.jpg" />
                            <a href="#" className="block text-xs hover:underline">Support bot</a>
                        </div>
                        <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
                            <div>Могу ли я вам чем-то помочь?</div>

                            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
                        </div>
                    </div>



                    <div className="flex items-center flex-row-reverse mb-4">
                        <div className="flex-none flex flex-col items-center space-y-1 ml-4">
                            <img className="rounded-full w-10 h-10"
                                src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png" />
                            <a href="#" className="block text-xs hover:underline">Вы</a>
                        </div>
                        <div className="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
                            <div>Где находятся ваши офисы?</div>

                            <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
                        </div>
                    </div>



                    <div className="flex items-center mb-4">
                        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
                            <img className="rounded-full w-10 h-10"
                                src="https://img.freepik.com/premium-vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support-bot-vector-stock-illustration_100456-34.jpg" />
                            <a href="#" className="block text-xs hover:underline">Support bot</a>
                        </div>
                        <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
                            <div>Toshkent shahar , shayxontoxur tumani nurafshon kochasi 1 uy</div>

                            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
                        </div>
                    </div>

                </div>

                <div className="flex items-center border-t p-2 bg-white">


                    <div className="w-full mx-2 bg-white">
                        <input className="w-full rounded-full border border-gray-200 bg-white px-[16px] py-[4px]" type="text" placeholder="Напишите" />
                    </div>


                    <div>
                        <button className="inline-flex hover:bg-indigo-50 rounded-full p-2" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
