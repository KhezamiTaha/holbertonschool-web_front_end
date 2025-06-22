function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = `${size}px`;
    document.body.style.textTransform = transform;
    document.body.style.fontWeight = weight;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let heading = document.createElement("h1")
  heading.textContent = "you'are browsing as a guest";
  let para = document.createElement("p")
  para.textContent = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen ";
  let link = document.createElement("a")
  link.textContent = "learn more"
  link.href = "https://google.com";
  let div = document.createElement("div")
  div.appendChild(heading);
  div.appendChild(para);
  div.appendChild(link);

  div.style.textAlign = "center"
  div.style.width = "700px"
  div.style.margin = "auto"
  document.body.appendChild(div);
  console.log("hello")

  let para2 = document.createElement("p")
  para2.textContent = "Welcome Holberton!"
  let btn1 = document.createElement("button");
  btn1.textContent = "Spooky"
  let btn2 = document.createElement("button");
  btn2.textContent = "Dark mode"
  let btn3 = document.createElement("button");
  btn3.textContent = "Scream mode"
  document.body.appendChild(para2)
  document.body.appendChild(btn1)
  document.body.appendChild(btn2)
  document.body.appendChild(btn3)

  btn1.addEventListener("click", () => {
    spooky()
  })
  btn2.addEventListener("click", () => {
    darkMode()
  })
  btn3.addEventListener("click", () => {
    screamMode()
  })

}

main();
