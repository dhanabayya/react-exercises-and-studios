export default function BookList() {
  let pageTitle = "Latest Book Releases";
  let book1 =
    "https://www.booklistqueen.com/wp-content/uploads/romantic-comedy-curtis-sittenfeld.jpg";
  let book2 =
    "https://www.booklistqueen.com/wp-content/uploads/tress-of-the-emerald-sea-brandon-sanderson-1.jpg";
  let book3 =
    "https://www.booklistqueen.com/wp-content/uploads/the-london-seance-society-sarah-penner.jpg";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" />
      <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" />
      <img src={book3} alt="The London Seance Society by Sarah Penner" />
    </div>
  );
}
