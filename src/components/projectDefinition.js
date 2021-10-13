export default function DefinitionFunction({ setSelected }) {
  const backHome = () => {
    setSelected(null);
  };
  return (
    <div className="text-container-definition">
      <a className="button-back" onClick={backHome}>
        Back
      </a>
      <h2 className="h2-title-dafinition">Come and join the Horde!</h2>
      <p className="paragraph-style">
        Welcome to Crypto Zombie. XXXXX awesome living dead, coexisting on the
        Solana blockchain. discord Launch XXth Sep.
      </p>
      <h2 className="h2-title-dafinition">Horde details</h2>
      <p className="paragraph-style">
        Every single Zombie has gone through a tough transformation process and
        was selected between different historical characters, and they have
        different collectible parts, like background, custom objects, pillars
        where they are kept, etc... As they are all part of Horde, all of them
        are super cute, but some of them have a higher rank in the Horde of
        undead.
      </p>
      <h2 className="h2-title-dafinition">You can have!</h2>
      <p className="paragraph-style">
        High quality images. You will be able to download your Crypto Zombie in
        high resolution, for pronting purposes. So you can put it on your
        nightstand!
      </p>
      <h2 className="h2-title-dafinition">The Team</h2>
      <p className="paragraph-style">
        We are a small team that we really want to infect the world with our
        zombies and, in that way, make the world much safer for the undead.
        <li>
          <h3>The Brain Collector</h3>
          <p>He has all the answers, and that's it!</p>
        </li>
        <li>
          <h3>Zombie Ra-art</h3>
          <p>The creative guy, who is totally unaware of the real world.</p>
        </li>
      </p>
    </div>
  );
}
