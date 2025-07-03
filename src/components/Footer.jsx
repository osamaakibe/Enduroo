// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {2025} Enduroo. All rights reserved.</p>
      </div>
    </footer>
  );
}