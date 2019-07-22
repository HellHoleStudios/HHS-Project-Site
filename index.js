
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
        "name":"Universal Model",
        "link":"https://github.com/Zzzzzzyt/UniverselModel",
        "author":"Zzzyt",
        "release":"2019-05-08",
        "coauthor":"",
        "category":"GAME",
        "subcategory":"SIM GAME",
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
                tmp+="<td><a href=\""+data[i][tablehead[j][1]]+"\">Link</a></td>";
            }else{
                tmp+="<td>"+data[i][tablehead[j][1]]+"</td>";
            }
            
        }
        tmp+="</tr>";
    }
    tmp+="</tbody></table>";

    node.innerHTML=tmp;

}

