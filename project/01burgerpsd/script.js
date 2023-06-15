var d = new Date();
    switch (d.getDay()) {
        case 0:
            alert("yay it is Sunday, 50% off today.");
            document.getElementById("day").innerText = "SUNDAY"
            break;
        case 1:
            alert("Today is Monday, 70% off today.");
            document.getElementById("day").innerText = "MONDAY"
            break;
        case 2:
            alert("Today is Tuesday, 30% off today.");
            document.getElementById("day").innerText = "TUESDAY"
            break;
        case 3:
            alert("Today is Wednesday, 20% off today.");
            document.getElementById("day").innerText = "WEDNESDAY"
            break;
        case 4:
            alert("Today is Thursday, 10% off today.");
            document.getElementById("day").innerText = "THURSDAY"
            break;
        case 5:
            alert("Today is Friday, 40% off today.");
            document.getElementById("day").innerText = "FRIDAY"
            break;
        default:
            alert("Today is Saturday, 25% off today.");
            document.getElementById("day").innerText = "SATURDAY"
            break;
    }