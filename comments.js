function store(){
    var data=localStorage.getItem("data")
    if(data==null){
        localStorage.setItem("data",JSON.stringify([]))
    }
    
    var comment=document.getElementById("text-area").value
    var name=document.getElementById("comment-name").value
    var email=document.getElementById("comment-email").value

    var map={
        Comment:comment,
        Name:name,
        Email:email,
    }
    console.log(map)
    map=JSON.stringify(map)
    var where_to_push=localStorage.getItem("data")
    where_to_push=JSON.parse(where_to_push)
    where_to_push.push(map) 
    localStorage.setItem("data",JSON.stringify(where_to_push))
    alert("Your Comment has been recorded Thank you")
    location.reload()

}