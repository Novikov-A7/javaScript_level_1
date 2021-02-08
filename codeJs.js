
function chess() {
    var table = document.createElement("table"), tr, td, i, a,
        letter = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""],
        blackFigs1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'],
        whiteFigs1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'],
        blackFigs2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'],
        whiteFigs2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'];


    for (i = 0, a = 9; i <= 9, a >= 0; i++, a--) {
        tr = table.insertRow(i);

        for (var j = 0; j < 10; j++) {
            td = tr.insertCell(j);

            switch (i) {
                case 0:
                    td.innerText = letter[j];
                    break;
                case 1:
                    td.innerHTML = blackFigs1[j];
                    break;
                case 2:
                    td.innerHTML = blackFigs2[j];
                    break;
                case 7:
                    td.innerHTML = whiteFigs2[j];
                    break;
                case 8:
                    td.innerHTML = whiteFigs1[j];
                    break;
                case 9:
                    td.innerText = letter[j];
                    break;
                default:
                    if (j == 0 || j == 9) {
                        td.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.append(table);
}
chess();
