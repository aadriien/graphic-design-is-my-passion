const cliparts: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/7/70/Clipart_example.png",
    "https://i.imgur.com/e1IneG3.gif",
    "https://i.imgur.com/7W0t1vF.gif",
    "https://i.imgur.com/3z4E5eK.gif"
];

function addCliparts(count: number = 10): void {
    for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = cliparts[Math.floor(Math.random() * cliparts.length)];
        img.style.position = "fixed";
        img.style.top = `${Math.random() * 100}%`;
        img.style.left = `${Math.random() * 100}%`;
        img.style.width = `${Math.random() * 200 + 50}px`;
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

addCliparts();
randomizeHeadings();
