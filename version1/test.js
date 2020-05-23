// VERSION 1

/*
1.
Write a function that:
- Logs to the console numbers 1 to 100.
- However, if the number is a multiple of both 3 and 5 it should log "Jackpot!" instead of the number.
- If it doesn't pass the function should log "multiple of 3" if it's a multiple of only 3
- If it's a multiple of 5 it should log "This is a multiple of 5"

Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
Hint: the order of conditional statements is important!
*/
function numbersFromOneToHundred() {
  for (let i = 1; i <= 100; i++) {
    switch (true) {
      case i % 15 === 0:
        console.log("Jackpot");
        break;
      case i % 3 === 0:
        console.log("This is a multiple of 3");
        break;
      case i % 5 === 0:
        console.log("This is a multiple of 5");
        break;
      default:
        console.log(i);
    }
  }
}
numbersFromOneToHundred();

/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!") 
- Creates an empty <img> element and add it to the document.
- When the button is clicked, inserts an image URL into an <img> tag and remove the button
- Use the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/
function createButton() {
  const button = document.createElement("button");
  const image = document.createElement("img");
  const jsScript = document.querySelector("script");

  button.textContent = "Click Me";
  document.body.insertBefore(button, jsScript);
  document.body.insertBefore(image, jsScript);
}

createButton();
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("img").src =
    "https://avatars3.githubusercontent.com/u/20858568?s=200&v=4";
  document.querySelector("button").style.display = "none";
});
/* 
3. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less. 
An API as the I in it's abbreviation implies is an interface using which two different applications can communicate with each other, on terms that this interface describes. In other words, an API can be seen as a socket which shows where you can connect you device (Application)to electricity(Another application), and it describes the terms of such connection (220 volts, alternate current, and type of socket to be used).
Translating this definition to the HackYourRepo project, the api allowed my application, which purpose is rendering repositories and contributors in the DOM, to use the data of another application (GITHUB), where the API described how such usage should be implemented (point of entry, the types of data that can be used, their format, etc.)

*/

/*
4.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following API: https://reqres.in/api/users
- Make use of async/await syntax
- Parses the response and then displays the "first_name" and "last_name" of the first THREE users within the DOM
- Creates an <ul> for each user
- Makes use of async/await
*/
async function fetchThreeUsers() {
  const url = "https://reqres.in/api/users";
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const users = jsonResponse.data;
  const list = document.createElement("ul");
  document.body.insertBefore(list, document.querySelector("script"));
  for (let i = 0; i < 3; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${users[i].first_name} ${users[i].last_name}`;
    list.appendChild(listItem);
  }
}
fetchThreeUsers();
/*
5.
a) Create a class, called Person, that includes:
- A constructor method
- "name", "age", "home city" properties
- 1 additional method, called "getName", which returns the name

b) Instantiate the class, and give it your name + attributes

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/
class Person {
  constructor(name, age, homeCity) {
    this.name = name;
    this.age = age;
    this.homeCity = homeCity;
  }

  getName() {
    return this.name;
  }
}
const user1 = new Person("Anis Alkomem", 41, "Donetsk");
/*
This class is named a Person, using which we can create various objects that have the properties that we described in our class. Thus, this class is a representation in code of a real world entity(a person), which is the essence of OOP, i.e. modeling real life objects in programs, Person, Employee, Book, User, etc.
*/

/*
6. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library
*/
function showChart() {
  const newCanvas = document.createElement("canvas");
  newCanvas.id = "myChart";
  newCanvas.setAttribute("width", 400);
  newCanvas.setAttribute("height", 400);

  document.body.insertBefore(newCanvas, document.querySelector("script"));
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
// showChart();

/*
I am not familiar with this library syntax, so I copied the example form the library's page. I chose the cdn as the method for installation, because I didn't want to initialize a project and install it using npm. After making the link to the library's CDN in the script source I copied the code from the library, and put it into a function that I executed it. I added the element of the canvas in the function so that I don't add it in the html file. Added the id and the attributes so it resembles the one in the example, changed var to consts, and it worked. If I had more time I would have changed the graph data set to something more common, for example # of students in each class of Hack your Future
*/
