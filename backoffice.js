const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";

let param = new URLSearchParams(window.location.search);
let id = param.get("id");

window.onload = async () => {
  if (id) {
    // Modifica: gestione dei dettagli del prodotto
    const res = await fetch(BASE_URL + id, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyM2IzNzQwZWNjZTAwMTlhNWI5ZjUiLCJpYXQiOjE3MjE4MjEyNzQsImV4cCI6MTcyMzAzMDg3NH0.D9F4f-F8M8DAim8gpxLXKkg-UmLzTXywMymzx0wznBw",
      },
    });
    const product = await res.json();
    document.querySelector("#name").value = product.name;
    document.querySelector("#description").value = product.description;
    document.querySelector("#imageUrl").value = product.imageUrl;
    document.querySelector("#brand").value = product.brand;
    document.querySelector("#price").value = product.price;
    document.querySelector(".btn-success").remove(); // Rimuove il pulsante di creazione
  } else {
    document.querySelector(".btn-danger").remove(); // Rimuove il pulsante di eliminazione
    document.querySelector(".btn-secondary").remove(); // Rimuove il pulsante di modifica
  }
};

const createNew = async () => {
  // Creazione di un nuovo prodotto
  const product = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  };
  let res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyM2IzNzQwZWNjZTAwMTlhNWI5ZjUiLCJpYXQiOjE3MjE4MjEyNzQsImV4cCI6MTcyMzAzMDg3NH0.D9F4f-F8M8DAim8gpxLXKkg-UmLzTXywMymzx0wznBw",
    },
    body: JSON.stringify(product),
  });
  if (res.ok) {
    alert("Prodotto creato con successo");
    window.location.assign("./index.html");
  } else {
    alert("Errore nella creazione del prodotto");
  }
};

const editProduct = async () => {
  // Modifica di un prodotto esistente
  const product = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  };
  let res = await fetch(BASE_URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyM2IzNzQwZWNjZTAwMTlhNWI5ZjUiLCJpYXQiOjE3MjE4MjEyNzQsImV4cCI6MTcyMzAzMDg3NH0.D9F4f-F8M8DAim8gpxLXKkg-UmLzTXywMymzx0wznBw",
    },
    body: JSON.stringify(product),
  });
  if (res.ok) {
    alert("Prodotto modificato con successo");
    window.location.assign("./index.html");
  } else {
    alert("Errore nella modifica del prodotto");
  }
};

const deleteProduct = async () => {
  // Eliminazione di un prodotto
  let res = await fetch(BASE_URL + id, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyM2IzNzQwZWNjZTAwMTlhNWI5ZjUiLCJpYXQiOjE3MjE4MjEyNzQsImV4cCI6MTcyMzAzMDg3NH0.D9F4f-F8M8DAim8gpxLXKkg-UmLzTXywMymzx0wznBw",
    },
  });
  if (res.ok) {
    alert("Prodotto eliminato con successo");
    window.location.assign("./index.html");
  } else {
    alert("Errore nell'eliminazione del prodotto");
  }
};