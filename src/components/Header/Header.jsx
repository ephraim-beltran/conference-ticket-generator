import styled from "./Header.module.css";
import logo from "@/assets/logo-full.svg";

export default function Header() {
  return (
    <header className={styled.header}>
      <h1>
        <img src={logo} alt="Conding Conf" />
      </h1>
    </header>
  );
}
