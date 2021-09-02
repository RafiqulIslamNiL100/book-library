// on click function 
const getBook = () => {
    const inputField = document.getElementById('input-value')
    const searchText = inputField.value


    // clearing input value after search 
    inputField.value = '';

    //load api 
    const url = (`https://openlibrary.org/search.json?q=${searchText}`)
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))

}


// declaring function for display books 
const displayBooks = books => {
    const divSection = document.getElementById('div-section')

    // clear previous data 
    divSection.innerHTML = '';

    // if items not available 
    if (books.length === 0)
        alert("Please search with a valid book name")

    books.forEach(book => {
        const newDiv = document.createElement('div')

        // adding New Div contents inside innerHTML

        newDiv.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/ ${book.cover_i}-M.jpg" class="card-img-top width-50" alt="...">
                <div class="card-body">
                    <h3 class="card-title"> ${book.title} </h3>
                    <p class="card-text"> Author's Name : ${book.author_name} </p>
                    <p class=" Publisher card-text"> Book Publisher's Name : ${book.publisher} </p>
                    <p class="card-text"> First publishing year : ${book.first_publish_year} </p>
                    <button class="btn"> Buy Now </button>
                </div>
            </div>
        </div>
        `
        
        divSection.appendChild(newDiv);
    });

}

