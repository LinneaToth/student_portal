import NewsItem from "./NewsItem";

export default function NewsBlock({ news, blockNumber, step }) {
  console.log(blockNumber, step);
  return (
    <>
      {step === blockNumber &&
        news.map((newsItem) => <NewsItem newsItem={newsItem} />)}{" "}
    </>
  );
}
