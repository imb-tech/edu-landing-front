import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';

export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      alt: "Dars jarayonida o'quvchilar",
      title: "Interaktiv darslar"
    },
    {
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
      alt: "Zamonaviy sinf xonalari",
      title: "Zamonaviy sinflar"
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
      alt: "Kompyuter sinfi",
      title: "IT laboratoriyasi"
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      alt: "Kutubxona",
      title: "Boyitilgan kutubxona"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      alt: "Guruh ishi",
      title: "Jamoaviy loyihalar"
    },
    {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      alt: "O'qituvchi va o'quvchilar",
      title: "Individual yondashuv"
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      alt: "Tadbirlar",
      title: "Ta'lim tadbirlari"
    },
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
      alt: "Sertifikat topshirish",
      title: "Bitirish marosimi"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Bizning gallereyamiz
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ta'lim muhitimiz bilan
            <span className="text-teal-600"> tanishing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Zamonaviy sinf xonalari, professional uskunlar va qulay ta'lim muhitida
            o'qish jarayonini ko'ring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Section */}
        {/* <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bizning ta'lim jarayonimizni videoda ko'ring
          </h3>
          <p className="text-gray-600 mb-6">
            Qisqa videoda bizning darslarimiz va o'quvchilarimiz bilan tanishing
          </p>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop"
              alt="Video preview"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 group">
                <div className="w-0 h-0 border-l-[16px] border-l-blue-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1 group-hover:border-l-blue-700"></div>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}