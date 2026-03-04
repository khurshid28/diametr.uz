import React from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { useLang } from '../../../context/AppContext'

const FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
    ),
    titleUz: "500+ Do'kon",
    titleRu: "500+ Магазинов",
    descUz: "O'zbekiston bo'ylab 500dan ortiq sertifikatlangan qurilish do'konlari",
    descRu: "Более 500 сертифицированных строительных магазинов по всему Узбекистану",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    titleUz: "Kafolatlangan Sifat",
    titleRu: "Гарантированное качество",
    descUz: "Barcha mahsulotlar sertifikatlangan va standartlarga mos keladi",
    descRu: "Все товары сертифицированы и соответствуют стандартам качества",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    titleUz: "Eng Yaxshi Narxlar",
    titleRu: "Лучшие цены",
    descUz: "Narxlarni solishtiring va eng arzon taklifni toping",
    descRu: "Сравнивайте цены и находите самые выгодные предложения",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    titleUz: "Tez Yetkazib Berish",
    titleRu: "Быстрая доставка",
    descUz: "Materiallarni qurilish maydonchangizga tez va xavfsiz yetkazib beramiz",
    descRu: "Доставляем материалы на вашу стройплощадку быстро и безопасно",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H9v-.008ZM6 12h.008v.008H6V12Z" />
      </svg>
    ),
    titleUz: "Qulay Ilova",
    titleRu: "Удобное приложение",
    descUz: "Buyurtmangizni qulay mobil ilova orqali bering va kuzating",
    descRu: "Оформляйте и отслеживайте заказы через удобное мобильное приложение",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    titleUz: "24/7 Qo'llab-quvvatlash",
    titleRu: "Поддержка 24/7",
    descUz: "Har qanday savolingiz bo'lsa, mutaxassislarimiz doimo yordam berishga tayyor",
    descRu: "Наши специалисты всегда готовы помочь вам в любое время",
  },
]

export default function Customer() {
  const { lang } = useLang()
  const ref = useScrollReveal()
  return (
    <section id="Customer" ref={ref} className="w-full bg-white dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            {lang === "uz" ? "Nima uchun biz?" : "Почему мы?"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {lang === "uz" ? "Diametr bilan qurishning afzalliklari" : "Преимущества строительства с Diametr"}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            {lang === "uz"
              ? "Biz qurilish jarayonini osonlashtirish uchun eng zamonaviy yechimlarni taklif qilamiz"
              : "Мы предлагаем самые современные решения для упрощения строительного процесса"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} group p-6 bg-white dark:bg-slate-800 border border-primary/20 rounded-2xl hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300`}>
              <div className="w-14 h-14 bg-primary/5 group-hover:bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {lang === "uz" ? f.titleUz : f.titleRu}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {lang === "uz" ? f.descUz : f.descRu}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
