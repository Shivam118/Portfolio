import styles from "../assets/css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <address>© 2022 - Shivam Sharma</address>
      <div className={styles.Logos}>
        <a href="https://www.instagram.com/_sharma_shi.v/">
          <img
            src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"
            alt="SocialMediaIcons"
          />
        </a>
        <a href="https://www.facebook.com/shushant.sharma.7/">
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
        <a href="https://www.twitter.com/shushant121212">
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
