import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/Personal.png";
import { HeaderSocials } from "./HeaderSocials";
import { useState } from "react";
import { useEffect } from "react";

export const Header = () => {
  const [displayedText, setDisplayText] = useState("");
  const fullText = "Axinoi";
  const githubApiUrl = "https://api.github.com/users/Andrewax92";
  const [githubAvatarUrl, setGithubAvatarUrl] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    async function fetchData() {
      try {
        const response = await fetch(githubApiUrl);
        if (response.ok) {
          const data = await response.json();
          setGithubAvatarUrl(data.avatar_url);
          setBio(data.bio);
        } else {
          console.log("Failed to fetch data from Github API");
        }
      } catch (error) {
        console.log("Error fetching data from Github API", error);
      }
    }

    fetchData();
  }, []);
  return (
    <header>
      <div className="container">
        <div className="header_list-names">
          <h1>
            Andrei
            <span className="header_list-names-extra">{displayedText}</span>
          </h1>
          <h3>{bio}</h3>
          <div className="header_list-cta">
            <CTA />
          </div>
        </div>
        <div className="header_list-image">
          <img src={githubAvatarUrl} alt="me" />
        </div>
      </div>
      <div className="header_socials-container">
        <HeaderSocials />
      </div>
      <a className="header-socials-scroll" href="#about">
        ScrollDown
      </a>
    </header>
  );
};
