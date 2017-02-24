const $students = $('.student-list').children();


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
//**Remember** .slice is up to, but not including the end argument
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

















