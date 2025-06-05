export default function Pagination({ step, maxStep, setStep }) {
  const paginationArray = [];

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

  for (let i = 0; i < maxStep; i++) {
    paginationArray.push(
      <li className={`page-item ${i + 1 === step ? "active" : ""}`}>
        <a className="page-link" onClick={() => handleCustomStep(i + 1)}>
          {i + 1}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="News navigation" className="d-flex p-2 ">
      <ul className="pagination" style={{ cursor: "pointer" }}>
        <li className="page-item">
          <a
            className={`page-link ${step === 1 ? "disabled" : ""}`}
            onClick={handlePrevious}>
            Previous
          </a>
        </li>
        {paginationArray}
        <li className="page-item">
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
