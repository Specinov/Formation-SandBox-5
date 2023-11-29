$(document).ready(function() {
    // Activate Carousel
    $("#carouselExample").carousel();

    // Enable Carousel Indicators
    $(".carousel-indicators li").click(function() {
        $("#carouselExample").carousel($(this).index());
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function() {
        $("#carouselExample").carousel("prev");
    });
    $(".carousel-control-next").click(function() {
        $("#carouselExample").carousel("next");
    });
});