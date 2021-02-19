// console.dir(newDiv);
// console.log(newDiv);
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';

const newDiv = document.createElement('div')
document.body.appendChild(newDiv)
newDiv.style.maxWidth = '1100px'
newDiv.style.margin = 'auto'
newDiv.innerHTML = '<img class ="image" src="images/image2.png" />'
newDiv.style.backgroundColor = '#F6E05E';
newDiv.style.display = 'flex';
newDiv.style.height = '60px';
// newDiv.style.padding = '30px 50px';

const nav = document.createElement('nav')
newDiv.appendChild(nav)
nav.innerHTML = `<li>Home</li> <li>About</li> <li>Pricing</li> <li>Register</li>`
nav.style.color = 'white';
nav.style.backgroundColor = 'black';
nav.style.listStyleType = 'none';
nav.style.display = 'grid';
nav.style.gridAutoFlow = 'column';
nav.style.width = '100%';
nav.style.padding = '15px';
nav.style.marginLeft = '30px';
nav.style.alignItems = 'center';
nav.style.justifyContent = 'end';
nav.style.columnGap = '50px';

document.head.insertAdjacentHTML('beforeend', `<link src='style.css'>`)

const myImg =  document.querySelector('img')
console.log(myImg);
myImg.classList.add('img-container')

const button = document.createElement('button')
newDiv.appendChild(button)
button.innerHTML = `Sing in`
button.style.color = 'black';
button.style.backgroundColor = 'white';
button.style.padding = '15px';
