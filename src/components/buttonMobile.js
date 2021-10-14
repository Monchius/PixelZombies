export default function ButtonJustMobile({ setSelected, selected }) {
  function OpenInNewTabTwitter(url) {
    var win = window.open("https://twitter.com/Pixel_Zombies_", "_blank");
    win.focus();
  }
  return (
    <div className="button-mobile-container">
      <button
        className="button-style-mobile"
        onClick={() => setSelected(!selected)}>
        Definition
      </button>
      <button className="button-style-mobile">Buy Pixel Zombie</button>
      <button
        className="button-style-mobile"
        onClick={() =>
          OpenInNewTabTwitter("https://twitter.com/Pixel_Zombies_")
        }>
        Twitter
      </button>
      <button
        className="button-style-mobile"
        onClick={() =>
          OpenInNewTabTwitter("https://twitter.com/Pixel_Zombies_")
        }>
        Discord
      </button>
    </div>
  );
}
