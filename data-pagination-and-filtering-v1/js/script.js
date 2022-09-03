/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//is this linked? 

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

//The list parameter will represent the array of student data we are working with
//page parameter will be the page number that we want to display.


function showPage(list, page) { 
  
   startIndex = (page * 9) - 9; 
   endIndex = (page * 9); 
   
 const studentList = document.querySelector('.student-list'); 

   studentList.innerHTML = '';
 
   // loop over the length of the `list` parameter
   for (let i = 0; i< list.length; i++) {
     // inside the loop create a conditional to display the proper students
     if (i >= startIndex && i<endIndex) {
       // inside the conditional:
         // create the elements needed to display the student information

         const studentItem = 
         ` 
         <li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src= ${list[i].picture.thumbnail} alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email}</span>
    </div>
    <div class="joined-details">
      <span class="date">${list[i].registered.date}</span>
    </div>
  </li>
         
         `;
   
         studentList.insertAdjacentHTML('beforeend', studentItem)
         
     }
   };
  

   
 }


showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (list) {

// create a variable to calculate the number of pages needed

const numOfPages = Math.ceil(list.length / 9); //returning 5


  // select the element with a class of `link-list` and assign it to a variable

  const linkList = document.querySelector('.link-list'); //returning ul

  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = ''; //replacing whats in ul

  // loop over the number of pages needed
    // create the elements needed to display the pagination button
    // insert the above elements


    for (let i = 1; i <= numOfPages; i++) { //for 42 objects, will loop 5
         const button = 
         `<li>
         <button type="button">${i}</button>
       </li>`;

       linkList.insertAdjacentHTML('beforeend', button );

  // give the first pagination button a class of "active"
  const clickedButton = document.querySelector('button');
       clickedButton.className = 'active';

  // create an event listener on the `link-list` element

  linkList.addEventListener('click', (event) => {
// if the click target is a button:
if (event.target.tagName === 'BUTTON') {
      // remove the "active" class from the previous button
const prevButton = document.querySelector('.active');
prevButton.className = '';
 // add the active class to the clicked button
event.target.className = 'active';
 
     
      // call the showPage function passing the `list` parameter and page to display as arguments
showPage(list, event.target.textContent);

}
   


  }) 

 
    }
}

addPagination(data);



// Call functions

function searchBar (list) {

const header = document.querySelector('.header');

header.innerHTML = '';

const search = 
`<label for="search" class="student-search">
<span>Search by name</span>
<input id="search" placeholder="Search by name...">
<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`

header.insertAdjacentHTML('beforeend', search )


const searchInput = document.getElementById('search');

searchInput.addEventListener("input", (e) => {

   let value = e.target.value

   // 2. check: if input exists and if input is larger than 0
   if (value && value.trim().length > 0){
       // 3. redefine 'value' to exclude white space and change input to all lowercase
        value = value.trim().toLowerCase()
       // 4. return the results only if the value of the search is included in the person's name
       // we need to write code (a function for filtering through our data to include the search input value)
      
   } else {
       // 5. return nothing
       // input is invalid -- show an error message or show no results

   }

})










// const filter = input.value.toUpperCase();
// const itemChild = document.querySelector('student-item cf');
// const UlParent = document.querySelector('.student-list');

// for (let i = 0; i < list.length; i++) {




// }

};

searchBar(data);