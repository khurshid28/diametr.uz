
import { useState } from "react";

// import axios from "axios"
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';


async function sendMessage(msg: string, gmail: string): Promise<boolean> {
    let text = `<b>MAIL: ${gmail}%0AMessage: ${msg}</b>`
    try {

        emailjs.init(`${process.env.REACT_APP_PUBLIC_KEY_EMAIL}`);

        var templateParams = {
            from_name: `${gmail}`,
            message: `${msg}`,
        };
        
        emailjs.send(`${process.env.REACT_APP_SERVICE_ID_EMAIL}`,`${process.env.REACT_APP_TEMP_ID_EMAIL}`, templateParams)
            .then(function(response:any) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(err:any) {
               console.log('FAILED...', err);
            });
        
        // let res = await axios.post(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_GROUP_ID}&text=${text}&parse_mode=HTML`);

        return true;

    } catch (error) {
        console.log(error);

        return false;

    }



}




// Call the main function and handle potential errors
const notify = () => {
    toast.success("Xabaringiz yuborildi !!! Tez orada xodimlar siz bilan aloqaga chiqishadi", {
        position: "top-right",
        className: "flex flex-row items-start text-left p-1",

    });
};

export default function Writing() {
    const [errorText, setErrorText] = useState<string>("")
    const [msgText, setmsgText] = useState<string>("")
    const [gmailText, setgmailText] = useState<string>("")


    return (
        <div className='Writing w-screen px-4 md:px-10 py-20 min-h-[500px]  flex flex-col items-center text-center'>


            <div className="w-full min-h-[372px] bg-secondary rounded-[32px] md:p-[64px] p-[24px] items-start flex flex-col">
            
                <p className="max-w-[700px] font-semibold md:text-[36px] text-[24px] text-textColor text-left mb-3">
                    Поделитесь с нами своими вопросами и предложениями
                </p>

                <p className="max-w-[510px] text-[18px] text-textColor text-left">
                    Наша ответственная и быстрая команда ответит вам как можно скорее
                </p>
                <div className='md:h-[40px] h-[16px]'></div>
                <div>
                    <label className="input input-bordered flex flex-row items-center gap-2 md:min-w-[360px] w-[280px]  text-[16px] p-2 bg-white">
                   <div >
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 16" fill="currentColor"   className="w-[20px] h-[20px] opacity-70 object-center  "><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                  </div>  <input type="text" className="grow text-textColor" typeof="email" placeholder="your@gmail.com" value={gmailText} onChange={(e) => {
                        console.log(e.target.value);
                        let email = e.target.value
                        if (!email) {
                            console.log("Required");
                            setErrorText("Required")


                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
                            console.log("Invalid email address");
                            setErrorText("Invalid email address")

                        } else {
                            setErrorText("")


                            console.log("ok mail");

                        }
                        setgmailText(email)


                    }} />
                </label>
                </div>
                {
                    errorText && <div className="py-2 font-medium text-red-400 text-[16px]">{errorText} </div>
                }


                <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:mt-5 mt-2 ">
                    <textarea className="textarea textarea-bordered  md:min-w-[360px] w-[280px] text-[16px] p-2 resize-y bg-white text-textColor" value={msgText} onChange={(e) => setmsgText(e.target.value)} placeholder="Вопросы и предложения"></textarea>
                    <button className="btn bg-primary  text-white  text-md border-none" onClick={async () => {
                        if (msgText.length > 0 && errorText.length == 0 && gmailText.length > 0) {
                            if (await sendMessage(msgText, gmailText)) {
                                notify()
                                setmsgText("")
                                setErrorText("")
                                setgmailText("")
                            }
                        }






                    }}>Отправить</button>
                </div>


            </div>



            <ToastContainer />










        </div>
    )
}
