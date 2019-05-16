function getPostInfo(infoPID) {
	
	$.getJSON("post.json", function(data) {
		
		document.getElementById(infoPID).innerHTML = data.PostUploadedDate + " - " + data.PostAuthor;
	});	
}