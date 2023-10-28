let close = document.querySelectorAll('.close')
for(let i = 0; i < close.length; i++) {
  close[i].onclick = function (){
   let parent = this.parentElement;
   parent.style.display = 'none'
  }
}
document.getElementById('addBtn').addEventListener('click', function onclick() {
  let output = document.querySelector('.Output')
  let inputValue = document.getElementById('Search').value
  if(inputValue != '') {
    let div = document.createElement('div')
    let span = document.createElement('span')
    let RemovalBtn = document.createTextNode('x')
    span.className = 'close'
    span.appendChild(RemovalBtn)
    span.addEventListener('click', OnClickRemove)
    let divText = document.createTextNode(inputValue)
    div.className = 'list'
    div.appendChild(divText)
    div.appendChild(span)
    output.appendChild(div)
    console.log('davida')
  }
})
function OnClickRemove() {
  let parent = this.parentElement;
  parent.style.display = 'none'
}