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
  var inputValue = document.getElementById("searchInput").value;

  // Var search message container - id
  var searchMessage = document.getElementById("searchMessage");
  // Var search message Text - id
  var searchMessageText = document.getElementById("searchMessageText");

  // Var text container - id
  var textBox = document.getElementById('textBox');
  // Var text container - content
  let text = document.getElementById('textBox').textContent;

  // Var search result marker - class
  var markedSearchResult = document.getElementsByClassName("search-hit")[0];
  var replaceMarker = text.replace("", "")

  // Var number of search results
  var countResult = text.split(inputValue).length - 1;
 

  /*
   * Before the actual search starts, it is checked whether previous search terms are present. If so, the previous selection and the search message will be removed.
   */
  if(searchMessageText || markedSearchResult) {
  	// Clear previous search message - removes the search message text
    searchMessageText.remove();

    // Clear previous search result - controlls if previous result exists and removes marker from text everytime
    if(markedSearchResult) {
      textBox.innerHTML = replaceMarker;
    };
  }


  /*
   * Here we check if the input is empty, if something was found during the search or if nothing was found during the search
   * and output the corresponding result
   */
  // Condition input is empty
  if (inputValue == "") {
 
    // Output of "input is empty message"
    searchMessage.innerHTML += "<span class='error-message' id='searchMessageText'>Please enter a search term</span>"; 
	  return false;

  } 
  // Condition search was successful
  else if (text.includes(inputValue)) {
    
    // Variables that are needed to mark the search result must be here, otherwise the unmarking of the previous search result will not work
    var textBoxInnerHTML = textBox.innerHTML;
    var index = textBoxInnerHTML.indexOf(inputValue);
    
    // Marks the search result   
    // TODO: mark multiple search results
    var markerHTML = textBoxInnerHTML.substring(0,index) + "<span class='search-hit'>" + textBoxInnerHTML.substring(index,index+inputValue.length) + "</span>" + textBoxInnerHTML.substring(index + inputValue.length);   
    textBox.innerHTML = markerHTML;

    // Output of "success search message"
  	searchMessage.innerHTML += "<span class='success-message' id='searchMessageText'>We have found "+countResult+" search Results</span>"; 

  } 
  // Condition search was not successful
  else {
    // Output of "nothing found message"
	  searchMessage.innerHTML += "<span class='error-message' id='searchMessageText'>Sorry, we have found "+countResult+" results</span>"; 

  };	


}
