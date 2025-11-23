import { Calendar, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function Blog() {
  const featuredArticle = {
    title: 'The Future of AI-Powered Renewable Energy Systems',
    excerpt: 'Exploring how machine learning is revolutionizing solar energy optimization and creating more efficient, adaptive power grids for sustainable urban environments.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    author: 'Dr. Sarah Chen',
    date: 'November 15, 2024',
    readTime: '8 min read',
    category: 'Technology',
  };

  const articles = [
    {
      title: 'Bioengineering Meets Urban Planning: A New Era',
      excerpt: 'How bioengineered air purification systems are transforming cityscapes and improving public health in metropolitan areas.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      author: 'Michael Torres',
      date: 'November 10, 2024',
      readTime: '6 min read',
      category: 'Innovation',
    },
    {
      title: 'Smart Grids: The Backbone of Sustainable Cities',
      excerpt: 'Understanding how intelligent energy distribution networks are reducing waste and empowering renewable energy adoption.',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
      author: 'Lisa Anderson',
      date: 'November 5, 2024',
      readTime: '7 min read',
      category: 'Infrastructure',
    },
    {
      title: 'Circular Design Principles in Green Technology',
      excerpt: 'A deep dive into how we design products for longevity, repairability, and end-of-life recovery.',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
      author: 'James Rodriguez',
      date: 'October 28, 2024',
      readTime: '5 min read',
      category: 'Sustainability',
    },
    {
      title: 'Real-World Impact: Case Study from Portland',
      excerpt: 'How our BioFilter systems reduced air pollution by 85% in downtown Portland over 18 months.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      author: 'Emma Williams',
      date: 'October 20, 2024',
      readTime: '10 min read',
      category: 'Case Study',
    },
    {
      title: 'The Economics of Renewable Energy in 2024',
      excerpt: 'Breaking down the cost-benefit analysis of transitioning to renewable energy infrastructure.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
      author: 'David Park',
      date: 'October 15, 2024',
      readTime: '6 min read',
      category: 'Business',
    },
    {
      title: 'IoT Sensors: The Eyes of Smart Environmental Systems',
      excerpt: 'How low-power sensor networks provide real-time data for adaptive environmental management.',
      image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg',
      author: 'Rachel Kim',
      date: 'October 8, 2024',
      readTime: '5 min read',
      category: 'Technology',
    },
  ];

  const getCategoryVariant = (category: string) => {
    const variants: Record<string, 'green' | 'blue' | 'teal' | 'gray'> = {
      Technology: 'blue',
      Innovation: 'teal',
      Infrastructure: 'green',
      Sustainability: 'green',
      'Case Study': 'teal',
      Business: 'gray',
    };
    return variants[category] || 'gray';
  };

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-orchid-500/5 to-orchid-600/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog & Insights</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Latest thoughts on green technology, sustainability, and innovation
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant={getCategoryVariant(featuredArticle.category)} className="w-fit mb-4">
                    Featured Article
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <span className="font-medium text-gray-700">{featuredArticle.author}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <Button className="w-fit">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600">
                Expert insights on sustainable technology and environmental innovation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card hover className="h-full flex flex-col">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <Badge variant={getCategoryVariant(article.category)} className="w-fit mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">{article.excerpt}</p>
                    <div className="border-t pt-4 space-y-2">
                      <div className="text-sm font-medium text-gray-700">
                        {article.author}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
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
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest insights on green technology,
              project updates, and sustainability trends
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orchid-700">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white/80 mt-3">
                No spam, unsubscribe anytime
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
