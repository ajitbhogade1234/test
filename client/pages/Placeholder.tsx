import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Home, MessageSquare } from "lucide-react";

interface PlaceholderProps {
  title: string;
  icon: string;
  description: string;
}

export default function Placeholder({ title, icon, description }: PlaceholderProps) {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/5 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl md:text-7xl mb-6">{icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            {description}
          </p>

          <div className="bg-card rounded-lg p-8 shadow-lg mb-8 border-2 border-accent/20">
            <p className="text-foreground font-semibold mb-2">
              Ready to explore this section?
            </p>
            <p className="text-muted-foreground mb-6">
              Continue chatting with our AI assistant to fill in the details for this page
            </p>
            <a
              href="#chat"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Chat with AI
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Home size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
