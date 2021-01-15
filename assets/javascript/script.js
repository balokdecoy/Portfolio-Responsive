$(document).ready(function () {
    function project1() {
        $('#project1Code').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/balokdecoy/AceOfPentacles');
        });
        $('#project1App').click(function (e) {
            e.preventDefault();
            window.open('https://balokdecoy.github.io/AceOfPentacles/')
        });
    };
    function weatherApp() {
        $('#weatherCode').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/balokdecoy/weather-app');
        });
        $('#weatherApp').click(function (e) {
            e.preventDefault();
            window.open('https://balokdecoy.github.io/weather-app/')
        });
    };
    function passwordApp() {
        $('#passwordCode').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/balokdecoy/password-generator');
        });
        $('#passwordApp').click(function (e) {
            e.preventDefault();
            window.open('https://balokdecoy.github.io/password-generator/')
        });
    };
    project1();
    weatherApp();
    passwordApp();
});

