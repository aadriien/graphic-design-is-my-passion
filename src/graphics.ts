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
        img.style.width = `${Math.random() * 100 + 100}px`;
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

function makeTextEvade(timeout = 2000): void {
    const elements = Array.from(
        document.querySelectorAll<HTMLElement>("p, span, h1, h2, h3, a, li")
    );
    
    type EvadeData = { x: number; y: number; vx: number; vy: number; timeoutId?: number };
    const data = new Map<HTMLElement, EvadeData>();
    
    elements.forEach(el => {
        data.set(el, { x: 0, y: 0, vx: 0, vy: 0 });
    });
    
    document.addEventListener("mousemove", (e) => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const dx = centerX - e.clientX;
            const dy = centerY - e.clientY;
            const distance = Math.hypot(dx, dy);
            
            const info = data.get(el)!;
            
            if (distance < 100) {
                const strength = (100 - distance) / 100 * 8;
                info.vx += (dx / distance) * strength;
                info.vy += (dy / distance) * strength;
                
                if (info.timeoutId) {
                    clearTimeout(info.timeoutId);
                    info.timeoutId = undefined;
                }
                
                info.timeoutId = setTimeout(() => {
                    info.vx = 0;
                    info.vy = 0;
                    info.x = 0;
                    info.y = 0;
                }, timeout);
            }
        });
    });
    
    function animate() {
        elements.forEach(el => {
            const info = data.get(el)!;
            info.x += info.vx;
            info.y += info.vy;
            
            info.vx *= 0.8;
            info.vy *= 0.8;
            
            el.style.transform = `translate(${info.x}px, ${info.y}px)`;
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}


addCliparts();
randomizeHeadings();
followCursor();
createSpinButton();
makeTextEvade(2000);

