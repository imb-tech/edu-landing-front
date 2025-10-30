import { Card, CardContent } from './ui/card';
import { Award, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Teachers() {
  const teachers = [
    {
      name: "Aziza Karimova",
      subject: "Ingliz tili",
      experience: "8 yil",
      rating: 4.9,
      students: 500,
      image: "https://images.unsplash.com/photo-1494790108755-2616c096bb0a?w=300&h=300&fit=crop",
      description: "Cambridge universiteti bitiruvchisi, IELTS va TOEFL bo'yicha mutaxassis"
    },
    {
      name: "Bobur Alimov",
      subject: "Matematika",
      experience: "10 yil",
      rating: 4.8,
      students: 650,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Moskva Davlat universiteti bitiruvchisi, matematika fan doktori"
    },
    {
      name: "Nilufar Rashidova",
      subject: "Dasturlash",
      experience: "6 yil",
      rating: 4.9,
      students: 320,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
      description: "Google va Microsoft'da ishlagan, full-stack dasturlash mutaxassisi"
    },
    {
      name: "Jasur Mirzayev",
      subject: "Grafik dizayn",
      experience: "7 yil",
      rating: 4.7,
      students: 280,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
      description: "Adobe sertifikatli mutaxassis, taniqli brendlar bilan ishlagan"
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            O'qituvchilarimiz
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Eng yaxshi
            <span className="text-orange-600"> mutaxassislar</span> bilan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bizning o'qituvchilarimiz o'z sohalarida yetakchi mutaxassislar bo'lib,
            minglab o'quvchilarga bilim berib kelmoqdalar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="font-bold text-gray-900 mb-1">{teacher.name}</h3>
                    <p className="text-orange-600 font-medium">{teacher.subject}</p>
                  </div>

                  <p className="text-gray-600 text-sm text-center">{teacher.description}</p>

                  <div className="flex justify-center text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{teacher.experience} tajriba</span>
                    </div>
                    {/* <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{teacher.students}+ shogirdlar</span>
                    </div> */}
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