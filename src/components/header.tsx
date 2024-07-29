import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="py-8 px-4 w-full flex justify-end">
      <a href="https://recursiva.com.ar/" target="_blank">
        <img alt="recursiva logo" src={logo} className="w-40 h-5" />
      </a>
    </header>
  );
}

export { Header };
