

// Data for live chat.

let nameList = [
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Storm",
  "Blaze",
  "Phoenix",
  "Nebula",
  "Shadow",
  "Raven",
  "Falcon",
  "Viper",
  "Hawk",
  "Knight",
  "Samurai",
  "Ninja",
  "ShadowWalker",
  "Thunder",
  "Zeus",
  "Apollo",
  "Titan",
  "Mercury",
  "Venom",
  "Blitz",
  "Wraith",
  "Cyborg",
  "Scorpion",
  "Spectre",
  "Rogue",
  "Crimson",
  "Fury",
  "Ivory",
  "Onyx",
  "Silver",
  "Ghost",
  "Blizzard",
];
let complimentList = [
  "You look great today! 😊",
  "You’re a smart cookie. 🍪",
  "I bet you make babies smile. 👶",
  "You have impeccable manners. 🙌",
  "I like your style. 😎",
  "You have the best laugh. 😂",
  "I appreciate you. 🙏",
  "You are the most perfect you there is. 🌟",
  "You light up the room. 💡",
  "You deserve a hug right now. 🤗",
  "That color is perfect on you. 🎨",
  "You’re a candle in the darkness. 🕯️",
  "You’re a great example to others. 👍",
  "Nice stream! 🔥",
  "Wow, this is so cool! 😍",
  "Keep up the great work! 💪",
  "I love this content! 💖",
  "Can we get more videos like this? 🎥",
  "This is super helpful! 👌",
  "I’m learning so much from you. 📚",
  "You’re a natural at this. 🎤",
  "This chat is lit! 🔥",
  "Let’s gooo!! 🚀",
  "When is the next stream? ⏳",
  "Hey, just joined. What did I miss? 👀",
  "The quality of the stream is amazing! 🎬",
  "Does anyone else love this? 🙋",
  "Can you do a Q&A next? 🤔",
  "Loving the vibes here. ✨",
  "This is pure entertainment! 🎉",
  "This is exactly what I needed today. 🙏",
  "So relaxing! 😌",
  "Wow, that part was intense! 🔥",
  "Can you explain that a bit more? 🤓",
  "I’m so confused, but this is fun! 😂",
  "Best stream of the day! 🏆",
  "Good vibes only! ✌️",
  "I love how interactive this is. 🎮",
  "Keep the energy up! 💥",
  "Can you slow down a bit? 🐢",
  "Lmao, that was hilarious! 😂",
  "This is gold. 💰",
  "Shoutout to the chat! 🗣️",
  "Wow, the graphics are amazing! 🎨",
  "Please make more videos like this! 🙌",
  "Stream quality is top-notch! 👌",
  "What software are you using? 🖥️",
  "I’m taking notes! 📝",
  "This is so inspirational! 🌈",
  "This made my day. 🌞",
  "I’ll definitely subscribe! 🛎️",
  "Amazing content! 👏",
  "I’ve learned a lot from this! 🎓",
  "Epic stream, can’t wait for more! 🚀",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomCompliment() {
  return complimentList[Math.floor(Math.random() * complimentList.length)];
}
