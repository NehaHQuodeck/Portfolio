import "./portfolio.scss";

export default function portfolio() {

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <div className="parent1">
        <div className="child">
          <h2>Coffee Shop Website</h2>
          <p>Created a website for a coffee shop which includes different items present in it's Menu along with that it also has option of selecting the Shop section, Nearby cafe section and an Explore section. The technologies used are HTML and CSS.</p>
          <a href="https://github.com/NehaHQuodeck/CoffeeCafe">
            <img src="github.png" alt="GitHub"></img>
          </a>
        </div>
      </div>
      <div className="parent2">
        <div className="child">
          <h2>Skill School Website</h2>
          <p>Created a website for virtual classes which include the types of skills to be taught online and a breif discription of each skills and classes to be taken. Site which motives you to upgrade yourself. The technologies used are HTML, CSS and Bootstrap.</p>
          <a href="https://github.com/NehaHQuodeck/SkillSchool">
            <img src="github.png" alt="Github"></img>
          </a>
        </div>
      </div>
    </div>

  );
}





