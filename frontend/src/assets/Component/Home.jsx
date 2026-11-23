import React from "react";

export default function HomePage() {
  const isaccountcreated = true;
  const books = [
    {
      code: "FSD001",
      name: "Full Stack Development",
      price: 100,
    },
    {
      code: "SOD001",
      name: "Software Engineering",
      price: 80,
    },
    {
      code: "FIN001",
      name: "Finance management",
      price: 90,
    },
    {
      code: "ACC001",
      name: "Accounting",
      price: 30,
    },
  ];

  return (
    <>
      <div>
        {books.filter((book) => book.price < 50).map((book) => (
          <div key={book.code}>
            The price of {book.name} is ${book.price}
          </div>
        ))}
      </div>
      <div>
        {isaccountcreated ? <div>Account created</div> : <div>Account not created</div>}
      </div>

      <div> 
        {(() => {
          const totalTemplate = books.reduce((total, book) => total + book.price, 0);
          return <div>The price of all books is ${totalTemplate}</div>; 
        })()}
      </div>
    </>
  );
}
