import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classes from "../styles/Author.module.css";
import Card from "../components/Card";

export default function Author() {
  const router = useRouter();
  const { authorId } = router.query;
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    if (authorId) {
      fetch(
        `https://quote-garden.onrender.com/api/v3/quotes?author=${authorId}`
      )
        .then((response) => response.json())
        .then((data) => setQuotes(data.data));
    }
  }, [authorId]);

  if (quotes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p className={classes.title}>{quotes[0].quoteAuthor}</p>
      {quotes.map((quote) => (
        <Card key={quote._id}>{quote.quoteText}</Card>
      ))}
    </div>
  );
}
