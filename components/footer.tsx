"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">© {currentYear} Samuel Abera. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms
            </a> */}
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Home
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
