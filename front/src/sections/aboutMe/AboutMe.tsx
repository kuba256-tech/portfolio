import SectionButton from '../../components/UI/SectionButton';
import AboutMeContent from './aboutMeContent';
import { aboutMeAbility } from '../../GlobalConstants';
import SeparatorBlack from '../../components/UI/SeparatorBlack';
const AboutMe = () => {
  return (
    <div className="about-me container">
      <SectionButton value={'about me'} />
      <div>
        <p className="myBrief">
          I’m currently pursuing a Master’s degree in Computer Science at the University of the Potomac. Outside of my
          academic work, I enjoy working on personal projects and keeping up with emerging technologies in the IT
          industry. As a Junior Web Developer, I’m capable of building and deploying simple websites from scratch. I'm
          comfortable working with both front-end and back-end technologies and am passionate about learning the full
          lifecycle of web application development — from concept to production. I’m eager to deepen my understanding of
          full-stack development and gain hands-on experience with modern frameworks, deployment pipelines, and best
          practices in real-world production environments.
        </p>
        <SeparatorBlack />
        <div className="about-me-content">
          {aboutMeAbility.map((item, index) => (
            <AboutMeContent
              key={index}
              abilityDescription={item.abilityDescription}
              abilityTitle={item.abilityTitle}
              abilityPicture={item.abilityPicture}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
