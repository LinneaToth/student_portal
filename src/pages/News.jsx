//Page displaying Academy news

import { useState } from "react";
import NewsBlock from "../components/NewsBlock";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { news } from "../data/news";

export default function News() {
  //lookingFor is whatever user enters in the search field
  const [lookingFor, setLookingFor] = useState("");

  //Current step in pagination
  const [step, setStep] = useState(1);

  //How many news shown on each page/section
  const newsPerPage = 5;

  //Copying news to a mutable array
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

  //newsBlocks will contain the different sections, accessible through the pagination component
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
      <div className="container-lg d-flex flex-wrap justify-content-between news-nav">
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
            key={"key" + index}
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
