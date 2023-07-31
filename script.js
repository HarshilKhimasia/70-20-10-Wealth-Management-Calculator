"use strict";

let salaryPara = document.querySelector(".salaray-para");
let currentYear = document.querySelector(".current-year");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");

let numOfYear = 2023;
let currentYearSalary = 100;
let average;
let previousYearSalary = [];
let thisSalaryYear;
//------------/////-------------//
plusButton.addEventListener("click", function () {
  numOfYear = numOfYear + 1;
  currentYear.textContent = numOfYear;
  previousYearSalary.push(currentYearSalary);
  function averageTotal(currentCtc) {
    average = (5 / 100) * currentCtc;
    currentCtc = currentCtc + average;
    currentYearSalary = currentCtc;
    return currentYearSalary;
  }
  averageTotal(currentYearSalary);
  salaryPara.textContent = currentYearSalary;
});
let lastPrice;
minusButton.addEventListener("click", function () {
  if (numOfYear > 2023) {
    numOfYear = numOfYear - 1;
    currentYear.textContent = numOfYear;

    lastPrice = previousYearSalary.pop(currentYearSalary);

    salaryPara.textContent = lastPrice;
    currentYearSalary = lastPrice;
  }
});
//------------/////-------------//
