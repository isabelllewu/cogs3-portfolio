function seatingChart(){
    let guests = parseInt(prompt("How many guests?"));
    let tables = parseInt(prompt("How many tables?"));

if (isNaN(tables) || tables <= 0) {
    alert("Please insert a numerical value.");
    return "Please insert a numerical value.";
} else {

    var base = Math.floor(guests / tables);
    var remainder = guests % tables; 

    var seating = new Array(tables).fill(base);

    for (var r = 0; r < remainder; r++) {
        seating[r] = seating[r] + 1;
    }

    var summary = "";

    function tableWord(n) {
    if (n === 1) {
        return "table";
    } else {
        return "tables";
    }
}
    if (remainder === 0) {
        summary =
            "<p class='answer'> Your guests will be seated as follows: You have " + tables + " " + tableWord(tables) + " with " + base + " " + " guests per table.</p>";
    } else {
        var baseTables = tables - remainder;
        var extraTables = remainder;

        summary =
            "<p class='answer'> Your guests will be seated as follows: You have " +
            (tables - remainder) + " " + tableWord(tables - remainder) + " with " +
            base + " guests per table, and " +
            remainder + " " + tableWord(remainder) + " with " +
            (base + 1) + " guests. </p>";
}

    var message =
        "<h3 class='seating-results'>Seating Results</h3>" +
        summary +
        "<ul class='list-group'>"

    message += "</ul>";

    document.getElementById("seatingResults").innerHTML = message;
}

}
