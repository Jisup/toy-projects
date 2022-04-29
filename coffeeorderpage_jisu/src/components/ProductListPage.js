export default function ProductListPage({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "ProductListPage";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    this.$target.innerHTML = `
      <h1>상품목록</h1>
      ${this.state.map((product, index) => {
        return `
          <ul>
            <li class="Product" data-index=${index}>
              <img
                src="${product.imageUrl}"
              />
              <div class="Product__info">
                <div>${product.name}</div>
                <div>${product.price}원~</div>
              </div>
            </li>
          </ul>
        `;
      })}
    `;
  };
}
