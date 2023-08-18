let arr=document.getElementsByTagName("li");
	for(let i=0;i<arr.length;i++){
		if(arr[i].id=="level"){
			alert("The elevel of the element is: "+ arr[i].innerHTML);
		}
	}
	

//console.log(arr);
//console.log(arr.length);