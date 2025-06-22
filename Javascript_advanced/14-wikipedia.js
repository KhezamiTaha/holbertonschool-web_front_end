function createElement(data) {
  let para = document.createElement("p")
  para.textContent = data;
  document.body.appendChild(para);

}


function queryWikipedia(callback) {
  let req = new XMLHttpRequest();
  req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")

  req.onload = function () {
    if (req.status === 200) {
      let data = Object.values(JSON.parse(req.responseText).query.pages)[0].extract
      callback(data)
    }
  }
  
  req.send()
  
}

queryWikipedia(createElement)
