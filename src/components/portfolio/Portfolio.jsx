import "./portfolio.css";
import IMG1 from "../../assets/chat2.png";
import IMG2 from "../../assets/moneyApp.jpg";
import IMG3 from "../../assets/game.png";
import IMG4 from "../../assets/jobify.png";
import IMG5 from "../../assets/chat.png";
import IMG6 from "../../assets/images/socialmedia.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4 className="portfolio-h5">My recent work</h4>
      <h2 className="portfolio-h2">Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="" />
          </div>
          <h4>Social_Media_API</h4>
          <div className="portfolio__item-enviroment">
            <span>Java</span>
            <span>JavaSpring</span>
            <span>PostgreSQL</span>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-8-2023-assessment-1-team-3"
              className="btn"
            >
              Github
            </a>
            <a
              style={{ pointerEvents: "none" }}
              href="https://jobo-mania.onrender.com/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="" />
          </div>
          <h4>Project management app</h4>
          <div className="portfolio__item-enviroment">
            <span>React</span>
            <span>Firebase</span>
            <span>VsCode</span>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Andrewax92/chat-app.git"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://chatapp-e3c47.firebaseapp.com/signup"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="" />
          </div>
          <h4>Job Hunt Tracker</h4>
          <div className="portfolio__item-enviroment">
            <span>React</span>
            <span>MongoDB</span>
            <span>VsCode</span>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Andrewax92/mern-jobify.git"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://jobo-mania.onrender.com/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="" />
          </div>
          <h4>Card_Game</h4>
          <div className="portfolio__item-enviroment">
            <span>React</span>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Andrewax92/animated-card-shuffle-game.git"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://magic-memory-3m1a94uai-andrewax92.vercel.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="" />
          </div>
          <h4>Money App</h4>
          <div className="portfolio__item-enviroment">
            <span>React</span>
            <span>Firebase</span>
            <span>VsCode</span>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Andrewax92/money_app.git"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://money-tracker-1ed44.firebaseapp.com/login"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="" />
          </div>
          <h4>Typing game</h4>
          <div className="portfolio__item-enviroment">
            <span>JavaScript</span>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Andrewax92/typing-game.git"
              className="btn"
            >
              Github
            </a>
            <a
              style={{ pointerEvents: "none" }}
              href="https://github.com"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="" />
          </div>
          <h4>Music Player</h4>
          <div className="portfolio__item-enviroment">
            <span>JavaScript</span>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Andrewax92/audio-player.git"
              className="btn"
            >
              Github
            </a>
            <a
              style={{ pointerEvents: "none" }}
              href="https://github.com"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};
