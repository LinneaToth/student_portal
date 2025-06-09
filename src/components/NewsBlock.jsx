//NewsBlock is a section containing news items, one "collection" for each step on the page. News (array with news items/data), blockNumber (which step does this block represent?) step (currently showing step on page) received as props.

import NewsItem from "./NewsItem";

export default function NewsBlock({ news, blockNumber, step }) {
  return (
    <>
      {step === blockNumber &&
        news.map((newsItem) => (
          <NewsItem key={newsItem.id} newsItem={newsItem} />
        ))}{" "}
    </>
  );
}
