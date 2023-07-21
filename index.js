const { Command } = require('commander');
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contactById = await getContactById(id);
      if (contactById) {
        console.table(contactById);
      } else {
        console.log('No User with that ID \n');
      }
      break;

    case 'add':
      const addedContact = await addContact(name, email, phone);
      if (addedContact) {
        console.log('New contact added:', addedContact);
      }
      break;

    case 'remove':
      const removed = await removeContact(id);
      if (removed) {
        console.log('Contact removed successfully');
      } else {
        console.log('Contact not found');
      }
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
