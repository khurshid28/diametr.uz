import React, { useState } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { useLang } from '../../../context/AppContext'

const FAQS = [
  {
    qUz: "Ilovani qanday yuklab olish mumkin?",
    aUz: "Ilovani App Store yoki Google Play orqali yuklab olishingiz mumkin. Yuqoridagi 'Ilovani yuklab olish' tugmasini bosing.",
    qRu: "Как скачать приложение?",
    aRu: "Приложение можно скачать через App Store или Google Play. Нажмите кнопку 'Скачать приложение' вверху.",
  },
  {
    qUz: "Do'kon ochish uchun nima qilish kerak?",
    aUz: "Do'kon ochish uchun ilovani yuklang va 'Do'kon ochish' bo'limiga kiring. Kerakli ma'lumotlarni to'ldiring va ko'rib chiqish uchun yuboring.",
    qRu: "Что нужно для открытия магазина?",
    aRu: "Для открытия магазина скачайте приложение и перейдите в раздел 'Открыть магазин'. Заполните необходимые данные и отправьте на рассмотрение.",
  },
  {
    qUz: "Mahsulot sifati qanday nazorat qilinadi?",
    aUz: "Barcha do'konlar va mahsulotlar sertifikatsiya jarayonidan o'tadi. Faqat standartlarga mos keluvchi mahsulotlar platformada joylashtiriladi.",
    qRu: "Как контролируется качество товаров?",
    aRu: "Все магазины и товары проходят процесс сертификации. Только продукты, соответствующие стандартам, размещаются на платформе.",
  },
  {
    qUz: "Yetkazib berish xizmati mavjudmi?",
    aUz: "Ha, bizning platforma orqali yetkazib berish xizmatidan foydalanishingiz mumkin. Narxlar va muddatlar do'konga qarab farq qilishi mumkin.",
    qRu: "Есть ли услуга доставки?",
    aRu: "Да, вы можете воспользоваться услугой доставки через нашу платформу. Цены и сроки могут различаться в зависимости от магазина.",
  },
  {
    qUz: "To'lov qanday amalga oshiriladi?",
    aUz: "Naqd pul, bank kartasi yoki onlayn to'lov usullari bilan to'lash mumkin. Barcha to'lovlar xavfsiz himoyalangan.",
    qRu: "Как осуществляется оплата?",
    aRu: "Можно платить наличными, банковской картой или онлайн-платежами. Все платежи надёжно защищены.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-primary/20 dark:border-primary/30 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left text-slate-800 dark:text-slate-200 font-semibold hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed bg-primary/5 dark:bg-slate-800 border-t border-primary/20 dark:border-primary/30">
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Questions() {
  const { lang } = useLang()
  const ref = useScrollReveal()
  return (
    <section id="Questions" ref={ref} className="w-full bg-gradient-to-b from-primary/5 to-white dark:from-slate-900 dark:to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {lang === "uz" ? "Ko'p beriladigan savollar" : "Часто задаваемые вопросы"}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base">
            {lang === "uz" ? "Sizda qo'shimcha savollar bo'lsa, biz bilan bog'laning" : "Если у вас есть дополнительные вопросы, свяжитесь с нами"}
          </p>
        </div>
        <div className="flex flex-col gap-3 reveal reveal-delay-1">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={lang === "uz" ? faq.qUz : faq.qRu} a={lang === "uz" ? faq.aUz : faq.aRu} />
          ))}
        </div>
      </div>
    </section>
  )
}
