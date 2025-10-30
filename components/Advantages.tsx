import { Card, CardContent } from './ui/card';
import { GraduationCap, Clock, BookOpen } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: GraduationCap,
      title: "Professional o'qituvchilar",
      description: "Har bir o'qituvchi o'z sohasida 5+ yillik tajribaga ega va xalqaro sertifikatlarga ega",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "Moslashuvchan jadval",
      description: "Ertalabki, kunduzi va kechki vaqtlarda darslar. Siz uchun qulay vaqtni tanlang",
      color: "bg-purple-500"
    },
    {
      icon: BookOpen,
      title: "Zamonaviy materiallar",
      description: "Eng so'nggi o'quv materiallari va interaktiv darsliklar bilan ta'lim",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Bizning afzalliklarimiz
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Nima uchun aynan
            <span className="text-green-600"> bizni tanlashadi?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bizning ta'lim markazimiz o'quvchilarga eng yaxshi ta'lim berish uchun
            barcha zarur imkoniyatlarni yaratgan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${advantage.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}