"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [

  {
    title: "Online job finder application",
    description: "allow to any one who wants to employe or find works .",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/sra.png",
    github: "https://github.com/samuelabera21",
    live: "https://resplendent-starship-9acec3.netlify.app/",
  },
  
  {
    
    title: "Skillhub online Learning Platform",
    description:
      "A modern, full-featured online learning platform frontend built with Next.js 15, featuring course browsing, shopping cart, user authentication, and a student dashboard.",
    tags: ["Next.js 15 (App Router)", " Tailwind CSS v4", "TypeScript", "Lucide React","Framer Motion"," shadcn/ui","React Hooks + localStorage"],
    image: "/Skillhub_online_learning.png",
    github: "https://github.com/samuelabera21",
    live: "https://skill-hub-online-le-git-48b5a4-sami21goodbad-gmailcoms-projects.vercel.app",
  },
  {
    title: "Resume-generator",
    description: "DevResumeMagic 🚀 A modern web app that generates professional developer resumes from GitHub profiles. Features Instant Resume Generation - Enter any GitHub username",
    tags: ["JavaScript (Vanilla)", "    GitHub API", "Browser Print to PDF", "HTML5 + Tailwind CSS"],
    image: "/Generate_resume.png",
    github: "https://github.com/samuelabera21",
    live: "https://lighthearted-truffle-2fb80e.netlify.app",
  },
  {
    title: "Snake Game",
    description: "Just for fun",
    tags: ["Vite", "TypeScript", "React", "shadcn-ui","Tailwind CSS"],
    image: "/snake_game.png",
    github: "https://github.com/samuelabera21",
    live: " https://samuelabera21-git-main-sami21goodbad-gmailcoms-projects.vercel.app",
  },
  {
    title: "Ethio_travel",
    description: "Frontend travel website just for train.",
    tags: ["html", "css", "Javascript"],
    image: "/travel.jpg",
    github: "https://github.com/samuelabera21",
    live: "https://ethio-travel-git-main-sami21goodbad-gmailcoms-projects.vercel.app",
  },
  {
    title: "TypeMaster",
    description: "TypeMaster is a simple yet elegant web application that helps users test and improve their typing speed and accuracy.It supports both English and Amharic languages, providing instant feedback and performance analysis.",
    tags: ["HTML5 ", "CSS3 ", "JavaScript (ES6)", "jQuery 3.6.0"],
    image: "/master.png",
    github: "https://github.com/samuelabera21",
    live: "https://type-testing-game-git-main-sami21goodbad-gmailcoms-projects.vercel.app",
  },
 
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Showcasing my best work and technical expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all group"
            >
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-border hover:bg-primary/10 bg-transparent"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
