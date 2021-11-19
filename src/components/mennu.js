export default function BarMenu({ setSelected, selected }) {
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
    <nav className="nav-menu">
      <ul className="ul-menu">
        <li className="li-menu">
          <button
            className="button-style"
            onClick={() => setSelected(!selected)}>
            Horde definition
          </button>
        </li>
        <li className="li-menu">
          <button
            className="button-style"
            onClick={() =>
              OpenInNewTabSolsea(
                "https://solsea.io/collection/61881f4917f90ba22d595aac"
              )
            }>
            Buy Pixel Zombie
          </button>
        </li>
        <li className="li-menu">
          <button
            className="button-style"
            onClick={() =>
              OpenInNewTabTwitter("https://twitter.com/Pixel_Zombies_")
            }>
            Twitter
          </button>
        </li>
        <li className="li-menu">
          <button
            className="button-style"
            onClick={() => OpenInNewTabDiscord("http://discord.gg/WRjFHqmpEP")}>
            Discord
          </button>
        </li>
      </ul>
    </nav>
  );
}
