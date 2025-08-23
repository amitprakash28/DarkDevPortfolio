import { Calendar, ChevronRight, ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "WhiteSwan Security",
      companyUrl: "https://www.whiteswansecurity.com/",
      location: "San Francisco, USA (Remote)",
      period: "Oct 2024 – Present",
      current: true,
      achievements: [
        "Led development of the Azure IAM module, integrating Azure AD and resource controls to deliver secure, scalable access management and stronger cloud governance.",
        "Built a cloud-agnostic Kubernetes access module (Azure, AWS, GCP), enabling Just-In-Time (JIT) access, unified resource inventory, and performance analytics across multi-cloud environments.",
        "Developed a visibility and analytics layer for Azure and Kubernetes, providing detailed insights into human and non-human identities, usage patterns, and system performance to inform security operations.",
        "Engineered a policy-based IAM decision server for agentic AI systems, enabling dynamic, context-aware access control through MCP and A2A protocols.",
        "Designed and built a standalone Snowflake access and observability application, delivering real-time insights into performance, RBAC, human and non-human identity management, Just-In-Time access, and resource inventory through a unified, user-friendly interface."
      ]
    },
    {
      title: "Software Developer",
      company: "Clouddefense.ai",
      companyUrl: "https://www.clouddefense.ai/",
      location: "San Francisco, USA (Remote)",
      period: "April 2024 - Sept 2024",
      current: false,
      achievements: [
        "Developed 4 comprehensive modules (Team, User, Application, File management) to enhance platform functionality and scalability."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Twinleaves Retail E-commerce Private Limited",
      companyUrl: "https://www.twinleaves.co/",
      location: "Sydney, Australia (Onsite)",
      period: "Nov 2022 – March 2024",
      current: false,
      achievements: [
        "Developed and scaled 6 SaaS microservices (Logistics, Loyalty, Inbound, Layout, WMS, Inventory), driving market expansion and securing strategic partnerships with major retail clients including Nilgiris and Plus Max.",
        "Improved backend performance through query optimization, read replicas, caching, and asynchronous processing, reducing API response times to 200–300ms and enhancing scalability during peak loads.",
        "Designed and implemented a robust data migration architecture using Spring and SQL, enabling seamless onboarding and migration for 150+ retail partner stores."
      ]
    }
  ];

return (
  <section id="experience" className="py-20 bg-dark-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="experience-title">Work Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-dark-accent to-dark-success mx-auto"></div>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-dark-primary rounded-xl p-8 lg:p-12 card-hover border border-dark-border" data-testid={`experience-${index}`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                {/* Company Name with Blue Color and External Link */}
                <h3 className="text-2xl font-bold text-dark-accent mb-2" data-testid={`experience-company-${index}`}>
                  {exp.company}
                  <a 
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block ml-2 text-gray-400 hover:text-dark-accent transition-colors duration-200"
                    data-testid={`experience-company-link-${index}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </h3>

                {/* Position Name in White */}
                <h4 className="text-lg font-semibold text-white mb-1" data-testid={`experience-title-${index}`}>{exp.title}</h4>

                <p className="text-gray-400" data-testid={`experience-location-${index}`}>{exp.location}</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <span
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-medium relative ${
                    exp.current
                      ? "text-white"
                      : "bg-dark-border text-gray-300"
                  }`}
                  data-testid={`experience-period-${index}`}
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-dark-accent to-dark-success">
                      <span className="block h-full w-full rounded-lg bg-dark-tertiary"></span>
                    </span>
                  )}

                  <span className="relative flex items-center">
                    {exp.current ? (
                      <div className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center mr-2">
                        <Calendar className="w-3 h-3 text-green-400" />
                      </div>
                    ) : (
                      <Calendar className="w-4 h-4 mr-2" />
                    )}
                    {exp.period}
                  </span>
                </span>
              </div>
            </div>
            <ul className="space-y-4 text-gray-300 text-base leading-relaxed font-light">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start" data-testid={`experience-achievement-${index}-${achIndex}`}>
                  <ChevronRight className="w-5 h-5 text-dark-accent mt-1 mr-3 flex-shrink-0" />
                  <span className="font-normal tracking-wide">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

}
