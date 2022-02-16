fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
	// render HTML here
    document.querySelector("main").innerHTML=`
	  <h1>Data successfully loaded!</h1>
	  <p>
	    Name: <strong>${data.about.name}</strong><br>
	  </p>  
  `;
});