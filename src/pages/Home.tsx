import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Leaf, Droplet, Shield } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const highlights = [
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: 'AI-Powered Solutions',
      description: 'Intelligent systems that optimize energy consumption and reduce waste',
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Renewable Energy',
      description: 'Cutting-edge clean energy technologies for a sustainable future',
    },
    {
      icon: <Droplet className="w-8 h-8 text-green-600" />,
      title: 'Bioengineering',
      description: 'Nature-inspired innovations that work in harmony with ecosystems',
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Environmental Impact',
      description: 'Measurable results in pollution reduction and sustainability',
    },
  ];

  const featuredProjects = [
    {
      title: 'SolarNet AI',
      description: 'Machine learning-optimized solar panel networks',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      impact: '40% efficiency increase',
    },
    {
      title: 'BioFilter Systems',
      description: 'Natural air purification using bioengineered organisms',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      impact: '85% particulate reduction',
    },
    {
      title: 'SmartGrid Hub',
      description: 'Intelligent energy distribution for urban environments',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
      impact: '30% energy savings',
    },
  ];

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg')] bg-cover bg-center opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Innovation for a <span className="text-green-600">Greener Tomorrow</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Orchid Solutions designs affordable, intelligent, and renewable innovations that reduce pollution and enhance quality of life
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/innovations">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Innovations <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Combining AI, renewable energy, and bioengineering to create sustainable solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card hover className="p-6 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-green-50 rounded-full">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600">
                Real-world innovations making a measurable impact
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card hover className="h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold">{project.impact}</span>
                      <Link to="/innovations" className="text-green-600 hover:text-green-700 font-medium">
                        Learn More →
                      </Link>
                    </div>
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
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8 leading-relaxed">
              To design affordable, intelligent, and renewable innovations that reduce pollution,
              enhance energy efficiency, and improve quality of life for communities worldwide.
              We believe technology and nature can work together to create a sustainable future.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                Learn About Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection animation="fade-up">
              <div className="p-8">
                <div className="text-5xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-xl text-gray-700">Projects Deployed</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up">
              <div className="p-8">
                <div className="text-5xl font-bold text-green-600 mb-2">45%</div>
                <div className="text-xl text-gray-700">Average Energy Savings</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up">
              <div className="p-8">
                <div className="text-5xl font-bold text-green-600 mb-2">2M+</div>
                <div className="text-xl text-gray-700">Tons CO₂ Reduced</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join us in creating sustainable solutions for a better tomorrow
            </p>
            <Link to="/contact">
              <Button size="lg">
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
