import SectionButton from '../../components/UI/SectionButton';
import project1 from "../../assets/projectPic/project_1.svg"

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
         <div className='project'>
           <a href="https://pizza-order-front.vercel.app" target='_blank'>
            <img src={project1} alt="pics" />
          </a>
          <p>order Pizza</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
