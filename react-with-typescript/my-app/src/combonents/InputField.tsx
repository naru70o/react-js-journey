import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputField({ todo, setTodo }: Props) {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => e.target.value}
      />
      <button className="input_submit">Go</button>
    </form>
  );
}
