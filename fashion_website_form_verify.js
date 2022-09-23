function validate() {
  var flag=true;
    var n=document.getElementById("name");
    var e=document.getElementById("email");
    var p=document.getElementById("pass");
    var m=document.getElementById("mb");
    var c=0,ct=0;
    if(n.value.length==0){
      alert("fill out name")
      flag=false;
  }
  if(e.value.length==0){
    alert("fill out email")
    flag=false;
}
if(p.value.length<5){
  flag=false;
  alert("fill out password")
}
if(m.value.length!=10){
  flag=false;
  if(m.value.length==0)
  alert("fill out mobile number");
  else if (m.value.length>0&&m.value.length<10){
    alert("fill out 10-digit mobile number");
  }
}
for(i=1;i<=2;i++){
  if(document.getElementById("g"+i).checked==true)
  c=1;
}
for(i=1;i<=4;i++){
  if(document.getElementById("i"+i).checked==true)
  ct=1;
}
if(c!=1)
flag=false;
if(ct!=1)
flag=false;
return flag;
}
