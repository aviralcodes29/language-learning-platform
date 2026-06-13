const API_URL = "http://127.0.0.1:8000";


// REGISTER

const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", async (e)=>{

        e.preventDefault();

        const full_name =
            document.getElementById("fullName").value;

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const response = await fetch(
            `${API_URL}/users/register`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    full_name,
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        const message =
            document.getElementById("message");

        if(response.ok){

            message.innerText =
                "Registration Successful ✅";

            registerForm.reset();

        }else{

            message.innerText =
                data.detail;

        }

    });

}



// LOGIN

const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", async (e)=>{

        e.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        const response = await fetch(
            `${API_URL}/users/login`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        const message =
            document.getElementById("loginMessage");

        if(response.ok){

            localStorage.setItem(
                "user",
                JSON.stringify(data)
            );

            message.innerText =
                "Login Successful ✅";

            setTimeout(()=>{

                window.location.href =
                "dashboard.html";

            },1000);

        }else{

            message.innerText =
            data.detail;

        }

    });

}