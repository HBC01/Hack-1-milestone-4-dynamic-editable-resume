const form1 =document.getElementById(`form`) as HTMLFormElement
const display=document.getElementById(`display`)as HTMLDivElement

form1.addEventListener(`submit`,(event:Event)=>{event.preventDefault();

const name=(document.getElementById(`name`)as HTMLInputElement).value
const Fname=(document.getElementById(`Fname`)as HTMLInputElement).value
const email=(document.getElementById(`email`)as HTMLInputElement).value
const phone=(document.getElementById(`phone`)as HTMLInputElement).value
const education=(document.getElementById(`education`)as HTMLInputElement).value
const experience=(document.getElementById(`experience`)as HTMLInputElement).value
const skill=(document.getElementById(`skill`)as HTMLInputElement).value


const resumeHTML=`<h2><b>Editable Resume</b></h2> 
<h3>Personal Information</h3>
<p><b>Name: </b><span contenteditable="true">${name}</span></p>
<p><b>F/Name: </b><span contenteditable="true">${Fname}</span></p>
<p><b>Email: </b><span contenteditable="true">${email}</span></p>
<p><b>Phone No: </b><span contenteditable="true">${phone}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>
<h3>Experience</h3>
<p contenteditable="true">${experience}</p>
<h3>Skills </h3>
<p contenteditable="true">${skill}</p>
`;
if(display){
    display.innerHTML =resumeHTML;
    
}else{console.error(`The resume display is missing.`)}





})