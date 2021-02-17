const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmList = function (films) {
  const result = films.map((film) => {
    return film.title;
  });
  return result;
}

Cinema.prototype.getFilmByTitle = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title;
  });
  return result
}

Cinema.prototype.getFilmsByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre
  })
  return result
}

Cinema.prototype.checkFilmByDate = function (year) {
  const result = this.films.some((film) => {
    return film.year === year;
  })
  return result
}

Cinema.prototype.checkFilmDurationOver = function (length) {
  const result = this.films.every((film) => {
    return film.length > length
  })
  return result
}

Cinema.prototype.totalRunningTime = function () {
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0);
  return result
}


module.exports = Cinema;


