export default function BarMenu({ setSelected, selected }) {
  function OpenInNewTabTwitter(url) {
    var win = window.open("https://twitter.com/Pixel_Zombies_", "_blank");
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
          <button className="button-style">Buy Pixel Zombie</button>
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
      </ul>
    </nav>
  );
}
