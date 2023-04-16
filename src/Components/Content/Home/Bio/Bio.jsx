import "./Bio.css";
import avatar from "../images/avatar.jpg";

function Bio() {
  return (
      <div className="home__bio bio">
        <img src={avatar} className="bio__avatar"></img>
        <div className="bio__description description">
          <div className="description__name">Basil Korsikovich</div>
          <div className="description__info">
            <div className="description__profesion">
              <span className="description__categories">Proffesion: </span>
              Watcher, free-time singer(definetly at nigth)
            </div>
            <div className="description__age">
              <span className="description__categories">Age: </span>
              3years, young and wild
            </div>
            <div className="description__about">
              <span className="description__categories">About me: </span>I am
              huge black dog, work from home. Earn a lot of food. Love other
              dogs but not other people:)
            </div>
          </div>
        </div>
      </div>
  );
}

export default Bio;
