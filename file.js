let array= [
    {
        heading:"Boilerplate Code",
        para:"",
        code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>`,
    },
    {
        heading:"Heading",
        para:"",
        code:`
<h1>Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>`
    },
    {
        heading:"Container",
        para:"",
        code:`
<div>Block</div>
<span>Inline</span>
<p>Paragraph Tag</p>
<pre>Pre-Formatted Text</pre>
<code>Use for Source Codes</code>
        `
    },
    {
        heading:"Text Formatting",
        para:"",
        code:`
<b>Make Text Bold</b>
<strong>Make Text Strong</strong>
<i>Make Text Italic</i>
<em>Make Emphasized Text </em>
<sub>SubScript</sub>
<sup>SubScript</sup>
        `
    },
    {
        heading:"Lists",
        para:"",
        code:`<ol>
<li>Example of Ordered List</li>
<li>List Item</li>
</ol>
<ul>
<li>Example of Unordered List</li>
<li>List Item</li>
</ul>`
    },
    {
        heading:"Media",
        para:"",
        code:`<audio controls> 
<source src="demo.mp3" type="audio/mpeg">
</audio>

<img src="demo.png">

<video width="480" height=""320 controls>
<source src="demo.mp4" type=video/mp4">
</video> 
        `
    },
    {
        heading:"Table",
        para:"",
        code:`<table>
<caption> Demo Table</caption>
<thead> 
    <tr> 
        <th> SR. NO. </th>
        <th>Name of Student</th> 
    </tr>
<thead>
<tbody>
<tr>
    <td>1</td>
    <td>abc</td>
</tr>
<tbody>
<tfoot>
<tr> 
    <td>&nbsp; </td>
</tr>
</tfoot>
</table>
        `
    },
    {
        heading:"Links",
        para:"",
        code:`<a href="https://google.com/">Go to Google<a>`
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