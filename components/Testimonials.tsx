import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Malika Turdieva",
      role: "IELTS 7.5 olgan",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      text: "Bu yerda o'qiganimdan juda mamnunman. O'qituvchilar juda professional va har doim yordam berishga tayyor. IELTS dan 7.5 ball olishimga yordam berdilar.",
    },
    {
      name: "Sardor Islamov",
      role: "Dasturchi",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      text: "Dasturlash kursini tugatgandan so'ng darhol ish topa oldim. Amaliy bilimlar va real loyihalar ustida ishlash juda foydali bo'ldi. Tavsiya qilaman!",
    },
    {
      name: "Nozima Rahimova",
      role: "Grafik dizayner",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
      rating: 5,
      text: "Grafik dizayn kursida o'rgangan bilimlarim bilan freelancer sifatida ishlayapman. Portfolio yaratishda katta yordam berishdi.",
    },
    {
      name: "Akmal Turaev",
      role: "Matematika o'qituvchisi",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      text: "Matematika bo'yicha bilimlarimni yanada chuqurlashtirdim. Endi o'z o'quvchilarimga yanada samarali dars beraolaman.",
    },
    {
      name: "Dilnoza Karimova",
      role: "Talaba",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c096bb0a?w=100&h=100&fit=crop",
      rating: 5,
      text: "Ingliz tili kursida o'rgangan bilimlar menga universitetda katta yordam bermoqda. Speaking va Writing'da ancha yaxshilandim.",
    },
    {
      name: "Botir Normatov",
      role: "IT mutaxassis",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5,
      text: "Professional rivojlanish uchun bu markaz eng yaxshi tanlov. O'qituvchilar va dastur sifati juda yuqori darajada.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            O'quvchilar fikrlari
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Bizning
            <span className="text-pink-600"> o'quvchilarimiz</span> nima
            deyishadi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Minglab o'quvchilar bizning kurslarimizni tugatib, o'z maqsadlariga
            erishdilar. Ularning fikrlarini o'qing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-pink-200" />
                    <p className="text-gray-700 leading-relaxed pl-4">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
