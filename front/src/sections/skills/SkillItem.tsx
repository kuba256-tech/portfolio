import React from 'react';
import type { ISkillList } from './SkillsContent';

const SkillItem: React.FC<ISkillList> = ({ title, icon }) => {
  return (
    <div className="skill-item">
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default SkillItem;
