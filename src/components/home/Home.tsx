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
import  News  from './sections/news'

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

      {/* <FunctSection /> */}
      <News />
      <Questions />
      {/* <Team /> */}

      {/* <motion.div variants={variants} animate={writingControls} initial="hide">
        <div ref={WritinRef}>
        <Writing />
        </div>
      </motion.div> */}

      <Writing />


      <Footer />

      <div className='fixed bottom-[20px] md:bottom-[50px] md:right-[50px] right-[20px] z-50'>
        {
          chatStatus == "show" ? <Chatbox /> : (chatStatus == "start" ?
            <div className="p-4 rounded-2xl bg-white shadow-xl border-2 border-primary/20 relative hover:shadow-2xl transition-all duration-300 z-50" >
              <div className=' w-full h-full flex items-center cursor-pointer gap-3' onClick={() => setChatStatus("show")}>
                <img className="rounded-full w-12 h-12 ring-2 ring-primary/30"
                  src="https://img.freepik.com/premium-vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support-bot-vector-stock-illustration_100456-34.jpg" />
                <div>
                  <div className="font-semibold text-textColor">
                    <span>Yordam boti</span>
                  </div>
                  <div className="text-xs text-gray-600">Sizga qanday yordam bera olaman?</div>
                </div>



              </div>
              <div className='w-8 h-8 rounded-full bg-white border-2 border-primary/30 absolute -right-3 -top-3 shadow-xl shadow-primary/20 flex flex-row justify-center items-center p-1 cursor-pointer hover:bg-primary hover:scale-110 transition-all duration-300 group' onClick={() => setChatStatus("close")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#00C48C" className="w-5 h-5 group-hover:stroke-white transition-colors" >
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
