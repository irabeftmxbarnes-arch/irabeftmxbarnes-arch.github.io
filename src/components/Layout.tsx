import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/categories", label: "Categories" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent" />
              <span className="text-xl font-bold">RetailHub</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-64"
                />
                <Button size="icon" variant="ghost">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
              
              <Button size="icon" variant="ghost">
                <User className="h-5 w-5" />
              </Button>
              
              <Link to="/cart">
                <Button size="icon" variant="ghost" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>

              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button size="icon" variant="ghost">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          isActive(link.path) ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted online shopping destination for quality products at great prices.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
                <li><Link to="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
                <li><Link to="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/shop" className="hover:text-primary transition-colors">Shipping Info</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <p className="text-sm text-muted-foreground mb-2">Follow us on social media</p>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline" className="rounded-full">
                  <span className="sr-only">Facebook</span>
                  f
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <span className="sr-only">Twitter</span>
                  𝕏
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <span className="sr-only">Instagram</span>
                  IG
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2025 RetailHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
