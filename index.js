const accordion = document.getElementsByClassName('content-container')

for (i = 0; i < accordion.length; i++) {
    
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
};


// CeraCast
document.getElementById('input').addEventListener('submit', function(event) {
    event.preventDefault(); 
 
    var liquid = document.getElementById('input-amount').value; 
    liquid = liquid.replace(/[a-zA-Z]/g, '');
    
    if (liquid == "") {
        alert("Please enter a value.");
        return;
     }

    ceraLiquid = liquid * 0.76,89;
    // useLiquid = (ceraLiquid * 0.76,8);
    var powder = (ceraLiquid * 1.4).toFixed(1); 
    // 76.8%

    document.getElementById('powderOutput').textContent = 'You need ' + powder + ' grams of powder for ' + ceraLiquid.toFixed(1) + ' grams of liquid.'; 
});


document.getElementById('resetBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('input-amount').value = '';
    document.getElementById('powderOutput').textContent = "";
}); 


// QuickCast
document.getElementById('input2').addEventListener('submit', function(event) {
    event.preventDefault(); 
 
    var liquid = document.getElementById('input-amount2').value; 
    liquid = liquid.replace(/[a-zA-Z]/g, '');
    
    if (liquid == "") {
        alert("Please enter a value.");
        return;
     }

    quickLiquid = liquid * 0.59,73
    var powder = (quickLiquid * 1.8).toFixed(1); 
    // 59.73%

    document.getElementById('powderOutput2').textContent = 'You need ' + powder + ' grams of powder for ' + quickLiquid.toFixed(1) + ' grams of water.'; 
});


document.getElementById('resetBtn2').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('input-amount2').value = '';
    document.getElementById('powderOutput2').textContent = "";
}); 