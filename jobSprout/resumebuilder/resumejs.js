
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const linkedin = document.getElementById("linkedin").value;
  const education = document.getElementById("education").value;
	const spliteducation = education.split("\n");
  
  let neweducation = "<ul>";
for (let i = 0;i < spliteducation.length; i++){
	neweducation = neweducation+"<li>"+spliteducation[i]+"</li>";
}
neweducation=neweducation+"</ul>";


  
  const experience = document.getElementById("experience").value;
  const splitexperience = experience.split("\n");
  
  let newexperience = "<ul>";
for (let i = 0;i < splitexperience.length; i++){
	newexperience = newexperience+"<li>"+splitexperience[i]+"</li>";
}
newexperience=newexperience+"</ul>";


  
    const volunteer = document.getElementById("volunteer").value;
  const splitvolunteer = volunteer.split("\n");
  
  let newvolunteer = "<ul>";
for (let i = 0;i < splitvolunteer.length; i++){
	newvolunteer = newvolunteer+"<li>"+splitvolunteer[i]+"</li>";
}
newvolunteer=newvolunteer+"</ul>";


  const resumeHTML = `
    <h1>${name}</h1>
    <p>${email} | ${phone}</p>
    <p><a href="${linkedin}">${linkedin}</a></p>

    <h2>EDUCATION</h2>
    <p>${neweducation}</p>

    <h2>PROFESSIONAL EXPERIENCE</h2>
    <p>${newexperience}</p>
    <h2>VOLUNTEER EXPERIENCE</h2>
    <p>${newvolunteer}</p>
  `;


  const resumeOutput = document.createElement("div");
  resumeOutput.className = "resume-output";
  resumeOutput.innerHTML = resumeHTML;
	
  //document.body.appendChild(resumeOutput);
  window.scrollTo(0, document.body.scrollHeight);

function displayResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const linkedin = document.getElementById("linkedin").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const volunteer = document.getElementById("volunteer").value;

  const spliteducation = education.split("\n");
  let neweducation = "<ul>";
  for (let i = 0; i < spliteducation.length; i++) {
    neweducation += "<li>" + spliteducation[i] + "</li>";
  }
  neweducation += "</ul>";

  const splitexperience = experience.split("\n");
  let newexperience = "<ul>";
  for (let i = 0; i < splitexperience.length; i++) {
    newexperience += "<li>" + splitexperience[i] + "</li>";
  }
  newexperience += "</ul>";

  const splitvolunteer = volunteer.split("\n");
  let newvolunteer = "<ul>";
  for (let i = 0; i < splitvolunteer.length; i++) {
    newvolunteer += "<li>" + splitvolunteer[i] + "</li>";
  }
  newvolunteer += "</ul>";

  const resumeHTML = `
    <h1>${name}</h1>
    <p>${email} | ${phone}</p>
    <p><a href="${linkedin}">${linkedin}</a></p>

    <h2>EDUCATION</h2>
    <p>${neweducation}</p>

    <h2>PROFESSIONAL EXPERIENCE</h2>
    <p>${newexperience}</p>
    
    <h2>VOLUNTEER EXPERIENCE</h2>
    <p>${newvolunteer}</p>
  `;

  const newWindow = window.open();
  newWindow.document.write(`
    <html>
      <head>
        <title>Resume</title>
      </head>
      <body>
        ${resumeHTML}
      </body>
    </html>
  `);
  newWindow.document.close();
}

document.getElementById("resumefinal").addEventListener("click", displayResume);

