import i18next, { t } from 'i18next';
import React, { useState, useRef, useEffect, ReactNode } from 'react'
import logo from "../../../assets/logo.png"



export default function Navbar() {
  const [menuOpen, toggleMenu] = useState<boolean>(false)




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
    //   "to": "",
    //   "title": "Команда",
    //   "id": "Team"

    // },
    {
      "to": "",
      "title": "Контакт",
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
    <header className='w-full  md:px-10 px-4 py-5 '>
      <nav className='flex flex-row justify-between items-center'>
        <img src={logo} alt="PremiumPay" className='w-[180px] cursor-pointer' />
        <div className='font-semibold flex-row flex items-center'>
          
          <div className='items-center flex-row hidden lg:flex'>
            {
              elements.map(el => {
                return <span onClick={() => {
                  var element = document.getElementById(el.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} key={el.title} className='p-3 text-textColor cursor-pointer   hover:text-primary '>{el.title}</span>
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
          showMenu && <div className='lg:hidden fixed flex-col items-start px-4 py-5 bg-white  inset-0 transition-opacity duration-700 ease-in-out z-20'>

              <div className='flex justify-between text-white'>
              <img src={logo} alt="PremiumPay" className='w-[180px] cursor-pointer' />

                  <button className='flex flex-row items-center justify-center' onClick={() => setMenu(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#00C48C" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                  </button>
              </div>


              <div className='p-6 gap-4 flex flex-col items-start justify-items-start'>
              <div className='items-start flex-col flex'>
            {
              elements.map(el => {
                return <span onClick={() => {
                  setMenu(false)
                  var element = document.getElementById(el.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} key={el.title} className='p-3 text-textColor cursor-pointer   hover:text-primary '>{el.title}</span>
              })
            }

          </div>

          <div className='flex-row flex  items-center gap-2'>
            <div className="dropdown dropdown-hover "  >

              <div tabIndex={0} role="button" className="btn  bg-primary text-white uppercase flex flex-row items-center h-[62px] py-0 justify-center"><img src={langs.find(l => l.title == t("language"))?.flag} className='rounded-full w-[14px] h-[14px] object-cover object-center' alt="" /> <span>{t("language")}</span></div>
              {/* <summary tabIndex={0} role="button"  className="m-1 btn bg-primary text-white uppercase" onClick={(event: React.MouseEvent) => {
  showMenu(event)
  console.log(">>>",menuOpen);
  
  toggleMenu((prev)=>!prev)
}}>{t("language")}</summary> */}



              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box" >
                {
                  langs.map((e) => {

                    return <li key={`lng-${e.title}`} className="uppercase" onClick={async () => {
                      toggleMenu((prev) => !prev)
                      await i18next.changeLanguage(e.title);
                      localStorage.setItem("I18N_LANGUAGE", e.title);




                    }}>  <a>{e.title}</a></li>

                  })
                }
              </ul>


            </div>




            <button className="btn bg-primary  text-white  text-md  h-[62px]">Скачать</button>
          </div>

               

              </div>


          </div>
      }

    </header>
  )
}
