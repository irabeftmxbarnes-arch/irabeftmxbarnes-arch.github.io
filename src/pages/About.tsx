import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "We prioritize our customers' satisfaction above everything else.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Quality Products",
      description: "Every product is carefully selected to meet our high standards.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Sustainability",
      description: "We're committed to environmentally responsible practices.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
    },
  ];

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", emoji: "👩‍💼" },
    { name: "Michael Chen", role: "Head of Operations", emoji: "👨‍💼" },
    { name: "Emily Rodriguez", role: "Customer Success", emoji: "👩‍💻" },
    { name: "David Kim", role: "Product Manager", emoji: "👨‍💻" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About RetailHub</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Your trusted partner in online shopping since 2020
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At RetailHub, we believe shopping should be simple, enjoyable, and accessible to everyone. 
            Our mission is to provide high-quality products at competitive prices while delivering 
            exceptional customer service. We carefully curate our selection to ensure every item meets 
            our strict standards for quality and value.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Products</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.8</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Be part of thousands of satisfied customers worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
