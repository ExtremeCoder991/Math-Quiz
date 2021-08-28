function addUser() {
    player1_name = document.getElementById("ptext1").value;
    player2_name = document.getElementById("ptext2").value;
    localStorage.setItem("playerone_name", player1_name);
    localStorage.setItem("playertwo_name", player2_name);
    window.location = "quiz_game_page.html";
}
