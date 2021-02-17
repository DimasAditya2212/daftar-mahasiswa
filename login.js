function rendercard(event) {
    event.preventDefault();
    var card = document.createElement('form')
    var name = document.getElementById('name').value
    var job = document.getElementById('job').value
    var address = document.getElementById('address').value

        card.innerHTML = `
        <div class="col">
            <div class="head">
                <p class="card-heading">${name}</p> 
                <p class="card-heading">${job}</p>
            </div>
            <div class="hasil">
                <p class="card-heading">${address}</p>
            </div>
        </div>
        `;
    document.body.appendChild(card)
}