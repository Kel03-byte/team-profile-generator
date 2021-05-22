// Creates a card depending on the role provided
function makeCards(data) {
    return data
        .map((employee) => {
            let role = employee.getRole();
            switch (role) {
                case "Manager":
                    return createManagerCard(employee);
                    break;
                case "Engineer":
                    return createEngineerCard(employee);
                    break;
                case "Intern":
                    return createInternCard(employee);
                    break;
            }
        })
        .join("\n");
};

// Template for the Engineer Card
function createEngineerCard(engineer) {
    return `
<div class="card col-sm-10 col-md-5 col-lg-3 mr-2 mb-3 bg-light">
    <div class='card-header bg-primary text-light'>
        <h2>${engineer.name}</h2>
        <h2><i class="fas fa-glasses"></i> ${engineer.role}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="${engineer.getGitHub()}"> ${engineer.getGitHub()}</a></li>
        </ul>
    </div>
</div>
`
};

// Template for the Intern Card
function createInternCard(intern) {
    return `
<div class="card col-sm-10 col-md-5 col-lg-3 mr-2 mb-3 bg-light">
    <div class='card-header bg-primary text-light'>
        <h2>${intern.name}</h2>
        <h2><i class="fas fa-user-graduate"> ${intern.role}</i></h2>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</a></li>
        </ul>
    </div>
</div>
`
};

// Template for the Manager
function createManagerCard(manager) {
    return `
<div class="card col-sm-10 col-md-5 col-lg-3 mr-2 mb-3 bg-light">
    <div class='card-header bg-primary text-light'>
        <h2>${manager.name}</h2>
        <h2><i class="fas fa-mug-hot"></i> ${manager.role}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>
`
};

// Template for the HTML file
function generateProfilePageHTML(data) {
    return `
<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
<title>Team Profile</title>
</head>
    
<body>
    <header>
    <h1 class="container-fluid bg-danger text-light p-3 text-center">Meet The Team</h1>
    </header>
    
    <div class='container-fluid'>
        <ul class="row justify-content-center">
    
            ${makeCards(data)}

        </ul>
    </div>

</body>

</html>
`
};

// Exports the HTML file to the Index.js
module.exports = generateProfilePageHTML;