import React from "react";

function add(num1,num2)
{
    let sum = num1 + num2;
    return sum;
}

function sub ( num1 , num2)
{
    let res = num1 - num2
    return res;
}

function multiply ( num1, num2)
{
    let mulres = num1 * num2;
    return mulres;
}

function divide ( num1, num2)
{
    let divres = num1/ num2;
    return divres;
}

export {add};
export {sub};
export {multiply};
export {divide};