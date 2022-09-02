const yargs = require("yargs");
const contacts = require("./contacts.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new contact",
  builder: {
    name: {
      describe: "contact name",
      demandOption: true,
      type: "string",
    },
    number: {
      describe: "contact number",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    contacts.addContact(argv.name, argv.number);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a contact",
  builder: {
    name: {
      describe: "contact name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.removeContact(argv.name);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your contacts",
  handler() {
    contacts.listContacts();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a contact",
  builder: {
    name: {
      describe: "Note name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.readContact(argv.name);
  },
});

yargs.parse();
