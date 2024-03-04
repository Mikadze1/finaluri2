const container = document.getElementById('products-container')

async function addProducts() {
  const products = await fetch('https://fakestoreapi.com/products?limit=16').then(res => res.json())
  
  products.forEach((product) => {
    let section = document.createElement('div')
    section.classList.add('product-container')
    section.innerHTML = `
      <span class="img-span">
        <img class="section-img" src="${product.image}">
      </span>
      <div class="section-p-container">
        <p class="section-p">${product.title}</p>
      </div>
      <h3 class="section-h">${product.price}$</h3>
      <button class="buy">Buy</button>
    `
    container.appendChild(section)
  })
}

addProducts()