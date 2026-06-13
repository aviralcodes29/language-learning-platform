const API_URL = "https://language-learning-backend-zstx.onrender.com";

const leaderboardBody =
document.getElementById(
"leaderboardBody"
);

async function loadLeaderboard(){

    try{

        const response =
        await fetch(
            `${API_URL}/leaderboard/`
        );

        const users =
        await response.json();

        leaderboardBody.innerHTML = "";

        users.forEach(
            (user,index) => {

                let rankClass = "";

                if(index === 0){
                    rankClass = "rank-1";
                }
                else if(index === 1){
                    rankClass = "rank-2";
                }
                else if(index === 2){
                    rankClass = "rank-3";
                }

                leaderboardBody.innerHTML += `

                <tr>

                    <td class="${rankClass}">#${index + 1}</td>

                    <td>${user.full_name}</td>

                    <td>${user.selected_language}</td>

                    <td>${user.total_score}</td>

                </tr>

                `;

            }
        );

    }
    catch(error){

        console.log(error);

    }

}

loadLeaderboard();