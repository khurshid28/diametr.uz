
import checkSvg from "../../../assets/check.svg"

import emailSvg from "../../../assets/email.svg"

export default function Questions() {
    const questionData = [
        {
            "title": "Diametr.uz nima va u qanday ishlaydi?",
            "answer": "Diametr.uz — bu qurilish materiallari sotib olish va sotish uchun mo'ljallangan onlayn platforma. Siz bu yerda sement, g'isht, metalloprokat, bo'yoq-bo'yoq va boshqa qurilish mollari bilan tanishishingiz, narxlarni solishtirish va buyurtma berishingiz mumkin."
        },
        {
            "title": "Qanday qilib buyurtma berish mumkin?",
            "answer": "Buyurtma berish uchun saytda ro'yxatdan o'ting, kerakli mahsulotlarni tanlang va savatga qo'shing. Keyin buyurtmani tasdiqlang va to'lov usulini tanlang. Bizning jamoamiz tez orada siz bilan bog'lanadi."
        },
        {
            "title": "Yetkazib berish qanday amalga oshiriladi?",
            "answer": "Biz butun Toshkent va viloyatlarga qurilish mollarini yetkazib berish xizmatini taqdim etamiz. Yetkazib berish muddati va narxi sizning manzilingizga va buyurtma hajmiga bog'liq. Aniq ma'lumot uchun menejerlarga murojaat qiling."
        },
        {
            "title": "To'lov usullari qanday?",
            "answer": "Siz naqd, plastik karta yoki bank o'tkazmasi orqali to'lov qilishingiz mumkin. Barcha to'lov usullari xavfsiz va ishonchli."
        },
        
       


    ]
    return (
        <div id="Questions" className='Questions w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 flex flex-col items-center space-y-4 md:space-y-6 text-center'>

            <span className='text-primary bg-secondary rounded-full px-4 sm:px-6 py-2 text-sm md:text-base'>Savollar</span>
            <p className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-textColor max-w-[900px] px-4'>
                Ko'p so'raladigan savollar
            </p>

            <p className='text-base md:text-lg text-textColor max-w-[700px] px-4 opacity-90'>
                Biz eng ko'p beriladigan savollarga javob berishga harakat qildik. Agar sizda qo'shimcha savollar bo'lsa, jamoamiz bilan bog'laning.
            </p>
            <div className='h-6 md:h-10'></div>
            <div className="flex flex-col w-full gap-3 md:gap-4 text-left max-w-[900px]">
                {
                    questionData.map((e, index) => {
                        return <div tabIndex={0} key={`question-${index}-${e.title}`} className="collapse collapse-plus border border-base-300 text-left hover:border-primary/50 hover:shadow-md transition-all duration-300 bg-white rounded-xl">
                            <input type="checkbox" />
                            <div className="collapse-title text-base md:text-lg font-medium px-4 md:px-6">
                                {index + 1}. {e.title}
                            </div>
                            <div className="collapse-content px-4 md:px-6">
                                <p className='opacity-80 text-sm md:text-base'>{e.answer}</p>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className='h-[40px]'></div>



            <div className='max-w-[527px] rounded-[24px] bg-gradient-to-br from-secondary to-secondary/70 flex flex-col justify-between gap-5 p-[32px] shadow-xl hover:shadow-2xl transition-all duration-300'>
                <span className="font-semibold text-[22px] text-textColor">
                    Savollaringiz bormi?
                </span>

                <span className="text-[15px] text-textColor opacity-90">
                    Siz izlagan ma'lumotni topa olmaganimizdan afsusdamiz. Iltimos, biz bilan bog'laning — yordam berishdan mamnun bo'lamiz.
                </span>

                <div>
                    <button onClick={() =>{
                        // window.location.href ='mailto:khurshid@gmail.com';

                        // window.open('mailto:khurshid@gmail.com?subject=Subject&body=Body%20goes%20here')
                        // window.open("mailto:khurshidi2827@gmail.com?subject=SendMail&body=Description");
                    }} className="btn bg-primary border-none px-4 py-2  text-white  text-md justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  
                    <span> Biz bilan bog‘lanish</span>
                       </button>

                </div>

            </div>





        </div>
    )
}
