import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Monitor,
  Wrench
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = {
    'Programming Languages': [
      'Java', 'JavaScript', 'Python', 'C++', 'C#', 'PHP', 'SQL'
    ],
    'Frameworks & Libraries': [
      'React.js', 'Node.js', 'AngularJS', 'Django'
    ],
    'Databases': [
      'MySQL', 'MongoDB'
    ],
    'Tools & Platforms': [
      'Docker', 'Jenkins', 'Git', 'AWS', 'Azure'
    ],
    'Networking': [
      'Wireshark', 'SNMP'
    ]
  }

  const experiences = [
    {
      title: 'Network Engineer',
      company: 'Data Specific Network',
      location: 'Ahmedabad, Gujarat, India',
      period: '10/2023 - 02/2024',
      achievements: [
        'Configured and optimized Cisco routers and switches to enhance network connectivity and security, achieving a 99.9% uptime',
        'Conducted performance analysis using Wireshark and SNMP tools, identifying and resolving bottlenecks to improve network efficiency',
        'Authored detailed documentation on network configurations and troubleshooting procedures for streamlined knowledge transfer'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'Optimized Solutions',
      location: 'Ahmedabad, Gujarat, India',
      period: '03/2023 - 10/2023',
      achievements: [
        'Developed scalable and efficient software systems using Python, Django, and PostgreSQL',
        'Deployed and managed containerized applications using Docker and Jenkins, optimizing the CI/CD pipeline',
        'Actively collaborated in Agile sprints, ensuring timely delivery of project milestones',
        'Enhanced software functionality by implementing modular designs, resulting in a 30% reduction in future maintenance efforts'
      ]
    },
    {
      title: 'Technical Mentor',
      company: 'CoreCut Solutions',
      location: 'Gandhinagar, Gujarat, India',
      period: '02/2022 - 09/2023',
      achievements: [
        'Guided diploma students on projects, specializing in programming languages and development best practices',
        'Facilitated over 20 hands-on workshops, achieving a 90% satisfaction rate among participants',
        'Promoted a collaborative learning environment, ensuring the successful completion of all student projects'
      ]
    },
    {
      title: 'Full-Stack Developer Intern',
      company: 'Incisive Web Solution Pvt Ltd',
      location: 'Gandhinagar, Gujarat, India',
      period: '08/2021 - 02/2022',
      achievements: [
        'Engineered scalable web applications using modern front-end frameworks like React.js and AngularJS, enhancing system performance by 25%',
        'Developed and integrated RESTful APIs to streamline data exchange and improve user experience, reducing response time by 15%',
        'Utilized back-end technologies, including Node.js, Express.js, and MongoDB, to design robust server-side architectures'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-cyan-400">Ronak Makwana</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section
                        ? 'text-cyan-400 bg-gray-800'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-cyan-400">Ronak Makwana</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
              Full-Stack Developer & DevOps Engineer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about creating scalable solutions and optimizing system performance. 
              Currently pursuing Masters in Information Technology, graduating November 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-cyan-400 hover:bg-cyan-500 text-gray-900"
              >
                View My Work
              </Button>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  Proactive and results-driven software developer with expertise in full-stack development, 
                  DevOps, and network administration. Proficient in Python, JavaScript, and MongoDB, with a 
                  proven track record of delivering scalable, responsive solutions.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Skilled in frameworks such as React.JS, Node.js, and AngularJS, alongside tools like Django 
                  and pandas for data analysis. Passionate about leveraging technical expertise to solve 
                  complex challenges and optimize system performance.
                </p>
                <div className="flex items-center gap-4 text-gray-400">
                  <MapPin className="h-5 w-5" />
                  <span>Melbourne, VIC 3029</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-cyan-400 flex items-center gap-2">
                      {category === 'Programming Languages' && <Code className="h-5 w-5" />}
                      {category === 'Frameworks & Libraries' && <Globe className="h-5 w-5" />}
                      {category === 'Databases' && <Database className="h-5 w-5" />}
                      {category === 'Tools & Platforms' && <Server className="h-5 w-5" />}
                      {category === 'Networking' && <Monitor className="h-5 w-5" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Network Attached Storage System</CardTitle>
                  <CardDescription className="text-gray-400">
                    Silver Oak College of Engineering, 2019
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Designed an offline cloud storage solution, enabling seamless data transfer through a user-friendly interface.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-cyan-400 text-cyan-400">Raspberry Pi</Badge>
                      <Badge variant="outline" className="border-cyan-400 text-cyan-400">Arduino</Badge>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Led a team to design and develop a cloud storage solution</li>
                      <li>• Implemented drag-and-drop mechanism to reduce data transfer complexities</li>
                      <li>• Successfully completed the project on time with all requirements met</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-cyan-400">More Projects Coming Soon</CardTitle>
                  <CardDescription className="text-gray-400">
                    Additional projects will be showcased here
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    This portfolio will be updated with more projects as they are completed during my Masters program and professional work.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Wrench className="h-4 w-4" />
                    <span className="text-sm">Under Development</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-cyan-400">{exp.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {exp.company} • {exp.location} • {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-gray-300 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Bachelor of Information Technology</CardTitle>
                  <CardDescription className="text-gray-400">
                    Central Queensland University, Melbourne • 2024 – 2026
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-2">Software Design and Development, Artificial Intelligence</p>
                  <p className="text-sm text-gray-400">
                    Relevant Coursework: Advanced Programming, Cloud Infrastructure, 
                    Artificial Intelligence Applications, Data Visualization, and Systems Analysis.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Bachelor of Information Technology</CardTitle>
                  <CardDescription className="text-gray-400">
                    Gujarat Technological University, Ahmedabad • 2018 – 2022
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-2">Software Development</p>
                  <p className="text-sm text-gray-400">
                    Relevant Coursework: Object-Oriented Programming, Database Systems, and Web Technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-cyan-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span>makwanaronak62@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-cyan-400" />
                    <span>+61 0480 673 554</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                    <span>Melbourne, VIC 3029</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-6 text-cyan-400">Connect With Me</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 text-cyan-400">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      rows={5}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Ronak Makwana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

