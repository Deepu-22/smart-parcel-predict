import { Package, Phone, Info, Home, Menu, X } from "lucide-react";
import { useState } from "react";
import indiaPostLogo from "@/assets/india-post-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: Home, href: "#" },
    { label: "Track Parcel", icon: Package, href: "#tracking" },
    { label: "Contact", icon: Phone, href: "#contact" },
  ];

  return (
    <>
      <div className="h-1.5 tricolor-stripe" />
      <div className="bg-primary text-primary-foreground py-1.5">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between text-xs">
            <span className="hidden sm:inline">भारत सरकार | Government of India</span>
            <span className="sm:hidden">भारत सरकार</span>
            <div className="flex items-center gap-4">
              <a href="tel:1800-11-2011" className="flex items-center gap-1 hover:underline">
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">Toll Free: 1800-11-2011</span>
                <span className="sm:hidden">1800-11-2011</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-card border-b-4 border-primary shadow-lg">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <img src={indiaPostLogo} alt="India Post Logo" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-primary tracking-tight">INDIA POST</span>
                <span className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-widest uppercase">डाक विभाग | Department of Posts</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200">
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
