import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React from "react";

export default function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const quickLinks = [
    { label: "Biz haqimizda", href: "#about" },
    { label: "Kurslar", href: "#courses" },
    { label: "O'qituvchilar", href: "#teachers" },
    { label: "Natijalar", href: "#results" },
    { label: "Aloqa", href: "#contact" },
  ];

  const courses = [
    { label: "Ingliz tili", href: "#" },
    { label: "Matematika", href: "#" },
    { label: "Dasturlash", href: "#" },
    { label: "IELTS tayyorgarlik", href: "#" },
    { label: "Grafik dizayn", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                O'quv Markaz
              </span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Biz 2014-yildan beri minglab o'quvchilarga yuqori sifatli ta'lim
              berib kelamiz. Professional o'qituvchilar va zamonaviy metodlar
              bilan muvaffaqiyatli kelajak yaratamiz.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Tezkor havolalar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-lg mb-6">Kurslar</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Yangiliklar</h3>
            <p className="text-gray-400 mb-4">
              Yangiliklardan birinchi bo'lib xabardor bo'ling
            </p>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email manzilingiz"
                  className="rounded-l-lg border-r-0 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Obuna
                </Button>
              </div>
            </form>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+998 71 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@oquvmarkaz.uz</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Toshkent, Mirobod t.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 O'quv Markaz. Barcha huquqlar himoyalangan.
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Maxfiylik siyosati
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Foydalanish shartlari
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sayt xaritasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
