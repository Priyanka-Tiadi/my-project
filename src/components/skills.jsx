const Skills=()=>{
  const skills= ["React Js", "Node Js", "MongoDb","CSS"]
  return(
    <section id="skills">
      <h2 className="text-3xl font-bold mb-4 text-teal-400">skills</h2>
      <ul className="grid grid-cols-2 gap-4 text-lg">
        {skills.map((skill)=>(
        <li key={skill} className="bg-gray-800 px-4 py-2 roundend">{skill}</li>
        ))}
        </ul>
    </section>
  )
}
export default Skills;