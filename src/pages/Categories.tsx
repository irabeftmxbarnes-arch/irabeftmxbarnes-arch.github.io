import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

const Categories = () => {
  const categoryMap: Record<string, { description: string; color: string }> = {
    "Electronics": {
      description: "Latest gadgets and technology",
      color: "from-blue-500 to-cyan-500",
    },
    "Fashion": {
      description: "Clothing, shoes, and accessories",
      color: "from-pink-500 to-rose-500",
    },
    "Home": {
      description: "Everything for your home",
      color: "from-green-500 to-emerald-500",
    },
    "Sports": {
      description: "Fitness and outdoor gear",
      color: "from-orange-500 to-amber-500",
    },
  };

  const categories = Object.entries(categoryMap).map(([name, { description, color }]) => {
    const categoryProducts = products.filter((p) => p.category === name);
    const featuredProduct = categoryProducts[0];
    
    return {
      name,
      description,
      image: featuredProduct?.image,
      productCount: categoryProducts.length,
      color,
    };
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop by Category</h1>
          <p className="text-lg opacity-90">
            Explore our wide range of products organized by category
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to="/shop" data-testid={`link-category-${category.name.toLowerCase()}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-br ${category.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    {category.image && (
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
                      />
                    )}
                    <div className="relative z-10 text-center">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/90 drop-shadow">
                        {category.productCount} products
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm" className="group-hover:text-primary ml-auto">
                        Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6">
            Browse all our products or use the search to find exactly what you need
          </p>
          <Link to="/shop">
            <Button size="lg">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
