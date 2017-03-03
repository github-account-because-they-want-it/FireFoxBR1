var xhr = new XMLHttpRequest()
xhr.open("POST", "http://localhost:8000/apiview/")
xhr.setRequestHeader("Authroization", "joe")
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
}
xhr.send(null)
