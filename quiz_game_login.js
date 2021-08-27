function addUser() {
    player1_name = document.getElementById("ptext1").value;
    player2_name = document.getElementById("ptext2").value;
    localStorage.setItem("player1_name", ptext1);
    localStorage.setItem("player2_name", ptext2);
    window.location = "quiz_game_page.html";
}