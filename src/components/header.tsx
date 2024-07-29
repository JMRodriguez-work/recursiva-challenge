import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="py-8 px-4 w-full">
      <a href="https://recursiva.com.ar/" target="_blank">
        <img alt="recursiva logo" src={logo} className="w-40 h-5 ml-auto" />
      </a>
    </header>
  );
}

export { Header };
