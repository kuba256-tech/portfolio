import headerLogo from '../../assets/akLogo.png';
import myPic from '../../assets/me.svg';

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
        <h5>My Goals</h5>
        <p>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem
          sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus,
          lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit
          amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut
          ante justo, consequat vitae elementum tempor, accumsan nec eros.{' '}
        </p>
      </div>
    </div>
  );
};

export default MainPage;
