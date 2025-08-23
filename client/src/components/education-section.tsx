import { GraduationCap, Trophy, Star, Award, ExternalLink } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="education-title">Education & Awards</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-accent to-dark-success mx-auto"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div className="bg-dark-secondary rounded-xl p-8 card-hover" data-testid="education-card">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 text-dark-accent mr-3" />
              Education
            </h3>
            <div className="border-l-4 border-dark-accent pl-6">
              <h4 className="text-lg font-semibold text-white mb-2" data-testid="education-degree">
                Bachelor of Technology in Information Technology
              </h4>
              <p className="text-gray-400 mb-1" data-testid="education-institution">MAKAUT, India</p>
              <p className="text-gray-500" data-testid="education-period">2015 – 2019</p>
            </div>
          </div>

          {/* Awards */}
          <div className="bg-dark-secondary rounded-xl p-8 card-hover" data-testid="awards-card">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Trophy className="w-6 h-6 text-yellow-500 mr-3" />
              Awards & Recognition
            </h3>

            <div className="space-y-4">
              <div
                className="flex items-start justify-between bg-dark-secondary hover:bg-dark-tertiary/50 p-3 rounded-lg transition-colors duration-200"
                data-testid="award-employee-month"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-white flex items-center">
                    Employee of the Month
                  </h4>
                  <p className="text-gray-400 text-sm mt-2">January 2024</p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1JQSmwSgjfVUI1hByCsFJ1eyr6RM4QQmL/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-400 hover:text-dark-accent transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div
                className="flex items-start justify-between bg-dark-secondary hover:bg-dark-tertiary/50 p-3 rounded-lg transition-colors duration-200"
                data-testid="award-fullstack"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-white flex items-center">
                    Full Stack Web Development
                  </h4>
                  <p className="text-gray-400 text-sm mt-2">Professional Certification</p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1k_59Ro4dyKRuRGPuV6qOCi1xKi5ruvwO/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-400 hover:text-dark-accent transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
