export default function Search({
  setLookingFor,
  setStep = null,
  lookingFor,
  placeholder,
}) {
  return (
    <form
      className="col-md-4 p-2  d-flex gap-2 align-items-center justify mb-auto"
      onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="lookFor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </label>
      <input
        className="align-self-center form-control card-search"
        name="lookFor"
        onChange={(e) => {
          setLookingFor(e.target.value.toLowerCase());
          {
            setStep ? setStep(1) : "";
          }
        }}
        type="text"
        placeholder={placeholder}
        value={lookingFor}
      />
      <button
        className=" p-2  btn btn-outline-primary"
        onClick={() => setLookingFor("")}>
        Clear{" "}
      </button>
    </form>
  );
}
