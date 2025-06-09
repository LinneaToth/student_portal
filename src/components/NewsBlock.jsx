import NewsItem from "./NewsItem";
import { v4 as uuidv4 } from "uuid";

export default function NewsBlock({ news, blockNumber, step }) {
  return (
    <>
      {step === blockNumber &&
        news.map((newsItem) => (
          <NewsItem key={uuidv4()} newsItem={newsItem} />
        ))}{" "}
    </>
  );
}
