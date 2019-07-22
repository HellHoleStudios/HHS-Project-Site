
var template={
    "name":"",
    "link":"",
    "author":"",
    "release":"",
    "coauthor":"",
    "category":"",
    "subcategory":"",
    "status":"",
    "lang":""
}

var tablehead=[
    ["Name","name"],
    ["Category","category"],
    ["Sub Category","subcategory"],
    ["Author","author"],
    ["Coauthor","coauthor"],
    ["Release Date","release"],
    ["Programming Language","lang"],
    ["Status","status"],
    ["Link","link"],
]

var data=[
    {
        "name":"HHSOJ",
        "link":"https://github.com/XiaoGeNintendo/HHSOJ-Web-Edition",
        "author":"XGN",
        "release":"2018-09-12",
        "coauthor":"Zzzyt,XIZCM",
        "category":"OI",
        "subcategory":"OI SOFTWARE",
        "status":"Working",
        "lang":"Java,C++,etc."
    },
    {
        "name":"THHHS",
        "link":"http://blog.hellholestudios.club/post/2019/05/25/%E6%9D%B1%E6%96%B9%E5%9C%B0%E7%8D%84%E6%B4%9E%E6%96%87%E6%A1%A3touhou-shining-heroes-in-deep-dark-hole/",
        "author":"XGN",
        "release":"2019-05-25",
        "coauthor":"Zzzyt,WZZ",
        "category":"GAME",
        "subcategory":"STG GAME",
        "status":"Working",
        "lang":"LuaStg"
    },
    {
        "name":"Rocket Simulator",
        "link":"https://github.com/Zzzzzzyt/RocketSimulator",
        "author":"Zzzyt",
        "release":"2019-06-13",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"SIM GAME",
        "status":"Working",
        "lang":"LibGdx"
    },
    {
        "name":"Test STG2",
        "link":"https://github.com/XiaoGeNintendo/-LibGdx-Test-STG2",
        "author":"XGN",
        "release":"2019-07-01",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"STG GAME",
        "status":"Working",
        "lang":"LibGdx"
    },
    {
        "name":"Codeforces Submission Reviewer",
        "link":"https://github.com/XiaoGeNintendo/Codeforces-Submission-Reviewer",
        "author":"XGN",
        "release":"2018-12-31",
        "coauthor":"",
        "category":"OI",
        "subcategory":"OI TOOL",
        "status":"Done",
        "lang":"JS,HTML"
    },
    {
        "name":"Touhou Music Fetcher",
        "link":"https://github.com/XiaoGeNintendo/TouhouMusicFetcher",
        "author":"XGN",
        "release":"2019-06-20",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"TOOL",
        "status":"Done",
        "lang":"Java"
    },
    {
        "name":"Codeforces Data Copier",
        "link":"https://github.com/XiaoGeNintendo/CodeforcesDataCopier",
        "author":"XGN",
        "release":"2019-06-08",
        "coauthor":"",
        "category":"OI",
        "subcategory":"OI TOOL",
        "status":"Done",
        "lang":"Py3"
    },
    {
        "name":"Pokemon Gif Fetcher",
        "link":"https://github.com/XiaoGeNintendo/PokemonGifFetcher",
        "author":"XGN",
        "release":"2019-06-08",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"TOOL",
        "status":"Done",
        "lang":"Py3"
    },
    {
        "name":"Lua STG Fix",
        "link":"https://github.com/XiaoGeNintendo/LuaStgPlusFix",
        "author":"XGN",
        "release":"2019-06-07",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"TOOL",
        "status":"Done",
        "lang":"Lua"
    },
    {
        "name":"CPP Confusor",
        "link":"https://github.com/XiaoGeNintendo/cpp-confusor",
        "author":"XGN",
        "release":"2019-04-15",
        "coauthor":"",
        "category":"OI",
        "subcategory":"OI TOOL",
        "status":"Done",
        "lang":"C++"
    },
    {
        "name":"Universe Model",
        "link":"https://github.com/Zzzzzzyt/UniverselModel",
        "author":"Zzzyt",
        "release":"2019-05-08",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"SIM GAME",
        "status":"Done",
        "lang":"LibGdx"
    },
    {
        "name":"Paper Scissor Stone",
        "link":"https://github.com/Zzzzzzyt/PaperScissorStone",
        "author":"Zzzyt",
        "release":"2019-02-14",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"OTHER GAME",
        "status":"Done",
        "lang":"Java"
    },
    {
        "name":"General Mod Loader",
        "link":"https://github.com/Zzzzzzyt/General-ModLoader",
        "author":"Zzzyt",
        "release":"2018-05-11",
        "coauthor":"",
        "category":"DEVELOP",
        "subcategory":"JAVA PACKAGE",
        "status":"Done",
        "lang":"Java"
    },
    {
        "name":"ZJSTG",
        "link":"https://github.com/Zzzzzzyt/ZJSTG",
        "author":"HDD",
        "release":"2018-10-06",
        "coauthor":"Zzzyt",
        "category":"GAME",
        "subcategory":"STG GAME",
        "status":"Deserted",
        "lang":"GameMaker"
    },
    {
        "name":"ZYTALE",
        "link":"https://github.com/Zzzzzzyt/ZYTALE",
        "author":"Zzzyt",
        "release":"2018-03-11",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"RPG GAME",
        "status":"Deserted",
        "lang":"GameMaker"
    },
    {
        "name":"Hell Hole Legend",
        "link":"",
        "author":"XGN",
        "release":"2018-07-08",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"RPG GAME",
        "status":"Done",
        "lang":"RPG Maker XP"
    },
    {
        "name":"Slap",
        "link":"https://blog.hellholestudios.club/post/2019/05/12/%E8%B6%99%E9%8E%B9%E5%9C%A3%E6%85%95%E5%B2%AD%EF%BD%9Ecircle-cycling-circumstance%EF%BD%9E/",
        "author":"XGN",
        "release":"2019-05-12",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"ADV GAME",
        "status":"Deserted",
        "lang":"LibGdx"
    },
    {
        "name":"Slap v1.1",
        "link":"https://blog.hellholestudios.club/post/2019/05/19/slap-1-1-release/",
        "author":"XGN",
        "release":"2019-05-19",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"ADV GAME",
        "status":"Deserted",
        "lang":"LibGdx"
    },
    {
        "name":"Netease Music Downloader",
        "link":"https://github.com/DamnXIZCM/netease-music-download",
        "author":"XIZCM",
        "release":"2019-03-27",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"TOOL",
        "status":"Done",
        "lang":"Py3"
    },
    {
        "name":"Codeforces Telegram Notifier",
        "link":"https://github.com/DamnXIZCM/Codeforces-telegram-notifier",
        "author":"XIZCM",
        "release":"2019-06-08",
        "coauthor":"",
        "category":"BOT",
        "subcategory":"TELEGRAM BOT",
        "status":"Done",
        "lang":"Py3"
    },
    {
        "name":"Testbot",
        "link":"",
        "author":"XGN",
        "release":"",
        "coauthor":"",
        "category":"BOT",
        "subcategory":"DISCORD BOT",
        "status":"Done",
        "lang":"JS"
    },
    {
        "name":"Orange Boy Can You Solve It Out?",
        "link":"https://blog.hellholestudios.club/post/tag/obcysio/",
        "author":"XGN,MonkeyKing",
        "release":"2019-04-14",
        "coauthor":"",
        "category":"LITERATURE",
        "subcategory":"OI LITERATURE",
        "status":"Working",
        "lang":"Markup"
    },
    {
        "name":"The story of Tengfei",
        "link":"https://blog.hellholestudios.club/post/category/%E8%BF%9E%E8%BD%BD%E5%86%85%E5%AE%B9/",
        "author":"XGN",
        "release":"2019-04-10",
        "coauthor":"",
        "category":"LITERATURE",
        "subcategory":"OTHER LITERATURE",
        "status":"Deserted",
        "lang":"Markup"
    },
    {
        "name":"Sound Guess Game",
        "link":"https://github.com/XiaoGeNintendo/SoundGuessGame",
        "author":"XGN",
        "release":"2019-02-13",
        "coauthor":"Zzzyt",
        "category":"GAME",
        "subcategory":"OTHER GAME",
        "status":"Done",
        "lang":"Java"
    },
    {
        "name":"Sound Guess Game Pokemon Mod",
        "link":"https://github.com/XiaoGeNintendo/SoundGuessGamePokemonMod",
        "author":"XGN",
        "release":"2019-02-13",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"OTHER GAME",
        "status":"Done",
        "lang":"Java"
    },
    {
        "name":"Sound Guess Game HHS Mod",
        "link":"",
        "author":"Zzzyt",
        "release":"",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"OTHER GAME",
        "status":"Done",
        "lang":"Java"
    },
    {
        "name":"LibLrc",
        "link":"https://github.com/XiaoGeNintendo/LibLrc",
        "author":"XGN",
        "release":"2019-02-09",
        "coauthor":"",
        "category":"DEVELOP",
        "subcategory":"JAVA LIBRARY",
        "status":"Done",
        "lang":"Java"
    },
]

