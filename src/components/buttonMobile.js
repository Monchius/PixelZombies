export default function ButtonJustMobile({ setSelected, selected }) {
  function OpenInNewTabTwitter(url) {
    var win = window.open("https://twitter.com/Pixel_Zombies_", "_blank");
    win.focus();
  }
  return (
    <div className="button-mobile-container">
      <a className="button-style-mobile" onClick={() => setSelected(!selected)}>
        Definition
      </a>
      <a className="button-style-mobile" href="">
        Buy Pixel Zombie
      </a>
      <a
        className="button-style-mobile"
        onClick={() =>
          OpenInNewTabTwitter("https://twitter.com/Pixel_Zombies_")
        }
        href="">
        Twitter
      </a>
    </div>
  );
}
