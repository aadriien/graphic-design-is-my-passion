const cliparts: string[] = [
    "https://i.imgur.com/QQQobLg_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/mkN2MZb_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/tMuQoMA_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/YpmxRS1_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    "https://i.imgur.com/WPPyhcI.webp?tb",
    "https://i.imgur.com/uzQCqRP.webp?tb",
    "https://i.imgur.com/DwERWGS.webp?tb",
    "https://i.imgur.com/uF5NjY3.webp?tb",
    "https://i.imgur.com/yojdB8K.webp?tb",

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
