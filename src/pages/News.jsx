import { news } from "../data/news";
import { useState } from "react";
import NewsBlock from "../components/NewsBlock";
import Pagination from "../components/Pagination";

export default function News() {
  const [lookingFor, setLookingFor] = useState("");
  const [step, setStep] = useState(1);
  const newsPerPage = 5;

  let newsShowing = news;

  if (lookingFor) {
    lookingFor.toLowerCase();
    newsShowing = news.filter(
      (n) =>
        n.title.toLowerCase().includes(lookingFor) ||
        n.body.toLowerCase().includes(lookingFor) ||
        n.author.toLowerCase().includes(lookingFor)
    );
  }

  let maxStep = Math.ceil(newsShowing.length / newsPerPage);
  const newsBlocks = [];

  for (let i = 0; i < maxStep; i++) {
    if (i < maxStep) {
      newsBlocks.push(
        newsShowing.slice(i * newsPerPage, (i + 1) * newsPerPage)
      );
      continue;
    }
    newsBlocks.push(newsShowing.slice(i * newsPerPage, -1));
  }

  console.log(newsBlocks, maxStep);

  return (
    <main className="d-flex flex-wrap justify-content-center">
      <h1 className="w-100 text-center">Latest Academy News</h1>
      <div className="container-lg d-flex justify-content-between align-items-center">
        {/* <label className="align-self-center" htmlFor="lookFor">
          Search for news:
        </label> */}
        <form
          className="d-flex gap-2 align-items-center"
          onSubmit={(e) => e.preventDefault()}>
          <input
            className="align-self-center form-control"
            name="lookFor"
            onChange={(e) => {
              setLookingFor(e.target.value.toLowerCase());
              setStep(1);
            }}
            type="text"
            placeholder="Search..."
            value={lookingFor}
          />
          <button
            className="btn btn-secondary"
            onClick={() => setLookingFor("")}>
            Clear{" "}
          </button>
        </form>
        {lookingFor && <h5>{newsShowing.length} found</h5>}

        <Pagination step={step} setStep={setStep} maxStep={maxStep} />
      </div>
      {newsBlocks.map((block, index) => {
        console.log("current iteration", index);
        return (
          <NewsBlock
            news={block}
            step={step}
            setStep={setStep}
            blockNumber={index + 1}
          />
        );
      })}
    </main>
  );
}
