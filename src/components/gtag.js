const trackEvent = (event) => {
  const data = {
    event_category: "Post Link",
    value: "click",
    event_label: event.target.innerText
  }
  if (window.gtag) {
    window.gtag("event", "click", { ...data })
  }
}

export default trackEvent