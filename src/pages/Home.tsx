import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Truck, Shield } from "lucide-react";
import headphonesImg from "@/assets/products/headphones.jpg";
import smartwatchImg from "@/assets/products/smartwatch.jpg";
import backpackImg from "@/assets/products/backpack.jpg";
import coffeeMakerImg from "@/assets/products/coffee-maker.jpg";

const Home = () => {
  const categories = [
    { name: "Electronics", image: "📱", link: "/categories" },
    { name: "Fashion", image: "👔", link: "/categories" },
    { name: "Home & Garden", image: "🏡", link: "/categories" },
    { name: "Sports", image: "⚽", link: "/categories" },
  ];

  const featuredProducts = [
    { id: 1, name: "Wireless Headphones", price: 79.99, image: headphonesImg },
    { id: 2, name: "Smart Watch", price: 199.99, image: smartwatchImg },
    { id: 3, name: "Laptop Backpack", price: 49.99, image: backpackImg },
    { id: 4, name: "Coffee Maker", price: 89.99, image: coffeeMakerImg },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Shop Smart, Live Better
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Discover amazing products at unbeatable prices. Quality you can trust, delivered to your door.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Link to="/shop">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">100% protected</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{category.image}</div>
                    <h3 className="font-semibold">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/shop">
              <Button variant="ghost">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-secondary/50 flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <p className="text-2xl font-bold text-primary">${product.price}</p>
                      <Button className="w-full mt-4">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of happy customers today</p>
          <Link to="/shop">
            <Button size="lg" variant="secondary" className="font-semibold">
              Explore Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
