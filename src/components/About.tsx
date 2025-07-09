
import { Code, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB"
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, Prototyping"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with over 5 years of experience creating digital solutions
            that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Profile Image</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Hello! I'm John Doe</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a full-stack developer and designer based in San Francisco. I love creating
              digital experiences that are not only beautiful but also functional and user-friendly.
              My journey in tech started 5 years ago, and I've been passionate about learning
              and growing ever since.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to
              open source projects, or enjoying a good cup of coffee while reading about the
              latest in web development.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
