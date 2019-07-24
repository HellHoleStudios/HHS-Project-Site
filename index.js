
var template={
    "name":"",
    "link":"",
    "author":"",
    "release":"",
    "coauthor":"",
    "category":"",
    "subcategory":"",
    "status":"",
    "lang":"",
    "comment":"", //optional
    "rating":0, //optional,0-4,default is 0. 
}
/*
Rating System
0=no one uses
1=You are using
2=some people in HHS are using
3=some people out of HHS are using
4=everyone should know this project
*/
var tablehead=[
    ["Name","name"],
    ["Category","category"],
    ["Sub Category","subcategory"],
    ["Author","author"],
    ["Coauthor","coauthor"],
    ["Release Date","release"],
    ["Language","lang"],
    ["Status","status"],
    ["Link","link"],
    ["Hot","rating"]
]

var data=[
    {
        "name":"HHSOJ Web Edition",
        "link":"https://github.com/XiaoGeNintendo/HHSOJ-Web-Edition",
        "author":"XGN",
        "release":"2018-09-12",
        "coauthor":"Zzzyt,XIZCM",
        "category":"OI",
        "subcategory":"OI SOFTWARE",
        "status":"Working",
        "lang":"Java,C++,etc.",
        "rating":4
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
        "lang":"LuaStg",
        "rating":2
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
        "lang":"LibGdx",
        "rating":2
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
        "lang":"LibGdx",
        "rating":1
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
        "lang":"JS,HTML",
        "rating":2
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
        "lang":"Java",
        "rating":1
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
        "lang":"Py3",
        "rating":1
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
        "lang":"Py3",
        "rating":1
    },
    {
        "name":"Lua STG Fix",
        "link":"https://github.com/XiaoGeNintendo/LuaStgPlusFix",
        "author":"XGN",
        "release":"2019-06-07",
        "coauthor":"",
        "category":"MOD",
        "subcategory":"SOFTWARE MOD",
        "status":"Done",
        "lang":"Lua",
        "rating":0
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
        "lang":"C++",
        "rating":2
    },
    {
        "name":"Universe Model",
        "link":"https://github.com/Zzzzzzyt/UniverseModel",
        "author":"Zzzyt",
        "release":"2019-05-08",
        "coauthor":"",
        "category":"MATH/PHYSICS",
        "subcategory":"PHYSICS SIMULATOR",
        "status":"Done",
        "lang":"LibGdx",
        "rating":0
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
        "lang":"Java",
        "rating":0
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
        "lang":"Java",
        "rating":2
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
        "lang":"GameMaker",
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
        "lang":"GameMaker",
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
        "lang":"RPG Maker XP",
        "comment":"Can't upload because of privacy issues",
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
        "lang":"LibGdx",
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
        "lang":"LibGdx",
        "rating":3
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
        "lang":"Py3",
        "rating":1
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
        "lang":"Py3",
        "rating":1
    },
    {
        "name":"Testbot",
        "link":"https://repl.it/@XiaoGeNintendo/Test-js-bot",
        "author":"XGN",
        "release":"2019-02-15",
        "coauthor":"",
        "category":"BOT",
        "subcategory":"DISCORD BOT",
        "status":"Jamming",
        "lang":"Node.js",
        "comment":"The bot is used in our Discord community",
        "rating":2
    },
    {
        "name":"Orange Boy Can You Solve It Out?",
        "link":"https://blog.hellholestudios.club/post/tag/obcysio/",
        "author":"XGN",
        "release":"2019-04-14",
        "coauthor":"MonkeyKing",
        "category":"LITERATURE",
        "subcategory":"OI LITERATURE",
        "status":"Working",
        "lang":"Markup",
        "rating":4
    },
    {
        "name":"The Story of Tengfei",
        "link":"https://blog.hellholestudios.club/post/category/%E8%BF%9E%E8%BD%BD%E5%86%85%E5%AE%B9/",
        "author":"XGN",
        "release":"2019-04-10",
        "coauthor":"",
        "category":"LITERATURE",
        "subcategory":"OTHER LITERATURE",
        "status":"Deserted",
        "lang":"Markup",
        "rating":2
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
        "lang":"Java",
        "rating":2
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
        "lang":"Java",
        "rating":1
    },
    {
        "name":"Sound Guess Game HHS Mod",
        "link":"",
        "author":"Zzzyt",
        "release":"2019-02-16",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"OTHER GAME",
        "status":"Done",
        "lang":"Java",
        "comment":"Can't upload because of privacy issues.",
        "rating":2
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
        "lang":"Java",
        "rating":0
    },
    {
        "name":"HHS Project Site",
        "link":"https://github.com/HellHoleStudios/HHS-Project-Site",
        "author":"XGN",
        "release":"2019-07-22",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"HHS HOME",
        "status":"Working",
        "lang":"JS,HTML",
        "rating":4
    },
	{
        "name":"Addon Tools",
        "link":"https://github.com/XiaoGeNintendo/addon-tools",
        "author":"XGN",
        "release":"2017-12-25",
        "coauthor":"",
        "category":"MOD",
        "subcategory":"MINECRAFT MOD",
        "status":"Jamming",
        "lang":"Java",
        "comment":"'Jamming' means is updating slowly.",
        "rating":1
    },
	{
        "name":"NFLS Solution Getter",
        "link":"https://github.com/XiaoGeNintendo/NFLSOJ-Solution-Getter",
        "author":"XGN",
        "release":"2019-06-07",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"TOOL",
        "status":"Done",
        "lang":"Py3",
        "comment":"Doesn't work anymore because NFLSOJ system update.",
        "rating":0
    },
	{
        "name":"Pressing Competition",
        "link":"https://github.com/XiaoGeNintendo/PressingCompetition",
        "author":"XGN",
        "release":"2018-12-27",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"OTHER GAME",
        "status":"Done",
        "lang":"JS,HTML",
        "rating":2
    },
	{
        "name":"Many Notifier",
        "link":"https://github.com/XiaoGeNintendo/ManyNotifier",
        "author":"XGN",
        "release":"2018-07-19",
        "coauthor":"Zzzyt",
        "category":"OI",
        "subcategory":"OI TOOL",
        "status":"Done",
        "lang":"Java",
        "rating":3
    },
	{
        "name":"Codeforces Status Notifier",
        "link":"https://github.com/XiaoGeNintendo/Codeforces-Status-Notifier",
        "author":"Zzzyt",
        "release":"2018-07-14",
        "coauthor":"XGN",
        "category":"OI",
        "subcategory":"OI TOOL",
        "status":"Done",
        "lang":"Java",
        "rating":0
    },
	{
        "name":"Where're my scores",
        "link":"https://github.com/XiaoGeNintendo/Where-are-my-scores-",
        "author":"XGN",
        "release":"2018-05-27",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"MUSIC GAME",
        "status":"Done",
        "lang":"LibGdx",
        "rating":0
    },
	{
        "name":"NFLS Rating System",
        "link":"https://github.com/XiaoGeNintendo/NFLS-OJ-Club-Contest-Rating-System",
        "author":"XGN",
        "release":"2018-03-01",
        "coauthor":"",
        "category":"OI",
        "subcategory":"OI TOOL",
        "status":"Done",
        "lang":"Java",
        "rating":1
    },
	{
        "name":"Math Exam Simulator Online",
        "link":"https://github.com/XiaoGeNintendo/MathExamSimulatorOnline",
        "author":"XGN",
        "release":"2018-05-12",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"SIM GAME",
        "status":"Done",
        "lang":"CocosCreator",
        "rating":0
    },
	{
        "name":"YP Beating Me",
        "link":"https://github.com/XiaoGeNintendo/YPBeatingMe",
        "author":"XGN",
        "release":"2018-05-06",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"STG GAME",
        "status":"Done",
        "lang":"CocosCreator",
        "rating":3
    },
	{
        "name":"XGN Screen Gif Gen",
        "link":"https://github.com/XiaoGeNintendo/xgn-screen-gif-gen",
        "author":"XGN",
        "release":"2018-04-20",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"TOOL",
        "status":"Done",
        "lang":"Java",
        "rating":1
    },
	{
        "name":"HHSOJ",
        "link":"https://github.com/XiaoGeNintendo/hhsoj",
        "author":"XGN",
        "release":"2018-03-26",
        "coauthor":"",
        "category":"OI",
        "subcategory":"ONLINE JUDGE",
        "status":"Done",
        "lang":"Java",
        "comment":"This version is replaced by HHSOJ-Web-Edition",
    },
	{
        "name":"Osu Taiko to normal",
        "link":"https://github.com/XiaoGeNintendo/osu-taiko-2-normal",
        "author":"XGN",
        "release":"2018-03-29",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"TOOL",
        "status":"Done",
        "lang":"C++",
        "comment":"This tool should be worked with Osu"
    },
	{
        "name":"Upload and Download System",
        "link":"https://github.com/XiaoGeNintendo/Upload-and-Download-System",
        "author":"XGN",
        "release":"2018-03-11",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"LANGUAGE TEST",
        "status":"Done",
        "lang":"Java",
    },
	{
        "name":"ZJS vs YP",
        "link":"https://github.com/XiaoGeNintendo/ZJSvsYP",
        "author":"XGN",
        "release":"2018-06-07",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"CLICKING GAME",
        "status":"Done",
        "lang":"CocosCreator",
    },
	{
        "name":"Text Editor Reloaded",
        "link":"https://github.com/XiaoGeNintendo/text-editor-reloaded",
        "author":"XGN",
        "release":"2017-12-25",
        "coauthor":"",
        "category":"MISC",
        "subcategory":"LANGUAGE TEST",
        "status":"Done",
        "lang":"Java",
    },
	{
        "name":"3DZJS",
        "link":"https://github.com/HellHoleStudios/3D_ZJS",
        "author":"HDD",
        "release":"2018-03-11",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"OTHER GAME",
        "status":"Done",
        "lang":"GameMaker",
        "comment":"The link is empty. But it really has the name 3DZJS",
        "rating":2
    },
	{
        "name":"Planet ZJS",
        "link":"",
        "author":"XGN",
        "release":"2019-02-06",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"OTHER GAME",
        "status":"Done",
        "lang":"MonkeyEngine",
        "comment":"Download used to be ok in Skype, but now missing",
        "rating":2
    },
	{
        "name":"Number Game",
        "link":"https://drive.google.com/open?id=1R9qzZXMnT20j7L5HJzV5_WqOQMD1Srgt",
        "author":"XGN",
        "release":"2019-05-03",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"OTHER GAME",
        "status":"Done",
        "lang":"LibGdx",
        "rating":2
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
		
		
		var aa=""+JSON.stringify(a);
		var bb=""+JSON.stringify(b);
		//console.log(aa);
		//console.log(bb);
		//console.log(aa<bb);
		
		if(aa<bb){
			return -1;
		}
		if(aa>bb){
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
}

function refreshTable(){
    var node=document.getElementById("table");
    
    var tmp="";
	var supc=1;

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
			if(tablehead[j][1]=="name"){
				if(data[i]["comment"]!=null){
					tmp+="<td>"+data[i][tablehead[j][1]]+"<sup><a href=\"#com"+supc+"\">["+supc+"]</a></sup></td>";
					supc++;
				}
				else{
					tmp+="<td>"+data[i][tablehead[j][1]]+"</td>";
				}
			}
            else if(tablehead[j][1]=="link"){
                if(data[i][tablehead[j][1]].includes("github.com")){
                    tmp+="<td class=\"text-center\"><a target=\"_blank\" title=\"Link to the Github Page\" href=\""+data[i][tablehead[j][1]]+"\"><i class=\"fa fa-github\"></i></a></td>";
                }
                else if(data[i][tablehead[j][1]].includes("blog.hellholestudios.club")){
                    tmp+="<td class=\"text-center\"><a target=\"_blank\" title=\"Link to our Blog\" href=\""+data[i][tablehead[j][1]]+"\"><i class=\"fa fa-wordpress\"></i></a></td>";
                }
                else if(data[i][tablehead[j][1]]==""){
                    tmp+="<td class=\"text-center\"><i title=\"No Link Available\" class=\"fa fa-close\"></i></td>";
                }
				else{
                    tmp+="<td class=\"text-center\"><a target=\"_blank\"  title=\"Link to the Resources\" href=\""+data[i][tablehead[j][1]]+"\"><i class=\"fa fa-external-link\"></i></a></td>";
                }				
            }
			else if(tablehead[j][1]=="rating"){
                if(data[i][tablehead[j][1]]==undefined){
                    data[i][tablehead[j][1]]=0;
                }
                tmp+="<td class=\"text-center\"> <i title=\"Popularity:"+data[i][tablehead[j][1]]+"\" class=\"fa fa-thermometer-"+data[i][tablehead[j][1]]+"\"></i></td>"
                
            }else{
                tmp+="<td>"+data[i][tablehead[j][1]]+"</td>";
            }
            
        }
        tmp+="</tr>";
    }
    tmp+="</tbody></table>";
	
	supc=1;
	var comtmp="";
	for(var i=0;i<data.length;i++){
		if(data[i]["comment"]!=null){
			comtmp+="<p id=\"com"+supc+"\">["+supc+"]: "+data[i]["comment"]+"</p>"
			supc++;
		}
	}

    node.innerHTML=tmp;
	document.getElementById("comments").innerHTML=comtmp;

}


