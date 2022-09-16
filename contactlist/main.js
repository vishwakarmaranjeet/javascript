class Phone {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.id = new Date().getTime();
  }
}

class UI {
  static displayContact() {
    const contact = Store.getContacts();
    contact.forEach((contact) => UI.addContactTodoList(contact));
  }

  static addContactTodoList(contact) {
    const list = document.querySelector("#contact-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${contact.name}</td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${contact.email}</td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${contact.phone}</td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    <button
      type="button"
      data-id=${contact.id}
      class="delete inline-block px-6 py-2.5 bg-red-600 text-white font-medium 
      text-xs leading-tight uppercase rounded shadow-md 
      hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
      focus:shadow-lg focus:outline-none focus:ring-0 
      active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
      Delete
      
    </button>
  </td>`;
    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
  }

  static deleteContact(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static deleteConfirmation() {
    let result = confirm("Want to deleteaaaa?");
    return result ? true : false;
  }
}

class Store {
  static getContacts() {
    let contact;
    if (localStorage.getItem("contacts") === null) {
      contact = [];
    } else {
      contact = JSON.parse(localStorage.getItem("contacts"));
    }
    return contact;
  }

  static addContact(contact) {
    const contacts = Store.getContacts();
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  static removeContact(id) {
    const contacts = Store.getContacts();
    contacts.forEach((contact, index) => {
      if (contact.id === parseInt(id)) {
        contacts.splice(index, 1);
      }
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}

// Display Contact book
document.addEventListener("DOMContentLoaded", UI.displayContact);

// Add a contact list
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the form values
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;

  console.log(name, email, phone);
  // Validate the fields
  if (name === "" || email === "" || phone === "") {
    console.error("Please fill all the fields");
  } else {
    // Initiate Phone
    const phones = new Phone(name, email, phone);
    // Add contact
    UI.addContactTodoList(phones);
    Store.addContact(phones);
    UI.clearFields();
  }
});

// Remove a Book
document.querySelector("#contact-list").addEventListener("click", (e) => {
  if (UI.deleteConfirmation()) {
    UI.deleteContact(e.target);
    Store.removeContact(e.target.dataset.id);
    console.log(e.target.dataset.id);
  }
});
