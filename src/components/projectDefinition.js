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
        different historical characters. As they are all part of Horde, all of
        them are super cute. A collection of different zombified historical
        characters. They come with different background options, objects and
        pillars where they are positioned. The pixel zombies have different
        roles and exclusive objects for each zombie. Having a pixel zombie with
        its own personalised accessories will make it an NFT more exclusive, but
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
      <h2 className="Countdown">X, November, 2021</h2>
    </div>
  );
}
