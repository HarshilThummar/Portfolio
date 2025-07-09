
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "john.doe@example.com",
      link: "mailto:john.doe@example.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: "San Francisco, CA",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you're a company looking to hire, or you're a fellow developer
              looking to collaborate, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project inquiry" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
