const contentContainer = document.getElementById("content-container");
const loadMoreButton = document.getElementById("load-more");

function loadContent() {
  for (let i = 0; i < 1; i++) {
    const contentItem = document.createElement("div");
    contentItem.classList.add("catalog-clothes-more");
    contentItem.classList.add("catalog-clothes-more--active");
    contentItem.style.transition = "1s";
    contentItem.innerHTML = ` <div class="catalog-clothes-block">
                                <picture class="dress-img-block">
                                    <img class="dress-img" src="dist/img/ShopSomeWear/catalog-clothes-block/dress-1.jpg" alt="cloth">
                                </picture>
                                <div class="catalog-clothes-text">
                                    <h5 class="catalog-clothes-text__name">TOP WOMEN</h5>
                                    <p class="catalog-clothes-text__describe">
                                        Angels malu zip jeans slim black used
                                    </p>
                                    <div class="catalog-clothes-text__price-block">
                                        <span class="catalog-clothes-text__price"> 139,00 EUR</span>
                                        <span class="catalog-clothes-text__old-price">
                                            119,00 EUR
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="catalog-clothes-block">
                                <picture class="dress-img-block">
                                    <img class="dress-img" src="dist/img/ShopSomeWear/catalog-clothes-block/dress-2.jpg" alt="cloth">
                                </picture>
                                <div class="catalog-clothes-text">
                                    <h5 class="catalog-clothes-text__name">TOP WOMEN</h5>
                                    <p class="catalog-clothes-text__describe">
                                        Angels malu zip jeans slim black used
                                    </p>
                                    <div class="catalog-clothes-text__price-block">
                                        <span class="catalog-clothes-text__price"> 139,00 EUR</span>
                                        <span class="catalog-clothes-text__old-price">
                                            119,00 EUR
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="catalog-clothes-block">
                                <picture class="dress-img-block">
                                    <img class="dress-img" src="dist/img/ShopSomeWear/catalog-clothes-block/dress-3.jpg" alt="cloth">
                                </picture>
                                <div class="catalog-clothes-text">
                                    <h5 class="catalog-clothes-text__name">TOP WOMEN</h5>
                                    <p class="catalog-clothes-text__describe">
                                        Angels malu zip jeans slim black used
                                    </p>
                                    <div class="catalog-clothes-text__price-block">
                                        <span class="catalog-clothes-text__price"> 139,00 EUR</span>
                                        <span class="catalog-clothes-text__old-price">
                                            119,00 EUR
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="catalog-clothes-block">
                                <picture class="dress-img-block">
                                    <img class="dress-img" src="dist/img/ShopSomeWear/catalog-clothes-block/dress-4.jpg" alt="cloth">
                                </picture>
                                <div class="catalog-clothes-text">
                                    <h5 class="catalog-clothes-text__name">TOP WOMEN</h5>
                                    <p class="catalog-clothes-text__describe">
                                        Angels malu zip jeans slim black used
                                    </p>
                                    <div class="catalog-clothes-text__price-block">
                                        <span class="catalog-clothes-text__price"> 139,00 EUR</span>
                                        <span class="catalog-clothes-text__old-price">
                                            119,00 EUR
                                        </span>
                                    </div>
                                </div>
                            </div>`;
    contentContainer.appendChild(contentItem);
  }
}

loadMoreButton.addEventListener("click", () => {
  loadContent();
});

// Проверка на прокрутку до нижней части страницы
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadContent();
  }
});

// // Загрузка начального контента
// loadContent();
