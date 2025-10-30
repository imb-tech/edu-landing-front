import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Phone, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';
import React from 'react';
import { cn } from './ui/utils';

export default function Contact() {
  const [contactForm, setContactForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Biz bilan bog'laning
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Sizning muvaffaqiyatingiz
            <span className="text-blue-600">bir qo'ng'iroq</span> nariga
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Har qanday savolingiz bo'yicha biz bilan bog'laning. Mutaxassislarimiz sizga
            batafsil ma'lumot berib, eng mos kursni tanlashda yordam berishadi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Xabar yuboring</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Ismingiz *</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="To'liq ismingizni kiriting"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Telefon *</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+998 90 123 45 67"
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Xabar *</Label>
                  <Textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Xabaringizni yozing..."
                    required
                    className="rounded-xl min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Xabar yuborish
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Bog'lanish ma'lumotlari</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefon raqamlar</h4>
                      <div className="space-y-1 text-gray-600">
                        <div>+998 71 123 45 67 (Asosiy)</div>
                        <div>+998 90 123 45 67 (Qo'shimcha)</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Bizning manzilimiz</h4>
                      <div className="text-gray-600">
                        Toshkent sh., Mirobod t.,<br />
                        Buyuk Ipak Yo'li ko'chasi, 5A uy
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <Button className="w-full rounded-xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    <Navigation className="w-4 h-4 mr-2" />
                    Yo'nalishni ko'rish (Xarita)
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className={cn("grid md:grid-cols-2 gap-4", "hidden")}>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Qo'ng'iroq qiling</h4>
                  <p className="text-green-100 text-sm mb-4">Darhol javob olamiz</p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Qo'ng'iroq
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Telegram bot</h4>
                  <p className="text-blue-100 text-sm mb-4">24/7 yordam</p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Yozish
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tez javob</h3>
              <p className="text-gray-600 text-sm">
                Barcha murojaatlarga 2 soat ichida javob beramiz
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Bepul maslahat</h3>
              <p className="text-gray-600 text-sm">
                Kurs tanlashda professional maslahat beramiz
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Qulay joylashuv</h3>
              <p className="text-gray-600 text-sm">
                Shahar markazida, metro va transport yaqinida
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}