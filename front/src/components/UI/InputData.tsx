export interface IData {
  [key: string]: string;
}

interface IDataInput {
  value: IData;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type: string;
}

const InputData: React.FC<IDataInput> = ({ name, onChange, value, type }) => {
  return (
    <>
      {name != 'message' ? (
        <div className="custom-input-group">
          <label htmlFor={name} className="custom-label"></label>
          <input
            required
            value={value[name]}
            onChange={onChange}
            name={name}
            id={name}
            type={type}
            className="custom-input"
            placeholder={`Input your ${name}`}
          />
        </div>
      ) : (
        <div className="custom-input-group">
          <label htmlFor="message"></label>
          <textarea
            required
            value={value[name]}
            onChange={onChange}
            name="message"
            id="message"
            className="custom-input"
            placeholder={`Input your ${name}`}
            rows={3}
          ></textarea>
        </div>
      )}
    </>
  );
};

export default InputData;
