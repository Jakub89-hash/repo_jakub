// load-bar
let x = 0;
function move() {
    if (x == 0) {
        x = 1;
        let load = document.getElementById("load-bar");
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                x = 0;
            }
            else {
                width++;
                load.style.width = width + "%";
            }
        }
    }
}

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_3

