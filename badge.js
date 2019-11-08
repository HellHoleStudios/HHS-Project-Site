const member="badge-primary" //blue
const lang="badge-success" //green
const category="badge-warning" //yellow
const status="badge-secondary" //gray
const tool="badge-info" //cyan
const layout="badge-danger" //red

var badges={
    //members
    "XGN":{
        "kind":member,
        "tooltip":"Main programmer of HHS",
        "display":"XGN"
    },
    "Zzzyt":{
        "kind":member,
        "tooltip":"Programmer and music maker of HHS",
        "display":"Zzzyt"
    },
    "XIZCM":{
        "kind":member,
        "tooltip":"Programmer of HHS",
        "display":"XIZCM"
    },
    "HDD":{
        "kind":member,
        "tooltip":"Music maker of HHS",
        "display":"HDD"
    },
    "WZZ":{
        "kind":member,
        "tooltip":"Music maker of HHS",
        "display":"Prince"
    },
    "MK":{
        "kind":member,
        "tooltip":"An OIer related to HHS",
        "display":"Monkey King"
    },
    "SYR":{
        "kind":member,
        "tooltip":"An OIer related to HHS",
        "display":"Mackerel Pike"
    },

    //category
    "OI":{
        "name":"OI",
        "kind":category,
        "tooltip":"Olympics Informatics",
        "display":"OI"
    },
    "Website":{
        "name":"Website",
        "kind":category,
        "tooltip":"An application that can be accessed through the Internet",
        "display":"Website"
    },
    "Game":{
        "name":"Game",
        "kind":category,
        "tooltip":"An application for you to play",
        "display":"Game"
    },
    "Stg":{
        "name":"Stg",
        "kind":category,
        "tooltip":"Shooting Game",
        "display":"STG"
    },
    "Sim":{
        "name":"Sim",
        "kind":category,
        "tooltip":"Simulation Game or Simulator",
        "display":"SIM"
    },
    "Tool":{
        "name":"Tool",
        "kind":category,
        "tooltip":"An application to help you do sth",
        "display":"Tool"
    },
    "Spider":{
        "name":"Spider",
        "kind":category,
        "tooltip":"An application to fetch Internet resources",
        "display":"Spider"
    },
    "Mod":{
        "name":"Mod",
        "kind":category,
        "tooltip":"Short for Modification",
        "display":"Mod"
    },
    "Library":{
        "name":"Library",
        "kind":category,
        "tooltip":"A software for other developers to use",
        "display":"Library"
    },
    "RPG":{
        "kind":category,
        "tooltip":"Role-playing game",
        "display":"RPG"
    },
    "Adv":{
        "kind":category,
        "tooltip":"Adventure Game",
        "display":"ADV"
    },
    "Bot":{
        "kind":category,
        "tooltip":"A robot to automate sth",
        "display":"Bot"
    },
    "Telegram":{
        "kind":category,
        "tooltip":"The program is made for Telegram",
        "display":"Telegram"
    },
    "Discord":{
        "kind":category,
        "tooltip":"The program is made for Discord",
        "display":"Discord"
    },
    "Literature":{
        "kind":category,
        "tooltip":"Paper work",
        "display":"Literature"
    },

    //programming language
    "Java":{
        "name":"Java",
        "kind":lang,
        "tooltip":"The Java programming language",
        "display":"Java"
    },
    "C++":{
        "name":"C++",
        "kind":lang,
        "tooltip":"The C++ programming language",
        "display":"C++"
    },
    "py3":{
        "name":"py3",
        "kind":lang,
        "tooltip":"The Python 3 programming language",
        "display":"Python 3"
    },
    "Shell":{
        "name":"Shell",
        "kind":lang,
        "tooltip":"Linux Shell or Windows Batch File",
        "display":"Shell"
    },
    "Lua":{
        "name":"Lua",
        "kind":lang,
        "tooltip":"The Lua programming language",
        "display":"Lua"
    },
    "JS":{
        "name":"JS",
        "kind":lang,
        "tooltip":"The Javascript programming language",
        "display":"Javascript"
    },
    "HTML":{
        "name":"HTML",
        "kind":lang,
        "tooltip":"The HTML programming language",
        "display":"HTML"
    },
    "GML":{
        "kind":lang,
        "tooltip":"The Game Maker Language",
        "display":"GML"
    },
    "Ruby":{
        "kind":lang,
        "tooltip":"The Ruby programming language",
        "display":"Ruby"
    },
    "Nodejs":{
        "kind":lang,
        "tooltip":"The Node.js programming language",
        "display":"Node.js"
    },
    "Markup":{
        "kind":lang,
        "tooltip":"The Markup language",
        "display":"Markup"
    },


    //tools
    "Tomcat":{
        "name":"Tomcat",
        "kind":tool,
        "tooltip":"Uses Tomcat Server for Java",
        "display":"Tomcat"
    },
    "LuaStg+":{
        "name":"LuaStg+",
        "kind":tool,
        "tooltip":"A Lua Engine to make Touhou-like games",
        "display":"LuaStg+"
    },
    "LibGdx":{
        "name":"LibGdx",
        "kind":tool,
        "tooltip":"A Java framework to make games",
        "display":"LibGdx"
    },
    "GameMakerStudio":{
        "kind":tool,
        "tooltip":"Game Maker Studios by YoyoGames",
        "display":"Game Maker Studios"
    },
    "RPGMaker":{
        "kind":tool,
        "tooltip":"RPG Maker XP",
        "display":"RPG Maker XP"
    },
    "TelegramAPI":{
        "kind":tool,
        "tooltip":"The API to make Telegram bots",
        "display":"Telegram API"
    },
    "Discordjs":{
        "kind":tool,
        "tooltip":"The JS API wrapper to make Discord bots",
        "display":"Discord.js"
    },
    

    //layout lang
    "ENG":{
        "name":"ENG",
        "kind":layout,
        "tooltip":"User Interface is in English",
        "display":"English"
    },
    "JPN":{
        "name":"JPN",
        "kind":layout,
        "tooltip":"User Interface is in Japanese",
        "display":"Japanese"
    },
    "CHN":{
        "name":"CHN",
        "kind":layout,
        "tooltip":"User Interface is in Chinese",
        "display":"Chinese"
    },
    "NONE":{
        "name":"NONE",
        "kind":layout,
        "tooltip":"The program has no language displayed",
        "display":"None"
    },



    //status
    "Jamming":{
        "name":"Jamming",
        "kind":status,
        "tooltip":"The project is being updated slowly",
        "display":"Inactive"
    },
    "Done":{
        "name":"Done",
        "kind":status,
        "tooltip":"The project has been archieved",
        "display":"Done"
    },
    "Working":{
        "kind":status,
        "tooltip":"The project is being carried out or updated",
        "display":"Active"
    },
    "Deserted":{
        "kind":status,
        "tooltip":"The project will hardly be updated",
        "display":"Deserted"
    },
}