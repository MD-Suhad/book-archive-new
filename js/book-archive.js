const searchBook = () => {
  const searchField = document.getElementById('book-name');
  const searchText = searchField.value;
  searchField.value = '';
  
  const errorMessage = document.getElementById('error-message');
  if(searchText==='') {
    errorMessage.innerHTML ='Please Write a Book Name!!'
  }
  else{
    errorMessage.innerHTML ='';
    const url =`https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
  .then(res=>res.json())
  .then(data =>displaySearch(data.docs));
  }
};



const displaySearch = books => {

  const searchBookResult = document.getElementById('search-number');
 

  searchBookResult.innerHTML = `
  <h3>Found The Book:${books.length}</h3>
   
  `;
  searchBookResult.appendChild(h3);
  
  console.log(books);

  const searchResult = document.getElementById('search-result');
  searchResult.innerHTML = '';
  const errorMessage = document.getElementById('error-message');
  if(books.length===0) {
    errorMessage.innerHTML = '';
    errorMessage.innerHTML =`Please write a valid book Name!!!`;
    
  }
 else{
  books.forEach(book =>{
    console.log(book);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =`
    <div class="card h-100">
          <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
              <h3 class="card-title">Books Name: ${book.title}</h3>
              <h4>Author Name: ${book.author_name}</h4>
              <h5>Publisher: ${book.publisher}</h5>
              <h5>Publisher Year:${book.first_publish_year}</h5>
              
       </div>
     </div>
     `;
    searchResult.appendChild(div);
});
 }
}
