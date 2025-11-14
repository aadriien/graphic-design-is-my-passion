# 🌈💖 Graphic Design is My Passion!

## Description

Channel your inner artist with this gloriously chaotic **Chrome browswer extension**! Inspired by the high-energy excitement of messy frontend from the early 2000s, this extension guarantees a healthy dose of laughter and whimsy with each webpage you visit. 

This toy project was made during **Terrible Ideas Day at [the Recurse Center](https://www.recurse.com)**, in the span of just a couple hours. I organized the event in the hopes of encouraging the community to release the pressure of perfection, dive into the joys of playful programming, and work at the edge of their abilities—**building purely for fun**. 

So many fantastic creations came out of Terrible Ideas Day (including a few other browser extensions!), and I sincerely hope that this mindset of silly experimentation continues to inspire folks at RC and beyond! 


## How It Works

A Debian setup at the hub makes this possible by allowing in-person Recursers to **launch a couches bridge session**—or, better phrased, open the couch portal! Meanwhile, a Zulip bot notifies all Recursers of the event and shares the corresponding Zoom link so that they can join virtually. 

Recursers can also **interact with the Zulip bot** by sending it a DM, or otherwise tagging it in a topic, with a request for the bridge to be opened. Tagging can be done from any public Zulip stream. 

The bot checks the status of the bridge to reduce noise, and if it's not already open, the bot will **send a notification** to Recursers who are at the hub in person, forwarding the request.


## Features

Additional features in the works! 


## Tools / Tech

- **TypeScript**: webpage modification logic
    - DOM manipulation
    - element injection
    - event listeners
    - extension behavior
- **CSS**: styling and animations
- **JSON**: packaging and configs to build extension
    - `tsconfig.json` for compiling TypeScript to JavaScript
    - `manifest.json` for outlining extension rules
    - `package.json` for dev env / setup / dependencies


## Instructions

### Preparing the code:

**Clone** the repo:
```
git clone https://github.com/aadriien/graphic-design-is-my-passion.git

# Navigate to directory
cd graphic-design-is-my-passion
```

Install **dependencies**:
```
npm install
```

**Build** the extension:
```
npm run build
```

### Activating in browser:

1. Open [`chrome://extensions/`](chrome://extensions/)
2. Enable `Developer mode` (toggle)
3. Click `Load unpacked`
4. Select `dist/` folder


