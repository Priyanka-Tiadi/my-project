import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Passions from './components/Passion';
import Academic from './components/Academic';
import Work from './components/Work';
import Certifications from './components/Certification';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-20">
        <About />
        <Skills />
        <Hobbies />
        <Passions />
        <Academic />
        <Work />
        <Certifications />
      </main>
    </div>
  );
}

export default App;
