#!/usr/bin/node

const request = require('request');

if (process.argv.lenght < 3) {
  console.log('Usage: ./0-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Failed to retrieve the movie. Status code:', response.statusCode);
    return;
  }

  const film = JSON.parse(body);
  const characteres = film.characters;

  characteres.forEach((charactersUrl) => {
    request(charactersUrl, (error, response, body) => {
      if (error) {
        console.error('Error', error);
      }
      if (response.statusCode !== 200) {
        console.error('Failed to retrieve the character. Status code:', response.statusCode);
        return;
      }
      const character = JSON.parse(body);
      console.log(character.name);
    });
  });
});
