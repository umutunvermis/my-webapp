// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Fill the publications table

var authors;
var selectedAuthor = null;
var pageNumber;

function fillTable(result) {
    $("#table-body").html("");
    rows = "";
    for (pub of result.publications) {
        pubTitle = pub.title;
        pubYear = pub.year;
        rows += '<tr><td class="tg-hmp3">' + pubTitle + "</td >";
        rows += '<td class="tg-hmp3">' + pubYear + '</td ></tr >';
    }
    $("#table-body").html(rows);
    var totalResults = result.resultCount + " total results";
    var currentDisplay = 12 * (result.pageNumber - 1) + " - " + result.pageNumber * 12 + " displayed";
    pager = ""
    if (result.pageCount == result.pageNumber) {
        $("#btn-next").css("display", "none");
        currentDisplay = 12 * (result.pageNumber - 1) + " - " + result.resultCount + " displayed";
    }
    else {
        $("#btn-next").css("display", "block");
    }
    if (result.pageNumber == 1) {
        $("#btn-previous").css("display", "none");
    }
    else {
        $("#btn-previous").css("display", "block");
    }
    $("#total-result").html(totalResults);
    $("#current-result").html(currentDisplay);

    addRowHandlers()
}

function addRowHandlers() {
    var table = document.getElementById("result-table");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler =
            function (row) {
                return function () {
                    var cell = row.getElementsByTagName("td")[0];
                    var title = cell.innerHTML;
                    loadPublicationResult(title);
                };
            };

        currentRow.onclick = createClickHandler(currentRow);
    }
}

function loadTable(page) {
    $.ajax({
        method: "POST",
        url: "SDG/FindPublications",
        data: { page: page}
    })
        .done(function (result) {
            fillTable(result)
        });
}

$(document).ready(function () {
    $("#publication-result").html("");
    console.log("ready!");
    pageNumber = 1;

    loadTable(pageNumber);

    $('#search-author').click(function () {
        pageNumber = 1;
        var value = $('#selected').val();
        selectedAuthor = value;
        //var ids = ($('#authors-dropdown [value="' + value + '"]').data('value'));
        for (auth of authors) {
            if (auth.name == selectedAuthor) {
                loadTableForAuthor(auth.publications, pageNumber);
                break;
            }
        }
    });

    $("#btn-next").click(function () {
        pageNumber += 1;
        if (selectedAuthor == null) {
            loadTable(pageNumber);
        } else {
            for (auth of authors) {
                if (auth.name == selectedAuthor) {
                    loadTableForAuthor(auth.publications, pageNumber);
                    break;
                }
            }
        }
    });

    $("#btn-previous").click(function () {
        pageNumber -= 1;
        if (selectedAuthor == null) {
            loadTable(pageNumber);
        } else {
            for (auth of authors) {
                if (auth.name == selectedAuthor) {
                    loadTableForAuthor(auth.publications, pageNumber);
                    break;
                }
            }
        }
    });
    
});