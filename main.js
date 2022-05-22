const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});
function search() {
    const input = searchInput.value;

    window.location.href = "https://www.bing.com/search?q=" + input + "&cvid=7fb071d4491e449e883650cee40451ab&aqs=edge.0.0j69i57j0l6j69i61.12386j0j4&FORM=ANAB01&PC=LCTS"}