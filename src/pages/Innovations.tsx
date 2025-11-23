import { useState } from 'react';
import { Sun, Wind, Droplet, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Badge from '../components/Badge';

export default function Innovations() {
  const [activeTab, setActiveTab] = useState(0);

  const innovations = [
    {
      id: 0,
      title: 'SolarNet AI',
      category: 'Renewable Energy',
      icon: <Sun className="w-12 h-12 text-orchid-600" />,
      tagline: 'Machine Learning-Optimized Solar Energy Systems',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      description: 'SolarNet AI revolutionizes solar energy capture by using advanced machine learning algorithms to predict weather patterns, optimize panel positioning, and maximize energy output throughout the day.',
      specs: [
        { label: 'Energy Efficiency', value: '40% increase' },
        { label: 'ROI Period', value: '3-4 years' },
        { label: 'Maintenance', value: 'Self-diagnosing' },
        { label: 'Integration', value: 'Existing grids' },
      ],
      features: [
        'Real-time weather prediction and adaptation',
        'Automated panel angle optimization',
        'Predictive maintenance alerts',
        'Smart grid integration',
        'Cloud-based monitoring dashboard',
      ],
      impact: {
        co2: '500 tons/year per installation',
        energy: '40% efficiency improvement',
        cost: '35% reduction in energy costs',
      },
    },
    {
      id: 1,
      title: 'BioFilter Systems',
      category: 'Bioengineering',
      icon: <Wind className="w-12 h-12 text-orchid-600" />,
      tagline: 'Natural Air Purification Technology',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      description: 'Our BioFilter Systems use bioengineered organisms and natural processes to purify air in urban and industrial environments, removing particulates, VOCs, and harmful pollutants without electricity.',
      specs: [
        { label: 'Particle Reduction', value: '85% PM2.5/PM10' },
        { label: 'Coverage Area', value: 'Up to 5,000 sq ft' },
        { label: 'Energy Use', value: 'Zero electricity' },
        { label: 'Lifespan', value: '10+ years' },
      ],
      features: [
        'Bioengineered air-purifying organisms',
        'Zero energy consumption',
        'Natural, sustainable materials',
        'Modular scalable design',
        'Self-maintaining ecosystem',
      ],
      impact: {
        co2: 'Captures 2 tons/year',
        air: '85% particulate reduction',
        cost: '90% lower operating costs',
      },
    },
    {
      id: 2,
      title: 'SmartGrid Hub',
      category: 'Smart Infrastructure',
      icon: <Droplet className="w-12 h-12 text-orchid-600" />,
      tagline: 'Intelligent Energy Distribution Network',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
      description: 'SmartGrid Hub is an AI-powered energy management system that optimizes distribution, balances load, and integrates renewable sources to create efficient, resilient urban power networks.',
      specs: [
        { label: 'Energy Savings', value: '30% average' },
        { label: 'Response Time', value: '<100ms' },
        { label: 'Renewable Integration', value: '100%' },
        { label: 'Scalability', value: 'City-wide' },
      ],
      features: [
        'Real-time load balancing',
        'Renewable energy prioritization',
        'Demand prediction algorithms',
        'Automated fault detection',
        'Dynamic pricing optimization',
      ],
      impact: {
        co2: '1,200 tons/year per city',
        energy: '30% reduction in waste',
        reliability: '99.9% uptime',
      },
    },
  ];

  const activeInnovation = innovations[activeTab];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-orchid-500/5 to-orchid-600/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Innovations</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Cutting-edge solutions combining AI, renewable energy, and bioengineering
              to create a sustainable future
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4 space-y-4">
              {innovations.map((innovation, index) => (
                <button
                  key={innovation.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeTab === index
                      ? 'bg-orchid-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={activeTab === index ? 'text-white' : ''}>
                      {innovation.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{innovation.title}</div>
                      <div className={`text-sm ${activeTab === index ? 'text-white/90' : 'text-gray-500'}`}>
                        {innovation.category}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:w-3/4">
              <AnimatedSection key={activeTab} animation="fade-in">
                <Card className="overflow-hidden">
                  <img
                    src={activeInnovation.image}
                    alt={activeInnovation.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-3xl font-bold text-gray-900">{activeInnovation.title}</h2>
                      <Badge variant="green">{activeInnovation.category}</Badge>
                    </div>

                    <p className="text-xl text-orchid-700 font-semibold mb-4">
                      {activeInnovation.tagline}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      {activeInnovation.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {activeInnovation.specs.map((spec, index) => (
                        <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-orchid-700 mb-1">
                            {spec.value}
                          </div>
                          <div className="text-sm text-gray-600">{spec.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {activeInnovation.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-orchid-700 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orchid-500/10 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Impact</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.entries(activeInnovation.impact).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-sm text-gray-600 uppercase tracking-wide mb-1">
                              {key === 'co2' ? 'CO₂ Reduction' : key}
                            </div>
                            <div className="text-lg font-semibold text-orchid-700">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
