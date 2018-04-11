get.onclick = function(){
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'http://localhost:2403/users/', true);

	xhr.onreadystatechange = function(data){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				
			}
	}
	
	}
	xhr.send();

}

post.onclick = function(){

	let name = document.forms[0].name.value;
	let sname = document.forms[0].sname.value;
	let age = document.forms[0].age.value;
	let married = document.forms[0].married.checked;

	const person = {
		name,
		sname,
		age,
		married
	}
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:2403/users/', true);

	xhr.onreadystatechange = function(data){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				alert('Data was sent!')
				document.forms[0].name.value = '';
				document.forms[0].sname.value = '';
				document.forms[0].age.value = '';
				document.forms[0].married.checked = false;
			}
		}
	}
	let personToSend = JSON.stringify(person)
	xhr.setRequestHeader('Content-type','application/json');

	xhr.send(personToSend);


}

document.getElementById('delete').onclick = function(){

	
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'http://localhost:2403/users/94c635d951099ad7', true);

	xhr.onreadystatechange = function(data){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				alert('Deleted')	
			}
		}
	}
	
	xhr.setRequestHeader('Content-type','application/json')
	xhr.send();


}
put.onclick = function(){
	let name = document.forms[0].name.value;
	let sname = document.forms[0].sname.value;
	let age = document.forms[0].age.value;
	let married = document.forms[0].married.checked;

	const person = {
		name,
		sname,
		age,
		married
	}
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'http://localhost:2403/users/97cbaed5a729893e', true);

	xhr.onreadystatechange = function(data){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				alert('Data was updated!')
				document.forms[0].name.value = '';
				document.forms[0].sname.value = '';
				document.forms[0].age.value = '';
				document.forms[0].married.checked = false;
			}
		}
	}
	let personToSend = JSON.stringify(person)
	xhr.setRequestHeader('Content-type','application/json');
	xhr.send(personToSend);
}