// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  copy1 = JSON.parse(JSON.stringify(arr))

  const directors = copy1.map((currentDirector) => {
    return currentDirector.director
  });

  return directors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

 /*  const dramaMovies = []
for (let j = 0; j < arr.length; j++){
  for (let i = 0; i < arr.genre.length; i++) {
    if (arr.genre[i] === 'Drama'){
      dramaMovies.push(arr[i])
    }
  }
}

 I spend 20 minutes trying this solution (as I already had the good one) just because I forgot spielberg firstname was Steven --'

const spielbergDramaMovies = dramaMovies.filter((currentDramaMovie) =>{
  return currentDramaMovie.director === 'Spielberg'
}) */


   const spielbergDramaMovies = arr.filter((currentMovie => {
    return currentMovie.director === 'Steven Spielberg' && currentMovie.genre.indexOf('Drama') !== -1
  }))
 
  return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(arr.length === 0) return 0
  

  const averageScore = arr.reduce((accumulator, currentScore) => {
   // if(currentScore.score === '') currentScore.score = 0
    return Math.round((accumulator + currentScore.score / arr.length) * 100) / 100
  }, 0)
  //const averageScore = totalScore / arr.length
  return averageScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  
  const dramaMovies = arr.filter((currentDramaMovie => {
    return currentDramaMovie.genre.indexOf('Drama') !== -1
  }))
  if (dramaMovies.length === 0) return 0

  const averageScoreDramaMovie = dramaMovies.reduce((accumulator, currentDramaScore) => {
    return Math.round((accumulator + currentDramaScore.score / dramaMovies.length)*100)/100
  }, 0)

  return averageScoreDramaMovie
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  copy2 = JSON.parse(JSON.stringify(arr))
  const yearByYear = copy2.sort((currentYear, next) => {
    if (currentYear.year !== next.year) {
      return currentYear.year - next.year
    }
    else{
      const titleOrder = copy2.sort((currentTitle, next) => {
       if (currentTitle.title < next.title) return -1
       if (currentTitle > next.title) return 1
       return 0
      })
      return titleOrder
    } 
    /* if (currentYear.year === next.year){
      const whichTitleCameFirst = [currentYear, next];
      whichTitleCameFirst.title.sort();
      return yearByYear.push(whichTitleCameFirst) 
    }*/
  })
  
  return yearByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  copy3 = JSON.parse(JSON.stringify(arr))
  const moviesInOrder = copy3.sort((currentTitle, next) => {
    if (currentTitle.title < next.title) return -1
    if (currentTitle > next.title) return 1
    return 0
   })
  const orderedTitles = moviesInOrder.map((currentTitle) => {
    const order = currentTitle.title
    return order
  })

  const twentyFirstTitles= orderedTitles.splice(0,20)
 
  return twentyFirstTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
