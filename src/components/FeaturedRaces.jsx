// src/components/FeaturedRaces.jsx
import { useState, useEffect } from 'react'; // Step 1: Import the Hooks
import RaceCard from './RaceCard';

export default function FeaturedRaces() {
  // Step 2: Create a "state" variable to hold our race data.
  // It starts as an empty array [].
  const [races, setRaces] = useState([]);

  // Step 3: Use the useEffect Hook to fetch data when the component first renders.
  useEffect(() => {
    // We define an async function inside so we can use await
    const fetchRaces = async () => {
      try {
        // Fetch the data from our public/mocks file
        const response = await fetch('/mocks/races.json'); 
        const data = await response.json();

        // Update our component's state with the fetched data
        setRaces(data); 
      } catch (error) {
        console.error("Failed to fetch races:", error);
      }
    };

    fetchRaces(); // Call the function
  }, []); // The empty array [] means this effect runs only ONCE.

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Upcoming Races</h2>
          <a href="/races" className="text-blue-600 font-semibold hover:underline">
            View All Races &rarr;
          </a>
        </div>

        {/* Step 4: Map over the "races" state variable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {races.map(race => (
            <RaceCard key={race.id} race={race} />
          ))}
        </div>
      </div>
    </section>
  );
}