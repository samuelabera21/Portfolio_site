"use client"

import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", ],
    icon: "⚙️",
  },
  {
    category: "Frontend",
    skills: ["Html", "css", "javascript","React", "Next.js", "TypeScript", "TailwindCSS"],
    icon: "🎨",
  },

  {
    category: "DevOps",
    skills: [ "Vercel", "GitHub Actions"],
    icon: "🚀",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.category}
              className="bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{category.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
