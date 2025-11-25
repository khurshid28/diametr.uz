import i18next, { t } from 'i18next';
import React, { useState, useRef, useEffect, ReactNode } from 'react'
import logo from "../../../assets/logo.png"



export default function Navbar() {
  const [menuOpen, toggleMenu] = useState<boolean>(false)




  const elements = [
    {
      "to": "",
      "title": "Bosh sahifa",
      "id": "Main"
    },
    {
      "to": "",
      "title": "Imkoniyatlar",
      "id": "Customer"
    },
    {
      "to": "",
      "title": "Savollar",
      "id": "Questions"



    },
    // {
    //   "to": "",
    //   "title": "Команда",
    //   "id": "Team"

    // },
    {
      "to": "",
      "title": "Aloqa",
      "id": "Footer"
    }
  ];
  const langs = [{

    "title": "uz",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1920px-Flag_of_Uzbekistan.svg.png"
  },
  {
    "title": "ru",
    "flag": "https://cdn.britannica.com/42/3842-004-F47B77BC/Flag-Russia.jpg"
  }, {
    "title": "en",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
  }];

  const [showMenu, setMenu] = useState(false);

  return (
    <header className='w-full md:px-5 px-4 py-5 bg-white sticky top-0 z-50 shadow-sm'>
      <nav className='flex flex-row justify-between items-center'>
        <img src={logo} alt="Diametr" className='w-[250px] cursor-pointer' />
        <div className='font-semibold flex-row flex items-center'>
          
          <div className='items-center flex-row hidden lg:flex'>
            {
              elements.map(el => {
                return <span onClick={() => {
                  var element = document.getElementById(el.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} key={el.title} className='p-3 text-textColor cursor-pointer hover:text-primary transition-colors duration-300 font-medium hover:scale-105 transform'>{el.title}</span>
              })
            }

          </div>
         

          <div className='lg:hidden flex items-center ml-4' onClick={()=>setMenu(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={2.5} stroke="#00C48C" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </div>

        </div>

      </nav>

      {
          showMenu && (
            <>
              <div className='lg:hidden fixed inset-0 bg-white z-[60] overflow-y-auto'>

              <div className='flex justify-between items-center mb-8 px-6 pt-6'>
              <img src={logo} alt="Diametr" className='w-[180px] cursor-pointer' />

                  <button className='flex flex-row items-center justify-center p-2 hover:bg-secondary/30 rounded-xl transition-all' onClick={() => setMenu(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#00C48C" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                  </button>
              </div>


              <div className='flex flex-col items-stretch justify-start gap-6 w-full px-6 pb-6'>
              <div className='flex flex-col items-stretch gap-2'>
            {
              elements.map(el => {
                return <span onClick={() => {
                  setMenu(false)
                  var element = document.getElementById(el.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} key={el.title} className='p-4 text-textColor cursor-pointer hover:bg-secondary/30 hover:text-primary rounded-xl transition-all duration-300 font-medium text-lg border-b border-gray-100'>{el.title}</span>
              })
            }

          </div>

          <div className='flex flex-col gap-3 mt-4'>




            <button className="btn bg-gradient-to-r from-primary to-primary/80 text-white text-base border-none hover:text-white hover:from-primary/90 hover:to-primary/70 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 min-h-[48px] w-full font-semibold rounded-xl">Yuklash</button>
          </div>

               

              </div>


          </div>
            </>
          )
      }

    </header>
  )
}