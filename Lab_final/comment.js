
let comments1 = [], ratings1 = [], selectedRating1 = 0;
let comments2 = [], ratings2 = [], selectedRating2 = 0;

setupStarRating("ratingStars1", 1);
setupStarRating("ratingStars2", 2);


function setupStarRating(elementId, system) {
    document.querySelectorAll(`#${elementId} span`).forEach(star => {
        star.addEventListener("click", function () {
            let value = Number(this.getAttribute("data-value"));
            if (system === 1) selectedRating1 = value;
            if (system === 2) selectedRating2 = value;
            updateStarColors(system);
        });
    });
}

function updateStarColors(system) {
    let rating = system === 1 ? selectedRating1 : selectedRating2;
    document.querySelectorAll(`#ratingStars${system} span`).forEach(star => {
        star.classList.remove("selected");
        if (Number(star.getAttribute("data-value")) <= rating) {
            star.classList.add("selected");
        }
    });
}


function postComment(system) {

    let name = document.getElementById(`name${system}`).value.trim();
    let email = document.getElementById(`email${system}`).value.trim();
    let comment = document.getElementById(`commentText${system}`).value.trim();

  
    let nameErr = document.getElementById(`nameError${system}`);
    let emailErr = document.getElementById(`emailError${system}`);
    let commentErr = document.getElementById(`commentError${system}`);

    
    nameErr.innerText = "";
    emailErr.innerText = "";
    commentErr.innerText = "";

    let valid = true;

    if (name.length < 2 || name.length > 50) {
        nameErr.innerText = "Name should be between 2 and 50 characters";
        valid = false;
    }

  
    if (email.length > 0 && !email.includes("@")) {
        emailErr.innerText = "Please enter a valid email address";
        valid = false;
    }

   
    if (comment.length < 10 || comment.length > 500) {
        commentErr.innerText = "Comment should be between 10 and 500 characters";
        valid = false;
    }

    if (!valid) return;

    if (system === 1) {
        comments1.push({ name, email, comment, rating: selectedRating1 });
        if (selectedRating1 > 0) ratings1.push(selectedRating1);
        selectedRating1 = 0;
    } else {
        comments2.push({ name, email, comment, rating: selectedRating2 });
        if (selectedRating2 > 0) ratings2.push(selectedRating2);
        selectedRating2 = 0;
    }

    
    document.getElementById(`name${system}`).value = "";
    document.getElementById(`email${system}`).value = "";
    document.getElementById(`commentText${system}`).value = "";
    updateStarColors(system);

   
    updateStats(system);
    displayComments(system);
}


function updateStats(system) {
    let comments = system === 1 ? comments1 : comments2;
    let ratings = system === 1 ? ratings1 : ratings2;

    document.getElementById(`totalComments${system}`).innerText = comments.length;

    if (ratings.length > 0) {
        let avg = ratings.reduce((a,b)=>a+b,0) / ratings.length;
        document.getElementById(`averageRating${system}`).innerText = avg.toFixed(1);
    } else {
        document.getElementById(`averageRating${system}`).innerText = "0.0";
    }
}


function displayComments(system) {
    let comments = system === 1 ? comments1 : comments2;
    let list = document.getElementById(`commentList${system}`);

    list.innerHTML = "";

    comments.forEach(c => {
        let stars = "";
        for (let i = 0; i < c.rating; i++) stars += "⭐";

        list.innerHTML += `
            <div class="comment-item">
                <strong>${c.name}</strong><br>
                <p>${c.comment}</p>
                ${c.rating > 0 ? `<p>${stars}</p>` : ""}
            </div>
        `;
    });
}