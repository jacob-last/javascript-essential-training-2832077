/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function funcExpression () {
    let mainElement = document.querySelector("main");
    mainElement.style.backgroundColor = "red";
}

funcExpression();

const funcDeclaration = function () {
    let bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = "blue";
}

funcDeclaration();

const arrowFunc = () => {
    let headElement = document.querySelector("head");
    headElement.style.backgroundColor = "green";
}

arrowFunc()
