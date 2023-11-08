import "./about.css";
import ME from "../../assets/me3D.png";
import { MdMapsHomeWork } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { AiOutlineFolderOpen } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about">
      <h5 className="about_h5">Get TO Know</h5>
      <h2 className="about_h2">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me 3D" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdMapsHomeWork className="about__card-icon" />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>
            <article className="about__card">
              <MdCastForEducation className="about__card-icon" />
              <h5>Education</h5>
              <small>Univercity Degree</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__card-icon" />
              <h5>Projects</h5>
              <small>7+Completed</small>
            </article>
          </div>
          <p>
            "I am a skilled Software Engineer with a Bachelor's degree in
            Mathematics and Physics. I am a graduate of the prestigious Cook
            Systems FastTrack program and have consistently showcased my
            proficiency in developing backend software solutions. Additionally,
            I have experience as a Front-End Software Developer, specializing in
            the PHP and Laravel ecosystems. I worked on a CRM project for a
            renowned real estate company. Beyond my academic achievements, I
            also bring practical experience as the founder and managing director
            of my own trucking company. In this role, I effectively managed all
            aspects of operations, including logistics and financial workflows,
            demonstrating my ability to oversee and optimize complex systems.
            With my exceptional educational journey, hands-on experience, and
            commitment to excellence, my diverse skill set adds substantial
            value to every project and team I join".
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
