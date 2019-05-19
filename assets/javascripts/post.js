var postName;
var postDate;
var postAuthor;

function setup() {
	$.getJSON("post.json", function(data) {
		postName = data.PostName;
		postDate = data.PostUploadedDate;
		postAuthor = data.PostAuthor;
	});
}

function getPostInfo(infoPID) {
	document.getElementById(infoPID).innerHTML = postDate + " - " + postAuthor;
}

function setShareLinks(shareDivID) {
	var element = document.getElementById(shareDivID);

	var shareTitle = document.createElement("p");
	shareTitle.innerHTML = "Share:";

	var formatTitle = postName.replace(" ", "%20");

	var shareBtns = document.createElement("p");
	shareBtns.innerHTML = "<a class='fa fa-reddit' href='http://reddit.com/submit?url=" + window.location.href + "&amp;title=" + formatTitle + "'></a> " +
	"<a class='fa fa-facebook' href='http://www.facebook.com/sharer.php?u=" + window.location.href + "'></a> " +
	"<a class='fa fa-twitter' href='https://twitter.com/share?url=" + window.location.href + "&amp;text=" + formatTitle + "'></a> " +
	"<a class='fa fa-envelope-open' href='mailto:?Subject=" + formatTitle + "&amp;Body=" + window.location.href + "'></a>";

	element.appendChild(shareTitle);
	element.appendChild(shareBtns);

}
