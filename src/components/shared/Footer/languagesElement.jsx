import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function LanguageElement(props) {
  return (
    <div className={`single-language`} onClick={props.handleLanguageSwitch}>
      <div className="image" style={{ content: `url(${props.img})` }} />
      {props.language}
      <MdKeyboardArrowUp style={{ visibility: "hidden" }} />
    </div>
  );
}
