import React from 'react'

const App = () => {
  return ( 
    <div>
          <header>
      <h1>Wade's Portfolio</h1>
      <nav>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>

    <section id="about">
      <img
        className="profile"
        src="./images/me1.png"
        alt="Picture of Wade"
      />
      <h2>About Me</h2>
      <p>
        I'm a semi-retired 33yo living in the heart of Melbourne Australia. In
        my spare time I love learning to code, playing video games, spending
        time with my partner and enjoying coffee ☕️
      </p>
    </section>

    <section id="skills">
      <h2>Skills</h2>

      <div className="skill-item">
        <label htmlFor="html">HTML</label>
        <progress id="html" max="100" value="65"></progress>
      </div>

      <div className="skill-item">
        <label htmlFor="css">CSS</label>
        <progress id="css" max="100" value="55"></progress>
      </div>

      <div className="skill-item">
        <label htmlFor="javascript">JavaScript</label>
        <progress id="javascript" max="100" value="45"></progress>
      </div>

      <div className="skill-item">
        <label htmlFor="react">React</label>
        <progress id="react" max="100" value="45"></progress>
      </div>

    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <details>
          <summary>Web-based Pokedex API</summary>
          <p>
            This time around I wanted to create a Pokedex-like experience where
            you could see different Pokemon laid out on cards within the
            browser. Each card grabbed information from a publicly available API
          </p>
        </details>
      </div>
    </section>
    </div>
   );
}
 


export default App
