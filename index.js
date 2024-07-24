const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyM2IzNzQwZWNjZTAwMTlhNWI5ZjUiLCJpYXQiOjE3MjE4MjEyNzQsImV4cCI6MTcyMzAzMDg3NH0.D9F4f-F8M8DAim8gpxLXKkg-UmLzTXywMymzx0wznBw",
      },
    });

    if (!res.ok) {
      throw new Error("Errore nel recupero dei prodotti");
    }

    const products = await res.json();
    const row = document.querySelector("#products");

    products.forEach((prod) => {
      // Creazione dinamica dei prodotti
      const col = document.createElement("div");
      col.className = 'col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4';

      const card = document.createElement("div");
      card.className = "card justify-content-between";

      const img = document.createElement("img");
      img.src = prod.imageUrl;
      img.className = "card-img-top";
      img.alt = `${prod._id}_${prod.name}`;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = prod.name;

      const link = document.createElement("a");
      link.href = `./backoffice.html?id=${prod._id}`;
      link.className = "btn btn-primary";
      link.textContent = "Details";

      // Append dei figli
      cardBody.appendChild(title);
      cardBody.appendChild(link);
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
    });
  } catch (error) {
    console.error(error);
    alert("Si è verificato un errore durante il caricamento dei prodotti.");
  }
};