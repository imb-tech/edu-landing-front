import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import React from 'react';

export default function Registration() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    experience: '',
    message: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const courses = [
    "Ingliz tili",
    "Matematika", 
    "Dasturlash",
    "IELTS tayyorgarlik",
    "Grafik dizayn",
    "Biznes ingliz tili"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Ro'yxatdan o'tish
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Bugun o'qishni 
            <span className="text-blue-600"> boshlang!</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Formani to'ldiring va biz siz bilan bog'lanib, eng mos kursni tanlashda yordam beramiz. 
            Birinchi dars bepul!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">Ro'yxatdan o'tish formasi</h3>
                <p className="text-gray-600">Ma'lumotlaringizni kiriting va biz siz bilan bog'lanamiz</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">To'liq ismingiz *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Ismingizni kiriting"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon raqamingiz *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+998 90 123 45 67"
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email manzilingiz</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="email@example.com"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="course">Qiziqtirgan kurs *</Label>
                      <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Kursni tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course} value={course}>
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Tajriba darajangiz</Label>
                      <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Darajangizni tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Boshlang'ich</SelectItem>
                          <SelectItem value="intermediate">O'rta</SelectItem>
                          <SelectItem value="advanced">Yuqori</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Qo'shimcha ma'lumot</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Maqsadlaringiz yoki savollaringizni yozing..."
                      className="rounded-xl min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreed"
                      checked={formData.agreed}
                      onCheckedChange={(checked) => setFormData({...formData, agreed: !!checked})}
                    />
                    <Label htmlFor="agreed" className="text-sm text-gray-600">
                      Men <a href="#" className="text-blue-600 hover:underline">maxfiylik siyosati</a> va 
                      <a href="#" className="text-blue-600 hover:underline"> foydalanish shartlari</a>ga roziman *
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    disabled={!formData.agreed || !formData.name || !formData.phone || !formData.course}
                  >
                    Ro'yxatdan o'tish
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Bog'lanish ma'lumotlari</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Telefon</div>
                      <div className="text-gray-600">+998 71 123 45 67</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">info@oquvmarkaz.uz</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Manzil</div>
                      <div className="text-gray-600">Toshkent sh., Mirobod t., Buyuk Ipak Yo'li 5A</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Ish vaqti</div>
                      <div className="text-gray-600">
                        <div>Dush-Juma: 9:00-21:00</div>
                        <div>Shanba: 9:00-18:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Bepul maslahat</h3>
                <p className="text-blue-100 mb-4">
                  Qo'ng'iroq qiling va bepul maslahat oling
                </p>
                <Button variant="secondary" className="w-full rounded-xl">
                  Hoziroq qo'ng'iroq qiling
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}