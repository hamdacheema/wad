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
var deletebuttons =document.getElementsByClassName("del");
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
    var delbutton =document.createElement("button");
    delbutton.append(document.createTextNode("delete"));
    listitem.append(delbutton);
    ul.append(listitem);
    input.value='';
    delbutton.classList.add("del");
    deletebutton();
    AddDonelistener();



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
/*deletebuttons.addEventListener("click",deletebutton);*/

function AddDonelistener() {


    for (var a = 0; a < listitems.length; a++) {

        listitems[a].addEventListener("click", isddone);
    }
}
function  deleteitems()
{
    this.parentElement.remove();
}
function  deletebutton()
{
    for(var a=0;a<deletebuttons.length;a++)
    {

        deletebuttons[a].addEventListener("click",deleteitems);
    }
}

deletebutton();
AddDonelistener();






