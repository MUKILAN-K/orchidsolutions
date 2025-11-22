import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: 'Visit Us',
      details: ['Trichy ', 'Tamil Nadu, IN 620013', 'INDIA'],
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: 'Call Us',
      details: ['+91 6380891939', 'Mon-Fri 9am-6pm PST', 'Emergency: +1 (555) 123-4568'],
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: 'Email Us',
      details: ['info@orchidsolutions.com', 'support@orchidsolutions.com', 'careers@orchidsolutions.com'],
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ready to make a difference? Let's discuss how we can help bring your
              sustainable vision to life
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <Card className="p-8 text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-50 rounded-full">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="slide-right">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="project">Project Consultation</option>
                      <option value="support">Technical Support</option>
                      <option value="careers">Career Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800">
                        Something went wrong. Please try again later.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <Card className="p-8 bg-gradient-to-br from-green-50 to-teal-50 border-0 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Orchid Solutions?</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                    </div>
                    <p className="text-gray-600 text-sm ml-4">
                      500+ successful projects with measurable environmental impact
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    </div>
                    <p className="text-gray-600 text-sm ml-4">
                      Specialists in AI, renewable energy, and bioengineering
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <h4 className="font-semibold text-gray-900">End-to-End Solutions</h4>
                    </div>
                    <p className="text-gray-600 text-sm ml-4">
                      From consultation to implementation and ongoing support
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <h4 className="font-semibold text-gray-900">Sustainable Impact</h4>
                    </div>
                    <p className="text-gray-600 text-sm ml-4">
                      2M+ tons of CO₂ reduced and counting
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-700 font-medium mb-2">Office Hours</p>
                  <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p className="text-gray-600 text-sm">Sunday: Closed</p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
