import "./styling.css";

function ClickedButton() {
  function whenClicked() {
    alert("The pin is removed from the board");
  }
  return (
    <button id="clickedButton" onClick={whenClicked}>
      Saved
    </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button
//import styling and assign correct className clickedButton
