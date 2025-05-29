import { Outlet } from "react-router";
import styled from "./Main.module.css";
export default function Main({ demo = false }) {
  return (
    <main className={`${styled.main} ${demo && styled.demo}`}>
      <Outlet />
    </main>
  );
}
