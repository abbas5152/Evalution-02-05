// write js code here corresponding to matches.html
var a= JSON.parse(localStorage.getItem("schedule"))
var b=JSON.parse(localStorage.getItem("favourites")) || []

display(a);

function filterbyvenue(){
    var venue=document.querySelector("#filterVenue").value;

    var abb=a.filter(function(elem){
        return elem.Venue==venue

    });
    display(abb);
 }


function display(data){

    document.querySelector("tbody").innerHTML="";

    data.forEach(function(elem){
        var tr=document.createElement("tr")

       var td1= document.createElement("td");
        td1.innerText= elem.Matchnumber

        var td2= document.createElement("td");
        td2.innerText= elem.teamA

        var td3= document.createElement("td");
        td3.innerText= elem.teamB

        var td4= document.createElement("td");
        td4.innerText= elem.Tarikh

        var td5= document.createElement("td");
        td5.innerText= elem.Venue

        var td6= document.createElement("td");
        td6.innerText= "Favourite"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            favv(elem)

        
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function favv(elem){
    b.push(elem)
    // console.log(b)
    localStorage.setItem("favourites",JSON.stringify(b))
}