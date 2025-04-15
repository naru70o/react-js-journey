import { Children, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlerNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  function handlerPrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <Buttons
              bgColor={"#7950f2"}
              textColor={"#fff"}
              // text={"previous"}
              onClickHandler={handlerPrevious}
            >
              <span>👈</span> previous
            </Buttons>

            <Buttons
              bgColor={"#7950f2"}
              textColor={"#fff"}
              // text={"Next"}
              onClickHandler={handlerNext}
            >
              Next<span>👉</span>
            </Buttons>
          </div>
        </div>
      )}
    </>
  );
}

function Buttons({ bgColor, textColor, onClickHandler, children }) {
  return (
    <button
      onClick={onClickHandler}
      style={{ background: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
