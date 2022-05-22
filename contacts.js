const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

async function listContacts () {
    const dataString = await fs.readFile(contactsPath, 'utf8');
    const data = JSON.parse(dataString);
    return data ? data : null;
  }

async function getContactById(contactId) {
    const allContacts = await listContacts();
    const result = allContacts.find(contact => contact.id === contactId);
    return result ? result : null;
}
  
async function removeContact(contactId) {
    const allContacts = await listContacts();
    const indx = allContacts.findIndex(contact => contact.id === contactId);
    if (indx === -1) {
      return null;
    }
    const updateContacts = allContacts.filter((_, index) => index !== indx);
    await fs.writeFile(contactsPath, JSON.stringify(updateContacts));
    return allContacts[indx];
  }
  
async function addContact(name, email, phone) {
    const allContacts = await listContacts();
    const newContact = {id: nanoid(), name, email, phone};
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
    return newContact ? newContact : null;
  }

module.exports = { listContacts, getContactById, addContact, removeContact };