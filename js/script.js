const headings = document.querySelectorAll("h1,h2,h3");

headings.forEach(heading => {
  let headingLenth = heading.innerText.length;
  heading.setAttribute("style", "--width: " + headingLenth + "rem");
})
