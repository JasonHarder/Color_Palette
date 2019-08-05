import React from "react";
import Channel from "./Channel";
import "../index.css";
class ColorPalette extends React.Component {
  render() {
    const swatchStyle = {backgroundColor: 'rgba(0,0,0,0)'}
    return (
      <div>
        <ul className="palette">
          <li className="swatch" style = {swatchStyle}>
            <div> rgb (</div>
            <Channel />
            <Channel />
            <Channel />
            <div> ); </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ColorPalette;
