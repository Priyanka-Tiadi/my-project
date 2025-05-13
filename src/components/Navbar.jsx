import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Hobbies", id: "hobbies" },
    { name: "Passions", id: "passions" },
    { name: "Academic", id: "academic" },
    { name: "Work", id: "work" },
    { name: "Certifications", id: "certifications" },
  ];

  return (
    <header className="w-full bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-sm sm:text-base hover:text-teal-400 transition"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
