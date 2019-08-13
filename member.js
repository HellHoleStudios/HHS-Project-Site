
function loadMemberData(){
    var root=document.getElementById("member");
    var x="";
    root.innerHTML="";
	x+='<div class="row">'
    for(var i=0;i<member.length;i++){
		if(i&&i%4==0){
			x+='</div><div class="row">'
		}
		if(member[i]["pic"]==""){
			member[i]["pic"]="assets/nodata.jpg"
		}
        x+='<div class="col-3"><div class="card">';
		x+='<img class="card-img-top" src="'+member[i]["pic"]+'" alt="'+member[i]["name"]+'"/>';
		x+='<div class="card-body">';
        x+='<b>'+member[i]["name"]+'</b><br/><i>'+member[i]["real"]+'</i><br/>';
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
        x+='</div></div></div>';
    }
	x+='</div>'
    root.innerHTML=x;
    console.log(root.innerHTML);
}