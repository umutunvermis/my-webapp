// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var sdgMap = {
    goal1: `GOAL 1: No Poverty: `,
    goal2: `GOAL 2: Zero Hunger: `,
    goal3: `GOAL 3: Good Health and Well-being: `,
    goal4: `GOAL 4: Quality Education: `,
    goal5: `GOAL 5: Gender Equality: `,
    goal6: `GOAL 6: Clean Water and Sanitation: `,
    goal7: `GOAL 7: Affordable and Clean Energy: `,
    goal8: `GOAL 8: Decent Work and Economic Growth: `,
    goal9: `GOAL 9: Industry, Innovation and Infrastructure: `,
    goal10: `GOAL 10: Reduced Inequality: `,
    goal11: `GOAL 11: Sustainable Cities and Communities: `,
    goal12: `GOAL 12: Responsible Consumption and Production: `,
    goal13: `GOAL 13: Climate Action: `,
    goal14: `GOAL 14: Life Below Water: `,
    goal15: `GOAL 15: Life on Land: `,
    goal16: `GOAL 16: Peace and Justice Strong Institutions: `,
    goal17: `GOAL 17: Partnerships to achieve the Goal: `
}

function loadPublicationResult(title, publications){

    console.log(publications);
    
    for (pub of publications.publications) {
        if (pub.title == title)
            buildPublicationResultDiv(pub);
    }
    
    //buildPublicationResultDiv(publications);
}

function buildPublicationResultDiv(publication) {

    $("#publication-result").html("");

    var title = '<h3 id="title" class="display-8">&nbsp&nbsp&nbsp&nbsp&nbsp' + publication.title + '</h3>';
    $("#publication-result").append(title);

    let entries = Object.entries(publication)
    let buildGoals = entries.map(([key, val] = entry) => {
        if (key.substr(0, 4) == (`goal`)) {
            console.log(key, val);
            if (val / publication.len > 0.1)
                var temp = '<h5 id="goal" class="display-8" style="color:green">&nbsp&nbsp&nbsp&nbsp' + sdgMap[key] + '&nbsp&nbsp&nbsp' + val / publication.len + '</h5>';
            else
                var temp = '<h5 id="goal" class="display-8">&nbsp&nbsp&nbsp&nbsp' + sdgMap[key] + '&nbsp&nbsp&nbsp' + val / publication.len + '</h5>';
            $("#publication-result").append(temp);
        }
    });
    /*
    $("#publication-result").append('<h5 id="title" class="display-8">Abstract:</h5>');
    var abstract = '<h5 id="title" class="display-8">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + publication.paperAbstract + '</h5>';
    $("#publication-result").append(abstract);

    $("#publication-result").append('<h5 id="title" class="display-8">Authors:</h5>');
    for (author of publication.authors) {
        var author = '<h5 class="author" class="display-8">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + author.name + '</h5>';
        $("#publication-result").append(author);
    }
    */
    $("html, body").animate({ scrollTop: $(document).height() - $(window).height() });
    console.log(publication);
    /*
    $("#title").html(publication.title);
    $("#abstract").html(publication.paperAbstract);
    */
    //$(window).scrollBottom();
}