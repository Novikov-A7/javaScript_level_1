var table = document.createElement("table");
var tr, td, i;
var letter = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""]
var number = ["", "1", "2", "3", "4", "5", "6", "7", "8", ""]

for (i = 1; i <= 10; i++) {
    tr = document.createElement("tr");
    td = document.createElement("td")
    tr.appendChild(td);
    table.append(tr);

    td.innerText = (number[10 - i]);


    for (var j = 1; j <= 10; j++) {
        td = document.createElement("td");
        td.setAttribute("style", "border: 1px solid black; padding: 50px;");
        tr.append(td);
        if (i == 10) {
            td.insertAdjacentHTML("afterBegin", letter[j - 1]);
        }


    }
}

document.querySelector("div").append(table);
table.setAttribute("style", "border-collapse: collapse;");

