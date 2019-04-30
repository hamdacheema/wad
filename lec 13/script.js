/*
/!*
function calc(n1,n2)
{
  return n1+n2;
}

console.log(calc(5,6));

var calculator=function()
{

    console.log("Calc Function expression")

}
calculator();*!/

var citiesList=["lhr",344,false,function cal()
{}
]

var users=
    [{
        name:"hamda",
        age: 21,
        isAlive:true,
        favmovies:["xyz"],
        move:function ()
        {
            console.log("learning wad");
        }
    }
    ,{
        name:"azm",
        age: 13,
        isAlive:true,
        favmovies:["xyz"],
        move:function ()
        {
            console.log("dfdfe");
        }
    }]*/


var database=
 [   {
        username:"hamda",
        password:"123"
    }
    ,

     {
         username:"usman",
         password:"456"
     }
]
    var newsfeed=
        [{
            friend:"usman",
            status:"i am happy today"



        },{
            friend:"umer",
            status:"i am  excited today"


        }]
var user=prompt("enter user name");
var  pword=prompt("enter password");
if(user==database.username)
{
    if(pword==database.password)
    {
        console.log(newsfeed[0].friend, newsfeed[0].status)
        console.log(newsfeed[1].friend, newsfeed[1].status)
    }else
    {
        console.log("incorrect password")
    }
}
else
    {
        console.log("incorrect username")
}
var citieslist=
    [
        "lahore","multn","islbd",
    ];


for(var i=0;i<citieslist.length;i++)
{

    console.log(citieslist[i]);

}
function loop(c,i)
{
    console.log(c,i);
}
citieslist.forEach(loop)
