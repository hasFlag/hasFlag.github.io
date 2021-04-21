import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const CookieBanner = () => {
  function getCookie(name) {
    const dc = document.cookie;
    const prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    let end;

    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
    }
    else {
      begin += 2;
      end = document.cookie.indexOf(";", begin);
      if (end == -1) {
        end = dc.length;
      }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
  }

  const [showBanner, setShowBanner] = useState(false)
  useEffect(() => {
    if (getCookie("ga-disable-G-LBFCMQXE49") === "true" || getCookie("ga-accepted") === "true") {
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }
  }, [])

  function declineCookie() {
    document.cookie = "ga-disable-G-LBFCMQXE49=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/"
    window.disableStr = 1
    setShowBanner(false)
  }

  function acceptCookie() {
    document.cookie = "ga-accepted=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/"
    setShowBanner(false)
  }

  return showBanner && <div className="cookie-banner">
    <span className="wpcc-message">This website uses cookies to ensure you get the best experience on our website. <Link to="/cookie-policy">Learn more</Link></span>
    <div className="wpcc-compliance">
      <button className="decline" onClick={declineCookie}>Decline</button>
      <button className="accept" onClick={acceptCookie}>Accept</button>
    </div>
  </div>
}

export default CookieBanner