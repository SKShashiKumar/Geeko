function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

// Binding fucniton
const addTen = add.bind(null, 10);

// print Binded function
console.log(addTen(50));

let list = ["First", "Second"];

for (let i in list) {
  let xLi = document.createElement("li");

  let xTn = document.createTextNode(list[i]);

  let xBtn = document.createElement("button");
  xBtn.innerHTML = "Index";
  xBtn.className = 'xBtn'

  xBtn.onclick = function (i) {
    alert("Index is : " + i);
  }.bind(null, i);

  xLi.appendChild(xTn);
  xLi.appendChild(xBtn);

  document.getElementById("root").appendChild(xLi);
}
