let array= [
    {
        heading:"Syntax",
        para:"",
        code:`selector{
    formation:value;
    }`,
    },
    {
        heading:"Font Style",
        para:"",
        code:`{
font-family: 'Segoe UI;
font-variant:small-caps; 
font-weight:bold; 
font-size:larger; 
font:style variant weight size family;
}`
    },
    {
        heading:"Text Style",
        para:"",
        code:`{
text-align:center; 
letter-spacing:.15em 
word-spacing:.25em 
text-decoration:underline 
text-transform:uppercase;
text-indent:0.5cm;
line-height:normal;
}`
    },
    {
        heading:"Background",
        para:"",
        code:`{
background-image:url('demo.jpeg')
background-position:right top;
background-size:cover;
background-repeat:no-repeat;
background-attachment:scroll;
background-color:red;
background:color image repeat attachment position;
}`
    },
    {
        heading:"Border",
        para:"",
        code:`{
border-width:5px;
border-style:solid;
border-color:red;
border-radius:5px;
border:width style color;
}`
    },
    {
        heading:"Box Model",
        para:"",
        code:`{
float:none;
clear:both;
display:block;
height:fit-content;
width:auto;
height:auto;
padding:5px;
overflow:hidden;
visibility:visible;
}`
    },
    {
        heading:"Color",
        para:"",
        code:`{
color:blue;
opacity:4;
}`
    },
    {
        heading:"Template Layout",
        para:"",
        code:`{
box-align:start;
box-direction:normal;
box-flex:normal;
box-flex-group:3;
box-orient:inline;
box-pack:justify;
box-sizing:margin-box;
max-width:100vw;
min-width:50vw;
max-height:100vh;
min-height:50vh;
}`
    },
    
    
   
]

array.forEach((e)=>{
    let element= document.createElement('div')
    let element1= document.createElement('h1')
    let element2= document.createElement('pre')
    let element3= document.createElement('li')
    let element4= document.createElement('a')
    let element5= document.createElement('button')
    element4.setAttribute('href',"#"+e.heading.split(' ')[0])
    element4.innerText=e.heading
    element3.appendChild(element4)
    element1.classList.add('heading')
    element1.innerHTML=e.heading
    element1.id=e.heading.split(' ')[0]
    element2.classList.add('code')
    element2.innerText=e.code
    element5.classList.add('btn','copy')
    element5.innerText="Copy Code"
    element.appendChild(element1)
    element.appendChild(element2)
    element.appendChild(element5)
    document.querySelector('.mainside').appendChild(element)
    document.querySelector('.item').appendChild(element3)
})
let btnArray=Array.from(document.querySelectorAll('.copy'))
btnArray.forEach((element)=>{
    element.addEventListener('click',()=>{
        navigator.clipboard.writeText(element.parentElement.children[1].innerText)
        element.parentElement.lastChild.innerText="Copied"
        setTimeout(() => {
            element.parentElement.lastChild.innerText="Copy Code"
        }, 2000);
    })
})