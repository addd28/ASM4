import { ShoppingBag, User } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "compare", label: "Compare Products" },
    { id: "orders", label: "My Orders" },
    { id: "profile", label: "Profile" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group"
          >
            <ShoppingBag className="w-6 h-6 transition-transform group-hover:scale-110" />
            <span className="tracking-tight">PRESS</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => onNavigate("profile")}
            className="p-2 hover:bg-accent rounded-full transition-colors"
          >
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex gap-4 pb-4 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                currentPage === item.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground hover:bg-accent/80"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
