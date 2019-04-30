/*
https://developer.mozilla.org/en-US/docs/Web/Events
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

/*var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("mouseenter",function () {
    console.log("mouse entered !")
})*/

var button=document.getElementById("enter");
var input=document.getElementById("user-input");
var ul =document.getElementsByTagName("ul")[0];
var listitems =document.getElementsByTagName("li");


//console.log(button);
function inputlength()
{
    if(input.value.length>0)

    {return true;}
    else return false;
}
function createlistitem()
{
    var listitem = document.createElement("li");
    listitem.append(document.createTextNode(input.value));
    ul.append(listitem);
    input.value='';
}
function additemafterclick()
{
    if(inputlength())
    {
        createlistitem();
    }


}
function additemafterenter(e)
{
    if(inputlength() && e.which==13) {
        createlistitem();
    }
}

function isddone()
{


    this.classList.toggle("done");
}


button.addEventListener("click",additemafterclick);
input.addEventListener("keypress",additemafterenter);

for(var a=0;a<listitems.length;a++)
{

    listitems[a].addEventListener("click",isddone);
}






