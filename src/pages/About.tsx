import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology that solves real-world problems',
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: 'Sustainability',
      description: 'Every solution designed with environmental impact as our top priority',
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Collaboration',
      description: 'Working together with communities, partners, and stakeholders',
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'Excellence',
      description: 'Maintaining the highest standards in design, implementation, and service',
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: 'Global Impact',
      description: 'Creating solutions that scale to benefit communities worldwide',
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: 'Transparency',
      description: 'Open communication about our methods, impact, and continuous improvement',
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
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
                    With over 500 projects deployed and 2 million tons of CO₂ emissions prevented,
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
                  <Target className="w-10 h-10 text-green-600" />
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
                  <Eye className="w-10 h-10 text-green-600" />
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
                    <div className="p-3 bg-green-50 rounded-full w-fit">
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

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 leading-relaxed">
              We're always looking for passionate individuals who want to make a difference.
              If you're excited about green technology and sustainable innovation, we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                Get In Touch
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
