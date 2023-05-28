import Button from "../Button";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Button
        variant="rounded"
        borderColor="black"
        textColor="black"
        bgColor="yellow"
      >
        Submit Your Votes
      </Button>
    </footer>
  );
};

export default Footer;
