export default function ButtonJustMobile({ setSelected, selected }) {
  function OpenInNewTabSolsea(url) {
    var win = window.open(
      "https://solsea.io/collection/61881f4917f90ba22d595aac",
      "_blank"
    );
    win.focus();
  }
  function OpenInNewTabTwitter(url) {
    var win = window.open("https://twitter.com/Pixel_Zombies_", "_blank");
    win.focus();
  }
  function OpenInNewTabDiscord(url) {
    var win = window.open("http://discord.gg/WRjFHqmpEP", "_blank");
    win.focus();
  }
  return (
    <div className="button-mobile-container">
      <button
        className="button-style-mobile"
        onClick={() => setSelected(!selected)}>
        Definition
      </button>
      <button
        className="button-style-mobile"
        onClick={() =>
          OpenInNewTabSolsea(
            "https://solsea.io/collection/61881f4917f90ba22d595aac"
          )
        }>
        Buy Pixel Zombie
      </button>
      <button
        className="button-style-mobile"
        onClick={() =>
          OpenInNewTabTwitter("https://twitter.com/Pixel_Zombies_")
        }>
        Twitter
      </button>
      <button
        className="button-style-mobile"
        onClick={() => OpenInNewTabDiscord("http://discord.gg/WRjFHqmpEP")}>
        Discord
      </button>
    </div>
  );
}
