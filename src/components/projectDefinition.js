import Roadmap from "../images/Roadmap.png";
import RoadmapM from "../images/RoadmapM.png";

export default function DefinitionFunction({ setSelected }) {
  const backHome = () => {
    setSelected(null);
  };
  return (
    <div className="text-container-definition">
      <button className="button-back" onClick={backHome}>
        Back
      </button>
      <h2 className="h2-title-dafinition">Come and join the Horde!</h2>
      <p className="paragraph-style">
        Welcome to Pixel Zombies. 300 awesome living dead, coexisting right now
        on the Solana blockchain.
      </p>
      <h2 className="h2-title-dafinition">Horde details</h2>
      <p className="paragraph-style">
        Pixel Zombies is the first generative art series to launch on Solana
        designed with different historical characters. Every single Zombie has
        gone through a tough transformation process and was selected between
        different historical characters, and they have different collectible
        parts, like background, custom objects, pillars where they are kept,
        etc... As they are all part of Horde, all of them are super cute, but
        some of them have a higher rank in the Horde of undead.
      </p>
      <h2 className="h2-title-dafinition">Roadmap</h2>
      <div className="paragraph-style">
        <img className="roadmap" src={Roadmap} alt="" />
        <img className="roadmapM" src={RoadmapM} alt="" />
      </div>
      <h2 className="h2-title-dafinition">The Team</h2>
      <p className="paragraph-style">
        We are a small team that we really want to infect the world with our
        zombies and, in that way, make the world much safer for the undead.
        <li>
          <h3>- The Brain Collector</h3>
          <p>He has all the answers, and that's it!</p>
        </li>
        <li>
          <h3>- Zombie Ra-art</h3>
          <p>The creative guy, who is totally unaware of the real world.</p>
        </li>
      </p>
      <h2 className="Countdown">When Mint?</h2>
      <h2 className="Countdown">01, November, 2021</h2>
    </div>
  );
}
