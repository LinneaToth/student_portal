import { news } from "../data/news";
import NewsItem from "./NewsItem";

export default function News() {
  return (
    <main className="d-flex flex-wrap justify-content-center">
      <h1 className="w-100 text-center">Latest Academy News</h1>
      {news.map((newsItem) => (
        <NewsItem newsItem={newsItem} />
      ))}
    </main>
  );
}
