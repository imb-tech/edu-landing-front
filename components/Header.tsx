import React from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border fixed top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              O'quv Markaz
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Biz haqimizda</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">Kurslar</a>
            <a href="#teachers" className="text-gray-700 hover:text-blue-600 transition-colors">O'qituvchilar</a>
            <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors">Natijalar</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Aloqa</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full">
              Kirish
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Ro'yxatdan o'tish
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Biz haqimizda</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">Kurslar</a>
              <a href="#teachers" className="text-gray-700 hover:text-blue-600 transition-colors">O'qituvchilar</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors">Natijalar</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Aloqa</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="rounded-full">
                  Kirish
                </Button>
                <Button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Ro'yxatdan o'tish
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}