export default function Skills() {
  const skills = ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS", "MySQL"];

  return (
    <section id="skills" className="pt-20 pb-10 border-b border-gray-700">
      <h2 className="text-3xl font-bold text-teal-400 mb-4">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
        {skills.map((skill, i) => (
          <li key={i} className="bg-gray-700 p-2 rounded text-center hover:bg-teal-500 transition">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
