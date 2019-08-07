import React from "react";
import Palette from './Palette'


export class Controller extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return (
      <Palette/>
    )
  }

}

export default Controller;


