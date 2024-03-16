// JQuery function and selector; add click function and hide/show function
/*for example when user click "animal kingdom" buttom, 
images under magic kingdom/epcot/hollywood studios will be hiden, only ak images show up
I use the same function for the other three buttom as well*/
$(document).ready(function () {
    // Filter images by category buttoms-AK
    // Jquery select element via html "class"
    $("#ak").click(function () {
        $(".mk").hide();
        $(".ep").hide();
        $(".hs").hide();
        $(".ak").show();
    });
});
$(document).ready(function () {
    // Filter images by category buttoms-MK
    $("#mk").click(function () {
        $(".ak").hide();
        $(".ep").hide();
        $(".hs").hide();
        $(".mk").show();
    });
});
$(document).ready(function () {
    // Filter images by category buttoms-EPCOT
    $("#ep").click(function () {
        $(".mk").hide();
        $(".ak").hide();
        $(".hs").hide();
        $(".ep").show();
    });
});
$(document).ready(function () {
    // Filter images by category buttoms-Hollywood Studios
    $("#hs").click(function () {
        $(".mk").hide();
        $(".ep").hide();
        $(".ak").hide();
        $(".hs").show();
    });
});
