import { Code, Layers, Database, Cloud, Table } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-dark-accent",
      skills: ["Java", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "text-dark-success",
      skills: [
        "Spring Framework", "Spring Boot", "Spring Web", "Spring Data", 
        "Spring Security", "JDBC", "Hibernate", "GraphQL"
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-yellow-500",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Snowflake"]
    },
    {
      title: "Cloud/DevOps & Tools",
      icon: Cloud,
      color: "text-blue-400",
      skills: [
        "Docker", "Kubernetes", "GCP", "Azure", "Jenkins", "OAuth 2.0", 
        "Maven", "Git", "Swagger", "Postman"
      ]
    },
    {
      title: "Architecture & Others",
      icon: Table,
      color: "text-purple-400",
      skills: ["System Design", "Microservices Architecture", "RESTful APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="skills-title">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-accent to-dark-success mx-auto"></div>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-dark-secondary rounded-xl p-8 card-hover" data-testid={`skill-category-${index}`}>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <IconComponent className={`w-6 h-6 ${category.color} mr-3`} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-item px-4 py-2 bg-dark-tertiary rounded-lg text-sm font-medium"
                      data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
