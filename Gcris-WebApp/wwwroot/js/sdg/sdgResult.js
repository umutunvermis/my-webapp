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

function buildPublicationResultDiv(publication) {

    $("#publication-result").html("");

    var title = '<h3 id="title" class="display-8">&nbsp&nbsp&nbsp&nbsp&nbsp' + publication.title + '</h3>';
    $("#publication-result").append(title);

    $("#publication-result").append('<h5 id="title" class="display-8">Abstract:</h5>');
    var abstract = '<h5 id="title" class="display-8">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + publication.paperAbstract + '</h5>';
    $("#publication-result").append(abstract);

    $("#publication-result").append('<h5 id="title" class="display-8">Authors:</h5>');
    for (author of publication.authors) {
        var author = '<h5 class="author" class="display-8">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + author.name + '</h5>';
        $("#publication-result").append(author);
    }
    $("html, body").animate({ scrollTop: $(document).height() - $(window).height() });
    console.log(publication);
    /*
    $("#title").html(publication.title);
    $("#abstract").html(publication.paperAbstract);
    */
    //$(window).scrollBottom();
}