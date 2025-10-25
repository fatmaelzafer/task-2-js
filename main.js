var userName = document.getElementById('userName');
var userUrl = document.getElementById('userUrl');
var usermessage = document.getElementById('message'); 
var bookmarks = [];
var table=document.getElementById('tablebookmarks');
function displaybookmark()
{
    let tablebookmarks = "";
    for(var i=0; i<bookmarks.length ;++i)
    {
        tablebookmarks=tablebookmarks+`
        <tr class="text-center ">
        <td class="text-capitalaze w-25" >${i+1}</td>
        <td class="text-capitalaze w-25">${bookmarks[i].name}</td>
        <td class=" w-25"><button  class="visit  text-white"><a href=${bookmarks[i].url} target="_blank" class="text-decoration-none text-white"><i class="fa-solid fa-eye "></i>Visit</a></button></td>
         <td class=" w-25"><button onclick=deleting(${i}); class="delete  text-white"><i class="fa-solid fa-trash-can "></i>Delete</button></td>
        </tr>
        `
    }
    table.innerHTML = tablebookmarks;
}
function deleting(index)
{
    bookmarks.splice(index,1)
    displaybookmark()
}
function visiting()
{

}
function adding(param)
{
    if(validInputs(userName)&&validInputs(userUrl))
    {
        let bookmark ={
            name:userName.value,
            url:userUrl.value
        }
        bookmarks.push(bookmark)
        displaybookmark();
        userName.value=''
        userUrl.value=''
    }
    else
    {
        usermessage.classList.remove('d-none')
    }
}
function closeBtn()
{
     usermessage.classList.add('d-none')
}
function validInputs(input)
{
    
   let regex ={
       userName: /^\w{3,}$/,
        userUrl: /\bhttps?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^~!@#$%^&*()\-+=\s]*)?\b/
    }

    if (regex[input.id].test(input.value)) {
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
    } else {
        input.classList.add('is-invalid')
        return false
    }
}
