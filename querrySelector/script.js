// let button = document.getElementById('lorem-p1')

//     button.innerText='hello'

// let buttonTag = document.getElementsByTagName('button')[0]


// buttonTag.innerText = 'click me'

// let h1 = document.getElementsByClassName('fabulous')[0]

// h1.innerText='my name is Baigel'

// let h2 = document.createElement('h1')
// 
// let buttonClick = document.createElement('button')

// buttonTag.onclick = ()=>{
//     document.body.append(buttonClick)
// }
// buttonTag.addEventListener('click', ()=>{
//     alert('you are the best')
// })

let input = document.createElement('input')
let input2 = document.createElement('input')
let h1 = document.createElement('h1')
h1.innerHTML='im here'
document.body.append(input)
document.body.append(input2)
document.body.append(h1)


h1.addEventListener('click', ()=>{
  console.log(input.value + input2.value)

})