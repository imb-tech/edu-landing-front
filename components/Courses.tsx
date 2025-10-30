import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Ingliz tili",
      description: "Noldan professional darajagacha ingliz tilini o'rganing",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      duration: "6 oy",
      students: 1200,
      rating: 4.9,
      price: "500,000",
      level: "Barcha darajalar",
      lessons: 48,
    },
    {
      id: 2,
      title: "Matematika",
      description: "Oliy matematika va geometriya bo'yicha chuqur bilimlar",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      duration: "4 oy",
      students: 890,
      rating: 4.8,
      price: "400,000",
      level: "O'rta-Yuqori",
      lessons: 32,
    },
    {
      id: 3,
      title: "Dasturlash",
      description: "JavaScript, React va zamonaviy web texnologiyalar",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      duration: "8 oy",
      students: 650,
      rating: 4.9,
      price: "800,000",
      level: "Boshlang'ich-O'rta",
      lessons: 64,
    },
    {
      id: 4,
      title: "IELTS tayyorgarlik",
      description: "IELTS imtihoniga professional tayyorgarlik kursi",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
      duration: "3 oy",
      students: 420,
      rating: 4.7,
      price: "600,000",
      level: "O'rta-Yuqori",
      lessons: 36,
    },
    {
      id: 5,
      title: "Grafik dizayn",
      description: "Adobe Creative Suite va zamonaviy dizayn printsiplari",
      image:
        "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop",
      duration: "5 oy",
      students: 380,
      rating: 4.8,
      price: "550,000",
      level: "Boshlang'ich",
      lessons: 40,
    },
    {
      id: 6,
      title: "Biznes ingliz tili",
      description: "Professional muhitda ingliz tilidan foydalanish",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      duration: "4 oy",
      students: 290,
      rating: 4.9,
      price: "650,000",
      level: "O'rta-Yuqori",
      lessons: 32,
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Kurslarimiz
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Eng mashhur kurslarimiz bilan
            <span className="text-purple-600"> tanishing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Har bir kurs professional o'qituvchilar tomonidan ishlab chiqilgan
            va zamonaviy ta'lim metodlari asosida o'qitiladi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    {course.price} so'm
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-base text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      Davomiyligi: <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>Darslar soni: {course.lessons}</span>
                    </div>
                  </div>

                  <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Kursga yozilish
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
