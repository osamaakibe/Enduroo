// src/components/CategoryBrowser.jsx

// CHANGE #1: We import the specific icons we need from the 'lucide-react' library we just installed.
import { Trophy, Mountain, Timer, Users, Calendar } from "lucide-react";
// CHANGE #2: We import the Link component from our router library.
import { Link } from "react-router-dom";

// The data for our categories lives here for now.
const categories = [
  {
    id: "marathons",
    name: "Marathons",
    icon: Trophy,
    href: "/races/marathon", // These links will work with our router later
    description: "Full distance races",
  },
  {
    id: "trail-running",
    name: "Trail Running",
    icon: Mountain,
    href: "/races/trail",
    description: "Off-road adventures",
  },
  {
    id: "10k-races",
    name: "10K Races",
    icon: Timer,
    href: "/races/10k",
    description: "Popular distance events",
  },
  {
    id: "running-clubs",
    name: "Running Clubs",
    icon: Users,
    href: "/clubs",
    description: "Join local communities",
  },
  {
    id: "events",
    name: "All Events",
    icon: Calendar,
    href: "/races",
    description: "View all upcoming races",
  },
];

// CHANGE #3: Renamed the function for clarity.
export default function CategoryBrowser() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Browse by Type</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Find the perfect running experience that matches your goals and interests
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              // CHANGE #4: Using our router's Link component with the 'to' prop.
              <Link
                key={category.id}
                to={category.href}
                className="group relative bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  {category.description}
                </p>
                
                {/* Hover indicator */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            );
          })}
        </div>
        
        {/* CHANGE #5: The "View All Categories" button has been removed for our MVP. */}

      </div>
    </section>
  );
}