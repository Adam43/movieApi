import axios from "axios"; //user-id:391c356a238f363b1646566e260f4c26

async function fetchMovie(){
try {//Displays all trending movies and TV for today
  const movieData = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=391c356a238f363b1646566e260f4c26")

  //runs the data request and checks for errors
    return movieData
  } catch(error){
    console.log("Uh no, we're in bad shape", error)
  }
}
//fetchMovie()

//Movie ID's
//505642 = black panther 
//"tt9114286"


//SHOW MOVIE TITLE
async function showMovieTitle(){
  const movieData = await fetchMovie()
  console.log(movieData.data.results)

  const titleList = document.createElement("ul")

  movieData.data.results.forEach(element => {
    console.log(element.title);

    const title = document.createElement("li");
    title.textContent = element.title
    titleList.append(title)
  })
  document.body.append(titleList);
}


const myButton = document.getElementById("loadMoviesButton")
myButton.addEventListener("click", async function(){
  await showMovieTitle()
})



//SHOW MOVIE IMAGE
// async function showMovieImage(){
//   const movieData = await fetchMovie()
//   const movieImageContainer = document.getElementById("movieImageContainer");
//   console.log(movieData.data)
// }
  
  
  // const movieGeneratorButton = document.getElementById("movieGeneratorButton");

  // const newImgElement = document.createElement("img");
  // movieGeneratorButton.addEventListener("click", async () => {
  //   const newMovie = await fetchMovie();
  //   newImgElement.src = newMovie.message
  //   })
  //   movieImageContainer.append(newImgElement);
//}
//showMovieImage();





console.log("Hello")


//movieImages: 





