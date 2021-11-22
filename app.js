// question = 1

function change1(){
    var user =prompt("text color")
    
    var par = document.getElementById("para")
    par.style.color=user
    
}

function changeBig(){
    var user1 = prompt("bagraound color")
    var bod = document.getElementById("body")
    bod.style.backgroundColor=user1
}

// question = 2

function show(){
 document.getElementById("img").src ='./image/img1.jpeg'

}
function big(){
    var bi= document.getElementById("img") 
    bi.style.width="700px"
}

function small(){
    var sma= document.getElementById("img") 
    sma.style.width="200px"
}

function hide(){
    document.getElementById("img").src="" 
}

// Q NO 3 

function on(){
    document.getElementById('bulb').src="./image/on.jpg"
}
function off(){
    document.getElementById("bulb").src="./image/off.jpg"
}
// Q NO 4 
function change(){
var para = document.getElementsByTagName("p").length

for(var i = 0 ; i <para ;i++){
    var user =prompt("Enter color" + (i+1) )
     
}


}
