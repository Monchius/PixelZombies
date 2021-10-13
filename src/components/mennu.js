export default function BarMenu({ setSelected, selected }) {
  function OpenInNewTabTwitter(url) {
    var win = window.open("https://twitter.com/Pixel_Zombies_", "_blank");
    win.focus();
  }
  return (
    <nav className="nav-menu">
      <ul className="ul-menu">
        <li className="li-menu">
          <a className="button-style" onClick={() => setSelected(!selected)}>
            Horde definition
          </a>
        </li>
        <li className="li-menu">
          <a className="button-style" href="#">
            Buy Pixel Zombie
          </a>
        </li>
        <li className="li-menu">
          <a
            className="button-style"
            onClick={() =>
              OpenInNewTabTwitter("https://twitter.com/Pixel_Zombies_")
            }>
            Twitter
          </a>
        </li>
      </ul>
    </nav>
  );
}
