const accordion = document.getElementsByClassName('content-container')

for (i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
};


// CeramicCast
document.getElementById('input').addEventListener('submit', function (event) {
    event.preventDefault();

    let liquid = document.getElementById('input-amount').value;
    liquid = liquid.replace(/[a-zA-Z]/g, '');

    if (liquid == "") {
        alert("Please enter a value.");
        return;
    }

    ceraLiquid = liquid * 0.2876;
    let powder = (ceraLiquid * 6).toFixed(1);
    // useLiquid = (ceraLiquid * 0.768);
    // 76.8%

    document.getElementById('powderOutput').textContent = 'You need ' + powder + ' grams of CeramicCast powder and ' + ceraLiquid.toFixed(1) + ' grams of water.';
});

document.getElementById('resetBtn').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('input-amount').value = '';
    document.getElementById('powderOutput').textContent = "";
});


// QuickCast
document.getElementById('input2').addEventListener('submit', function (event) {
    event.preventDefault();

    let liquid = document.getElementById('input-amount2').value;
    liquid = liquid.replace(/[a-zA-Z]/g, '');

    if (liquid == "") {
        alert("Please enter a value.");
        return;
    }

    quickLiquid = liquid * 0.5709
    let powder = (quickLiquid * 1.85).toFixed(1);
    // 59.73%

    document.getElementById('powderOutput2').textContent = 'You need ' + powder + ' grams of QuickCast powder and ' + quickLiquid.toFixed(1) + ' grams of QuickCast liquid.';
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

