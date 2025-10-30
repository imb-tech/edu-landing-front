import { Card, CardContent } from './ui/card';
import { Users, Award, GraduationCap, CheckCircle } from 'lucide-react';

export default function Results() {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "Muvaffaqiyatli bitiruvchilar",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      number: "98%",
      label: "Muvaffaqiyat darajasi",
      color: "from-green-500 to-green-600"
    },
    {
      icon: GraduationCap,
      number: "50+",
      label: "Turli kurslar",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: CheckCircle,
      number: "10+",
      label: "Yillik tajriba",
      color: "from-sky-500 to-sky-600"
    },
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Bizning natijalarimiz
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Raqamlar bizning
            <span className="text-blue-600"> muvaffaqiyatimizni</span> ko'rsatadi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            10 yillik faoliyat davomida erishgan yutuqlarimiz va o'quvchilarimizning
            muvaffaqiyatlari haqidagi statistik ma'lumotlar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {stat.label}
                  </h3>
                </div>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-r ${stat.color} opacity-10 rounded-full -translate-y-10 translate-x-10`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}