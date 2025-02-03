import mImage from './m.png';
import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Award,
  Briefcase,
  Menu,
  X,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-indigo-900/95 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="#home" className="text-white font-bold text-xl">
              Anisujjaman
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                'home',
                'about',
                'skills',
                'experience',
                'education',
                'references',
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${
                    activeSection === section ? 'active' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-indigo-900/95 transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="px-4 space-y-4">
            {[
              'home',
              'about',
              'skills',
              'experience',
              'education',
              'references',
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-white py-2 hover:text-blue-300 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 to-blue-900 text-white parallax"
      >
        <div className="absolute inset-0 parallax">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src={mImage}
              alt="Anisujjaman"
              className="w-40 h-40 rounded-full mx-auto profile-image object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Anisujjaman</h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-blue-200">
            IT Professional
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
            <a
              href="mailto:anisujjamanbabu@gmail.com"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Mail size={20} /> anisujjamanbabu@gmail.com
            </a>
            <a
              href="tel:01626894015"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Phone size={20} /> 01626894015
            </a>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <MapPin size={20} />
            <p>House: 36, Road: 21, Sector 14, Uttara</p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            About Me
          </h2>
          <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
            <p className="text-lg text-gray-700 leading-relaxed">
              Highly motivated Technology Specialist with 3+ years of experience
              leading and delivering successful software and cloud solutions in
              pre-sales.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50 parallax"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                Technical Skills
              </h3>
              <ul className="space-y-4">
                {[
                  'Cloud Solutions (Microsoft Azure, AWS)',
                  'Networking (TCP/IP, network protocols)',
                  'Hardware Troubleshooting',
                  'Software Requirements Analysis',
                ].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="text-indigo-500" size={18} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                Soft Skills
              </h3>
              <ul className="space-y-4">
                {[
                  'Collaboration',
                  'Communication',
                  'Customer Service',
                  'Problem-solving',
                  'Leadership',
                  'Adaptability',
                ].map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="text-indigo-500" size={18} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                company: 'Star Tech & Engineering Ltd.',
                position: 'Pre-Sales Executive',
                period: 'February 2024 – Present',
                duties: [
                  'Collaborate with direct customers to understand their software requirements and develop tailored solutions.',
                  'Partner with the sales team to gather and analyze customer requirements.',
                  'Present new software solutions to customers, both on-site and remotely.',
                  'Maintain and update daily sales funnel data, providing clear and concise reports.',
                  'Proactively address any assigned tasks from the team leader.',
                ],
              },
              {
                company: 'Diens Corporation',
                position: 'Senior IT Officer',
                period: 'January 2022 – January 2024',
                duties: [
                  'Provided technical expertise and guidance to internal teams.',
                  'Collaborated with customers to identify software requirements.',
                  'Developed and delivered presentations to showcase new product functionalities.',
                  'Partnered with cross-functional teams to implement innovative solutions.',
                ],
              },
              {
                company: 'Diens Corporation',
                position: 'IT Officer',
                period: 'August 2020 – December 2021',
                duties: [
                  'Collaborated with customers to identify software requirements.',
                  'Developed and delivered product presentations.',
                  'Partnered with cross-functional teams for solution implementation.',
                ],
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.01] transition-transform"
              >
                <div className="flex items-start gap-4">
                  <Briefcase
                    className="text-indigo-600 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {job.position}
                    </h3>
                    <p className="text-indigo-600 font-medium">{job.company}</p>
                    <p className="text-gray-600 mb-4">{job.period}</p>
                    <ul className="space-y-2">
                      {job.duties.map((duty, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight
                            className="text-indigo-500 flex-shrink-0 mt-1"
                            size={18}
                          />
                          <span className="text-gray-700">{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Training Section */}
      <section
        id="education"
        className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50 parallax"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Education & Training
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600 flex items-center gap-2">
                <GraduationCap size={24} /> Education
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    institution: 'Daffodil International University',
                    degree: 'Software Engineering',
                    year: '2019',
                  },
                  {
                    institution:
                      'Rajshahi Education Board Model School and College',
                    degree: 'HSC (Science)',
                    year: '2014',
                  },
                  {
                    institution: 'Al-Helal Islami Academy',
                    degree: 'SSC (Science)',
                    year: '2012',
                  },
                ].map((edu, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight
                      className="text-indigo-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600">
                        {edu.degree} - {edu.year}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600 flex items-center gap-2">
                <Award size={24} /> Training
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    course: 'Web Development and Database Management',
                    institution: 'LICT BDjobs',
                    year: '2017',
                  },
                  {
                    course: 'Graphics Design',
                    institution: 'SR Institute and Design',
                    year: '2018',
                  },
                ].map((training, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight
                      className="text-indigo-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {training.course}
                      </p>
                      <p className="text-gray-600">
                        {training.institution} - {training.year}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            References
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Professor Dr. Touhid Bhuiyan',
                institution: 'Daffodil International University',
                email: 'headcse@daffodilvarsity.edu.bd',
              },
              {
                name: 'Nowrin Akter',
                institution: 'Diens Corporation',
                email: 'nowrin@dienscorp.com',
              },
            ].map((reference, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-transform"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {reference.name}
                </h3>
                <p className="text-indigo-600">{reference.institution}</p>
                <a
                  href={`mailto:${reference.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Mail size={18} />
                  {reference.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <ExternalLink size={24} />
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Anisujjaman. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
