import React from 'react';
import pic from '../../assets/DesignIcon.svg';

interface IAboutMeContent {
  abilityPicture: string;
  abilityTitle: string;
  abilityDescription: string;
}

const AboutMeContent: React.FC<IAboutMeContent> = ({ abilityPicture, abilityTitle, abilityDescription }) => {
  return (
    <div className="about-me-contentItem">
      <div className="about-me-background">
        <img src={abilityPicture} alt="" />
      </div>
      <p>{abilityTitle}</p>
      <span>{abilityDescription}</span>
    </div>
  );
};

export default AboutMeContent;