function sort(by){
    data.sort(function(a,b){
        
        if(a[by]<b[by]){
            return -1;
        }
        if(a[by]>b[by]){
            return 1;
        }
        return 0;
    });

    
}

var curSort="";

function Msort(by){
    sort(by);
    curSort=by;
    refreshTable();
    document.getElementById("sort").innerText="Currently Sort By:"+by;
}

function refreshTable(){
    var node=document.getElementById("table");
    
    var tmp="";

    tmp+="<table border=\"1\" class=\"table table-hover table-striped table-bordered table-responsive\">";
    //start rendering th
    tmp+="<thead><tr>";
    for(var i=0;i<tablehead.length;i++){
        if(tablehead[i][1]==curSort){
            tmp+="<th onclick=\"Msort('"+tablehead[i][1]+"')\">"+tablehead[i][0]+"<i class=\"fa fa-sort-up\"></i></th>";
        }else{
            tmp+="<th onclick=\"Msort('"+tablehead[i][1]+"')\">"+tablehead[i][0]+"<i class=\"fa fa-sort\"></i></th>";
        }
    }
    tmp+="</tr></thead><tbody>";

    //start rendering data
    for(var i=0;i<data.length;i++){
        tmp+="<tr>";
        for(var j=0;j<tablehead.length;j++){
            if(tablehead[j][1]=="link"){
                
                if(data[i][tablehead[j][1]].includes("github.com")){
                    tmp+="<td><i class=\"fa fa-github\"></i><a href=\""+data[i][tablehead[j][1]]+"\">Github</a></td>";
                }else{
                    if(data[i][tablehead[j][1]].includes("blog.hellholestudios.club")){
                        tmp+="<td><i class=\"fa fa-wordpress\"></i><a href=\""+data[i][tablehead[j][1]]+"\">Blog</a></td>";
                    }else{
                        if(data[i][tablehead[j][1]]==""){
                            tmp+="<td><i class=\"fa fa-close\">No Link</i></td>";
                        }else{
                            tmp+="<td><a href=\""+data[i][tablehead[j][1]]+"\">Link</a></td>";
                        }
                        
                    }
                    
                }
                
            }else{
                tmp+="<td>"+data[i][tablehead[j][1]]+"</td>";
            }
            
        }
        tmp+="</tr>";
    }
    tmp+="</tbody></table>";

    node.innerHTML=tmp;

}

