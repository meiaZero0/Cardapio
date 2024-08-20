const products = {
    burgers: [
        { title: "Cheeseburger", description: "Delicioso cheeseburger com queijo derretido", price: "R$20,00", imgSrc: "https://usercontent.one/wp/www.bucaneirosburger.com/wp-content/uploads/2023/09/CHEESE-BURGER.jpg?media=1700619368" },
        { title: "Double Bacon Burger", description: "Burger com VÁRIAS fatias crocantes de bacon", price: "R$25,00", imgSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg" },
        { title: "Bacon Burger", description: "Burger com fatias crocantes de bacon", price: "R$22,00", imgSrc: "https://folhadomate.com/wp-content/uploads/2022/09/hamburguer-artesanal.jpg" },
        { title: "Chicken Burger", description: "Burger de frango com bacon e queijo", price: "R$30,00", imgSrc: "https://i.pinimg.com/736x/35/05/a8/3505a845b979dbc8042b20a887af12ff.jpg" },
    ],
    drinks: [
        { title: "Coca-Cola", description: "Lata de 350ml", price: "R$5,00", imgSrc: "https://tdc0wy.vteximg.com.br/arquivos/ids/163808-300-300/REFRIGERANTE-COCA-COLA-LATA-350ML-ORIGINAL.png?v=638504173989400000" },
        { title: "Suco de Laranja", description: "Suco natural de laranja", price: "R$8,00", imgSrc: "https://cardapio.primeirobar.com.br/wp-content/uploads/2022/04/laranja.jpg" },
        { title: "Milkshake de Morango", description: "Milkshake cremoso de morango", price: "R$12,00", imgSrc: "https://p2.trrsf.com/image/fget/cf/942/530/images.terra.com/2022/10/12/2131341187-milk-shake-de-morango.jpg" },
        { title: "Chopp", description: "Chopp gelado 500ml", price: "R$10,00", imgSrc: "https://cdnm.westwing.com.br/glossary/uploads/br/2015/02/02195523/caneca-de-chopp-bem-gelada_pinterest_c-a1849.jpg" },
    ],
    sides: [
        { title: "Batata Frita", description: "Porção grande de batata frita", price: "R$10,00", imgSrc: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg" },
        { title: "Onion Rings", description: "Anéis de cebola empanados", price: "R$12,00", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgPg-cAnsttlFDUQFlqWWbNPUMDRakq2igA&s" },
        { title: "Salada Caesar", description: "Salada Caesar com frango grelhado", price: "R$15,00", imgSrc: "https://chefcristinahaaland.com.br/wp-content/uploads/2020/12/chefcristinahaaland-Salada-Caesar-com-frango.jpg" },
        { title: "Mozzarella Sticks", description: "Palitos de mussarela empanados", price: "R$14,00", imgSrc: "https://static.vecteezy.com/ti/fotos-gratis/p2/5926046-empanado-mussarela-sticks-de-queijo-servido-com-molho-de-tomate-foto.JPG" },
    ]
};

function showProducts(category) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <img class='productImg' src="${product.imgSrc}" alt="${product.title}">
            <div class="product-details">
                <h3 class='productTitle'>${product.title}</h3>
                <p class='productDescription'>${product.description}</p>
                <p class='productPrice'>${product.price}</p>
                <button class='productBtn'>Comprar</button>
            </div>
        `;

        container.appendChild(productElement);
    });
}

showProducts('burgers');
