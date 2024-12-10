const cartData = () => {
  const cart = document.querySelector(".js-cart");
  const productsList = document.querySelector(".js-products-list");
  const updateCartItemCount = () => {};
  updateCartItemCount();

  const addProductToCart = () => {
    productsList.addEventListener("click", event => {
      if (event.target.classList.contains(".js-buy-button")) {
        // console.log(1);
        const product = event.target.closest(".js-product");

        const imageCard = product.querySelector(".product__gallery_img");
        const modelCard = product.querySelector(".brand-dress-name");
        const priceCard = product.querySelector(".price-total");
        const linkCard = product.querySelector(".js-image-card");

        // console.log(priceCard.textContent);

        productInfo.id = linkCard.getAttribute("id");
        productInfo.model = modelCard.textContent;
        productInfo.price = priceCard.textContent;
        productInfo.imageCard = imageCard.src;

        console.log("productInfo: ", productInfo);
      }
    });
  };
};

// export { cartData };
