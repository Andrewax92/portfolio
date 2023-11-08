import "./skills.css"
import ProgressBar from "./ProgressBar"
export const Skills = () => {
  const skillsData = [
    { bgcolor: "#00c0ff", completed: 90 , barName: 'React'},
    { bgcolor: "#00c0ff", completed: 89,barName: 'JavaScript'},
    { bgcolor: "#00c0ff", completed: 78, barName: 'Node.js'},
    { bgcolor: "#00c0ff", completed: 68 , barName: 'MongoDB'},
    { bgcolor: "#00c0ff", completed: 60 ,barName: 'Firebase'},
    { bgcolor: "#00c0ff", completed: 70, barName: 'CSS'},
  ];


  
  return (
    <section id="skills">
      <h3 id="skills-header">Skills</h3>
      <h2 id="skills-header-2">I Work Hard to Improve My Skills Regularly</h2>
      <div className= "skills__container">
        <div className="skills__container-languages">
          {skillsData.map((item,index) => 
            <ProgressBar key={index} bgcolor={item.bgcolor} completed={item.completed} barName={item.barName} />
            )}
        </div>
      </div>
    </section>
  )
}