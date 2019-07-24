
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
                var dat=data[i][tablehead[j][1]];
                tmp+="<td class=\"text-center\"> <i title=\"Popularity:"+dat+"\" class=\"fa fa-thermometer-"+dat+"\"></i>"+dat+"</td>"
                
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


