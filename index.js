document.getElementById('get-data').addEventListener('click', obtainData);
document.getElementById('post-data').addEventListener('submit', sendData);

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
					<li> User's Name: ${name} </li>
					<li> User's Email: ${email} </li>
					<li> User's Body: ${body}</li>
				</ul>
			</section>`;
			document.getElementById('hello').innerHTML = answer;
		})
	}

function sendData() {
	event.preventDefault();
	
	let daHead = document.getElementById('da-head').value;
	let daBody = document.getElementById('da-body').value;

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			"content-type":"application/json; charset=UTF-8"
		},
		body: JSON.stringify({dahead:daHead, dabody:daBody})
	}).then(response => response.json())
	.then(data => {
		document.getElementById('hi').innerHTML = "Success!";
	})
}
