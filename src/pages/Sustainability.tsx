import { Leaf, Target, TrendingUp, Recycle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';

export default function Sustainability() {
  const commitments = [
    {
      icon: <Leaf className="w-8 h-8 text-orchid-600" />,
      title: 'Carbon Neutrality',
      description: 'Committed to achieving net-zero carbon emissions across all operations by 2030',
      status: '65% complete',
    },
    {
      icon: <Recycle className="w-8 h-8 text-orchid-600" />,
      title: 'Circular Design',
      description: 'All products designed for recyclability, repairability, and minimal waste',
      status: '80% complete',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orchid-600" />,
      title: 'Renewable Energy',
      description: '100% renewable energy usage in all facilities and operations',
      status: '90% complete',
    },
    {
      icon: <Target className="w-8 h-8 text-orchid-600" />,
      title: 'Impact Measurement',
      description: 'Transparent reporting of environmental impact across all projects',
      status: '100% complete',
    },
  ];

  const impactGoals = [
    { metric: 'CO₂ Reduction', current: 2.1, target: 5, unit: 'Million Tons', progress: 42 },
    { metric: 'Renewable Energy', current: 450, target: 1000, unit: 'MW Generated', progress: 45 },
    { metric: 'Projects Deployed', current: 520, target: 2000, unit: 'Installations', progress: 26 },
    { metric: 'Communities Served', current: 180, target: 500, unit: 'Locations', progress: 36 },
  ];

  const principles = [
    {
      title: 'Design for Longevity',
      description: 'Products built to last decades, not years, with modular components for easy upgrades and repairs.',
    },
    {
      title: 'Source Responsibly',
      description: 'Materials sourced from sustainable suppliers with verified environmental and labor practices.',
    },
    {
      title: 'Minimize Waste',
      description: 'Zero-waste manufacturing processes with comprehensive recycling and reuse programs.',
    },
    {
      title: 'Local Production',
      description: 'Regional manufacturing hubs to reduce transportation emissions and support local economies.',
    },
    {
      title: 'End-of-Life Planning',
      description: 'Take-back programs ensuring responsible recycling and material recovery at product end-of-life.',
    },
    {
      title: 'Continuous Improvement',
      description: 'Regular audits and updates to sustainability practices based on latest research and technology.',
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-orchid-500/5 to-orchid-600/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Commitment to Sustainability</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Environmental responsibility isn't just part of our mission—it's embedded in
              everything we do, from design to deployment
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Environmental Commitments</h2>
              <p className="text-xl text-gray-600">
                Measurable goals driving our sustainability initiatives
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card className="p-8 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orchid-500/10 rounded-lg flex-shrink-0">
                      {commitment.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {commitment.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{commitment.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Progress</span>
                        <span className="text-sm font-semibold text-orchid-600">
                          {commitment.status}
                        </span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orchid-600 rounded-full transition-all"
                          style={{ width: commitment.status }}
                        />
                      </div>
                    </div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">2030 Impact Goals</h2>
              <p className="text-xl text-gray-600">
                Tracking our progress toward ambitious environmental targets
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactGoals.map((goal, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{goal.metric}</h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-orchid-600">{goal.current}</span>
                      <span className="text-gray-500">/ {goal.target}</span>
                      <span className="text-sm text-gray-500">{goal.unit}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progress to 2030 Goal</span>
                      <span className="font-semibold text-orchid-700">{goal.progress}%</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orchid-500 to-orchid-700 rounded-full transition-all"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Circular Design Principles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our products and processes are designed with the entire lifecycle in mind,
                from raw materials to end-of-life recovery
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card hover className="p-6 h-full">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="text-2xl font-bold text-orchid-700">{index + 1}</div>
                    <h3 className="text-lg font-semibold text-gray-900 pt-1">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 pl-10">{principle.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orchid-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Transparency in Action</h2>
              <p className="text-xl leading-relaxed mb-8">
                We publish annual sustainability reports detailing our environmental impact,
                progress toward goals, and areas for improvement. We believe accountability
                drives real change.
              </p>
              <div className="inline-flex items-center space-x-2 text-lg">
                <span>Latest Report: 2024 Sustainability Impact</span>
                <span className="text-orchid-200">→</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );

}
