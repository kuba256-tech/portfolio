import headerLogo from '../../assets/akLogo.png';
import myPic from '../../assets/me.svg';
import backVideo from '../../assets/videoBack1.mp4';

const MainPage = () => {
  return (
    <div className="mainPage">
      <header className="container">
        <img src={headerLogo} alt="logo" />
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#">about me</a>
            </li>
            <li>
              <a href="#">skills</a>
            </li>
            <li>
              <a href="#">portfolio</a>
            </li>
            <li>
              <a href="#">contact me</a>
            </li>
          </ul>
        </nav>
        <div className="header-burger">
          <div className="burger-el"></div>
          <div className="burger-el"></div>
          <div className="burger-el"></div>
        </div>
      </header>
      <div className="mainPageContent container">
        <div className="mainPageContent-left">
          <p>Hi I am</p>
          <h2>Abd Kuba</h2>
          <span>Front-end Developer</span>
          <div></div>
        </div>
        <div className="mainPageContent-right">
          <img src={myPic} alt="myPic" />
        </div>
      </div>
      <div className="mainPageFooter">
        <video className="mainPageFooterVideo" autoPlay muted loop src={backVideo}></video>
        <h5>My Goals</h5>
        <p>
          My goal as a front-end developer is to achieve technical and creative mastery in building responsive,
          accessible, and user-centered web interfaces. I aim to continuously grow my expertise in modern web
          technologies such as HTML, CSS, JavaScript, and frameworks like React or Vue, while staying up to date with
          evolving industry standards and design trends. I am passionate about translating complex problems into clean,
          efficient, and scalable solutions that enhance usability and performance across all devices. Beyond writing
          code, I strive to collaborate effectively with designers, back-end developers, and product teams to deliver
          seamless digital experiences. In the long term, I aspire to lead projects, contribute to design systems,
          mentor junior developers, and help shape the front-end strategy of impactful and innovative products.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
