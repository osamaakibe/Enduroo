// src/App.jsx
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// This App component is now our main Layout!
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* The <Outlet> is where our pages will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;