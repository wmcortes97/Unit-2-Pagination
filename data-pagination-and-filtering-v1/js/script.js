/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/**
*Create the `showPage` function
   *This function will create and insert/append the elements needed to display a "page" of nine students
   *created two variables, startIndex and endIndex to determine first and last object that will be displayed in one page.
   *Selected parent element 'ul'with the class .student-list to insert new HTML.
   *Use template literals and for loop to dynamically insert each object in the parent element. 
   *Used 'i' in for loop and template literals in order for appropriate information to show for each student item.
*/


function showPage(list, page) { 
  
   startIndex = (page * 9) - 9; 
   endIndex = (page * 9); 
   
   const studentList = document.querySelector('.student-list'); 

   studentList.innerHTML = '';
 
   for (let i = 0; i< list.length; i++) {
     if (i >= startIndex && i<endIndex) {
         const studentItem = 
                   
       `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src= ${list[i].picture.thumbnail} alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
            </div>
         </li>`;

         studentList.insertAdjacentHTML('beforeend', studentItem)
         
     }
   }
 }

showPage(data, 1);

/**
*Create the `addPagination` function
   *This function will create and insert/append the elements needed for the pagination buttons
   *Created the formula numOfPages to determine the number of pages necessary dependent on the total number of student items. 
   *Selected the parent element 'ul' with the class name 'link-list' where the pagination buttons will be inserted. 
   *Created a for loop where a button will be added with the corresponding page number dependent on total number of student items.
   *Inserted these buttons using the insertAdjeventHTML
*/

function addPagination (list) {

  const numOfPages = Math.ceil(list.length / 9); 

  const linkList = document.querySelector('.link-list'); 

  linkList.innerHTML = ''; 

    for (let i = 1; i <= numOfPages; i++) { 
         const button = 
        `<li>
            <button type="button">${i}</button>
         </li>`;

       linkList.insertAdjacentHTML('beforeend', button );


/**
 * function continued...
   * Using querySelector, we retrun the first button and provide it the class name 'active' so user receives instant feedback about what page they are on.
   * Add an event listener to the ul .linklist where the buttons are located.
   * If the target of the click has the tagName of 'button' then it will:
   * store the first active button into a variable named prevButton
   * Now that the active button is considered a previous button, it should no longer show up blue.
   * They new target button will have the class name 'active' now.
   * Then we insert the first function to fun, providing it the paramaters list and the number of the button. 
   * Lastly, call the addPagination function.
 */
  const clickedButton = document.querySelector('button');
        clickedButton.className = 'active';

  linkList.addEventListener('click', (event) => {

if (event.target.tagName === 'BUTTON') {
  
const prevButton = document.querySelector('.active');
prevButton.className = '';

event.target.className = 'active';
 
     
    
showPage(list, event.target.textContent);

   }
  }) 
 }
}

addPagination(data);



/**
 * EXTRA CREDIT
 * Including the search bar
 *Selected the parent element where search bar will be inserted 'header'
 *insert HTML search into header
 */


const header = document.querySelector('.header');

header.innerHTML = '';

const search = 
`<label for="search" class="student-search">
<span>Search by name</span>
<input id="search" placeholder="Search by name...">
<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>`

header.insertAdjacentHTML('beforeend', search )



/**
 * Here I believed that cards would bring me back an array of li's that we created in earleir functions, but looks like it is coming back as a nodeList of 0
 * Would like feedback on what I missed here, 
 */

 
 
function liveSearch () {
   let cards = document.querySelectorAll('li.student-item') //thought would return array of li's
   const cardsArr = Array.from(cards); //converting to array
   let searchQuery = document.getElementById('search').value //will return what user writes 
   searchQuery = searchQuery.toLowerCase();

   for (let i = 0; i < cards.length; i++) {
      if(cards[i].innerText.toLowerCase()
      .includes(searchQuery)) {
         cards[i].style.display = '';
      } else {

         cards[i].style.display= 'none';
      }
   }

}

liveSearch();
