/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Vicky Cristina Barcelona', genre: 'drama', release_date: '2008-08-15'},
        {id: 2, title: 'Orfeu Negro', genre: 'drama', release_date: '1959-12-21'},
        {id: 3, title: 'Midnight in Paris', genre: 'drama', release_date: '2011-05-20'},
      ]);
    });
};
