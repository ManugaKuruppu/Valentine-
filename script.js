


document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noBtn");

    if (noButton) {  // Ensures this script only runs on the question page
        const messages = [
            "No way!", "Think again!", "Are you sure?", "Really?", 
            "Try again!", "Come on!", "Don't do this!", "You can't escape!", 
            "Say yes!", "Why not?"
        ];

        noButton.addEventListener("mouseover", function () {
            const maxX = window.innerWidth - noButton.offsetWidth;
            const maxY = window.innerHeight - noButton.offsetHeight;
            
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            
            noButton.style.position = "absolute";
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;

            // Change text randomly
            noButton.textContent = messages[Math.floor(Math.random() * messages.length)];
        });
    }

    // Emoji rain effect ONLY for the "Yes" page
    if (document.body.classList.contains("yes-page")) {
        function createEmoji() {
            const emojiArray = ["❤️", "😘", "😍", "💖", "💘"];
            const emoji = document.createElement("div");
            emoji.classList.add("emoji");
            emoji.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)];
            document.body.appendChild(emoji);

            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.animationDuration = `${Math.random() * 2 + 3}s`;

            setTimeout(() => {
                emoji.remove();
            }, 5000);
        }

        setInterval(createEmoji, 300);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const letterBox = document.getElementById("letterBox");
    const letter = document.getElementById("letter");

    if (letterBox) {
        letterBox.addEventListener("click", function () {
            letter.classList.add("letter-open");
            letterBox.classList.add("open");

            // Redirect to index.html after 2 seconds
            setTimeout(() => {
                window.location.href = "question.html";
            }, 2000);
        });
    }
});




