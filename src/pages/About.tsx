import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-orchid-700" />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology that solves real-world problems',
    },
    {
      icon: <Heart className="w-8 h-8 text-orchid-700" />,
      title: 'Sustainability',
      description: 'Every solution designed with environmental impact as our top priority',
    },
    {
      icon: <Users className="w-8 h-8 text-orchid-700" />,
      title: 'Collaboration',
      description: 'Working together with communities, partners, and stakeholders',
    },
    {
      icon: <Award className="w-8 h-8 text-orchid-700" />,
      title: 'Excellence',
      description: 'Maintaining the highest standards in design, implementation, and service',
    },
    {
      icon: <Globe className="w-8 h-8 text-orchid-700" />,
      title: 'Global Impact',
      description: 'Creating solutions that scale to benefit communities worldwide',
    },
    {
      icon: <Eye className="w-8 h-8 text-orchid-700" />,
      title: 'Transparency',
      description: 'Open communication about our methods, impact, and continuous improvement',
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-orchid-500/5 to-orchid-600/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Orchid Solutions</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We're a green-tech innovation company on a mission to transform how humanity
              interacts with technology and the environment
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="animate-fade-in-up">
            <Card className="p-8 shadow-lg border border-orchid-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 animate-fade-in">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orchid-500/20 shadow-lg">
                    <img 
                      src="/mukilan.png" 
                      alt="Mukilan K., Founder & CEO of Orchid Solutions" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left animate-slide-in-right">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Founder</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Mukilan K., Founder & CEO of Orchid Solutions, leads the company's mission to combat urban air pollution with sustainable, solar-powered air purification systems enhanced by blockchain for transparent monitoring. With a background in AI, IoT and renewable innovation, he combines technical expertise and community-centered design to create scalable, climate-positive solutions that empower cities and protect public health.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
          
          {/* Leadership Team Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nandhini - CMO */}
            <AnimatedSection animation="fade-up" className="animate-fade-in-up">
              <Card className="p-6 shadow-lg border border-orchid-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orchid-500/20 shadow-lg mb-4">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl text-gray-400">N</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Nandhini</h3>
                  <p className="text-orchid-700 font-medium mb-3">Chief Marketing Officer</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Nandhini is the creative communicator of Orchid Solutions, specializing in marketing, presentations, and brand storytelling.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    She leads the company's outreach, visual communication, and public relations — ensuring Orchid's ideas are presented with clarity and impact.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    Her confident speaking, design sense, and presentation skills make her the voice and image of the company in events and client interactions.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
            
            {/* Rishi - COO */}
            <AnimatedSection animation="fade-up" className="animate-fade-in-up">
              <Card className="p-6 shadow-lg border border-orchid-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orchid-500/20 shadow-lg mb-4">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl text-gray-400">R</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Rishi</h3>
                  <p className="text-orchid-700 font-medium mb-3">Chief Operating Officer</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Rishi brings structure and technical depth to Orchid Solutions.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    He manages day-to-day operations, website development, and content systems while bridging communication between design, technical, and marketing teams.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    His strength in web architecture and workflow management ensures that every project runs smoothly — from concept to completion.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
            
            {/* Tharun - CDO */}
            <AnimatedSection animation="fade-up" className="animate-fade-in-up">
              <Card className="p-6 shadow-lg border border-orchid-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orchid-500/20 shadow-lg mb-4">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl text-gray-400">T</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Tharun</h3>
                  <p className="text-orchid-700 font-medium mb-3">Chief Design Officer</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Tharun leads the design and modeling division with creativity and precision.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    He is responsible for CAD design, 3D product visualization, and hardware prototyping, ensuring that every Orchid innovation is both functional and aesthetic.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    His design thinking transforms abstract ideas into tangible, futuristic prototypes that represent Orchid's commitment to innovation and quality.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <img
                src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg"
                alt="Company Story"
                className="rounded-lg shadow-xl"
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2025, Orchid Solutions emerged from a simple yet powerful idea:
                    technology should work in harmony with nature, not against it.
                  </p>
                  <p>
                    Our founders, a team of environmental scientists, engineers, and AI researchers,
                    recognized that the world's most pressing challenges required solutions that
                    combined cutting-edge technology with ecological wisdom.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of the green-tech revolution,
                    developing innovations in AI, renewable energy, and bioengineering that are
                    making a measurable difference in communities around the world.
                  </p>
                  <p>
                    Although we have made significant progress,
                    we're just getting started on our journey to create a sustainable future.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection animation="fade-up">
              <Card className="p-8 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-10 h-10 text-orchid-700" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A world where every community has access to clean, affordable, and intelligent
                  technology that enhances quality of life while protecting our planet for future
                  generations.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up">
              <Card className="p-8 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-10 h-10 text-orchid-700" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To design, develop, and deploy affordable, intelligent, and renewable innovations
                  that measurably reduce pollution, optimize energy efficiency, and improve the
                  well-being of people worldwide.
                </p>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card hover className="p-6 h-full">
                  <div className="space-y-4">
                    <div className="p-3 bg-orchid-500/10 rounded-full w-fit">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orchid-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 leading-relaxed">
              We're always looking for passionate individuals who want to make a difference.
              If you're excited about green technology and sustainable innovation, we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orchid-700">
                Get In Touch
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}