import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      value: "amit69091@gmail.com",
      href: "mailto:amit69091@gmail.com",
      color: "text-dark-accent",
      bgColor: "bg-dark-accent/20",
      target: "_self"
    },
    {
      icon: Phone,
      value: "+91 94722 00612",
      href: "tel:+919472200612",
      color: "text-dark-success",
      bgColor: "bg-dark-success/20",
      target: "_self"
    },
    {
      icon: Linkedin,
      value: "Connect with me",
      href: "https://www.linkedin.com/in/amitpr28/",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      target: "_blank"
    },
    {
      icon: MapPin,
      value: "Bangalore, India",
      href: null,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      target: "_self"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-accent to-dark-success mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto" data-testid="contact-description">
            Got an exciting project or opportunity? Let’s connect and make it happen.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              const content = (
                <div className="bg-dark-primary rounded-xl p-8 text-center card-hover border border-dark-border" data-testid={`contact-${contact.value.toLowerCase()}`}>
                  <div className={`w-16 h-16 ${contact.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`${contact.color} w-8 h-8`} />
                  </div>
                  <p className={`text-gray-400 ${contact.href ? `hover:${contact.color} transition-colors` : ""}`} data-testid={`contact-${contact.value.toLowerCase()}-value`}>
                    {contact.value}
                  </p>
                </div>
              );

              if (contact.href) {
                return (
                  <a key={index} href={contact.href} target={contact.target} rel={contact.target === "_blank" ? "noopener noreferrer" : undefined} className="block">
                    {content}
                  </a>
                );
              }

              return <div key={index}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
