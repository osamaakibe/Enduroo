// src/components/RaceCard.jsx

// We'll pass the race data in as a single 'race' object prop for cleanliness.
export default function RaceCard({ race }) {
  // If no race data is provided, don't render anything. This is a good safeguard.
  if (!race) {
    return null;
  }

  return (
    // The main card container. `group` is used for hover effects on child elements.
    <div className="flex flex-col group cursor-pointer">
      
      {/* Image Section */}
      <div className="relative">
        <img 
          className="w-full h-64 object-cover rounded-xl" 
          src={race.imageUrl} 
          alt={race.title} 
        />
        {/* We could add an overlay heart/wishlist icon here later */}
      </div>

      {/* Content Section */}
      <div className="mt-3">
        {/* Top line: Location and maybe a rating/status */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-700 text-sm truncate">{race.location}</p>
          {/* Example: A small tag for the race type */}
          <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
            {race.type}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mt-1 truncate group-hover:underline">
          {race.title}
        </h3>
        
        {/* Date */}
        <p className="text-sm text-gray-500 mt-1">{race.date}</p>

        {/* Distances */}
        <div className="mt-2">
          <p className="text-md font-semibold text-gray-800">{race.distances}</p>
        </div>
      </div>

    </div>
  );
}