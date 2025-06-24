import SectionButton from '../../components/UI/SectionButton';


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
        <div className="portfolios container"></div>
      </div>
    </div>
  );
};

export default PortFolio;
