const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, '/db/contacts.json');

function readContactsFile() {
  return fs.readFile(contactsPath, 'utf8')
    .then((data) => JSON.parse(data))
    .catch((err) => {
      console.error('Error reading contacts file:', err);
      throw err; // Rethrow the error to be caught by the caller
    });
}

function listContacts() {
  return readContactsFile();
}

function getContactById(contactId) {
  return readContactsFile()
    .then((contacts) => contacts.find((c) => c.id === contactId))
    .catch((err) => {
      console.error('Error in getContactById:', err);
      throw err; // Rethrow the error to be caught by the caller
    });
}

function removeContact(contactId) {
  return readContactsFile()
    .then((contacts) => {
      const updatedContacts = contacts.filter((c) => c.id !== contactId);
      return fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2))
        .then(() => true) // Indicate successful removal
        .catch((err) => {
          console.error('Error writing contacts file:', err);
          throw err; // Rethrow the error to be caught by the caller
        });
    })
    .catch((err) => {
      console.error('Error in removeContact:', err);
      throw err; // Rethrow the error to be caught by the caller
    });
}

function addContact(name, email, phone) {
  return readContactsFile()
    .then((contacts) => {
      const newContact = {
        id: Date.now(),
        name,
        email,
        phone,
      };
      contacts.push(newContact);
      return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
        .then(() => newContact)
        .catch((err) => {
          console.error('Error writing contacts file:', err);
          throw err; // Rethrow the error to be caught by the caller
        });
    })
    .catch((err) => {
      console.error('Error in addContact:', err);
      return null;
    });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
