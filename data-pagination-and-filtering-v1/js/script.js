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
   // insert the above elements

   
 }


showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
