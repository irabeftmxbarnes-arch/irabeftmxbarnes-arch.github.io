import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import headphonesImg from "@/assets/products/headphones.jpg";
import smartwatchImg from "@/assets/products/smartwatch.jpg";
import backpackImg from "@/assets/products/backpack.jpg";
import coffeeMakerImg from "@/assets/products/coffee-maker.jpg";
import runningShoesImg from "@/assets/products/running-shoes.jpg";
import yogaMatImg from "@/assets/products/yoga-mat.jpg";
import deskLampImg from "@/assets/products/desk-lamp.jpg";
import bluetoothSpeakerImg from "@/assets/products/bluetooth-speaker.jpg";
import waterBottleImg from "@/assets/products/water-bottle.jpg";
import sunglassesImg from "@/assets/products/sunglasses.jpg";
import plantPotImg from "@/assets/products/plant-pot.jpg";
import phoneCaseImg from "@/assets/products/phone-case.jpg";

const Shop = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 79.99, category: "Electronics", image: headphonesImg },
    { id: 2, name: "Smart Watch", price: 199.99, category: "Electronics", image: smartwatchImg },
    { id: 3, name: "Laptop Backpack", price: 49.99, category: "Fashion", image: backpackImg },
    { id: 4, name: "Coffee Maker", price: 89.99, category: "Home", image: coffeeMakerImg },
    { id: 5, name: "Running Shoes", price: 129.99, category: "Sports", image: runningShoesImg },
    { id: 6, name: "Yoga Mat", price: 34.99, category: "Sports", image: yogaMatImg },
    { id: 7, name: "Desk Lamp", price: 45.99, category: "Home", image: deskLampImg },
    { id: 8, name: "Bluetooth Speaker", price: 59.99, category: "Electronics", image: bluetoothSpeakerImg },
    { id: 9, name: "Water Bottle", price: 24.99, category: "Sports", image: waterBottleImg },
    { id: 10, name: "Sunglasses", price: 89.99, category: "Fashion", image: sunglassesImg },
    { id: 11, name: "Plant Pot", price: 19.99, category: "Home", image: plantPotImg },
    { id: 12, name: "Phone Case", price: 29.99, category: "Electronics", image: phoneCaseImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shop All Products</h1>
          <p className="text-muted-foreground">Browse our complete collection of quality products</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Filters</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Prices" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="0-50">$0 - $50</SelectItem>
                        <SelectItem value="50-100">$50 - $100</SelectItem>
                        <SelectItem value="100-200">$100 - $200</SelectItem>
                        <SelectItem value="200+">$200+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Sort By</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Featured" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="name">Name: A to Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="outline" className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">
              Showing {products.length} products
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-secondary/50 flex items-center justify-center overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-muted-foreground mb-2">{product.category}</div>
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
                        <Button className="w-full">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
