function getLatestBlog(latesDivID) {
	console.log("Getting latest blog");
	var element = document.getElementById(latesDivID);
	
	$.getJSON("posts.json", function(data) {
		$.getJSON("posts/" + data.latest + "/post.json", function( post ) {
				var title = document.createElement("h2");
				title.innerHTML = " <a href='posts/" + data.latest + "/'>" + post.PostName + "</a>";
				
				var info = document.createElement("h4");
				info.innerHTML = post.PostUploadedDate + " - " + post.PostAuthor;
				
				var shortdes = document.createElement("p");
				shortdes.innerHTML = post.PostShortDes;
				
				var des = document.createElement("p");
				des.innerHTML = " <a href='posts/" + data.latest + "/'>Read More</a>";

				element.appendChild(title);
				element.appendChild(info);
				element.appendChild(shortdes);
				element.appendChild(des);
		})
		.fail(function() {
			console.warn("Error getting post!");
			
			var error = document.createElement("h2");
			title.innerHTML = "An error occured while getting the latest blog.";
			
			element.appendChild(error);
		});
	});
}

function getAllBlogs(allBlogsDivID) {
	console.log("Getting all blogs");
	var element = document.getElementById(allBlogsDivID);
	
	$.getJSON("posts.json", function(data) {
		
		for(var i=0;i<data.allPosts.length;i++) {
			$.getJSON("posts/" + data.allPosts[i] + "/post.json", function(post) {
				var title = document.createElement("h2");
				title.innerHTML = " <a href='posts/" + data.allPosts[i] + "/'>" + post.PostName + "</a>";
				
				var info = document.createElement("h4");
				info.innerHTML = post.PostUploadedDate + " - " + post.PostAuthor;
				
				var shortdes = document.createElement("p");
				shortdes.innerHTML = post.PostShortDes;
				
				var des = document.createElement("p");
				des.innerHTML = " <a href='posts/" + data.latest + "/'>Read More</a>";

				element.appendChild(title);
				element.appendChild(info);
				element.appendChild(shortdes);
				element.appendChild(des);
			})
			.fail(function() {				
				var error = document.createElement("h2");
				title.innerHTML = "An error occured while getting an post.";
			
				element.appendChild(error);
			});
		}
	});
}