//main vars
let my_container_div = document.querySelector(".my_container_div")
let my_form = document.querySelector(".my_form")
let my_input = document.querySelector(".my_input")

// movies API
fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd551351d613eae72b5219e295facfeb&page1")
.then((my_request)=> my_request.json())
.then((my_data)=>{
  // console.log(my_data.results);
  my_data.results.forEach((arr)=>{
    // console.log(arr);
    let my_image = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${arr.backdrop_path}`
    let my_title = arr.original_title
    let my_overview = arr.overview
    let my_date = arr.release_date
    //main divs
    let my_div_loop = 
    `
    <div class="col-lg-3 col-md-5 col-10 mb-4 my_units">
      <div class="col bg-white border border-4 border-light my_div">
        <img
          src=${my_image}
          alt="image"
          class="img-fluid mb-1"
        />
        <p class="ps-2 fw-light">${my_date}</p>
        <h6 class="ps-2">${my_title}</h6>
        <div class="my_p">
          <p>
            ${my_overview}
          </p>
        </div>
      </div>
    </div>
    `
    my_container_div.innerHTML += my_div_loop
  })
})
//search button function
my_form.addEventListener("submit",(e)=>{
  e.preventDefault();
  my_container_div.innerHTML = ``
fetch(`https://api.themoviedb.org/3/search/movie?api_key=bd551351d613eae72b5219e295facfeb&query=${my_input.value}`)
.then((my_request1)=> my_request1.json())
.then((my_data1)=>{
  // console.log(my_data);
  // console.log(my_data1.results);
  my_data1.results.forEach((arr1)=>{
    // console.log(arr1);
    let my_image = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${arr1.poster_path}`
    let my_title = arr1.original_title
    let my_overview = arr1.overview
    let my_date = arr1.release_date
    //main divs for search btn
    let my_div_loop = 
    `
    <div class="col-lg-3 col-md-5 col-10 mb-4 my_units">
      <div class="col bg-white border border-4 border-light my_div">
        <img
          src=${my_image}
          alt="image"
          class="img-fluid mb-1"
        />
        <p class="ps-2 fw-light">${my_date}</p>
        <h6 class="ps-2">${my_title}</h6>
        <div class="my_p">
          <p>
            ${my_overview}
          </p>
        </div>
      </div>
    </div>
    `
    my_container_div.innerHTML += my_div_loop
  })
})
})