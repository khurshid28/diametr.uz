
import checkSvg from "../../../assets/check.svg"


export default function FuncSection() {
    return (
        <div className='Func w-full px-4 md:px-10 py-20 min-h-[500px]  flex flex-col items-center space-y-1 text-center'>


            <p className='font-semibold md:text-[36px] text-[24px] text-textColor max-w-[1200px]'>
                Упростите свои покупки с помощью Premium Pay: Начните прямо сейчас
            </p>

            <p className='text-[18px] text-textColor max-w-[600px] '>
                Мы всегда заботимся о вас
            </p>
            <div className='h-[40px]'></div>
            <div className='flex md:flex-row flex-col items-start justify-center md:gap-10 gap-2'>
                <div className='gap-2 flex flex-row items-center'>
                    <div className='bg-secondary flex flex-row justify-center items-center rounded-full w-[36px] h-[36px]'>
                        <img src={checkSvg} alt="" className='w-[20px] h-[20px]'/>
                    </div>
                    <span className='font-medium text-[18px] text-textColor'>Верхний лимит</span>
                </div>


                <div className='gap-2 flex flex-row items-center'>
                    <div className='bg-secondary flex flex-row justify-center items-center rounded-full w-[36px] h-[36px]'>
                        <img src={checkSvg} alt="" className='w-[20px] h-[20px]'/>
                    </div>
                    <span className='font-medium text-[18px] text-textColor'>Быстрое оформление</span>
                </div>


                <div className='gap-2 flex flex-row items-center'>
                    <div className='bg-secondary flex flex-row justify-center items-center rounded-full w-[36px] h-[36px]'>
                        <img src={checkSvg} alt="" className='w-[20px] h-[20px]'/>
                    </div>
                    <span className='font-medium text-[18px] text-textColor'>Период 12 месяцев</span>
                </div>
            </div>

            <div className='h-[40px]'></div>
            <button className="btn bg-primary  text-white  text-md ">Скачать</button>

        </div>
    )
}
