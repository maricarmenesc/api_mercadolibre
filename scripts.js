function displayMercadoLibreResults(results) {
    const resultsContainer = document.getElementById('mercado-libre-results');
    results.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'result-item col-md-4';
      itemElement.innerHTML = `
        <h3>${item.title}</h3>
        <img src="${item.thumbnail}" alt="${item.title}">
        <p>Price: ${item.price}</p>
      `;
      resultsContainer.appendChild(itemElement);
    });
  }
  
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=sylvanian')
    .then(response => response.json())
    .then(data => {
      displayMercadoLibreResults(data.results);
    })
    .catch(error => console.error('Error:', error));
  