import styled from "./Main.module.css";
export default function Main({ demo = false }) {
  return (
    <main className={`${styled.main} ${demo && styled.demo}`}>
      <p>Main section</p>
    </main>
  );
}
