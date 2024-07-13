import React, { useEffect, useRef, useState } from 'react'

import logo from "../../assets/logo.png"

// import { useTranslation } from 'react-i18next'
// import { changeLanguage } from "i18next";
import Navbar from "./sections/navbar"
import Main from "./sections/main"
import Customer from "./sections/customer"
import FunctSection from "./sections/func"
import Questions from "./sections/question"
import Team from "./sections/team"
import Writing from './sections/writing';
import Footer from './sections/footer';
import Chatbox from './sections/chatbox';


import { AnimationScope, motion, useAnimate, useAnimation, useInView } from "framer-motion"

export default function Home() {
  // const { t } = useTranslation()

  
  


  const [chatStatus, setChatStatus] = useState<string>("start");
  // const WritinRef =useRef(null)
  // const isinView =useInView(WritinRef,({once :true}))
  // const writingControls = useAnimation()

  //  const variants = {
  //   show: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       ease: "easeOut",
  //       duration: 1
  //     }
  //   },
  //   hide: {
  //     x: -200,
  //     opacity: 0
  //   }
  // };
  // useEffect(() => {
  //   if(isinView) {
  //    writingControls?.start("show")
  //   }
  //   console.log(isinView);
    
  // }, [isinView])
  
  return (
    <div className='Home w-screen relative items-end flex flex-col overflow-x-hidden bg-white'>
      <Navbar />

      <Main />

      <Customer />

      <FunctSection />
      <Questions />
      {/* <Team /> */}

      {/* <motion.div variants={variants} animate={writingControls} initial="hide">
        <div ref={WritinRef}>
        <Writing />
        </div>
      </motion.div> */}

      <Writing />


      <Footer />

      <div className='fixed  bottom-[20px] md:bottom-[50px] md:right-[50px] right-[20px]'>
        {
          chatStatus == "show" ? <Chatbox /> : (chatStatus == "start" ?
            <div className="p-3 rounded-[12px] bg-secondary bg-opacity-75 relative" >
              <div className=' w-full h-full flex items-center cursor-pointer' onClick={() => setChatStatus("show")}>
                <img className="rounded-full w-10 h-10  "
                  src="https://img.freepik.com/premium-vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support-bot-vector-stock-illustration_100456-34.jpg" />
                <div className="pl-2">
                  <div className="font-semibold">
                    <span >Support bot</span>
                  </div>
                  <div className="text-xs text-gray-600">Могу ли я вам чем-то помочь?</div>
                </div>



              </div>
              <div className='w-6 h-6 rounded-full bg-white  absolute -right-3 -top-3 shadow-xl shadow-black/20 flex flex-row justify-center items-center p-1 cursor-pointer' onClick={() => setChatStatus("close")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00C48C" className="w-6 h-6" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

              </div>
            </div> : null)

        }
      </div>
        

      

      {/* <header className="App-header">
    {
      t("title")
    }

    <br />
    <br />
    {
      ["uz","ru","en"].map((lng)=>{
        return <button key={lng} onClick={async()=>{
               await changeLanguage(lng);
        }} className="p-4 bg-primary text-white m-5 rounded-2xl"> 
          change to {lng}
        </button>
      })
    }
  </header> */}

    </div>
  )
}
