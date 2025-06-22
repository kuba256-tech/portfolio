interface IcomponentButton {
  value: string;
}

const SectionButton: React.FC<IcomponentButton> = ({ value }) => {
  return (
    <div className="sectionButton">
      <p>{value}</p>
    </div>
  );
};

export default SectionButton;
