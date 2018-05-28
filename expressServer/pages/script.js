function initXHR(x, value) {
	console.log(x);
	if (x == 'songs') {
		populatePage(null, 'songs');
 		document.getElementById("songs").style.display = "block";
		document.getElementById("user").style.display = "none";
		if(value == null) {
			playerInit();
		}
	}
 	else if (x == 'user') {
		populatePage(null, 'user')
 		document.getElementById("songs").style.display = "none";
		document.getElementById("user").style.display = "block";
	}
	else {
		document.getElementById("songs").style.display = "block";
		document.getElementById("user").style.display = "none";
	}
}

function retrieveSongFromServer(url, param) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var object =  JSON.parse(xmlhttp.responseText);
			populatePage(object, param);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function retrieveUserFromServer(url, param) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var object = JSON.parse(xmlhttp.responseText);
			populatePage(object, param);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function populatePage(object, param) {
	if(param == 'songs')
	{
		retrieveSongFromServer('/newsong', "new-song-song-element")
	}
	if(param == 'new-song-song-element')
	{
		var songTitle = document.getElementById('song-title');
		songTitle.innerHTML = object[0].title;
	
		var songDesc = document.getElementById('song-desc');
		songDesc.innerHTML = object[0].description;
	
		var songAlbum = document.getElementById('song-album');
		songAlbum.innerHTML = object[0].album;

		var mp3Src = document.getElementById('mp3-src');
		mp3Src.src = "http://localhost:8080" + object[0].path;
	
		//refresh the player
		var audio = document.getElementById('player');
		audio.load();
		retrieveUserFromServer('/users/'+object[0].musician, 'new-song-musician-element');
	}
	if(param == 'new-song-musician-element')
	{
		var songArtist = document.getElementById('musician-name');
		songArtist.innerHTML = object[0].username;

		var artistBio = document.getElementById('musician-bio');
		artistBio.innerHTML = object[0].bio;
			
		var userFacebook = document.getElementById('musician-facebook');
		userFacebook.innerHTML = object[0].facebook;
		userFacebook.href = 'http://' +object[0].facebook;
	
		var userTwitter = document.getElementById('musician-twitter');
		userTwitter.innerHTML = object[0].twitter;
		userTwitter.href = 'http://' + object[0].twitter;
	}
	if(param == 'user')
	{
		retrieveUserFromServer('/users/bob@test.com', 'user-user-element');
	}
	if(param == 'user-user-element')
	{
		var userName = document.getElementById('user-name');
		userName.innerHTML = object[0].username;
	
		var userBio = document.getElementById('user-bio');
		userBio.innerHTML = object[0].bio;

		var userBal = document.getElementById('user-balance');
		userBal.innerHTML = '$'+ object[0].balance;
	
		var userFacebook = document.getElementById('user-facebook');
		userFacebook.innerHTML = object[0].facebook;
		userFacebook.href ='http://' +object[0].facebook;
	
		var userTwitter = document.getElementById('user-twitter');
		userTwitter.innerHTML = object[0].twitter;
		userTwitter.href = 'http://' +object[0].twitter;
	}
	
}

function playerInit() {
	//create a new Plyr object
	const player = new Plyr(document.getElementById('player'), {
		autopause: true,
		seekTime: 15,
		volume: 0.5,
		muted: false
	});
}
