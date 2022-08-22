import "./work.scss";

export default function Work() {

  return (
    <div className="work" id="work">
      <h2>Skills</h2>
      
      <div className="center">
        <h3>Back-End</h3>
      </div>
      <div className="parent">
        <div className="child">
          <img src="c-.png" alt="C++">
          </img>
          <img src="rating.png" alt="star"></img>
        </div>
        <div className="child">
          <img src="java-script.png" alt="Javascript"></img>
          <img src="rating.png" alt="star"></img>
        </div>
        <div className="child">
          <img src="database.png" alt="SQL"></img>
          <img src="Rating2.png" alt="star"></img>
        </div>
      </div>

      <div className="center">
        <h3>Front-End</h3>
      </div>

      <div className="parent">
        <div className="child">
          <img src="html-5.png" alt="HTML"></img>
          <img src="Rating3.png" alt="rating"></img>
        </div>
        <div className="child">
          <img src="css-3.png" alt="CSS"></img>
          <img src="rating.png" alt="rating"></img>
        </div>
        <div className="child">
          <img src="bootstrap.png" alt="Javascript"></img>
          <img src="Rating3.png" alt="rating"></img>
        </div>
      </div>
    </div>
  );
}



