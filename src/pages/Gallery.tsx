import { useState } from 'react';
import { X, Award } from 'lucide-react';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Badge from '../components/Badge';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: 'Urban Solar Installation',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      category: 'Renewable Energy',
    },
    {
      title: 'BioFilter Air Purification',
      location: 'Portland, OR',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      category: 'Bioengineering',
    },
    {
      title: 'SmartGrid Network',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
      category: 'Smart Infrastructure',
    },
    {
      title: 'Residential Solar Array',
      location: 'Boulder, CO',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
      category: 'Renewable Energy',
    },
    {
      title: 'Commercial Wind Farm',
      location: 'Kansas City, MO',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
      category: 'Renewable Energy',
    },
    {
      title: 'Green Building Integration',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
      category: 'Smart Infrastructure',
    }
  ];

  const events = [
    {
      title: 'GreenTech Summit 2024',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg',
      description: 'Keynote presentation on AI-powered sustainability',
    },
    {
      title: 'Earth Day Innovation Fair',
      date: 'April 22, 2024',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      description: 'Showcasing our latest bioengineering breakthroughs',
    },
    {
      title: 'Renewable Energy Expo',
      date: 'June 10, 2024',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      description: 'Live demonstrations of SolarNet AI technology',
    }
  ];

  const certifications = [
    { name: 'ISO 14001', description: 'Environmental Management' },
    { name: 'B Corp Certified', description: 'Social & Environmental Performance' },
    { name: 'LEED Platinum', description: 'Green Building Standards' },
    { name: 'Carbon Neutral', description: 'Net Zero Carbon Emissions' },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-orchid-500/5 to-orchid-600/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Gallery</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Explore our projects, events, and achievements in sustainable innovation
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Showcase</h2>
              <p className="text-xl text-gray-600">
                Real-world implementations making a difference
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} animation="fade-up">
                {/* Wrap Card in a div with onClick handler */}
                <div 
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Card
                    hover
                    className="overflow-hidden h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="green">{project.category}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Events & Conferences</h2>
              <p className="text-xl text-gray-600">
                Where innovation meets collaboration
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card hover className="h-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-orchid-700 font-semibold mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Award className="w-16 h-16 text-orchid-700 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Certifications & Recognition
              </h2>
              <p className="text-xl text-gray-600">
                Industry-recognized standards and achievements
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card hover className="p-6 text-center h-full">
                  <div className="w-20 h-20 bg-orchid-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-orchid-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Project detail"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}