
import { Monitor, Smartphone, Globe, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      icon: <Monitor className="h-12 w-12 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"]
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Consulting",
      description: "Technical consulting and code reviews to help optimize your development process.",
      features: ["Code Review", "Architecture Planning", "Performance Audit", "Team Training"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of services to help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
