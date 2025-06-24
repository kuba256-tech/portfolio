import { footerLinks } from '../../GlobalConstants';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        {footerLinks.map((item, index) => (
          <li key={index}>
            <a href="#">
              <img src={item.icon} alt={item.title} />
            </a>
          </li>
        ))}
      </ul>

      <p>@2025 Abd Kuba All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
