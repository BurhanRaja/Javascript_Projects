const categories = (selectEl, categoryList) => {
  for (let i = 0; i < categoryList.length; i++) {
    selectEl.insertAdjacentHTML(
      "beforeend",
      `<option value=${i + 1}>${categoryList[i]}</option>`
    );
  }
};

export default categories;
