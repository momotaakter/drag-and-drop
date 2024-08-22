let lists=document.getElementsByClassName('list');
let rightbox=document.getElementById("right");
let leftbox=document.getElementById('left');

for(li of lists){
   li.addEventListener('dragstart',function(x){
let selected=x.target;
rightbox.addEventListener('dragover',function(x){
    x.preventDefault();
});
rightbox.addEventListener('drop',function(x){
    rightbox.appendChild(selected);
    selected=null;
});


leftbox.addEventListener('dragover',function(x){
    x.preventDefault();
});
leftbox.addEventListener('drop',function(x){
    rightbox.appendChild(selected);
    selected=null;
});



   })
}