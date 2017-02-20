//Create variable to hold student list using ul class="student-list"
const $allStudents = $(".student-list li").length;
const $students = $(".student-list").children();


//jQuery to show only 10 students at a time
//need a const to get all of the .student-list children
//need to hide $students and then show the subset of 10
$($students).hide().slice(0,9).show();

//Dynamically add pagination links 
const pagLinks = $("<div class='pagination'><ul></ul></div>");
$(".page").append(pagLinks);

//Add the visable pagination links
for (let i = 1; i <= Math.ceil($allStudents / 10); i++) {
  $(".pagination ul").append($('<li><a href="#">' + i + '</a></li>'));
}

//setting "active" class on first link and then the other links by clicking on thme
$(".pagination ul li a:first").addClass('active');
$(".pagination ul a").on('click', function () {
  $("li a").removeClass('active');
  $(this).addClass('active');
})

// display students according to page links clicked
$(".pagination li").on('click', function () {
  $students.hide().slice($(this).index() * 10, $(this).index() * 10 + 10).show();
});

//Lines 1-31 meet the "Meet Expectations" requirements and work in Chrome, Opera, Firefox, and Safari

//Build in a Search function:

//Constructing the HTML for the search box and button
const $searchBox = () => {
	const $searchDiv = $("<div></div>").addClass("student-search");
	$("h2").after($searchDiv);
	const $searchInput = $("<input></input>").attr("placeholder", "Search for students...")
	.addClass("hold-input");
	$(".student-search").append($searchInput);
	const $searchButton = $("<button></button").text("Search").addClass("search-button");
	$(".student-search").append($searchButton);
	const $clearButton = $("<button><a href='index.html'>Clear</a></button>").addClass("search-button");
	$(".student-search").append($clearButton);
}

//Calling the $searchBox function to make the elements appear:
$searchBox();


//Try to build out the search function
$(".search-button").on("click", function() {
	const $searchResults = $(".hold-input").val().toLowerCase(); //hold the value of the search results
	const $matchStudent = [];

	for ( let i = 0; i < $students.length; i++) {
			const $studentName = $(".student-details h3");
			if ($studentName[i].innerHTML.indexOf($searchResults) !== -1) {
			$students[i].style.display = '';
			$matchStudent.push(i);
		} else {
			$students[i].style.display = 'none';
		}
	}

	// message if no Results, start by hiding it
	const $noResults = $("<p class='no_result'>Search returned no results.</p>");
	$noResults.hide();

	if ($matchStudent.length === 0) {
		$noResults.show();
		$(".student-list").append($noResults);
	} 
});


















