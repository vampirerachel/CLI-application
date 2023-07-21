const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts.js');

async function runTests() {
  try {
    // Test listContacts function
    const contacts = await listContacts();
    console.log('All contacts:', contacts);

    // Test getContactById function
    const contactIdToFind = "qdggE76Jtbfd9eWJHrssH";
    const contact = await getContactById(contactIdToFind);
    console.log('Contact found by ID:', contact);

    // Test removeContact function
    const contactIdToRemove = "qdggE76Jtbfd9eWJHrssH";
    const removeResult = await removeContact(contactIdToRemove);
    console.log('Contact removed successfully:', removeResult);

    // Test addContact function
    const newContact = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    };
    const addedContact = await addContact(newContact.name, newContact.email, newContact.phone);
    console.log('New contact added:', addedContact);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(); // Ensures the process is terminated after the tests are completed
  }
}

runTests();
