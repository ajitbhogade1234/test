import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🍲</div>
              <h3 className="font-bold text-lg">Om Gurudev</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Authentic Indian cuisine & traditional beverages at its finest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/menu" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Food Menu
                </Link>
              </li>
              <li>
                <Link to="/hot-drinks" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Hot Drinks
                </Link>
              </li>
              <li>
                <Link to="/cold-drinks" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Cold Drinks
                </Link>
              </li>
              <li>
                <Link to="/sweets" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sweets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={16} /> 123 Luxury Avenue
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={16} /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={16} /> info@luxuryhotel.com
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <button className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook size={20} />
              </button>
              <button className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram size={20} />
              </button>
              <button className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Luxury Hotel. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="hover:text-accent transition-colors">Privacy Policy</button>
            <button className="hover:text-accent transition-colors">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
