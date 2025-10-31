import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      description: "Latest gadgets and technology",
      image: "📱",
      productCount: 156,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Fashion",
      description: "Clothing, shoes, and accessories",
      image: "👔",
      productCount: 243,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Home & Garden",
      description: "Everything for your home",
      image: "🏡",
      productCount: 189,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Sports & Outdoors",
      description: "Fitness and outdoor gear",
      image: "⚽",
      productCount: 134,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Beauty & Health",
      description: "Personal care products",
      image: "💄",
      productCount: 98,
      color: "from-purple-500 to-violet-500",
    },
    {
      name: "Books & Media",
      description: "Books, movies, and music",
      image: "📚",
      productCount: 276,
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Toys & Games",
      description: "Fun for all ages",
      image: "🎮",
      productCount: 112,
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Food & Beverages",
      description: "Gourmet and everyday items",
      image: "🍕",
      productCount: 167,
      color: "from-yellow-500 to-orange-500",
    },
  ];

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
            <Link key={index} to="/shop">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      {category.image}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.productCount} products
                      </span>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Shop <ArrowRight className="ml-1 h-4 w-4" />
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
