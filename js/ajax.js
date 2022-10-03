// Azerbaijan
$(function () {
    $('.countryOne').click(function () {
        $('p').load('../data/azerbaijan.txt')
        $('.about').css({"background-image":"url('../img/baku.jpg')"})
    })
})


// Turkey
$(function () {
    $('.countryTwo').click(function () {
        $('p').load('../data/turkey.txt')
        $('.about').css({"background-image":"url('../img/istanbul.jpg')"})
    })
})


// Italy
$(function () {
    $('.countryThree').click(function () {
        $('p').load('../data/italy.txt')
        $('.about').css({"background-image":"url('../img/rome.jpg')"})
    })
})


// Germany
$(function () {
    $('.countryFour').click(function () {
        $('p').load('../data/germany.txt')
        $('.about').css({"background-image":"url('../img/berlin.jpg')"})
    })
})


// Usa
$(function () {
    $('.countryFive').click(function () {
        $('p').load('../data/usa.txt')
        $('.about').css({"background-image":"url('../img/ny.jpg')"})
    })
})
