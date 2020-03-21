
var dec_template={
    "name":"",
    "link":"",
    "author":"",
    "release":"",
    "coauthor":"",
    "category":"",
    "subcategory":"",
    "status":"",
    "lang":"",
    "tool":"",
    "layout":"",
    "comment":"", //optional
    "rating":0, //optional,0-4,default is 0. 
}

var template={
    "name":"",
    "link":"",
    "author":[],
    "release":"",
    "coauthor":[],
    "tag":[],
    "rating":0
}

for(var i=0;i<data.length;i++){
	if(data[i]["rating"]==undefined){
		data[i]["rating"]=0;
	}
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
    ["Name","name",true],
    ["Author","author",true],
    ["Coauthor","coauthor",true],
    ["Release Date","release",true],
    ["Tag","tag",true],
    ["Link","link",true],
    ["Hot","rating",true]
]


function sort(by,dir){
	function cmp(a,b){ 
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
    }
    data.sort(function(a,b){
		return cmp(a,b)*(dir?1:-1);
	});
}

var curSort="";
var curDir=true;

var importantOnly=true;

function toggleImportant(){
    importantOnly=!importantOnly;
    refreshTable();
}

function Msort(by,dir){
    sort(by,dir);
    curSort=by;
	curDir=dir;
    refreshTable();
}

function toBadgeString(name){
    var str=""
    
    if(name.trim()==""){
        return "";
    }

    if(badges[name]==undefined){
        console.log("Error:"+name);
        return name;
    }

    str+='<span data-toggle="tooltip" style="margin-top:2px;" title="'+badges[name]["tooltip"]+'" class="badge '+badges[name]["kind"]+'">'+badges[name]["display"]+'</span>';

    return str;
}

function FilterSearch(item,id,filter){
    
    var tag=item[id];

    for(var j=0;j<tag.length;j++){
        if(tag[j]==''){
            continue;
        }
        if(badges[tag[j]]==undefined || badges[tag[j]]["display"].toLowerCase().includes(filter)){
            return true;
        }
    }

    return false;
}

function FilterCheck(item,filter){
    
    if(item["name"].toLowerCase().includes(filter)){
        return true;
    }
    if(item["release"].toLowerCase().includes(filter)){
        return true;
    }

    // console.log(item)
    if(FilterSearch(item,"tag",filter)){
        return true;
    }

    // console.log("tag ")
    if(FilterSearch(item,"author",filter)){
        return true;
    }
    
    // console.log("author ")
    if(FilterSearch(item,"coauthor",filter)){
        return true;
    }
    // console.log("coauthor ")
    return false;

}
function filterCheck(item){
    
    var filter=document.getElementById("filter").value;
    var incList=filter.split(",")
    // console.log(tag+" by "+incList);
    for(var i=0;i<incList.length;i++){
        var trimmed=incList[i].toLowerCase().trim();
        if(!FilterCheck(item,trimmed)){
            return false;
        }
        
    }
    return true;
}

function refreshTable(){
    var node=document.getElementById("table");
    
    var tmp="";
	var supc=1;

    tmp+="<table class=\"table table-sm table-hover table-striped table-bordered\">";
    //start rendering th
    tmp+="<thead><tr>";
    for(var i=0;i<tablehead.length;i++){
        if(importantOnly && !tablehead[i][2]){
            continue;
        }
        if(tablehead[i][1]==curSort){
			if(curDir){
				tmp+="<th onclick=\"Msort('"+tablehead[i][1]+"',false)\">"+tablehead[i][0]+"<i class=\"fa fa-sort-up\"></i></th>";
			}
			else{
				tmp+="<th onclick=\"Msort('"+tablehead[i][1]+"',true)\">"+tablehead[i][0]+"<i class=\"fa fa-sort-down\"></i></th>";
			}
        }else{
            tmp+="<th onclick=\"Msort('"+tablehead[i][1]+"',true)\">"+tablehead[i][0]+"<i class=\"fa fa-sort\"></i></th>";
        }
    }
    tmp+="</tr></thead><tbody>";

    //start rendering data
    for(var i=0;i<data.length;i++){

        if(!filterCheck(data[i])){
            continue;
        }

        tmp+="<tr>";
        for(var j=0;j<tablehead.length;j++){
			if(tablehead[j][1]=="name"){
				if(data[i]["comment"]!=null){
					tmp+="<td>"+data[i][tablehead[j][1]]+"<sup><a id=\"src"+supc+"\" href=\"#com"+supc+"\" title=\""+data[i]["comment"]+"\">["+supc+"]</a></sup></td>";
					supc++;
				}
				else{
					tmp+="<td>"+data[i][tablehead[j][1]]+"</td>";
				}
			}else if(tablehead[j][1]=="link"){
                if(data[i][tablehead[j][1]].includes("github.com")){
                    tmp+="<td class=\"text-center\"><a target=\"_blank\" title=\"Link to the Github Page\" href=\""+data[i][tablehead[j][1]]+"\"><i class=\"fa fa-github\"></i></a></td>";
                }
                else if(data[i][tablehead[j][1]].includes("blog.hellholestudios.top")){
                    tmp+="<td class=\"text-center\"><a target=\"_blank\" title=\"Link to our Blog\" href=\""+data[i][tablehead[j][1]]+"\"><i class=\"fa fa-wordpress\"></i></a></td>";
                }
                else if(data[i][tablehead[j][1]]==""){
                    tmp+="<td class=\"text-center\"><i title=\"No Link Available\" class=\"fa fa-close\"></i></td>";
                }
				else{
                    tmp+="<td class=\"text-center\"><a target=\"_blank\"  title=\"Link to the Resources\" href=\""+data[i][tablehead[j][1]]+"\"><i class=\"fa fa-external-link\"></i></a></td>";
                }				
            }else if(tablehead[j][1]=="rating"){
                var dat=data[i][tablehead[j][1]];
                tmp+="<td class=\"text-center\"> <i title=\"Popularity:"+dat+"\" class=\"fa fa-thermometer-"+dat+"\"></i>"+dat+"</td>"
            }else if(tablehead[j][1]=="release"){
                //release date just normal
                tmp+="<td>"+data[i][tablehead[j][1]]+"</td>";
            }else{
                //badge showing
                tmp+="<td>"
                for(var k=0;k<data[i][tablehead[j][1]].length;k++){

                    tmp+=toBadgeString(data[i][tablehead[j][1]][k])+" "
                }
                tmp+="</td>"
            }
            
        }
        tmp+="</tr>";
    }
    tmp+="</tbody></table>";
	
	supc=1;
	var comtmp="";
	for(var i=0;i<data.length;i++){
		if(data[i]["comment"]!=null && filterCheck(data[i])){
			comtmp+="<p id=\"com"+supc+"\"><a href=\"#src"+supc+"\">["+supc+"]</a>: "+data[i]["comment"]+"</p>"
			supc++;
		}
	}

    node.innerHTML=tmp;
	document.getElementById("comments").innerHTML=comtmp;
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    })
    
}


