function calculateTotal() {
    const bestPrice = document.getElementById('best-price').innerText;
    const bestPriceText = parseInt(bestPrice);
    const extraMemoryCost = document.getElementById('memory-update');
    const extraMemoryCostText = parseInt(extraMemoryCost.innerText);
    const extraStorageCost = document.getElementById('storage-update');
    const extraStorageCostText = parseInt(extraStorageCost.innerText);
    const deliveryCost = document.getElementById('delivery-update');
    const deliveryCostText = parseInt(deliveryCost.innerText);
    const totalprice = bestPriceText + extraMemoryCostText + extraStorageCostText + deliveryCostText;
    document.getElementById('total-amount').innerText = totalprice;
    const promoTotal = document.getElementById('discount-after-code');
    promoTotal.innerText = totalprice;
}

function memoryInput(memoryCost) {
    const extramemory = document.getElementById('memory-update');
    extramemory.innerText = parseInt(memoryCost);
    return extramemory;
}
document.getElementById('memory-8-button').addEventListener('click', function() {
    memoryInput(0);
    calculateTotal();
});
document.getElementById('memory-16-button').addEventListener('click', function() {
    memoryInput(180);
    calculateTotal();
});

function storageInput(storageCost) {
    const extrastorage = document.getElementById('storage-update');
    extrastorage.innerText = parseInt(storageCost);
    return extrastorage;
}
document.getElementById('ssd-256').addEventListener('click', function() {
    storageInput(0);
    calculateTotal();
});
document.getElementById('ssd-512').addEventListener('click', function() {
    storageInput(100);
    calculateTotal();
});
document.getElementById('ssd-1tb').addEventListener('click', function() {
    storageInput(180);
    calculateTotal();
});

function deliveryInput(deliveryCost) {
    const extradelivery = document.getElementById('delivery-update');
    extradelivery.innerText = parseInt(deliveryCost);
    return extradelivery;
}
document.getElementById('prime-delivery').addEventListener('click', function() {
    deliveryInput(0);
    calculateTotal();
});
document.getElementById('cost-delivery').addEventListener('click', function() {
    deliveryInput(20);
    calculateTotal();
});

function promoCodeInput() {
    const extraPromo = document.getElementById('promo-code');
    const code = extraPromo.value;
    const discountTotal = document.getElementById('discount-after-code');
    const discountTotalText = parseInt(discountTotal.innerText);
    let qupon = discountTotalText;
    if (code == "stevekaku") {
        qupon = qupon * ((100 - 20) / 100);
        discountTotal.innerText = qupon;
    } else {
        extraPromo.value = '';
    }
}
document.getElementById('apply-button').addEventListener('click', function(even) {
    promoCodeInput();
});