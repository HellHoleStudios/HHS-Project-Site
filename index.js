
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

var importantOnly=true;

function toggleImportant(){
    importantOnly=!importantOnly;
    refreshTable();
}

function Msort(by){
    sort(by);
    curSort=by;
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

    str+='<span data-toggle="tooltip" title="'+badges[name]["tooltip"]+'" class="badge '+badges[name]["kind"]+'">'+badges[name]["display"]+'</span>';

    return str;
}

function filterCheck(tag){
    
    var filter=document.getElementById("filter").value;
    var incList=filter.split(",")
    // console.log(tag+" by "+incList);
    for(var i=0;i<incList.length;i++){
        var found=false;
        for(var j=0;j<tag.length;j++){
            
            if(badges[tag[j]]==undefined || badges[tag[j]]["display"].toLowerCase().includes(incList[i].trim().toLowerCase())){
                found=true;
                break;
            }
        }

        
        if(!found){
            // console.log("Return false:"+incList[i])
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
            tmp+="<th onclick=\"Msort('"+tablehead[i][1]+"')\">"+tablehead[i][0]+"<i class=\"fa fa-sort-up\"></i></th>";
        }else{
            tmp+="<th onclick=\"Msort('"+tablehead[i][1]+"')\">"+tablehead[i][0]+"<i class=\"fa fa-sort\"></i></th>";
        }
    }
    tmp+="</tr></thead><tbody>";

    //start rendering data
    for(var i=0;i<data.length;i++){

        if(!filterCheck(data[i]["tag"])){
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
                else if(data[i][tablehead[j][1]].includes("blog.hellholestudios.club")){
                    tmp+="<td class=\"text-center\"><a target=\"_blank\" title=\"Link to our Blog\" href=\""+data[i][tablehead[j][1]]+"\"><i class=\"fa fa-wordpress\"></i></a></td>";
                }
                else if(data[i][tablehead[j][1]]==""){
                    tmp+="<td class=\"text-center\"><i title=\"No Link Available\" class=\"fa fa-close\"></i></td>";
                }
				else{
                    tmp+="<td class=\"text-center\"><a target=\"_blank\"  title=\"Link to the Resources\" href=\""+data[i][tablehead[j][1]]+"\"><i class=\"fa fa-external-link\"></i></a></td>";
                }				
            }else if(tablehead[j][1]=="rating"){
                if(data[i][tablehead[j][1]]==undefined){
                    data[i][tablehead[j][1]]=0;
                }
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
		if(data[i]["comment"]!=null){
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


