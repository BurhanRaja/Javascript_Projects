const item = (itemName, quantity, id) => `
<p class="item"><span><button class="rvmBtn bg-${id}"><i class="fa-solid fa-xmark"></i></button> ${itemName}</span> <span>${quantity}</span></p>`;

export default item;
