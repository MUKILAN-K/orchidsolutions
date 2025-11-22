import { Brain, Cpu, FlaskConical, Database } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';

export default function Technology() {
  const technologies = [
    {
      title: 'Artificial Intelligence',
      icon: <Brain className="w-12 h-12 text-green-600" />,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      description: 'Our AI systems use advanced machine learning and neural networks to optimize energy consumption, predict environmental patterns, and automate sustainable operations.',
      capabilities: [
        'Predictive analytics for energy optimization',
        'Computer vision for environmental monitoring',
        'Natural language processing for smart interfaces',
        'Reinforcement learning for adaptive systems',
      ],
    },
    {
      title: 'IoT & Smart Sensors',
      icon: <Cpu className="w-12 h-12 text-green-600" />,
      image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg',
      description: 'Connected devices and intelligent sensors form the backbone of our monitoring systems, providing real-time data on energy usage, air quality, and environmental conditions.',
      capabilities: [
        'Real-time environmental monitoring',
        'Low-power wireless sensor networks',
        'Edge computing for instant processing',
        'Secure data transmission protocols',
      ],
    },
    {
      title: 'Bioengineering',
      icon: <FlaskConical className="w-12 h-12 text-green-600" />,
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
      description: 'Nature-inspired solutions using bioengineered organisms and biomimetic designs to create sustainable, self-maintaining systems that work in harmony with ecosystems.',
      capabilities: [
        'Bioengineered air purification organisms',
        'Biomimetic material design',
        'Natural carbon capture systems',
        'Self-sustaining ecological networks',
      ],
    },
    {
      title: 'Data Analytics',
      icon: <Database className="w-12 h-12 text-green-600" />,
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg',
      description: 'Advanced data processing and visualization tools that transform raw environmental data into actionable insights for better decision-making and optimization.',
      capabilities: [
        'Big data processing pipelines',
        'Real-time analytics dashboards',
        'Predictive modeling and forecasting',
        'Impact measurement and reporting',
      ],
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Technology</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Combining cutting-edge technologies to create intelligent, sustainable solutions
              for environmental challenges
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage the latest advancements across multiple disciplines to deliver
                innovative green-tech solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-24">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <AnimatedSection animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-green-50 rounded-lg">
                        {tech.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{tech.title}</h2>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {tech.description}
                    </p>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 text-lg">Key Capabilities:</h3>
                      <ul className="space-y-2">
                        {tech.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">→</span>
                            <span className="text-gray-700">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Technology Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our integrated approach ensures maximum impact and sustainability
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up">
              <Card className="p-8 h-full">
                <div className="text-4xl font-bold text-green-600 mb-3">01</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrated Systems</h3>
                <p className="text-gray-600">
                  Our technologies work together seamlessly, creating synergies that amplify
                  environmental benefits and operational efficiency.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up">
              <Card className="p-8 h-full">
                <div className="text-4xl font-bold text-green-600 mb-3">02</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Every solution is tested and validated in real-world conditions, with
                  measurable impacts on energy savings and pollution reduction.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up">
              <Card className="p-8 h-full">
                <div className="text-4xl font-bold text-green-600 mb-3">03</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Ready</h3>
                <p className="text-gray-600">
                  Built on scalable, modular architectures that adapt to emerging technologies
                  and evolving environmental challenges.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
