
import checkSvg from "../../../assets/check.svg"

import emailSvg from "../../../assets/email.svg"

export default function Questions() {
    const questionData = [
        {
            "title": "Diametr.uz  nima va kimlarga kerak?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex "
        },
        {
            "title": "Diametr.uz  nima va kimlarga kerak?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex "
        },
        {
            "title": "Diametr.uz  nima va kimlarga kerak?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex "
        },
        {
            "title": "Diametr.uz  nima va kimlarga kerak?",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex "
        },
        
       


    ]
    return (
        <div id="Questions" className='Questions w-screen px-4 md:px-5 py-20   flex flex-col items-center space-y-1 text-center'>

            <span className='text-primary bg-secondary rounded-full px-4 py-2 '>Вопросы</span>
            <p className='font-semibold md:text-[36px] text-[24px] text-textColor max-w-[1200px]'>
                Часто задаваемые вопросы
            </p>

            <p className='text-[18px] text-textColor max-w-[600px] '>
                Мы постарались ответить на самые распространенные вопросы, если у вас есть дополнительные, свяжитесь с нашей дружной командой.
            </p>
            <div className='h-[40px]'></div>
            <div className="flex flex-col w-full gap-4 text-left max-w-[800px]">
                {
                    questionData.map((e, index) => {
                        return <div tabIndex={0} key={`question-${index}-${e.title}`} className="collapse collapse-plus border border-base-300  text-left max-w-[800px]">
                            <input type="checkbox" />
                            <div className="collapse-title text-[18px] font-medium">
                                {index + 1}. {e.title}
                            </div>
                            <div className="collapse-content">
                                <p>{e.answer}</p>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className='h-[40px]'></div>



            <div className='max-w-[527px]  rounded-[20px] bg-secondary flex flex-col justify-between gap-5 p-[32px]'>
                <span className="font-semibold text-[20px] text-textColor">
                    Остались вопросы?
                </span>

                <span className=" text-[14px] text-textColor">
                    Нам жаль, что мы не смогли предоставить вам ту информацию, которую вы искали. Пожалуйста, свяжитесь с нами, и мы будем рады помочь.
                </span>

                <div>
                    <button onClick={() =>{
                        // window.location.href ='mailto:khurshid@gmail.com';

                        // window.open('mailto:khurshid@gmail.com?subject=Subject&body=Body%20goes%20here')
                        // window.open("mailto:khurshidi2827@gmail.com?subject=SendMail&body=Description");
                    }} className="btn bg-primary border-none px-4 py-2  text-white  text-md justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  
                    <span> Связаться с нами</span>
                       </button>

                </div>

            </div>





        </div>
    )
}
