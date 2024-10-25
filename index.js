const accordion = document.getElementsByClassName('content-container')

for (i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
};

// CeramicCast Lite
document.getElementById('input').addEventListener('submit', function (event) {
    event.preventDefault();

    let liquid = document.getElementById('input-amount').value;
    liquid = liquid.replace(/[a-zA-Z]/g, '');

    if (liquid == "") {
        alert("Please enter a value.");
        return;
    }

    ceraLiquid = liquid * 0.308;
    let powder = (ceraLiquid * 4.5).toFixed(1);
    // useLiquid = (ceraLiquid * 0.768);
    // 76.8%

    document.getElementById('powderOutput').textContent = 'You need ' + powder + ' grams of CeramicCast LITE powder and ' + ceraLiquid.toFixed(1) + ' grams of water.';
});

document.getElementById('resetBtn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('input-amount').value = '';
    document.getElementById('powderOutput').textContent = "";
});

// QuickCast Ultra
document.getElementById('input2').addEventListener('submit', function (event) {
    event.preventDefault();

    let liquid = document.getElementById('input-amount2').value;
    liquid = liquid.replace(/[a-zA-Z]/g, '');

    if (liquid == "") {
        alert("Please enter a value.");
        return;
    }

    quickLiquid = liquid * 0.588
    let powder = (quickLiquid * 1.8).toFixed(1);
    // 59.73%

    document.getElementById('powderOutput2').textContent = 'You need ' + powder + ' grams of QuickCast Ultra powder and ' + quickLiquid.toFixed(1) + ' grams of QuickCast Ultra liquid.';
});

document.getElementById('resetBtn2').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('input-amount2').value = '';
    document.getElementById('powderOutput2').textContent = "";
});

// Toggle Heading
document.getElementById('title1').addEventListener('click', function() {
    let accordion = this.closest('.accordion');
    accordion.classList.toggle('open');
    let content = document.getElementById('collapsible1');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
});

document.getElementById('title2').addEventListener('click', function() {
    let accordion = this.closest('.accordion');
    accordion.classList.toggle('open');
    let content = document.getElementById('collapsible2');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
});

