function generate(team){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
       <link rel="stylesheet" href="./style.css">
    <title>Document</title>
    </head>
    <body class="bg-light">
        <header id="banner" class="display text-center p-4 bg-info text-black">
            <div class="container">
                <h1 class="display-4 text-center">Turtle Team Management</h1>
                <p class="lead text-center">Get all your teams info down below!!!.</p>
              </div>
        </header>
        <br>
<div class="row justify-content-center">
${generateTeam(team)}
</div>
</body>
    </html>`
}


// Generates cards that display team's basic info 
function generateTeam(team){
    const cards = [];

for (let i = 0; i < team.length; i++){
    const teamMember = team[i]
    const role = teamMember.role;
    


   if (role === 'Manager'){
     const manager = managerCard(teamMember)
     cards.push(manager)
   }

   if (role === 'Engineer'){
    const engineer = engineerCard(teamMember)
    cards.push(engineer)
   }

   if (role === 'Intern'){
    const intern = internCard(teamMember)
    cards.push(intern)
   }

   
   
}
const teamCards = cards.join('')
return teamCards;
}

// Generates card that displays manager's basic info
function managerCard(manager){
   
 return `
<div class="col-3">
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
 <div class="card-header">Team Manager</div>
 <div class="card-body">
  <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">ID: ${manager.id}</p>
    <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="card-text">Office Number: ${manager.officeNumber} </p>
    </div>
</div>
</div>
` 

}

// Generates card that displays intern's basic info
function internCard(intern){
 return  `<div class="col-3">
   <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
   <div class="card-header">Intern</div>
   <div class="card-body">
   <h5 class="card-title">${intern.name}</h5>
   <p class="card-text">ID: ${intern.id}</p>
   <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
   <p class="card-text">School: ${intern.school} </p>
   </div>
   </div>
   
   </div>`
}

// Generates card that displays engineer's basic info
function engineerCard(engineer){
   return `<div class="col-3">
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
     <div class="card-header">Engineer</div>
     <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <p class="card-text">ID: ${engineer.id}</p>
        <p class="card-text">Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
        <p class="card-text">GitHub: <a target = 'blank' href= "https://github.com/${engineer.github}">${engineer.github}</a></p>
     </div>
    </div>
    
    </div>`
}

module.exports = generate