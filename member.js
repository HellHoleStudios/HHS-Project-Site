
function loadMemberData(){
    var root=document.getElementById("member");
    var x="";
    root.innerHTML="";
    for(var i=0;i<member.length;i++){
        x+='<div class="card"><div class="card-body"><table width="80%"><tr><td width="50%">';
        x+='<img src="'+member[i]["pic"]+'" alt="'+member[i]["name"]+'"/></td>';
        x+='<td width="50%"><b>'+member[i]["name"]+'</b><br/><i>'+member[i]["real"]+'</i><br/>Role:<span class="'+role[member[i]["rank"]]["code"]+'">'+role[member[i]["rank"]]["display"]+'</span><br/>';
        x+="aka:"+member[i]["aka"];
        x+="</td></tr></table></div></div>";
        x+="<br/>"
    }

    root.innerHTML=x;
    console.log(root.innerHTML);
}