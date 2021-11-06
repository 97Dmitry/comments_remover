const interval = setInterval(() => {
  const commentsList = document.getElementsByClassName("replies")
  if (commentsList.length) {
    Array.from(commentsList).forEach((el) => {
      el.remove()
    })
  }
}, 1000)

document.addEventListener("onbeforeunload", () => {
  clearInterval(interval)
})
