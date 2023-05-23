import React, { useEffect, useState } from "react";
import Link from "next/link";
import Card from "../components/Card";
import classes from "../styles/Home.module.css";
// import circularArrows from "../public/two-circular-arrows.png";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data.data[0]));
  }, [count]);

  if (!quote) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button
        className={classes.randomButton}
        onClick={() => setCount(count + 1)}
      >
        random
      </button>
      <Card>
        <p>"{quote.quoteText}"</p>
      </Card>
      <div className={classes.authorButton}>
        <Link href={"/" + quote.quoteAuthor}>
          <div className={classes.authorCont}>
            <div>
              <p className={classes.author}>{quote.quoteAuthor}</p>
              <p className={classes.genre}>{quote.quoteGenre}</p>
            </div>
            <p className={classes.arrow}>→</p>
          </div>
        </Link>
      </div>
    </>
  );
}
