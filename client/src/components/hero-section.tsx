import { Briefcase, Mail, User, Download } from "lucide-react";
import meImage from '../assets/me.jpeg';


export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
<section className="min-h-screen flex items-center justify-center pt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between flex-col-reverse lg:flex-row">
      {/* Profile Image */}
      <div className="lg:w-1/3 mt-12 lg:mt-0 flex justify-center order-last lg:order-first lg:mr-12 mb-8 lg:mb-0">
        <div className="relative">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-gray-700/50 relative overflow-hidden group" data-testid="profile-image">
            <img 
              src={meImage}
              alt="Amit Prakash - Java Backend Developer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full border border-gray-600/0 group-hover:border-gray-600/40 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Text and Buttons */}
      <div className="lg:w-2/3">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-title">
          Hi, I'm <span className="gradient-text">Amit Prakash</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-300 mb-6 font-medium" data-testid="hero-subtitle">
          Java Backend Developer
        </h2>
        <p className="text-base text-gray-400 mb-8 max-w-2xl leading-6" data-testid="hero-description">
          Java Backend Developer with nearly 3 years of experience crafting scalable microservices using Spring Boot.<br />
          Currently at WhiteSwan Security, I specialize in building secure, high-performance backend systems for global products, including Agentic AI.<br />
          Passionate about performance, security, and maintainability.<br />
          I’m driven by innovative projects in cloud-native solutions and AI integration.
        </p>


<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-center sm:text-left">
  <button
    onClick={() => scrollToSection("experience")}
    className="gradient-border inline-flex items-center justify-center px-6 py-3 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
    data-testid="button-view-work"
  >
    <Briefcase className="w-4 h-4 mr-2" />
    My Experience
  </button>
  <a
    href="https://drive.google.com/file/d/1rzXy92IuN8E0JtZa_7r5tasCvCxm41as/view?usp=drive_link"
    download="Amit_Prakash_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="gradient-border inline-flex items-center justify-center px-6 py-3 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
    data-testid="button-download-resume"
  >
    <Download className="w-4 h-4 mr-2" />
    Download Resume
  </a>
  <button
    onClick={() => scrollToSection("contact")}
    className="gradient-border inline-flex items-center justify-center px-6 py-3 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
    data-testid="button-contact"
  >
    <Mail className="w-4 h-4 mr-2" />
    Get In Touch
  </button>
</div>



      </div>
    </div>
  </div>
</section>

  );
}
