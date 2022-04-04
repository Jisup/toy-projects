export default function SearchInput({ $app, onSearch }) {
  this.$target = document.createElement("input");
  this.$target.type = "text";
  this.$target.className = "SearchInput";
  this.$target.placeholder = "고양이를 검색해보세요.|";
  $app.appendChild(this.$target);

  this.$target.focus();

  this.render = () => {};

  this.$target.addEventListener("keyup", (e) => {
    if (e === 13) {
      onSearch(e.target.value);
    }
  });

  this.$target.addEventListener("click", (e) => {
    e.target.value = "";
  });

  this.render();
}