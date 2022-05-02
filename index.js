// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfunction)

function myfunction(){
    event.preventDefault();
    var a= JSON.parse(localStorage.getItem("schedule"))|| [];
    var o={
        Matchnumber : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        Tarikh : masaiForm.date.value,
        Venue : masaiForm.venue.value

    }
    a.push(o)
    console.log(a)
    localStorage.setItem("schedule",JSON.stringify(a))
}
