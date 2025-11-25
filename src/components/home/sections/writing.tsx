
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
        <div className='Writing w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 min-h-[400px] flex flex-col items-center text-center'>


            <div className="w-full min-h-[372px] bg-secondary rounded-2xl md:rounded-[32px] p-6 md:p-12 lg:p-16 items-start flex flex-col">
            
                <p className="max-w-[700px] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-textColor text-left mb-3">
                    Savol va takliflaringizni biz bilan bo'lishing
                </p>

                <p className="max-w-[510px] text-base md:text-lg text-textColor text-left opacity-90">
                    Bizning mas'uliyatli va tezkor jamoamiz sizga imkon qadar tezroq javob beradi
                </p>
                <div className='h-4 md:h-6 lg:h-10'></div>
                <div className='w-full max-w-[500px]'>
                    <label className="input flex flex-row items-center gap-2 w-full text-base p-3 bg-white min-h-[44px] border-2 border-primary/30 focus-within:border-primary rounded-xl">
                   <div className='flex-shrink-0'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 16" fill="currentColor" className="w-5 h-5 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                  </div>  <input type="text" className="grow text-textColor text-sm md:text-base" typeof="email" placeholder="your@gmail.com" value={gmailText} onChange={(e) => {
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
                    errorText && <div className="py-2 font-medium text-red-400 text-sm md:text-base">{errorText} </div>
                }


                <div className="flex flex-col items-stretch gap-3 md:gap-4 md:flex-row md:items-end md:mt-5 mt-3 w-full max-w-[500px]">
                    <textarea className="textarea w-full text-sm md:text-base p-3 resize-y bg-white text-textColor min-h-[100px] border-2 border-primary/30 focus:border-primary rounded-xl" value={msgText} onChange={(e) => setmsgText(e.target.value)} placeholder="Savol va takliflar"></textarea>
                    <button className="btn bg-gradient-to-r from-primary to-primary/80 text-white text-sm md:text-base border-none hover:text-white hover:from-primary/90 hover:to-primary/70 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 min-h-[44px] px-6 font-semibold rounded-xl" onClick={async () => {
                        if (msgText.length > 0 && errorText.length == 0 && gmailText.length > 0) {
                            if (await sendMessage(msgText, gmailText)) {
                                notify()
                                setmsgText("")
                                setErrorText("")
                                setgmailText("")
                            }
                        }






                    }}>Yuborish</button>
                </div>


            </div>



            <ToastContainer />










        </div>
    )
}
