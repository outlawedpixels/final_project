//username: cool
//password: password

// FORM VARIABLES
var username = document.getElementById('username')
var password = document.getElementById('password')
var form = document.getElementById('form')
var errorElement = document.getElementById('error')

// NAVPAGE VARIABLES
var nav = document.getElementById('nav')
var pgContent = document.getElementById('pgContent')

// GRADE FROM VARIABLES
var gradeForm = document.getElementById('gradeForm')
var gradeButton = document.getElementById('gradeButton')
var gListDiv = document.getElementById('gListDiv')

// DEFAULT VISIBILITIY
nav.style.visibility = "hidden"
pgContent.style.visibility = "hidden"
gradeForm.style.visibility = "hidden"

function navPage()
{
  nav.style.visibility = "visible"
  pgContent.style.visibility = "visible"
  
  form.style.visibility = "hidden"
}

// GRADE INPUT
var list = []

function render()
{
  for(var i = 0; i < list.length; i++)
    {
      var ele = document.createElement('div')
      ele.innerHTML = list[i]
      document.body.querySelector(".gradeList").appendChild(ele)
    }
}

function gradeSubmit()
{
  var snInput = document.body.querySelector(".studentInput").value
  var gradeError = document.body.querySelector(".gradeError")
  var gradeList = document.body.querySelector(".gradeList")
  var gradeInput = document.body.querySelector(".gradeInput").value
  
  let gradeMsg = []
  
  if(snInput.length < 2)
    {
      gradeMsg.push("Student name must be more than one character long")
      gradeList.innerHTML = ""
    }
  if(isNaN(gradeInput) == true)
    {
      gradeMsg.push("Grade input must be a number")
      gradeList.innerHTML = ""
    }
  if(gradeInput > 100 || gradeInput < 1)
    {
      gradeMsg.push("Grade input must be between 1 and 100")
      gradeList.innerHTML = ""
    }
  if(isNaN(snInput) == false)
    {
      gradeMsg.push("Insert a valid student name")
      gradeList.innerHTML = ""
    }
  if(snInput.length > 1 && isNaN(gradeInput) == false && isNaN(snInput) == true && gradeInput <= 100 && gradeInput >= 1)
    {
      gradeError.innerHTML = ""
      gradeList.innerHTML = ""
      list.push("Student Name: " +snInput+ " | Grade: " +gradeInput+ "%")
      gradeView()
    }
  
  if (gradeMsg.length > 0)
    {
      gradeError.innerText = gradeMsg.join(', ')
    }
  render()
}

gradeButton.addEventListener("click", function()
                            {
  gradeSubmit()
})

// PAGE FUNCTIONS
function gradeView()
  {
    gradeForm.style.visibility = "hidden"
    gListDiv.style.visibility = "visible"
    pgContent.innerHTML = "Grades"
  }

function addGrade()
  {
    gradeForm.style.visibility = "visible"
    gListDiv.style.visibility = "hidden"
  }

var pages =
    [
      {
        name: "Grade View",
        content: "Grades"
      },
      {
        name: "Add Grade",
        content: "Add a grade"
      }
    ]

for(var i = 0; i < pages.length; i++)
  {
    createPage(pages[i])
  }
function createPage(pg)
{
  var button = document.createElement("button")
  button.addEventListener("click", function()
  {
    contentWrite(pg.content, pg.name)
  })
  button.innerHTML = pg.name
  nav.appendChild(button)
}

function contentWrite(wd, pg)
{
  pgContent.innerHTML = wd
  
  if (pg == "Grade View")
    {
      gradeView()
    }
  if (pg == "Add Grade")
    {
      addGrade()
    }
}

// FORM VALIDATION
form.addEventListener('submit', (e) => 
  {
    let messages = []
    if (username.value !== "cool")
      {
        messages.push('Valid username required')
      }
    if (password.value !== "password")
      {
        messages.push('Valid password required')
      }
    if (username.value == "cool" && password.value == "password")
      {
        errorElement.innerText = ""
        username.value = ""
        password.value = ""
        navPage()
        e.preventDefault()
      }
  
  if (messages.length > 0)
      {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
      }
})

//username: cool
//password: password