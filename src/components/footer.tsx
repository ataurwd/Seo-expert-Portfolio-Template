import Link from "next/link"
import { X, Briefcase, Camera, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
            SEO<span className="text-accent">EXPERT</span>
          </Link>
          <p className="text-muted-foreground mb-6">
            Helping businesses dominate Google search with data-driven SEO strategies.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-secondary rounded-full hover:text-accent transition-colors"><X size={18} /></Link>
            <Link href="#" className="p-2 bg-secondary rounded-full hover:text-accent transition-colors"><Briefcase size={18} /></Link>
            <Link href="#" className="p-2 bg-secondary rounded-full hover:text-accent transition-colors"><Camera size={18} /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><Link href="#home" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="#case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
            <li><Link href="#results" className="hover:text-accent transition-colors">Results</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><Link href="#" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">SEO Guide</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Stay Updated</h4>
          <p className="text-muted-foreground mb-4">Subscribe to get the latest SEO insights.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-secondary border-none rounded-xl py-3 px-4 pr-12 focus:ring-1 focus:ring-accent outline-none"
            />
            <button className="absolute right-2 top-2 p-1.5 bg-accent text-accent-foreground rounded-lg">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-border flex flex-col md:row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2026 SEO EXPERT. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#">Sitemap</Link>
          <Link href="#">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}
