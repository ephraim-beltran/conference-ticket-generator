import styled from "./Header.module.css";

const projectTitle = import.meta.env.VITE_PROJECT_TITLE;

export default function Header() {
  const title = projectTitle || "Frontend Mentor Project";
  return (
    <header className={styled.header}>
      <h1>{title}</h1>
    </header>
  );
}
