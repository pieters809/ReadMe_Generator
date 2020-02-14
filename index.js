const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([ 
    {
    message: "Provide GitHub username:",
    name: "userNane"},
    {
    type: "input",
    message: "Provide title for your project:",
    name: "projecTitle"},
    {
    type: "input",
    message: "Provide installation instructions:",
    name: "instructions"},
    {
    type: "input",
    message: "How is the project used?",
    name: "usage"},
    {
    type: "input",
    message: "Any contributors to this project? (Name them)",
    name: "contributors"},
    {
    type: "input",
    message: "Provide contact email:",
    name: "email"}
])
  .then(function({ userNane, projecTitle, usage, instructions, contributors,email }) {
    const queryUrl = `https://api.github.com/users/${userNane}`;
    
    axios
    .get(queryUrl)
    .then(function(res){
      userImg = res.data.avatar_url;
      console.log(res.data.avatar_url);

        readme = `# projecTitle: ${projecTitle} \n## instructions \n${instructions} \n## Usage \n${usage} \n## contributors \n${contributors} \n## email \n${email}`;
      
      fs.writeFile("README.md", readme, function(err){
        if(err) throw err;
        })  
    });
  });