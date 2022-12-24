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
