// write js code here corresponding to favourites.html

var b=JSON.parse(localStorage.getItem("favourites"))

display(b)
function display(data){

    data.forEach(function(elem,index){
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
        td6.innerText= "Delete"
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            Remove(elem,index)

        
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}

function Remove(elem,index){
    b.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(b))
    window.location.reload()
}