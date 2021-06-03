import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

export const declineCookieModule = () => {
  document.cookie =
      "ga-disable-G-LBFCMQXE49=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/"
    window.disableStr = 1
  const date = new Date()
  date.setDate(date.getDate() + 7)
  document.cookie = `ga-accepted=true; expires=${date.toGMTString()};path=/`
}

export const acceptCookieModule = () => {
  document.cookie = `ga-accepted=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/`
  document.cookie =
    "ga-disable-G-LBFCMQXE49=false; expires=Thu, 31 Dec 1987 23:59:59 UTC;path=/"
}

export const CookieBanner = () => {
  function getCookie(name) {
    return document.cookie.indexOf(name) >= 0 ? true : false
  }

  const [showBanner, setShowBanner] = useState(false)
  useEffect(() => {
    if (getCookie("ga-accepted=") === true) {
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }
  }, [])

  function declineCookie() {
    declineCookieModule();
    setShowBanner(false)
  }

  function acceptCookie() {
    acceptCookieModule();
    setShowBanner(false)
  }

  return (
    showBanner && (
      <div className="cookie-banner">
        <span className="wpcc-message">
          This website uses cookies to ensure you get the best experience on our
          website. <Link to="/cookie-policy">Learn more</Link>
        </span>
        <div className="wpcc-compliance">
          <button className="decline" onClick={declineCookie}>
            Decline
          </button>
          <button className="accept" onClick={acceptCookie}>
            Accept
          </button>
        </div>
      </div>
    )
  )
}
