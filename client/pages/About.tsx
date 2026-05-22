import Layout from "../components/Layout";
import { Award, Users, Heart, Leaf } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every aspect of our service",
    },
    {
      icon: Users,
      title: "Hospitality",
      description: "Treating every guest with warmth and genuine care",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Passionate about creating memorable experiences",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainability",
    },
  ];

  const team = [
    { name: "Chef Marco Rossi", role: "Executive Chef", emoji: "👨‍🍳" },
    { name: "Sarah Williams", role: "Sommelier", emoji: "🍷" },
    { name: "James Mitchell", role: "Hotel Manager", emoji: "🏢" },
    { name: "Isabella Santos", role: "Pastry Chef", emoji: "👩‍🍳" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Om Gurudev</h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Serving authentic Indian cuisine with pride, tradition, and quality since our establishment.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Om Gurudev is dedicated to bringing authentic Indian cuisine to your table. We believe in preserving the traditional recipes and cooking methods that have been passed down through generations.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our menu features classic Indian breakfast items like Wada Pav, Misal Pav, and Pav Bhaji, combined with a variety of hot and cold beverages, and delectable traditional sweets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every dish is prepared with fresh ingredients and authentic recipes, ensuring you experience the true taste of Indian hospitality and culture.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg h-96 flex items-center justify-center">
              <div className="text-6xl">🍲</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Dedicated professionals ensuring your perfect experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-primary/50 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2">50k+</div>
              <p className="text-primary-foreground/80">Happy Guests</p>
            </div>
            <div className="bg-primary/50 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-primary-foreground/80">Menu Items</p>
            </div>
            <div className="bg-primary/50 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2">15</div>
              <p className="text-primary-foreground/80">Awards Won</p>
            </div>
            <div className="bg-primary/50 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-primary-foreground/80">Premium Service</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
