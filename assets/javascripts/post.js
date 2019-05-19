function setupPage(infoPID, shareDivID) {
	console.log("Setting up.");
	//Get post data
	$.getJSON("post.json", function(data) {
		//Setup date/author text
		document.getElementById(infoPID).innerHTML = data.PostUploadedDate + " - " + data.PostAuthor;

		//Setup share links
		var element = document.getElementById(shareDivID);

		var shareTitle = document.createElement("p");
		shareTitle.innerHTML = "Share:";

		var formatTitle = data.PostName.replace(" ", "%20");

		var shareBtns = document.createElement("p");
		shareBtns.innerHTML = "<a class='fa fa-reddit' href='http://reddit.com/submit?url=" + window.location.href + "&amp;title=" + formatTitle + "'></a> " +
		"<a class='fa fa-facebook' href='http://www.facebook.com/sharer.php?u=" + window.location.href + "'></a> " +
		"<a class='fa fa-twitter' href='https://twitter.com/share?url=" + window.location.href + "&amp;text=" + formatTitle + "'></a> " +
		"<a class='fa fa-envelope-open' href='mailto:?Subject=" + formatTitle + "&amp;Body=" + window.location.href + "'></a>";

		element.appendChild(shareTitle);
		element.appendChild(shareBtns);
	});
}
