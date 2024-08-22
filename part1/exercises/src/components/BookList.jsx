export default function BookList() {
  let pageTitle = "Latest Book Releases";
  let book1 = "https://www.goodreads.com/book/show/62628727-romantic-comedy";
  let book2 =
    "https://www.dragonsteelbooks.com/products/tress-of-the-emerald-sea-premium-hardcover";
  let book3 =
    "https://www.goodreads.com/book/show/61109069-the-london-s-ance-society";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" />
      <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" />
      <img src={book3} alt="The London Seance Society by Sarah Penner" />
    </div>
  );
}
