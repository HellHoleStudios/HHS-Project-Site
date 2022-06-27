const member = "badge-primary" //blue
const lang = "badge-success" //green
const category = "badge-warning" //yellow
const status = "badge-secondary" //gray
const tool = "badge-info" //cyan
const layout = "badge-danger" //red

const style = "badge-primary"

var badges = {
    //members
    "XGN": {
        "kind": member,
        "tooltip": "Main programmer and novice music maker of HHS",
        "display": "XGN"
    },
    "Zzzyt": {
        "kind": member,
        "tooltip": "Programmer and music maker of HHS",
        "display": "Zzzyt"
    },
    "XIZCM": {
        "kind": member,
        "tooltip": "Programmer and server provider of HHS",
        "display": "XIZCM"
    },
    "HDD": {
        "kind": member,
        "tooltip": "Music maker of HHS",
        "display": "HDD"
    },
    "WZZ": {
        "kind": member,
        "tooltip": "Music maker of HHS",
        "display": "Prince"
    },
    "MK": {
        "kind": member,
        "tooltip": "An OIer related to HHS",
        "display": "JGH"
    },
    "SYR": {
        "kind": member,
        "tooltip": "An OIer related to HHS",
        "display": "SYR"
    },
    "guanhuai": {
        "kind": member,
        "tooltip": "An OIer related to HHS",
        "display": "GH"
    },
    "ZHD": {
        "kind": member,
        "tooltip": "A member of HHS",
        "display": "ZHD"
    },
    "ZKY": {
        "kind": member,
        "tooltip": "A member of HHS",
        "display": "ZKY"
    },
    "Starcutter": {
        "kind": member,
        "tooltip": "XGN's brother",
        "display": "Starcutter"
    },
    "HHS": {
        "kind": member,
        "tooltip": "A team-al project instead of a personal project. In other words, the project is done by everyone's effort.",
        "display": "HHS"
    },
    "Astera": {
        "kind": member,
        "tooltip": "Music maker and artist of HHS, aka HYK",
        "display":" Astera"
    },

    //category
    "OI": {
        "name": "OI",
        "kind": category,
        "tooltip": "Olympics Informatics",
        "display": "OI"
    },
    "Website": {
        "name": "Website",
        "kind": category,
        "tooltip": "An application that can be accessed through the Internet",
        "display": "Website"
    },
    "Game": {
        "name": "Game",
        "kind": category,
        "tooltip": "An application for you to play",
        "display": "Game"
    },
    "Stg": {
        "name": "Stg",
        "kind": category,
        "tooltip": "Shooting Game",
        "display": "STG"
    },
    "Typ": {
        "name": "Typ",
        "kind": category,
        "tooltip": "Typing Game",
        "display": "TYP"
    },
    "Sim": {
        "name": "Sim",
        "kind": category,
        "tooltip": "Simulation Game or Simulator",
        "display": "SIM"
    },
    "Tool": {
        "name": "Tool",
        "kind": category,
        "tooltip": "An application to help you do sth",
        "display": "Tool"
    },
    "Spider": {
        "name": "Spider",
        "kind": category,
        "tooltip": "An application to fetch Internet resources",
        "display": "Spider"
    },
    "Mod": {
        "name": "Mod",
        "kind": category,
        "tooltip": "Short for Modification",
        "display": "Mod"
    },
    "Library": {
        "name": "Library",
        "kind": category,
        "tooltip": "A software for other developers to use",
        "display": "Library"
    },
    "RPG": {
        "kind": category,
        "tooltip": "Role-playing game",
        "display": "RPG"
    },
    "Adv": {
        "kind": category,
        "tooltip": "Adventure Game",
        "display": "ADV"
    },
    "Bot": {
        "kind": category,
        "tooltip": "A robot to automate sth",
        "display": "Bot"
    },
    "Telegram": {
        "kind": category,
        "tooltip": "The program is made for Telegram",
        "display": "Telegram"
    },
    "Discord": {
        "kind": category,
        "tooltip": "The program is made for Discord",
        "display": "Discord"
    },
    "Literature": {
        "kind": category,
        "tooltip": "Paper work",
        "display": "Literature"
    },
    "MinecraftMod": {
        "kind": category,
        "tooltip": "A Mod for Minecraft",
        "display": "Minecraft Mod"
    },
    "Clicking": {
        "kind": category,
        "tooltip": "Clicking Games",
        "display": "CLI"
    },
    "Mus": {
        "kind": category,
        "tooltip": "Music Games",
        "display": "MUS"
    },
    "MCServer": {
        "kind": category,
        "tooltip": "Minecraft Servers",
        "display": "MC Server"
    },
    "Video": {
        "kind": category,
        "tooltip": "Videos",
        "display": "Video"
    },
    "Animation": {
        "kind": category,
        "tooltip": "Animation",
        "display": "Animation"
    },
    "Extension": {
        "kind": category,
        "tooltip": "Chrome Extension",
        "display": "Extension"
    },
    "Model": {
        "kind": category,
        "tooltip": "a Machine Learning or AI Model",
        "display": "Model"
    },
    "Music": {
        "kind": category,
        "tooltip": "Music",
        "display": "Music"
    },
    "Beatmap": {
        "kind": category,
        "tooltip": "Osu Beatmap",
        "display": "Osu Beatmap"
    },
    "Playground": {
        "kind": category,
        "tooltip": "Swift Playground",
        "display": "Swift Playground"
    },
    "SFX": {
        "kind": category,
        "tooltip": "Sound Effect",
        "display": "SFX"
    },
    "Gist": {
        "kind": category,
        "tooltip": "A project with not-so-long code, probably written in one or two files. Usually hosted on Github Gist",
        "display": "Gist"
    },
    "APK": {
        "kind": category,
        "tooltip": "Android application available in the format of APK",
        "display": "Android"
    },

    //programming language
    "Java": {
        "name": "Java",
        "kind": lang,
        "tooltip": "The Java programming language",
        "display": "Java"
    },
    "C++": {
        "name": "C++",
        "kind": lang,
        "tooltip": "The C++ programming language",
        "display": "C++"
    },
    "py3": {
        "name": "py3",
        "kind": lang,
        "tooltip": "The Python 3 programming language",
        "display": "Python 3"
    },
    "Shell": {
        "name": "Shell",
        "kind": lang,
        "tooltip": "Linux Shell or Windows Batch File",
        "display": "Shell"
    },
    "Lua": {
        "name": "Lua",
        "kind": lang,
        "tooltip": "The Lua programming language",
        "display": "Lua"
    },
    "JS": {
        "name": "JS",
        "kind": lang,
        "tooltip": "The Javascript programming language",
        "display": "Javascript"
    },
    "HTML": {
        "name": "HTML",
        "kind": lang,
        "tooltip": "The HTML&CSS programming language",
        "display": "HTML&CSS"
    },
    "GML": {
        "kind": lang,
        "tooltip": "The Game Maker Language",
        "display": "GML"
    },
    "Ruby": {
        "kind": lang,
        "tooltip": "The Ruby programming language",
        "display": "Ruby"
    },
    "Nodejs": {
        "kind": lang,
        "tooltip": "The Node.js programming language",
        "display": "Node.js"
    },
    "Markdown": {
        "kind": lang,
        "tooltip": "The Markdown editing language",
        "display": "Markdown"
    },
    "E": {
        "kind": lang,
        "tooltip": "易语言(The programming language E)",
        "display": "E"
    },
    "VB": {
        "kind": lang,
        "tooltip": "The Visual Basic programming language",
        "display": "VB"
    },
    "PHP": {
        "kind": lang,
        "tooltip": "The PHP programming language",
        "display": "PHP"
    },
    "DNH": {
        "kind": lang,
        "tooltip": "Danmakufu Scripting Language",
        "display": "DNH"
    },
    "C#": {
        "kind": lang,
        "tooltip": "C# Programming Language",
        "display": "C#"
    },
    "GDScript": {
        "kind": lang,
        "tooltip": "Godot Script",
        "display": "GDScript"
    },
    "Swift": {
        "kind": lang,
        "tooltip": "Swift by Apple Inc.",
        "display": "Swift"
    },
    "Kotlin": {
        "kind": lang,
        "tooltip": "Kotlin the JVM programming language",
        "display": "Kotlin"
    },


    //tools
    "Tomcat": {
        "name": "Tomcat",
        "kind": tool,
        "tooltip": "Uses Tomcat Server for Java",
        "display": "Tomcat"
    },
    "LuaStg+": {
        "name": "LuaStg+",
        "kind": tool,
        "tooltip": "A Lua Engine to make Touhou-like games",
        "display": "LuaStg+"
    },
    "LibGdx": {
        "name": "LibGdx",
        "kind": tool,
        "tooltip": "A Java framework to make games",
        "display": "LibGdx"
    },
    "KTX": {
        "kind": tool,
        "tooltip": "A Kotlin extension for LibGDX",
        "display": "LibKTX"
    },
    "GameMakerStudio": {
        "kind": tool,
        "tooltip": "Game Maker Studios by YoyoGames",
        "display": "Game Maker Studios"
    },
    "RPGMaker": {
        "kind": tool,
        "tooltip": "RPG Maker XP",
        "display": "RPG Maker XP"
    },
    "TelegramAPI": {
        "kind": tool,
        "tooltip": "The API to make Telegram bots",
        "display": "Telegram API"
    },
    "Discordjs": {
        "kind": tool,
        "tooltip": "The JS API wrapper to make Discord bots",
        "display": "Discord.js"
    },
    "Swing": {
        "kind": tool,
        "tooltip": "The javax.swing.* package",
        "display": "Swing"
    },
    "Forge": {
        "kind": tool,
        "tooltip": "The Minecraft Forge Modloader",
        "display": "Minecraft Forge"
    },
    "CYF": {
        "kind": tool,
        "tooltip": "Create Your Frisk: a program to make Undertale-like games",
        "display": "CYF"
    },
    "Unitale": {
        "kind": tool,
        "tooltip": "A program to make Undertale-like games",
        "display": "Unitale"
    },
    "Hackerrank": {
        "kind": tool,
        "tooltip": "Hackerrank Problemsetting System",
        "display": "Hackerrank"
    },
    "Codeforces": {
        "kind": tool,
        "tooltip": "Codeforces and Polygon Problemsetting System",
        "display": "Polygon"
    },
    "Luogu": {
        "kind": tool,
        "tooltip": "Luogu Problemsetting System",
        "display": "Luogu"
    },
    "CocosCreator": {
        "kind": tool,
        "tooltip": "The Cocos Engine",
        "display": "Cocos Creator"
    },
    "jMonkeyEngine": {
        "kind": tool,
        "tooltip": "The jMonkeyEngine Java Library",
        "display": "jME"
    },
    "Scratch": {
        "kind": tool,
        "tooltip": "The Scratch Software 1.4",
        "display": "Scratch"
    },
    "Gamepy": {
        "kind": tool,
        "tooltip": "The Game.py library",
        "display": "Game.py"
    },
    "Kdenlive": {
        "kind": tool,
        "tooltip": "A video making software",
        "display": "Kdenlive"
    },
    "Mine-Imator": {
        "kind": tool,
        "tooltip": "A video making software to make Minecraft animations",
        "display": "Mine-Imator"
    },
    "Wordpress": {
        "kind": tool,
        "tooltip": "A blog making tool",
        "display": "Wordpress"
    },
    "Hexo": {
        "kind": tool,
        "tooltip": "A static site generating tool",
        "display": "Hexo"
    },
    "PyWright": {
        "kind": tool,
        "tooltip": "A program to make Phoenix Wright games",
        "display": "PyWright"
    },
    "Unreal4": {
        "kind": tool,
        "tooltip": "The Unreal 4 3D Engine",
        "display": "Unreal 4"
    },
    "Maven": {
        "kind": tool,
        "tooltip": "Maven the Development Tool",
        "display": "Maven"
    },
    "Danmakufu": {
        "kind": tool,
        "tooltip": "Danmakufu is an engine to make Touhou-style bullet-hell games",
        "display": "Danmakufu ph3"
    },
    "TestSTG2": {
        "kind": tool,
        "tooltip": "TestSTG2 is an engine by XGN to develop Touhou-style bullet-hell games. Search in the box above to learn more about it.",
        "display": "TestSTG2"
    },
    "TestSTG3": {
        "kind": tool,
        "tooltip": "TestSTG3 is an engine by XGN to develop Touhou-style bullet-hell games using Danmakufu. Search in the box above to learn more about it.",
        "display": "TestSTG3"
    },
    "CreateML": {
        "kind": tool,
        "tooltip": "CreateML is an Apple developer tool to train and test machine learning models easily",
        "display": "CreateML"
    },
    "WinAPI": {
        "kind": tool,
        "tooltip": "Windows C++ API like windows.h",
        "display": "WinAPI"
    },
    "FL": {
        "kind": tool,
        "tooltip": "FL Studio is a Digital Audio Workstation(DAW).",
        "display": "FL Studio"
    },
    "GB": {
        "kind": tool,
        "tooltip": "Garage Band is a Digital Audio Workstation(DAW) by Apple",
        "display": "GarageBand"
    },
    "FLMobile": {
        "kind": tool,
        "tooltip": "Mobile version of FL Studio.",
        "display": "FL Mobile"
    },
    "Vegas": {
        "kind": tool,
        "tooltip": "Sony Vegas is a video editing application.",
        "display": "Vegas"
    },
    "FMT": {
        "kind": tool,
        "tooltip": "Famitracker(FMT) is a 8bit music making software.",
        "display": "Famitracker"
    },
    "FreePiano": {
        "kind": tool,
        "tooltip": "FreePiano is a virtual MIDI keyboard.",
        "display": "FreePiano"
    },
    "Godot": {
        "kind": tool,
        "tooltip": "Godot3 engine",
        "display": "Godot"
    },
    "Audacity": {
        "kind": tool,
        "tooltip": "Audacity is a free audio editing software",
        "display": "Audacity"
    },
    "SwiftUI": {
        "kind": tool,
        "tooltip": "SwiftUI is a Swift UI toolkit by Apple",
        "display": "SwiftUI"
    },
    "SpriteKit": {
        "kind": tool,
        "tooltip": "SpriteKit is a Swift 2D Game Development Kit by Apple",
        "display": "SpriteKit"
    },
    "TTE": {
        "kind": tool,
        "tooltip": "Touhou Typing Engine is a closed-source LibGDX-based engine to make Touhou-style Typing Game by XGN.",
        "display": "TTE"
    },
    "TML": {
        "kind": tool,
        "tooltip": "tModLoader - the official mod loader for Terraria",
        "display": "TML"
    },
    "KoTo": {
        "kind": tool,
        "tooltip": "Homemade Kotlin Danmaku Engine",
        "display": "KoTo"
    },
    "JMahjong": {
        "kind": tool,
        "tooltip": "Homemade Java Mahjong Library",
        "display": "JMahjong"
    },
    "Ktor": {
        "kind": tool,
        "tooltip": "The Kotlin Server Library",
        "display": "Ktor"
    },
    "Java N-IDE":{
        "kind":tool,
        "tooltip":"An android app for java&android development on a mobile phone",
        "display":"Java N-IDE",
    },

    //layout lang
    "ENG": {
        "name": "ENG",
        "kind": layout,
        "tooltip": "User Interface is in English",
        "display": "English"
    },
    "JPN": {
        "name": "JPN",
        "kind": layout,
        "tooltip": "User Interface is in Japanese",
        "display": "Japanese"
    },
    "CHN": {
        "name": "CHN",
        "kind": layout,
        "tooltip": "User Interface is in Chinese",
        "display": "Chinese"
    },
    "NONE": {
        "name": "NONE",
        "kind": layout,
        "tooltip": "The program has no language displayed",
        "display": "None"
    },
    "UNKNOWN": {
        "kind": layout,
        "tooltip": "The program's language is unknown",
        "display": "Unknown"
    },

    //distribution status
    "SOURCE": {
        "kind": layout,
        "tooltip": "The program is open-sourced",
        "display": "Source"
    },
    "MAC": {
        "kind": layout,
        "tooltip": "The program can be run on macOS with certain prerequisites",
        "display": "MacOS"
    },
    "WIN": {
        "kind": layout,
        "tooltip": "The program can be run on Windows with proper prerequisites",
        "display": "Windows"
    },
    "LINUX": {
        "kind": layout,
        "tooltip": "The program can be run on Linux with proper prerequisites",
        "display": "Linux"
    },
    "PY": {
        "kind": layout,
        "tooltip": "The program can be run in Python Runtime with proper prerequisites",
        "display": "PRE"
    },
    "JRE": {
        "kind": layout,
        "tooltip": "The program can be run in Java Runtime Environment with proper prerequisites",
        "display": "JRE"
    },
    "WEB": {
        "kind": layout,
        "tooltip": "The program can be run in a modern web browser with proper prerequisites",
        "display": "Web"
    },

    //status
    "Jamming": {
        "name": "Jamming",
        "kind": status,
        "tooltip": "The project is being updated slowly",
        "display": "Inactive"
    },
    "Done": {
        "name": "Done",
        "kind": status,
        "tooltip": "The project has been archieved",
        "display": "Done"
    },
    "Working": {
        "kind": status,
        "tooltip": "The project is being carried out or updated",
        "display": "Active"
    },
    "Deserted": {
        "kind": status,
        "tooltip": "The project will hardly be updated",
        "display": "Deserted"
    },
    "Info": {
        "kind": status,
        "tooltip": "Attention: Tag/Source/Information required/incomplete",
        "display": "Info Incomplete"
    },
    "Planned": {
        "kind": status,
        "tooltip": "Planned/Ongoing project. Please stay tuned!",
        "display": "Planned"
    },

    //style
    "Touhou": {
        "kind": style,
        "tooltip": "Touhou style music/remix",
        "display": "Touhou"
    },
    "8bit": {
        "kind": style,
        "tooltip": "8-bit or Chiptune music",
        "display": "8Bit"
    },
    "YTPMV": {
        "kind": style,
        "tooltip": "Youtube Poop Music Video. Also known as otoMAD",
        "display": "YTPMV"
    },
    "Remix": {
        "kind": style,
        "tooltip": "Remix of an existing piece (including transcriptions, but except YTPMVs)",
        "display": "Remix"
    },
    "Live": {
        "kind": style,
        "tooltip": "Live recording",
        "display": "Live"
    },
    "Test": {
        "kind": style,
        "tooltip": "Test melody",
        "display": "Test"
    },
}