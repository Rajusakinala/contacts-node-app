const fs = require("fs");
const chalk = require("chalk");

const addContact = (name, number) => {
  const contacts = loadContacts();
  const duplicateNote = contacts.find((contact) => contact.name === name);

  if (!duplicateNote) {
    contacts.push({
      name: name,
      number: number,
    });
    saveContacts(contacts);
    console.log(chalk.green.inverse("New contact added!"));
  } else {
    console.log(chalk.red.inverse("Contact name already taken!"));
  }
};

const removeContact = (name) => {
  const contacts = loadContacts();
  const notesToKeep = contacts.filter((contact) => contact.name !== name);

  if (contacts.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Contact removed!"));
    saveContacts(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No Contact found!"));
  }
};

const listContacts = () => {
  const contacts = loadContacts();

  console.log(chalk.blue.inverse("Your contacts..."));

  contacts.forEach((contact) => {
    console.log(contact.name);
  });
};

const readContact = (name) => {
  const contacts = loadContacts();
  const contact = contacts.find((contact) => contact.name === name);

  if (contact) {
    console.log(chalk.inverse(contact.name));
    console.log(contact.number);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const saveContacts = (contacts) => {
  const dataJSON = JSON.stringify(contacts);
  fs.writeFileSync("contacts.json", dataJSON);
};

const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync("contacts.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addContact: addContact,
  removeContact: removeContact,
  listContacts: listContacts,
  readContact: readContact,
};
