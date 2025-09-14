import styles from "../assets/css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <address>© {new Date().getFullYear()} - Shivam Sharma</address>
      <div className={styles.Logos}>
        <a href="https://www.instagram.com/shiv.am_shar.ma_/">
          <img
            src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"
            alt="SocialMediaIcons"
          />
        </a>
        <a href="https://www.facebook.com/shivam118.5/">
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="SocialMediaIcons"
          />
        </a>
        <a href="https://www.github.com/Shivam118">
          <img
            src="https://img.icons8.com/fluency-systems-regular/48/000000/github.png"
            alt="SocialMediaIcons"
          />
        </a>
        <a href="https://www.linkedin.com/in/shivam-s-652877ba/">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="SocialMediaIcons"
          />
        </a>
        <a href="https://www.twitter.com/Shivu_118">
          <img
            src="https://img.icons8.com/color/48/000000/twitter--v1.png"
            alt="SocialMediaIcons"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
