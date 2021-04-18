const trackEvent = (event) => {
  const data = {
    category: "Post Link",
    action: "click",
    label: event.target.innerText
  }
  if (window.gtag) {
    window.gtag("event", "click", { ...data })
  }
}

export default trackEvent