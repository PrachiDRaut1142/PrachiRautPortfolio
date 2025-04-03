const commandResponses: Record<string, string[]> = {
    help: [
        "🆘 Available commands:<br> - <strong>whoami</strong> - About me 🤖<br> - <strong>experience</strong> - My work history 💼<br> - <strong>projects</strong> - My best work 🚀<br> - <strong>skills</strong> - My tech stack 🛠️<br> - <strong>joke</strong> - Get a funny joke 😂<br> - <strong>gif</strong> - See a random gif 🎥<br> - <strong>quote</strong> - Get an inspiring quote 🌟<br> - <strong>clear</strong> - Clear the terminal 🧹",
        "🔎 Need help? Here are the commands you can use: <br> - whoami 🤖 | experience 💼 | projects 🚀 <br> - skills 🛠️ | joke 😂 | gif 🎥 | quote 🌟 | clear 🧹",
        "🎩✨ Type 'whoami' to learn about me, 'projects' to see my work, or 'experience' for my job history!",
        "The only command I can't process is 'make coffee' ☕... yet. But you can try 'joke' for some developer humor! 😂",
        "📜 Available commands: <br> - whoami | experience | projects | skills | joke | gif | quote | clear. <br> Go ahead, try one!",
        "Did you mean 'Help! I’m stuck in a terminal!'? 😆 Just kidding. Try 'joke' for a laugh or 'gif' for something fun!",
        "Commands are free, so go wild! Just don’t crash me. 😜 You can start with 'whoami' or 'experience'!",
        "‘help’ called. Assistance is on its way! 🚑💨 You might want to try 'projects' to see my work!",
        "Ever feel like computers know too much? Don't worry, I only know these commands: whoami, experience, projects, skills, joke, gif, quote, and clear! 😎",
        "Type 'clear' if things get messy. I won't judge. 😆 And if you're stuck, just use 'help' again!"
    ],

    whoami: [
        "👋 Hey! I’m <strong>Prachi Digambar Raut</strong>, a full-stack developer who turns coffee ☕ into code 💻 and bugs 🐞 into features!",
        "🚀 Software developer, problem solver, and part-time bug detective. 🔍",
        "I write code, fix bugs, and occasionally wonder why I chose this career. 😆",
        "I make APIs faster, UIs smoother, and debugging less painful. (Well, almost!)",
        "You found me! Now, type 'experience' to see where I’ve been. 🛤️",
        "A React and .NET wizard 🧙‍♀️—making the web faster, one component at a time.",
        "I automate things, optimize APIs, and keep servers from throwing tantrums. 🖥️🔥",
        "I code, I debug, I deploy, I repeat. Sometimes, I even sleep! 😴",
        "Software engineer by day, meme lord by night. 😆",
        "One day, I’ll write code so clean it comments itself. Today is not that day. 😂"
    ],

    experience: [
        "💼 <strong>Automatebuddy Pvt. Ltd.</strong> (2022 - Present) - Software Developer <br> Built scalable React apps, optimized .NET APIs, and automated workflows with Hangfire. 🚀",
        "👩‍💻 Developed full-stack applications using **React, .NET MVC, and Hangfire** to streamline processes and boost efficiency. 💡",
        "🚀 Built high-speed **React applications and powerful .NET APIs**—because fast apps are happy apps. 🏎️",
        "From **e-commerce platforms to event management systems**, I’ve built and optimized them all! 🎟️💰",
        "💬 Integrated **WhatsApp Business API**, making messaging flows smarter and **boosting customer engagement by 35%**. 📩",
        "🛠️ Automated background jobs using **Hangfire**, so humans could do more important things (like coffee breaks ☕).",
        "🏪 Developed a **POS system**, reducing checkout times by **25%**—because no one likes waiting in line. 😜",
        "📊 Reduced API response time by **25%**, because every millisecond counts! ⏳",
        "🎭 Built an **event management platform** that made registrations effortless and **increased user engagement by 20%**. 🎟️",
        "🐞 I make **systems efficient and bugs nervous**. Sometimes, they fight back, but I always win. 💻🔥",
    ],

    projects: [
        "🚀 Check out my best work on GitHub: <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>github.com/PrachiDRaut1142</a>",
        "🔗 My GitHub is like my digital playground. Explore it here: <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>github.com/PrachiDRaut1142</a> 🎢",
        "⚡ Want to see my coding magic? It's all here: <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>github.com/PrachiDRaut1142</a>",
        "Warning: My GitHub may contain addictive projects. Proceed with caution. 🚀 <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>Check it out!</a>",
        "Some say my best work is on GitHub. Some say it's in my dreams. You decide: <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>github.com/PrachiDRaut1142</a> 🤓",
        "If you love React, .NET, or automation, you'll love my projects! See them all here: <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>github.com/PrachiDRaut1142</a> 😍",
        "My GitHub has all my best experiments... and none of the Stack Overflow copy-pastes. 😉 <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>Take a look!</a>",
        "Some people collect stamps, I collect repositories. 🏗️ Wanna see? <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>github.com/PrachiDRaut1142</a>",
        "I build things that make life easier. See for yourself here: <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>github.com/PrachiDRaut1142</a> 🔗",
        "Go on, explore my GitHub. I promise it won’t bite... unless you clone something weird. 😂 <a href='https://github.com/PrachiDRaut1142' class='text-blue-400'>Check it out!</a>"
    ],

    joke: [
        "😂 Why do developers prefer dark mode? Because light attracts bugs! 🐛",
        "Why don’t programmers like nature? Too many bugs. 🐞🌿",
        "How do you comfort a JavaScript bug? You console it. 😂",
        "Why was the function feeling sad? Because it didn’t get called. 📞",
        "I told my WiFi we needed to talk. Now it’s giving me the silent treatment. 😭",
        "Why do developers hate writing documentation? Because the code is self-explanatory… until it isn’t. 🤔",
        "There are 10 types of people in the world: those who understand binary and those who don’t. 😆",
        "Why did the developer go broke? Because he used up all his cache. 💸",
        "Debugging is like being the detective in a crime movie where you are also the murderer. 🔍",
        "CSS is easy… said no one ever. 😵"
    ],

    gif: [
        "<img src='https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif' class='gif' alt='Funny Gif'>",
        "<img src='https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif' class='gif' alt='Funny Gif'>",
        "<img src='https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif' class='gif' alt='Funny Gif'>",
        "<img src='https://media.giphy.com/media/QHE5gWI0QjqF2/giphy.gif' class='gif' alt='Funny Gif'>",
        "<img src='https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif' class='gif' alt='Funny Gif'>",
        "<img src='https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif' class='gif' alt='Funny Gif'>",
        "<img src='https://media.giphy.com/media/MWSRkVoNaC30A/giphy.gif' class='gif' alt='Funny Gif'>",
        "<img src='https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif' class='gif' alt='Funny Gif'>",
        "<img src='https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif' class='gif' alt='Funny Gif'>",
        "<img src='https://media.giphy.com/media/yJFeycRK2DB4c/giphy.gif' class='gif' alt='Funny Gif'>"
    ],
    dob: [
        "🎂 Born on **11th April 2002**—the day a future coding wizard arrived! 🧙‍♀️",
        "🗓️ **April 11, 2002**—the day the world gained a bug-fixing, API-optimizing legend. 💻",
        "📅 My birthday is **11th April 2002**. Feel free to send React component gifts! 🎁",
        "🎉 I was born on **April 11, 2002**—back when Internet Explorer still had hope. 😆",
        "🐣 11th April 2002—the day I entered the world. Debugging life ever since. 🔧",
        "🎂 Mark your calendar—**April 11, 2002**. Cake is always welcome. 🍰",
        "🎈 Born on **April 11, 2002**. Been scripting my life ever since. 😎",
        "📜 11th April 2002—a legendary dev in the making! 💻🔥",
        "🤖 Birthday: **April 11, 2002**. Version updates: Continuous. 🚀",
        "🔢 My version 1.0 was released on **April 11, 2002**. Still receiving updates! 💡"
    ],

    location: [
        "📍 Currently coding from **Navi-Mumbai, India**—where the bytes never sleep! 💻",
        "🌍 Based in **Navi-Mumbai, India**. Sometimes in IDEs, sometimes in reality. 😆",
        "🗺️ **Navi-Mumbai, India**—where my WiFi is stable, and my coffee is strong. ☕",
        "🏙️ I live in **Navi-Mumbai**—where bugs fear me and APIs obey me. 💪",
        "📌 Navi-Mumbai, India. If I’m not coding, I’m probably debugging life. 🔧",
        "🌟 Navi-Mumbai: Land of chai ☕, fast code ⚡, and late-night debugging. 🌙",
        "🏠 Navi-Mumbai, India—where my servers run, and my dreams of clean code live. 😴",
        "🚀 Currently in **Navi-Mumbai**, optimizing APIs and dodging CORS errors. 🏃‍♀️",
        "🛤️ Navi-Mumbai, India—the place where I turn caffeine into code! ☕💻",
        "🌆 Based in Navi-Mumbai, but my mind is always in a code editor. 💡"
    ],

    email: [
        "📧 Shoot me an email at **prachiraut446@gmail.com**—spam bots, stay away! 🚫",
        "📨 Need to reach me? **prachiraut446@gmail.com**—just don’t send error logs. 😆",
        "📩 My inbox is open at **prachiraut446@gmail.com**—unless you’re selling NFTs. 😜",
        "💌 Got an idea or a bug report? Email me at **prachiraut446@gmail.com**! 🚀",
        "📥 Contact me at **prachiraut446@gmail.com**—or just send memes, I won’t mind. 😂",
        "✉️ **prachiraut446@gmail.com**—I read emails faster than I debug code! ⚡",
        "📬 Drop a mail at **prachiraut446@gmail.com**. No 'unsubscribe' button, sorry. 😆",
        "📧 Want to talk tech? Email me at **prachiraut446@gmail.com**. 📩",
        "📤 **prachiraut446@gmail.com**—because sometimes, even devs need human contact. 😅",
        "🖥️ Email me at **prachiraut446@gmail.com**. Auto-reply includes bad jokes. 🤖"
    ],

    phone: [
        "📞 Call me at **+91 7666275213**, but tech support is extra. 😆",
        "📱 Need to talk? **+91 7666275213**—unless it’s about IE support, then no. 😜",
        "📲 Ring me at **+91 7666275213**—but don’t expect free debugging help. 😂",
        "📞 **+91 7666275213**—for business, tech talk, or just to say hi! 👋",
        "📡 Dial **+91 7666275213**, and let’s talk code, projects, or pizza. 🍕",
        "📢 Call me at **+91 7666275213**—but if it’s about a bug, submit a PR instead. 😆",
        "📱 **+91 7666275213**—only calling rates apply, debugging is free. 😜",
        "☎️ Need me? **+91 7666275213**—Carrier pigeons also accepted. 🕊️",
        "📞 **+91 7666275213**—but please, no 'urgent' feature requests at 2 AM. 😴",
        "📲 **+91 7666275213**—I answer calls faster than I fix merge conflicts. 🚀"
    ],

    cls: [
        "🧹 Screen cleared! But not your debugging errors. Good luck! 😜",
        "Whoosh! All gone. But your worries remain. 😆",
        "Clearing the screen… but not your search history. 😏",
        "Ctrl + Z won’t undo this. 😬",
        "Clean slate! Now go break something again. 😆",
        "Now it’s clean. Unlike my code at 3 AM. 🌙",
        "Cleared! But did you save your work? 😳",
        "Gone like that one bug that only happens in production. 🚀",
        "Ahh, fresh start! Like a new git branch. 🌱",
        "Clear! Just like my mind when I forget to push changes. 🤯"
    ]
};
const getRandomResponse = (command: string) => {
    const responses = commandResponses[command];
    return responses ? responses[Math.floor(Math.random() * responses.length)] : "Command not found.";
};
export { getRandomResponse }