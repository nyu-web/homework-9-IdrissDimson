document.getElementById('getData').addEventListener('click', obtainData);

document.getElementById('postData').addEventListener('submit', sendData);

function obtainData() {
	// body...
	fetch('https://jsonplaceholder.typicode.com/comments/1')
		.then(response => response.json())
		.then(data => {
			let answer = '<h2> Comments from a user </h2>';
			const {id, name, email, body} = data;
			answer +=
				`<section>
				 <h4> User ID: ${id} </h4>
				 	<ul>
				 		<li> User's Name: ${id} </li>
				 		<li> User's Email: ${email} </li>
				 		<li> User's Body: ${body}</li>
				 	</ul>
				 </section>`;
			document.getElementById('hello').innerHTML = answer;
		})
		// .then(json => console.log(json))
}

function sendData() {
	event.preventDefault();
	
	let daHead = document.getElementById('daHead').value;
	let daBody = document.getElementById('daBody').value;

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: new Headers(),
		body: JSON.stringify({daHead:daHead, daBody:daBody})
	}).then(response => response.json())
	.then(data => {
		console.log(data);
		document.getElementById('hi').innerHTML = "Success!";
	})
}