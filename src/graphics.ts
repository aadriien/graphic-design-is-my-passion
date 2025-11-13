const cliparts: string[] = [
    "https://i.imgur.com/QQQobLg_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/mkN2MZb_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/tMuQoMA_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/YpmxRS1_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/41bU8ky_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/WPPyhcI.webp?tb",
    "https://i.imgur.com/uzQCqRP.webp?tb",
    "https://i.imgur.com/DwERWGS.webp?tb",
    "https://i.imgur.com/uF5NjY3.webp?tb",
    "https://i.imgur.com/yojdB8K.webp?tb",

];

function addCliparts(count: number = cliparts.length): void {
    for (let i = 0; i < count; i++) {
        const img = document.createElement("img");

        img.src = cliparts[i];
        img.style.position = "fixed";
        img.style.top = `${Math.random() * 100}%`;
        img.style.left = `${Math.random() * 100}%`;
        img.style.width = `${Math.random() * 150 + 100}px`;
        img.style.zIndex = "999999";
        img.style.transform = `rotate(${Math.random() * 360}deg)`;
        img.style.pointerEvents = "none";

        document.body.appendChild(img);
    }
}

function randomizeHeadings(): void {
    const headings = document.querySelectorAll<HTMLElement>("h1, h2, h3");
    const phrases = [
        "Live, Laugh, Love",
        "Graphic Design is My Passion",
        "Believe in Yourself",
        "Dream Big, Use Gradients",
        "Comic Sans 4-Ever",
        "There's No I in Team"
    ];
    
    headings.forEach(h => {
        h.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    });
}

function followCursor(): void {
    const emojis = ["💖", "🔥", "🌟", "🐸", "👽", "🐬"];

    document.addEventListener("mousemove", e => {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        const randomEmoji = emojis[randomIndex];

        const emoji = document.createElement("div");
        
        emoji.textContent = randomEmoji;
        emoji.style.position = "fixed";
        emoji.style.top = `${e.clientY}px`;
        emoji.style.left = `${e.clientX}px`;
        emoji.style.zIndex = "999999";
        emoji.style.pointerEvents = "none";

        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 1000);
    });
}

function createSpinButton(): void {
    const btn = document.createElement("button");

    btn.textContent = "💫 Time to Rewind 💫";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.left = "20px";
    btn.style.zIndex = "999999";
    btn.style.padding = "10px";
    btn.style.fontSize = "20px";
    btn.style.cursor = "pointer";
    btn.style.background = "linear-gradient(270deg, red, orange, yellow, green, blue, indigo, violet)";
    btn.style.color = "white";
    btn.style.border = "2px solid yellow";
    btn.style.borderRadius = "8px";
    btn.style.boxShadow = "0 0 10px gold";

    btn.addEventListener("click", () => spinAllText());
    document.body.appendChild(btn);
}

function spinAllText(duration = 1000): void {
    const textElements = document.querySelectorAll<HTMLElement>(
        "p, span, h1, h2, h3, h4, h5, h6, a, li"
    );

    textElements.forEach(el => {
        el.classList.add("spin-animation");
    });

    setTimeout(() => {
        textElements.forEach(el => el.classList.remove("spin-animation"));
    }, duration);
}


addCliparts();
randomizeHeadings();
followCursor();
createSpinButton();
