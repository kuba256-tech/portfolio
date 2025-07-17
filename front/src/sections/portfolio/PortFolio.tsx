import SectionButton from '../../components/UI/SectionButton';
import project1 from '../../assets/projectPic/project_1.svg';
import project2 from '../../assets/projectPic/project_2.png';

const PortFolio = () => {
  return (
    <div className="portfolio" id="porfolio">
      <div className="portfolio-top">
        <SectionButton value="Portfolio" />
      </div>
      <div className="portfolio-mid">
        <div className="portfolio-selections">
          <button className="">all</button>
          <button className="">front-end</button>
          <button className="">full-stack</button>
        </div>
        <div className="portfolios container">
          <div className="project">
            <a href="https://pizza-order-front.vercel.app" target="_blank">
              <img src={project1} alt="pics" />
            </a>
            <p>Order Pizza</p>
            <span>Mobile version</span>
          </div>
          <div className="project">
            <a href="http://star-bucks-wheat.vercel.app" target="_blank">
              <img src={project2} alt="pics" />
            </a>
            <p>StarBucks</p>
            <span>Mobile version</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
