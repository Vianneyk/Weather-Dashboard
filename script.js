
$(document).ready(function () {
    
    $("#search-button").on("click", function () {
        var searchTerm = $("#search-value").val();
        $("#search-value").val("");
        weatherFunction(searchTerm);
        weatherForecast(searchTerm);
    });

    