import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};
export default Layout;
