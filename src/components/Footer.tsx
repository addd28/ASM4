import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="mb-4">About Press</h3>
            <p className="text-muted-foreground">
              Crafting exceptional beverages for the modern lifestyle.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Shop</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Coffee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Tea
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Juice
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-muted-foreground">
          <p>© 2025 Press. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
