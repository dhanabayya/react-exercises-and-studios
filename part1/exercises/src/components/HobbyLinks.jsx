export default function HobbyLinks() {
  let hobbyLinks = [
    "https://en.wikipedia.org/wiki/Chess",
    "https://en.wikipedia.org/wiki/Cooking",
    "https://en.wikipedia.org/wiki/Crochet",
  ];
  return (
    <>
      <div>
        <h2>My Hobbies</h2>
        <a href={hobbyLinks[0]}>Chess</a>
        <br />
        <a href={hobbyLinks[1]}>Cooking</a>
        <br />
        <a href={hobbyLinks[2]}>Crochet</a>
      </div>
    </>
  );
}
