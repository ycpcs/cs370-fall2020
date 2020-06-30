// Basic data types and definitions.
// This file can rely on definitions in AACONFIG-courseInfo.js.

var calendar = [];
var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


////////////////////////////////////////////////////
// Single, Double, and Triple topics are available
// Most course day will just include a single topic
// But sometimes you might need 2 or even 3 topics to
// link to multiple different materials.
////////////////////////////////////////////////////
function Topic(title, link) {
    this.title = title;
    this.link = link;
}

function DoubleTopic(title1, link1, title2, link2) {
    this.title1 = title1;
    this.link1 = link1;
    this.title2 = title2;
    this.link2 = link2;
}

function TripleTopic(title1, link1, title2, link2, title3, link3) {
    this.title1 = title1;
    this.link1 = link1;
    this.title2 = title2;
    this.link2 = link2;
    this.title3 = title3;
    this.link3 = link3;
}
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// Special classes for a range of vacation days
// and post-"Reading Day" final exam days
////////////////////////////////////////////////////
function VacationDays(description, startDate, endDate) {
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
}

function FinalExamDay(section, date) {
    this.section = section;
    this.date = date;
}
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// Create objects for Labs and Assignments with
// the following functions.
////////////////////////////////////////////////////
function Lab(title1, link1) {
    this.title1 = title1;
    this.link1 = link1;
}

// Useful for a numbered lab with a filename following the standard naming
// convention, e.g., "lab04.html", "CS201_Lab04.zip".  The lab description
// page and the file are assumed to be in the same directory as the
// document with the lab table.
function NumberedLab(number1, title1) {
    this.title1 = "Lab " + number1 + ": " + title1;
    var numstr1 = (number1 < 10 ? "0" : "") + number1;
    this.link1 = "lab" + numstr1 + ".html";
    var shortCourse = courseInfo.courseName.replace(/:.*$/, '').replace(/ /, '');
    this.file1 = shortCourse + "_Lab" + numstr1 + ".zip";
}

function NumberedLabGradle(number1, title1) {
    this.title1 = "Gradle Lab " + number1 + ": " + title1;
    var numstr1 = (number1 < 10 ? "0" : "") + number1;
    this.link1 = "lab" + numstr1 + ".html";
    var shortCourse = courseInfo.courseName.replace(/:.*$/, '').replace(/ /, '');
    this.file1 = "gradle_src/" + shortCourse + "_Lab" + numstr1 + "_Gradle.zip";
}

// Variation of NumberedLab for labs without a file
function NumberedLabNoFile(number1, title1) {
    this.title1 = "Lab " + number1 + ": " + title1;
    var numstr1 = (number1 < 10 ? "0" : "") + number1;
    this.link1 = "lab" + numstr1 + ".html";
}

function DoubleNumberedLab(number1, title1, number2, title2) {
    this.title1 = "Lab " + number1 + ": " + title1;
    var numstr1 = (number1 < 10 ? "0" : "") + number1;
    this.link1 = "lab" + numstr1 + ".html";
    var shortCourse = courseInfo.courseName.replace(/:.*$/, '').replace(/ /, '');
    this.file1 = shortCourse + "_Lab" + numstr1 + ".zip";
    this.title2 = "Lab " + number2 + ": " + title2;
    var numstr2 = (number2 < 10 ? "0" : "") + number2;
    this.link2 = "lab" + numstr2 + ".html";
    this.file2 = shortCourse + "_Lab" + numstr2 + ".zip";
}

function TripleNumberedLab(number1, title1, number2, title2, number3, title3) {
    this.title1 = "Lab " + number1 + ": " + title1;
    var numstr1 = (number1 < 10 ? "0" : "") + number1;
    this.link1 = "lab" + numstr1 + ".html";
    var shortCourse = courseInfo.courseName.replace(/:.*$/, '').replace(/ /, '');
    this.file1 = shortCourse + "_Lab" + numstr1 + ".zip";
    this.title2 = "Lab " + number2 + ": " + title2;
    var numstr2 = (number2 < 10 ? "0" : "") + number2;
    this.link2 = "lab" + numstr2 + ".html";
    this.file2 = shortCourse + "_Lab" + numstr2 + ".zip";
    this.title3 = "Lab " + number3 + ": " + title3;
    var numstr3 = (number3 < 10 ? "0" : "") + number3;
    this.link3 = "lab" + numstr3 + ".html";
    this.file3 = shortCourse + "_Lab" + numstr3 + ".zip";
}

function Homework(title, link, daysToComplete) {
    this.title = title;
    this.link = link;
    this.daysToComplete = daysToComplete;
}

function Assignment(title, link, daysToComplete) {
    this.title = title;
    this.link = link;
    this.daysToComplete = daysToComplete;
}

function Reading(title) {
    this.title = title;
}

////////////////////////////////////////////////////

function LinkedReading(title, link, author) {
    this.title = title;
    this.link = link;
    this.author = author;
}

////////////////////////////////////////////////////
