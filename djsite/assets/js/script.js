$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

function btn1() {
    window.location.href = "services.html";
}
function btn2() {
    window.location.href = "#";
}
function btn3() {
    window.location.href = "aboutme.html";
}
function btn4() {
    window.location.href = "contacts.html";
}