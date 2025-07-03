// src/pages/HomePage.jsx
import HeroSection from '../components/HeroSection'; // Step 1: Import the component
import CategoryBrowser from '../components/CategoryBrowser'; // Import our new component
import FeaturedRaces from '../components/FeaturedRaces'; // We just added this line

export default function HomePage() {
  return (
    <div>
      <HeroSection /> {/* Step 2: Use the component */}
      <CategoryBrowser /> 
      <FeaturedRaces /> {/* Step 3: Use the FeaturedRaces component */}
    </div>
  );
}