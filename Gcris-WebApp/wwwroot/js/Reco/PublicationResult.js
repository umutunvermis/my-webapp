// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function loadPublicationResult(title){
    $.ajax({
        method: "GET",
        url: "Home/FindPublicationByTitle",
        data: { title: title }
    })
        .done(function (result) {
            buildPublicationResultDiv(result);
        });
}

function buildPublicationResultDiv(publication, index) {

    $("#publication-result-" + String(index)).html("");

    var title = '<h3 id="title" class="display-8">&nbsp&nbsp&nbsp&nbsp&nbsp' + publication.title + '</h3>';
    $("#publication-result-" + String(index)).append(title);

    $("#publication-result-" + String(index)).append('<h5 id="title" class="display-8">URL:</h5>');
    var abstract = '<h5 id="title" class="display-8">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="' + publication.s2Url +'">' + publication.s2Url +'</a> </h5>';
    $("#publication-result-" + String(index)).append(abstract);

    $("#publication-result-" + String(index)).append('<h5 id="title" class="display-8">Authors:</h5>');
    for (author of publication.authors) {
        var author = '<h5 class="author" class="display-8">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + author.name + '</h5>';
        $("#publication-result-" + String(index)).append(author);
    }

    $("#graph").html('<img src="https://img001.prntscr.com/file/img001/1gemxAJPTuW_q7-rizEQBw.png" alt="Italian Trulli">');
    console.log(publication);
    /*
    $("#title").html(publication.title);
    $("#abstract").html(publication.paperAbstract);
    */
    //$(window).scrollBottom();
}