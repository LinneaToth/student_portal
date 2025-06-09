//Pagination component, keeping track of steps. Props received are step (which step is the page currently on) with setStep, and also maxStep - the upper limit

export default function Pagination({ step, maxStep, setStep }) {
  const paginationArray = []; //Buttons for sub-sections will be pushed into this array when available

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < maxStep) {
      setStep(step + 1);
    }
  };
  const handleCustomStep = (customStep) => {
    setStep(customStep);
  };

  //Generates "step-buttons" to be pushed into the pagination array created above
  for (let i = 0; i < maxStep; i++) {
    paginationArray.push(
      <li
        key={"pagArr" + i}
        className={`page-item ${i + 1 === step ? "active" : ""}`}>
        <a className="page-link" onClick={() => handleCustomStep(i + 1)}>
          {i + 1}
        </a>
      </li>
    );
  }

  //The previous and next buttons are static, the middle buttons as generated above are added to the center. Logic ensures disabling of the buttons so the user doesn't move outside of the actual span.
  return (
    <nav aria-label="News navigation" className="d-flex p-2 ">
      <ul className="pagination" style={{ cursor: "pointer" }}>
        <li className="page-item" key={"navPrev"}>
          <a
            className={`page-link ${step === 1 ? "disabled" : ""}`}
            onClick={handlePrevious}>
            Previous
          </a>
        </li>
        {paginationArray}
        <li className="page-item" key={"navNext"}>
          <a
            className={`page-link ${step === maxStep ? "disabled" : ""}`}
            onClick={handleNext}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
