import Link from "next/link"
import { X, Briefcase, Camera, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
            DIPTO DAS <span className="text-primary">SEO</span>
          </Link>
          <p className="text-muted-foreground mb-6">
            Helping businesses succeed in the digital space with over 4 years of specialized SEO expertise.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-secondary rounded-full hover:text-primary transition-colors"><X size={18} /></Link>
            <Link href="#" className="p-2 bg-secondary rounded-full hover:text-primary transition-colors"><Briefcase size={18} /></Link>
            <Link href="#" className="p-2 bg-secondary rounded-full hover:text-primary transition-colors"><Camera size={18} /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">SEO Services</h4>
          <ul className="space-y-4 text-muted-foreground text-sm">
            <li><Link href="#services" className="hover:text-primary transition-colors">On-Page SEO</Link></li>
            <li><Link href="#services" className="hover:text-primary transition-colors">Off-Page SEO</Link></li>
            <li><Link href="#services" className="hover:text-primary transition-colors">Local SEO</Link></li>
            <li><Link href="#services" className="hover:text-primary transition-colors">Technical SEO</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-muted-foreground text-sm">
            <li><Link href="#about" className="hover:text-primary transition-colors">About Dipto</Link></li>
            <li><Link href="#case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
            <li><Link href="#results" className="hover:text-primary transition-colors">Success Results</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Stay Updated</h4>
          <p className="text-muted-foreground mb-4 text-sm">Get the latest SEO insights delivered to your inbox.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-secondary border border-border rounded-xl py-3 px-4 pr-12 focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
            />
            <button className="absolute right-2 top-2 p-1.5 bg-primary text-primary-foreground rounded-lg">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-border flex flex-col md:row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© 2026 DIPTO DAS SEO. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
