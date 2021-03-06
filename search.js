/*
 *
 * Search input functions
 *
 */

// Hides the searchIcon when focus on input
function hideSearchIcon() {
    var elem = document.getElementById("searchIcon");
    elem.className += " hide-search-icon ";
}

// Reset the searchIcon when focusout on input
function showSearchIcon() {
    var element = document.getElementById("searchIcon");
    element.classList.remove("hide-search-icon");
}

// Resets the search input value by clicking the X
function resetSearchValue() {
    document.getElementById("searchInput").value = ''
}



/*
 *
 * Search function
 *
 */

function startSearch() {

  // Var input - value
  var searchValue = document.getElementById("searchInput").value;

  // Var text container - id
  var textBox = document.getElementById("textBox");
  // Var text container - content
  var text = document.getElementById("textBox").textContent;

  // Var search message container - id
  var searchMessage = document.getElementById("searchMessage");
  // Var search message Text - id
  var searchMessageText = document.getElementById("searchMessageText");

  // Var number of search results
  var countResult = text.split(searchValue).length - 1;

  // Var for clear search result marker - class
  var markedSearchResult = document.getElementsByClassName("search-hit")[0];
  var deleteMarker = text.replace("", "");

  // Consts for search result marker
  const splitSearchValue = searchValue.split(/\s/);
  const searchValuePattern = new RegExp(`(${splitSearchValue.join('|')})`, 'g'); 
  const finalSearchResult = text.replace(searchValuePattern, match => `<span class='search-hit'>${match}</span>`);
 

  /*
   * Before the actual search starts, it is checked whether previous search terms are present. If so, the previous search marker and message will be removed.
   */
  
  if(searchMessageText || markedSearchResult) {
    // Clear previous search message - removes the search message text
    searchMessageText.remove();

    // Clear previous search result marker
    if(markedSearchResult) {
      textBox.innerHTML = deleteMarker;
    };
  }


  /*
   * Here we check if the input is empty, if something was found or if nothing was found during the search and output the corresponding result.
   */
  
  // Condition input is empty
  if (searchValue == "") {
 
    // Output of "input is empty message"
    searchMessage.innerHTML += "<span class='error-message' id='searchMessageText'>Please enter a search term</span>"; 

    return false;

  } 
  // Condition search was successful
  else if (text.includes(searchValue)) {

    // Clear the textbox
    textBox.innerHTML = "";

    // Add the text with marked search results
    textBox.innerHTML += finalSearchResult;

    // Output of "success search message"
    searchMessage.innerHTML += "<span class='success-message' id='searchMessageText'>We have found "+countResult+" search Results</span>";

  } 
  // Condition search was not successful
  else {
    
    // Output of "nothing found message"
    searchMessage.innerHTML += "<span class='error-message' id='searchMessageText'>Sorry, we have found "+countResult+" results</span>"; 

  };  


}
