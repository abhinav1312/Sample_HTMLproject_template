function alert_msg(){
    var c=document.details;
    for(let i=0;i<3;i++){
        if(c[i].value==""){
            alert("Please fill all the fields");
            return false;
        }
    }
}

function fill_options(){
    var x=documents.forms.abc.def;
    for(let i=0;i<3;i++){
        if(x[i].checked==false){
            alert("Please fill all the fields");
            return false;
        }
    } 

}