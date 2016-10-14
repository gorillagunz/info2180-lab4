window.onload = function() {
    $("boundary1").onmouseover = overBoundary;
};

function overBoundary() {
    $("boundary1").addClassName("youlose");
}
