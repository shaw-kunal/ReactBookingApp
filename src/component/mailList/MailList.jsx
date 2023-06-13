import React from 'react'
import "./mailList.css"
function MailList() {
  return (

    <div className="mailBox">
      <span>Save time, save money! </span>
      <p>Sign up and we'll send the best deals to you</p>

      <div className="mailInput">
        <input type="email" placeholder='Your email address' />
        <button>subscribe</button>
      </div>

    </div>
  )
}

export default MailList