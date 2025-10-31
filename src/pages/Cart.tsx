import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

const Cart = () => {
  // Mock cart data
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1, image: "🎧" },
    { id: 2, name: "Smart Watch", price: 199.99, quantity: 1, image: "⌚" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Add some products to get started
              </p>
              <Link to="/shop">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 bg-secondary/50 rounded-lg flex items-center justify-center text-4xl">
                        {item.image}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-semibold hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                        
                        <p className="text-2xl font-bold text-primary mb-4">
                          ${item.price}
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between mb-6">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <Button className="w-full mb-3" size="lg">
                    Proceed to Checkout
                  </Button>
                  
                  <Link to="/shop">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>

                  <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      🎉 Free shipping on all orders over $50
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
