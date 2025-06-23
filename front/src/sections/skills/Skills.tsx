import SectionButton from '../../components/UI/SectionButton';
import SkillsContent from './SkillsContent';

import { skillsFrontEnd } from '../../GlobalConstants';
import { skillsFrameWork } from '../../GlobalConstants';
import { skillsBack } from '../../GlobalConstants';
import { skillsOther } from '../../GlobalConstants';
import SeparatorBlack from '../../components/UI/SeparatorBlack';

const Skills = () => {
  return (
    <div className="skills container">
      <SeparatorBlack />
      <SectionButton value="Skills" />
      <div className="skills-content-list">
        <SkillsContent title="Front-End" skillsList={skillsFrontEnd} />
        <SkillsContent title="Back-End" skillsList={skillsBack} />
        <SkillsContent title="Others" skillsList={skillsOther} />
      </div>
    </div>
  );
};

export default Skills;
