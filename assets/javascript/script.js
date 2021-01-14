$(document).ready(function () {
    function project1() {
        $('#project1Code').click(function (e) { 
            e.preventDefault();
            window.open('https://github.com/balokdecoy/AceOfPentacles');
        });
        $('#project1App').click(function (e) {
            e.preventDefault();
            window.open('https://balokdecoy.github.io/AceOfPentacles/')
        })
    };
    project1();
});

