var myNav=document.getElementById("myNav");
var btnNav1=document.getElementById("btnNav1");
var btnNav2=document.getElementById("btnNav2");
var latestMeal =[];

function openNav()
{
    
    myNav.style.left="0";
    myNav.classList.remove("position-absolute");
    btnNav1.classList.add("d-none");
    btnNav2.classList.remove("d-none");
    btnNav2.style.fontSize="35px";
    
}
function closeNav()
{
    myNav.classList.add("position-absolute");
   
    myNav.style.left="-257px";
     btnNav1.classList.remove("d-none");
    btnNav2.classList.add("d-none");
}
async function getdata()
{
    let dataResponse=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    let data= await dataResponse.json();
    
    return data;
}

function displayData(targetData)
{

}
function searchdata(targetData)
{


}
s
