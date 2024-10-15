// Set the date we're counting down to
var countDownDate = new Date("Oct 31, 2023 18:00:00").getTime();
var countDownDateOver = new Date("Oct 31, 2023 20:30:00").getTime();


function updateCountdown() {
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    var distanceToOver = countDownDateOver - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + " dies " + hours + " hores " + minutes + " minuts " + seconds + " segons ";
    
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "<h1><a href='https://maps.google.com/'>El mapa és aquí!</a></h1>";
    }

    if (distanceToOver < 0 ) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "<h2>Ya s'ha acabat! Moltes gràcies per participar!</h2>";
    }
}

updateCountdown()
// Update the count down every 1 second
var x = setInterval(updateCountdown, 1000);