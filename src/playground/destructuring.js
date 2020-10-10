const book = {
  name: "Ego is enemy",
  author: "Rayn Holiday",
  publisher: {},
};

const { name, author: authorName } = book;
console.log(`Name is ${name} and author is ${authorName}`);

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(`Publisher name is ${publisherName}`);
