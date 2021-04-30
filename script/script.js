		//make search bar find book when you type on keyboard 
		function searchFunction(){
			var nameOfBook, nameOfAuthor;
			var filter = searchBar.value.toUpperCase();
			var findBooks = document.getElementById("content");
			var books = findBooks.getElementsByClassName("books");
			
			for(let i = 0; i < books.length; i++){
				nameOfBook = books[i].getElementsByClassName("bName")[0];
				nameOfAuthor = books[i].getElementsByTagName("h3")[0];
				(nameOfBook.innerText.toUpperCase().indexOf(filter) > -1) || (nameOfAuthor.innerText.toUpperCase().indexOf(filter) > -1) ? books[i].style.display = "inline-block" 
					: books[i].style.display = "none";
			}
		}
		
		
		
		
	
		
		//mobile version of search bar
		function showSearchBar(){	
			(searchBar.style.display == "block") ? searchBar.style.display = "none" : searchBar.style.display = "block";
		}
		
		//mobile version of navigation bar
		function showNavBars(){
			(navMenu.style.display == "block") ? navMenu.style.display = "none" : navMenu.style.display = "block";
			(navMenu.style.display != "none") ? navBars.style.marginLeft = 10+"px" : navBars.style.marginLeft = 5+"%";
		}
		
		//delete book function
		function deleteBook(){
			var elem = document.getElementsByClassName("books");
			var deleteBut = document.getElementsByClassName("deleteBookToCart");
			for (var i = 0; i < elem.length; i++){
				deleteBut[i].onclick = function(){
					this.parentNode.remove();
				};
			}
		}
		
		//"add" book function
		function addBook(){ alert("book was added to card"); }
		
		//close modal function
		function closeModal(){ modal.style.display = "none"; }
		
		//open modal when button is clicked
		function addItem(){ modal.style.display = "block"; }
		


		//add new book when modal is complete
		function addNewBook(e){
			//create block
			var newBook = document.createElement("div");
			newBook.setAttribute("class", "books");

			content.appendChild(newBook);

			//add image	
			/*var image = document.createElement('img');
			image.setAttribute("id", "output");
			newBook[3].appendChild(image);
			var output = document.getElementById('output');
			output.src = URL.createObjectURL(event.target.files[0]);
			output.onload = function() {
				URL.revokeObjectURL(output.src);
			};*/

			
			
			//add image	
			var _image = document.createElement('img');
			_image.setAttribute("class", "output");
			_image.setAttribute("src", "#");	
			_image.src = myNewImg.src;
			content.appendChild(newBook);
			newBook.appendChild(_image);

			//put author name in block
			var authorName = document.createElement("p");
			authorName.setAttribute("class", "aName");
			newBook.appendChild(authorName);

			//put author name, book name, and price in paragraph
			var authorNameH3 = document.createElement("h3");
			authorNameH3.setAttribute("class", "author");
			authorName.appendChild(authorNameH3);
			(!addAuthorName.value) ? authorNameH3.innerText = "Noname" : authorNameH3.innerText = addAuthorName.value;
			//book name
			var bookName = document.createElement("p");
			bookName.setAttribute("class", "bName");
			newBook.appendChild(bookName);
			(!addBookName.value) ? bookName.innerText = "undefined" : bookName.innerText = addBookName.value;
			//price
			var price = document.createElement("p");
			price.setAttribute("class", "money");
			newBook.appendChild(price);

			var priceH4 = document.createElement("h4");
			priceH4.setAttribute("class", "price");
			price.appendChild(priceH4);
			(!addPrice.value)? priceH4.innerText = 999 : priceH4.innerText = addPrice.value;

			//add buttons add and delete
			var buttonAddBook = document.createElement("input");
			buttonAddBook.setAttribute("type", "button");
			buttonAddBook.setAttribute("value", "add book");
			buttonAddBook.setAttribute("class", "addBookToCart");
			buttonAddBook.setAttribute("onclick", "addBook()");
			buttonAddBook.style.marginRight = 4 + "px";
			newBook.appendChild(buttonAddBook);

			//delete button
			var buttonDeleteBook = document.createElement("input");
			buttonDeleteBook.setAttribute("type", "button");
			buttonDeleteBook.setAttribute("value", "delete book");
			buttonDeleteBook.setAttribute("class", "deleteBookToCart");
			buttonDeleteBook.setAttribute("onclick", "deleteBook()");
			newBook.appendChild(buttonDeleteBook);

			//close modal when add
			closeModal();

		}

