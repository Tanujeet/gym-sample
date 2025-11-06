import Image from 'next/image';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517960413843-0aee8e2b3d36?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517341720797-949b5fbc3bd4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac2e9a?q=80&w=800&auto=format&fit=crop',
  ];
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">A glimpse of our space, classes, and community.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative h-40 md:h-56">
              <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;