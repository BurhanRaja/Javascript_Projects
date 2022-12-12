const card = (title, id) => `
    <div class="card card-${id}">
    <div class="cardTitle bg-${id}">
        ${title}
    </div>
    <div class="displayItems displayItems-${id}">
    </div>
</div>
`;

export default card;
