
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
		x+='<b>'+member[i]["name"]+'</b></br/>'
        for(var j=0;j<member[i]["badge"].length;j++){
			x+='<span class="'+badge[member[i]["badge"][j]]["code"]+'">'+badge[member[i]["badge"][j]]["display"]+'</span> ';
		}
		if(member[i]["aka"]!=""){
			x+='</br>';
			x+='aka: '+member[i]["aka"];
		}
		if(member[i]["contact"].length!=0){
			x+='<br/>';
			x+='Contact: ';
			for(var j=0;j<member[i]["contact"].length;j++){
				x+='<a target="_blank" href="'+member[i]["contact"][j]["link"]+'">'+member[i]["contact"][j]["display"]+"</a> ";
			}
		}
        
        x+='</div></div></div>';
    }
	x+='</div>'
    root.innerHTML=x;
    console.log(root.innerHTML);
}