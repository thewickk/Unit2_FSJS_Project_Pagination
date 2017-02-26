const $students = $('.student-list').children();
const $searchResults = [];

//Create the search box
/*<div class="student-search">
  <input placeholder="Search for students...">
  <button>Search</button>
</div>*/
$('.page-header').append('<div class="student-search">' +
	'<input placeholder="Search for students...">' +  
	'<button>Search</button></div>'
);


//Create the pagination <div>
const $paginationDiv = $('<div class="pagination"><ul></ul></div>');
$('.page').append($paginationDiv);

//Filter to show only ten students per page
//**Remember** .slice is up to, But not including the end argument
$students.hide().slice(0, 10).show(); 


//Create pages with 10 or less students no matter how many students
for ( let i = 1; i <= Math.ceil($students.length / 10); i++ ) {
	$('.pagination ul').append($('<li><a href="#">' + i + '</a></li>'));
}

//Display subset of $students depending on which link is clicked
$('.pagination li').on('click', function() {
	$students.hide().slice($(this).index() * 10, $(this).index() * 10 + 10)
	.show();
});

//Set 1st pagination <a> tag to active when page loads
$('.pagination a:first').addClass('active');
//Remove 'active' class and add it to the currently clicked on <a> tag
$('.pagination a').on('click', function () {
	$('a').removeClass('active');
	$(this).addClass('active');
});

//Construct error message for no search results
$('.student-list').append('<div class="message">' +
	'<p>Your search returned no results</p></div>');

//Error message must be hid unitl search results return no matches
$('.message').hide();

//Building the search function
$('.student-search input').on('keyup', function() {
	$(".pagination a").removeClass("active");
	$(".pagination a:contains(1)").addClass("active");

	$(".student-item").hide();

	//Set results array to empty
	 let $searchResults = [];

	//Get search input
	const $searchInput = $("input").val().toLowerCase();

	//Get name and email from each student list item and push to empty array
	    //if search input matches
	$(".student-list").children().each(function(){
	    var email = $(this).find(".email").text();
	    var name = $(this).find("h3").text();

	    if (email.indexOf($searchInput) !== -1 || name.indexOf($searchInput) !== -1){
	        $searchResults.push(this);
	    }
	});

	$($searchResults).each(function(){ //show search results from results array
	    $(this).show();
	});
  //If no search results, show 'No matches found' message
	if ($searchResults.length < 1) {  
	    $(".message").show();
	} else {
	    $(".message").hide();
	}

  //Hide results in array starting at the tenth index
	$($searchResults).slice(10).hide(); 

	$(".pagination li").show(); //Show pagination list items
  //Hide pagination list items
	//Using results.length math.ceil calcultations as starting index
	$(".pagination li").slice(Math.ceil($searchResults.length/10)).hide();  

	//Hide pagination list items is results array length is less than or
	//equal to 10
	if($searchResults.length <= 10){
	    $(".pagination ul").children().hide();  
	}
});







