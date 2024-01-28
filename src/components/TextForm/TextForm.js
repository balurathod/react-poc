import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("Enter Text here...");
  
  const handleUpperCaseClick = () => {
    //console.log('handleUpperCaseClick clicked' + text);
    let newText = text.toUpperCase();
    //setText("You have clicked on handleUpperCaseClick ");
    setText(newText);
  };

  const handleLowerCaseClick = () => {
    //console.log('handleUpperCaseClick clicked' + text);
    let newText = text.toLowerCase();
    //setText("You have clicked on handleUpperCaseClick ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log('handleOnChange clicked');
    setText(event.target.value);
  };

  return (
    <div  className="container my-2">
      <div>
        <label for="exampleFormControlTextarea1" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <div className="mt-2">
        <button type="button" className="btn btn-primary" onClick={handleUpperCaseClick}>
          Convert to UpperCase
        </button>
        <button type="button" className="btn btn-primary" onClick={handleLowerCaseClick}>
          Convert to LowerCase
        </button>
      </div>
      <div>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length } Words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes required to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
    
  );
}
