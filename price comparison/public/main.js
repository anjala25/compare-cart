document.addEventListener('DOMContentLoaded', () => {
    const s1 = document.getElementById('select1');
    const s2 = document.getElementById('select2');

    // Populate dropdowns
    products.forEach(p => {
        let opt1 = new Option(p.name, p.id);
        let opt2 = new Option(p.name, p.id);
        s1.add(opt1);
        s2.add(opt2);
    });
});

function updateView(slot, productId) {
    const p = products.find(item => item.id === productId);
    if (!p) return;

    // Update Elements
    document.getElementById(`img${slot}`).src = p.img;
    document.getElementById(`brand${slot}`).innerText = p.brand;
    document.getElementById(`name${slot}`).innerText = p.name;
    document.getElementById(`price${slot}`).innerText = p.price;
    document.getElementById(`drop${slot}`).innerText = p.drop;
    
    // Aesthetic Animation
    const card = document.getElementById(`card${slot}`);
    card.style.opacity = 0;
    setTimeout(() => {
        card.style.transition = "opacity 0.4s";
        card.style.opacity = 1;
    }, 50);
}