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
        currentDisplay = 12 * (result.pageNumber - 1) + " - " + result.resultCount * 12 + " displayed";
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
}

function loadTable(page) {
    $.ajax({
        method: "POST",
        url: "Home/FindPublications",
        data: { page: page}
    })
        .done(function (result) {
            fillTable(result)
        });
}

function loadTableForAuthor(ids, pageNumber) {
    $.ajax({
        method: "POST",
        url: "Home/LoadTableForAuthor",
        data: {
            ids: ids,
            page: pageNumber
        }
    })
        .done(function (result) {
            fillTable(result);
        });
}

function loadAuthors() {
    $.ajax({
        method: "GET",
        url: "Home/LoadAuthors"
    })
        .done(function (result) {
            authors = result;
            for (author of result) {
                var string = "<option data-value=" + '"[' + author.name + ']"' + ' value="' + author.name + '"></option>'
                $("#authors-dropdown").append(string);
            }
                
        });
}

$(document).ready(function () {
    console.log("ready!");
    pageNumber = 1;
    loadAuthors();

    loadTable(pageNumber);

    $('#search-author').click(function () {
        var value = $('#selected').val();
        selectedAuthor = value;
        var ids = ($('#authors-dropdown [value="' + value + '"]').data('value'));
        for (auth of authors) {
            if (auth.name == selectedAuthor) {
                loadTableForAuthor(auth.publications, pageNumber);
            }
        }
        console.log(ids)
    });

    $("#btn-next").click(function () {
        pageNumber += 1;
        if (selectedAuthor == null) {
            loadTable(pageNumber);
        } else {
            $('#search-author').click();
        }
    });
    $("#btn-previous").click(function () {
        pageNumber -= 1;
        if (selectedAuthor == null) {
            loadTable(pageNumber);
        } else {
            $('#search-author').click();
        }
    });

    
});