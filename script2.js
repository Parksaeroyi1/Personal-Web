const myFunction = () => {

let x = document.getElementsByClassName("text_about");
if (x.length > 0) { 
    if (x[0].style.display === "none") {
        x[0].style.display = "block";
    } else {
        x[0].style.display = "none";
    }
}

}

