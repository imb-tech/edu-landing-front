import { CheckCircle, Target, Users, Trophy } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function About() {
  const features = [
    "10 yillik tajriba va professional o'qituvchilar",
    "Zamonaviy ta'lim metodlari va texnologiyalar",
    "Shaxsiy yondashuv va kichik guruhlar",
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "O'quvchilar" },
    { icon: Trophy, value: "98%", label: "Muvaffaqiyat" },
    { icon: Target, value: "50+", label: "Kurslar" },
    { icon: CheckCircle, value: "10+", label: "Yillik tajriba" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <span
                  className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
                >
                  Biz haqimizda
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  <span>O'zbekistondagi eng ishonchli</span>
                  <span className="text-blue-600"> ta'lim markazi</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Biz 2014-yildan beri minglab o'quvchilarga yuqori sifatli
                  ta'lim berib kelamiz. Bizning maqsadimiz - har bir
                  o'quvchining potensialini ochib berish va ularni
                  muvaffaqiyatli kelajakka tayyorlashdir.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
                alt="Education center"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
