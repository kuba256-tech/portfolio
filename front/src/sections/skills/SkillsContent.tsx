import SkillItem from './SkillItem';

export interface ISkillList {
  title: string;
  icon: string;
}

interface ISkillsContent {
  title: string;
  skillsList: ISkillList[];
}

const SkillsContent: React.FC<ISkillsContent> = ({ title, skillsList }) => {
  return (
    <div className="skills-content">
      <h5>{title}</h5>
      <div className="skills-list">
        {skillsList.map((item, index) => (
          <SkillItem key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
