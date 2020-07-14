$(document).on('scroll', function () {

    const windowHeight = $(window).height()

    const scrollValue = $(this).scrollTop() // informacjeo scrolu
    // console.log(scrollValue);
    const $art2 = $('.art2'); // tworzenie zmiennej w jquery 
    const art2FromTop = $art2.offset().top; // pobieramy gdzie ten element jest od początku układu
    // console.log(art1FromTop);
    const art2Height = $art2.outerHeight()
    // console.log(art2Height)

    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top;
    const art3Height = $art3.outerHeight()

    const $art4 = $('.art4');
    const art4FromTop = $art4.offset().top;
    const art4Height = $art4.outerHeight()


    if (scrollValue > art2FromTop + art2Height - windowHeight) {
        console.log("jestem art 2 wyswietlony w całości")
        $art2.addClass('active');
    }

    if (scrollValue > art3FromTop + art3Height - windowHeight) {
        console.log("jestem art 3 wyswietlony w całości")
        $art3.addClass('active');
    }

    if (scrollValue > art4FromTop + art4Height - windowHeight) {
        console.log("jestem art 4 wyswietlony w całości")
        $art4.addClass('active');
    }

    //Druga sekcja

    const $op1 = $('.op1');
    const $op2 = $('.op2');

    const op1FromTop = $op1.offset().top;
    const op2FromTop = $op2.offset().top;

    const op1Height = $op1.height();
    const op2Height = $op2.height();

    if (scrollValue > op1FromTop + op1Height / 2 - windowHeight) {
        $op1.addClass('active');
    }
    if (scrollValue > op2FromTop + op1Height / 2 - windowHeight) {
        $op2.addClass('active');
    }


    if (scrollValue < 100) {
        $('article').removeClass('active');
    }
})