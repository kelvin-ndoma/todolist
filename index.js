// practice
function updateWeekDay(day){
    let h4 = document.querySelector('h4')
    //console.log(h4)
    h4.textContent = day// used this to change the day from thurday to monday 
    h4.id=day.toUpperCase()
    h4.className = 'title'
    h4.style.fontStyle = 'italic'

}
updateWeekDay('Friday')
// //using innerHTML
// function updateWeekDay(day){
//     let h4 = document.querySelector('h4')
//     h4.innerHTML = day///`
    //     <h1>${day}</h1>
    //     <img src = "image/one.jpg"/>  
    //     <p>trying</p> 
    // `
//}

// changing attributes
// adding id
// adding an image using the html and js
function addImage(img_url){
    let img = document.querySelector('img')
    img.src = img_url
 
}
addImage('image/one.jpg')// added A  new image

// adding evendoc
document.querySelector('form').addEventListener
('mouseover',e => console.log(e))
// to get to the alert button

// document.querySelector('#alert').addEventListener
// ('click',alertMe)

// //,()=> alert('Hi, I was clicked'))

//  function alertMe(){
//     return alert('Hi am cliked')
//  }
 document.querySelector('#alert').addEventListener
('click',() => alert('Hi I was clicked'))

//log something
document.querySelector('#log').addEventListener
('click', () => console.log('I\'ve been logged'))//show the statement on clicking the button on the browser

//a callback to handle delete
function handleDelete(e){
    //console.log// 
    //(e.target).innerText = 'Delete'//shows delete on clicking on x
    //(e.target).innerHTML = ''//removes the HTML 
        e.target.parentNode.remove()


}

//to get buttons and delete the parent node
function addEventListenerToDeleteButtons(){
    let buttons =  document.getElementsByClassName
    ('delete_btn')
    for(let btn of buttons){
        //console.log(btn)
        btn.addEventListener('click',handleDelete)
    }
}
addEventListenerToDeleteButtons()