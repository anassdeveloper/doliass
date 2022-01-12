const allBox = document.querySelectorAll('.box');
const viewBox = document.querySelector('.view');

function removeNavBar(){
    document.querySelector('.navbar').style.display = "none";
}

document.querySelector('.icon').addEventListener('click', removeNavBar);


// add nav bar 

function addNavBar(){
    document.querySelector('.navbar').style.display = "block";

}

document.querySelector('.btn').addEventListener('click', addNavBar)

allBox.forEach(e => {
    e.addEventListener('click', (event) => {
       viewBox.classList.add('visible');
       viewBox.innerHTML = event.target.innerHTML;
       console.log(event.target.innerHTML);
    })
})