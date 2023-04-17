import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const asciiText = await openDB('jate'); };
  
  

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const asciiText = await openDB('jate');
  const asciiFetch = await asciiText.transaction.objectStore('jate');
  const processing = await processing;
  processing  
    ? console.log('Presenting Data', asciiFetch.value)
    : console.error('getDb not implemented');

initdb();

>