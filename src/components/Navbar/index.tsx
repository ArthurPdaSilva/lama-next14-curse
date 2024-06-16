import Link from "next/link";
import Links from "./Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <Links />
    </nav>
  );
};

export default Navbar;
