import { Briefcase, Mail, User, Download } from "lucide-react";

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
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-2/3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-title">
              Hi, I'm <span className="gradient-text">Amit Prakash</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6 font-medium" data-testid="hero-subtitle">
              Java Backend Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl" data-testid="hero-description">
              Nearly 3 years of experience building scalable microservices using Spring Boot. 
              Passionate about creating robust backend systems for global products, including 
              Agentic AI, with a strong focus on security, performance, and maintainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("experience")}
                className="gradient-border inline-flex items-center px-6 py-3 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
                data-testid="button-view-work"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                View My Work
              </button>
              <a
                href="https://drive.google.com/file/d/1rzXy92IuN8E0JtZa_7r5tasCvCxm41as/view?usp=drive_link"
                download="Amit_Prakash_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border inline-flex items-center px-6 py-3 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="gradient-border inline-flex items-center px-6 py-3 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              {/* Profile image placeholder with modern styling */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-gray-700/50 relative overflow-hidden group" data-testid="profile-image">
                <img 
                  src="https://drive.google.com/uc?export=view&id=13Zu1oUm-9kxxoL0mNiQ6P_8WLkLHSe1c"
                  alt="Amit Prakash - Java Backend Developer"
                  className="w-full h-full object-cover"
                />
                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-full border border-gray-600/0 group-hover:border-gray-600/40 transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
