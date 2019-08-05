import React from 'react'
import '../index.css'

class Channel extends React.Component {
  render () {
    return(
      <div className = "channel">
        <button type = 'button' className = 'btn up'/> +
        <input type = 'text' className = 'txt' value = '0' />
        <button type = 'button' className = 'btn down'/> -
      </div>
    )
  }
}

export default Channel