import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  console.log(contacts);
  const newContacts = Array(number).fill(0).map(createFakeContact);
  console.log(newContacts);
};

generateContacts(5);
