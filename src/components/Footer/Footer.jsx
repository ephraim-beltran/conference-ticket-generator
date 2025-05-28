import styled from "./Footer.module.css";

const repoLink =
  import.meta.env.VITE_REPO_LINK || "https://github.com/ephraim-beltran";
const challengeLink =
  import.meta.env.VITE_CHALLENGE_LINK ||
  "https://www.frontendmentor.io?ref=challenge";
export default function Footer() {
  return (
    <footer className={styled.footer}>
      <div className={styled.container} role="presentation">
        <div className={styled.disclaimer} aria-label="attribution">
          Challenge by <a href={challengeLink}>Frontend Mentor.</a> Coded by
          Ephraim Beltran.
        </div>
        <ul aria-label="Social Links" className={styled.links}>
          <li className={styled.footerLink}>
            <a href={repoLink} className={styled.github}>
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
