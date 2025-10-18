"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Samuel Abera</h1> 
              {/* <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">Samuel Abera</h1> */}
              <p className="text-xl sm:text-2xl text-primary font-semibold">I'm a Self-tought Developer!</p>
            </div>

            {/* Quote Section */}
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <p className="text-2xl sm:text-3xl font-light text-balance leading-relaxed">
                <span className="text-3xl sm:text-4xl">🌱</span> I believe in progress, not excuses. There's nothing I
                can't learn.
              </p>
            </div>

            {/* Interests */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
                <p className="text-sm font-medium text-primary">💻 Website Development</p>
              </div>
              <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full">
                <p className="text-sm font-medium text-accent">🤖 Artificial Intelligence</p>
              </div>
              <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full">
                <p className="text-sm font-medium text-accent">🤖 Software Developement</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card bg-transparent"
                onClick={() => window.open("https://github.com/samuelabera21", "_blank")}
              >
                View GitHub
                <Github className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-8">
              <a
                href="https://github.com/samuelabera21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:sami21.good.bad@gmail.com"
                className="p-3 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-75 blur-lg animate-glow"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border-2 border-primary/50 overflow-hidden backdrop-blur-sm">
                <Image src="/portfolio_image.jpg" alt="Samuel Abera" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
