
function loadMemberData(){
    var root=document.getElementById("member");
    var x="";
    root.innerHTML="";
    for(var i=0;i<member.length;i++){
		if(member[i]["pic"]==""){
			member[i]["pic"]="assets/nodata.jpg"
		}
        x+='<div class="card"><div class="card-body"><table width="80%"><tr><td width="50%">';
        x+='<img width=100px height=100px src="'+member[i]["pic"]+'" alt="'+member[i]["name"]+'"/></td>';
        x+='<td width="50%"><b>'+member[i]["name"]+'</b><br/><i>'+member[i]["real"]+'</i><br/>Role:';
        x+='<span class="'+role[member[i]["rank"]]["code"]+'">'+role[member[i]["rank"]]["display"]+'</span>';
        if(member[i]["skype"]){
            x+=' <span class="badge badge-warning">In Skype</span>';
        }
        if(member[i]["discord"]){
            x+=' <span class="badge badge-danger">In Discord</span>';
        }
        x+="</br>"

        x+="aka:"+member[i]["aka"]+"<br/>";
        x+="Contact:";
        for(var j=0;j<member[i]["contact"].length;j++){
            x+='<a href="'+member[i]["contact"][j]["link"]+'">'+member[i]["contact"][j]["display"]+"</a>";
            x+=" ";
        }
        x+="</td></tr></table></div></div>";
        x+="<br/>"
    }

    root.innerHTML=x;
    console.log(root.innerHTML);
}