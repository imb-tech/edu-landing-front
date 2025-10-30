import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent } from './ui/card';

export default function FAQ() {
  const faqs = [
    {
      question: "Kurslar qancha davom etadi?",
      answer: "Kurslar davomiyligi tanlagan yo'nalishga qarab 3 oydan 8 oygacha o'zgaradi. Ingliz tili kursi odatda 6 oy, dasturlash kursi 8 oy, IELTS tayyorgarlik kursi 3 oy davom etadi. Har bir kurs uchun aniq jadval mavjud."
    },
    {
      question: "Darslar qaysi vaqtlarda o'tkaziladi?",
      answer: "Biz moslashuvchan jadval taklif qilamiz: ertalabki (9:00-12:00), kunduzi (14:00-17:00) va kechki (18:00-21:00) guruhlar mavjud. Shuningdek, hafta oxiri ham darslar olib boriladi. Siz uchun qulay vaqtni tanlashingiz mumkin."
    },
    {
      question: "Kurs narxi qancha va to'lov usullari qanday?",
      answer: "Kurs narxlari turli xil: 400,000 so'mdan 800,000 so'mgacha. To'lovni oylik, 3 oylik yoki to'liq kurs uchun oldindan amalga oshirishingiz mumkin. Naqd, plastik karta va bank o'tkazmasi orqali to'lash imkoniyati mavjud."
    },
    {
      question: "Guruhda necha nafar o'quvchi bo'ladi?",
      answer: "Bizning guruhlarimizda maksimal 8-10 nafar o'quvchi bo'ladi. Bu har bir o'quvchiga individual e'tibor berish va samarali o'qitishni ta'minlaydi. Ayrim maxsus kurslarda guruh hajmi yanada kichikroq bo'lishi mumkin."
    },
    {
      question: "Birinchi dars haqiqatan ham bepulmi?",
      answer: "Ha, barcha yangi o'quvchilar uchun birinchi dars mutlaqo bepul. Bu darsda siz o'qituvchi bilan tanishib, dastur bilan tanishishingiz va o'z darajangizni aniqlashingiz mumkin. Hech qanday majburiyat yo'q."
    },
    {
      question: "Online darslar ham bormi?",
      answer: "Ha, biz gibrid ta'lim tizimini qo'llaymiz. Siz offline yoki online formatda o'qishingiz mumkin. Online darslar Zoom platformasi orqali olib boriladi va barcha materiallar elektron shaklda taqdim etiladi."
    },
    {
      question: "Kurs tugagach sertifikat beriladimi?",
      answer: "Albatta! Kursni muvaffaqiyatli tugatgan barcha o'quvchilar rasmiy sertifikat oladi. Sertifikat ichki va tashqi imtihonlar asosida beriladi. Sertifikat ish beruvchilar tomonidan tan olinadi."
    },
    {
      question: "Agar darsni o'tkazib yuborsam nima bo'ladi?",
      answer: "Agar darsni o'tkazib yuborsangiz, video yozuv orqali materialni o'rganishingiz mumkin. Shuningdek, keyingi darsda o'qituvchi sizga qo'shimcha tushuntirish beradi. Muhim mavzular uchun qo'shimcha darslar ham tashkil etiladi."
    },
    {
      question: "Yoshga oid cheklovlar bormi?",
      answer: "Bizning kurslarimiz 14 yoshdan 65 yoshgacha bo'lgan barcha yoshdagi o'quvchilar uchun mo'ljallangan. Bolalar uchun maxsus guruhlar, kattalar uchun alohida guruhlar mavjud. Har bir yosh guruhiga mos metodika qo'llaniladi."
    },
    {
      question: "Ish bilan ta'minlaysizlarmi?",
      answer: "Biz ishga joylashishda yordam beramiz. Kursni tugatgan o'quvchilar uchun CV tayyorlash, suhbatga tayyorlash va hamkor kompaniyalarga tavsiya berish xizmatlarini taqdim etamiz. 95% bitiruvchilarimiz 6 oy ichida ish topadi."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ko'p so'raladigan
            <span className="text-indigo-600"> savollar</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Additional Help Section */}
          <div className="mt-12 text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Boshqa savollaringiz bormi?</h3>
                <p className="text-indigo-100 mb-6">
                  Agar sizning savolingiz ro'yxatda yo'q bo'lsa, biz bilan bog'laning.
                  Mutaxassislarimiz sizga yordam berishga tayyor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+998711234567" className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                    Qo'ng'iroq qiling
                  </a>
                  <a href="mailto:info@oquvmarkaz.uz" className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors border border-indigo-400">
                    Email yozing
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}