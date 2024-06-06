const fs = require("fs");
const path = require("path");

const contactsPath = path.join(".", "db", "contacts.json");
const contactsPath2 = path.join(".", "db", "contacts2.json");

/*
 * Valor de la ruta (path)
 * const contactsPath = ./db/contacts.json;
 */

// TODO: documenta cada función
function listContacts() {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dataToArray = JSON.parse(data);
    console.table(dataToArray);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.table(err);
      return;
    }
    const dataToArray = JSON.parse(data);
    const filterContact = dataToArray.findIndex(
      (contact) => contact.id === contactId
    );
    if (filterContact == -1) {
      console.log("Error: The contact not exist...");
      return;
    }
    console.table(dataToArray[filterContact]);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    const dataToArray = JSON.parse(data);
    const indexContact = dataToArray.findIndex(
      (contact) => contact.id === contactId
    );
    if (indexContact == -1) {
      console.error(`Error: Contact with id => ${contactId} not exist.`);
      return;
    }
    console.table(dataToArray[indexContact]);
    dataToArray.splice(indexContact, 1);
    console.log(`Contact with id => ${contactId} was removed.`);

    fs.writeFile(contactsPath, JSON.stringify(dataToArray), (error, data) => {
      if (error) {
        console.error("Error ocurred: " + err);
        return;
      }
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    const dataToArray = JSON.parse(data);
    const indexContact = dataToArray.findIndex(
      (contact) => contact.name === name
    );
    if (indexContact != -1) {
      console.error("Error: The contact exist...");
      console.table(dataToArray[indexContact]);
      return;
    }
    const newContact = {
      id: Math.ceil(Math.random() * 1000000000000000).toString(16),
      name,
      phone,
      email,
    };
    dataToArray.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(dataToArray), (error, data) => {
      if (error) {
        console.error("Error ocurred: " + err);
        return;
      }
      console.log(`Contact created successfully.`);
      console.table(newContact);
    });
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
