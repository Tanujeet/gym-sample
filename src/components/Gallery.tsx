import Image from "next/image";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1080&auto=format&fit=crop",
    "/images/bg1.jfif",
    "/images/group.jfif",
  ];
  return (
    <section id="gallery" className="py-20 bg-[#faf6f0]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          <span className="text-primary">Gallery</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          A glimpse of our fitness space, energy, and vibrant community.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative h-40 sm:h-56 md:h-64 overflow-hidden rounded-xl group"
            >
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
