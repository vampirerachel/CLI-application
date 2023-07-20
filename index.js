const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts.js');

// Test listContacts function
listContacts()
  .then((contacts) => {
    console.log('All contacts:', contacts);
  })
  .catch((err) => {
    console.error('Error in listContacts:', err);
  });

// Test getContactById function
const contactIdToFind = "qdggE76Jtbfd9eWJHrssH"; // Replace with a valid contact ID from your data
getContactById(contactIdToFind)
  .then((contact) => {
    console.log('Contact found by ID:', contact);
  })
  .catch((err) => {
    console.error('Error in getContactById:', err);
  });

// Test removeContact function
const contactIdToRemove = "qdggE76Jtbfd9eWJHrssH"; // Replace with a valid contact ID to remove from your data
removeContact(contactIdToRemove)
  .then((result) => {
    console.log('Contact removed successfully:', result);
  })
  .catch((err) => {
    console.error('Error in removeContact:', err);
  });

// Test addContact function
const newContact = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
};
addContact(newContact.name, newContact.email, newContact.phone)
  .then((addedContact) => {
    console.log('New contact added:', addedContact);
  })
  .catch((err) => {
    console.error('Error in addContact:', err);
  });
