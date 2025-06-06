import { news } from "../data/news";
import { useState } from "react";
import NewsBlock from "../components/NewsBlock";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

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

  return (
    <main className="d-flex flex-wrap justify-content-center">
      <h1 className="w-100 text-center display-5 mb-5 mt-5">
        Latest Academy News
      </h1>
      <div className="container-lg d-flex flex-wrap justify-content-between ">
        <Search
          setLookingFor={setLookingFor}
          setStep={setStep}
          lookingFor={lookingFor}
          placeholder="Search"
        />

        {lookingFor && (
          <h5 className="align-self-center">{newsShowing.length} found</h5>
        )}

        <Pagination step={step} setStep={setStep} maxStep={maxStep} />
      </div>

      {newsBlocks.map((block, index) => {
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
