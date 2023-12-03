const accordion = document.getElementsByClassName('content-container')

for (i = 0; i < accordion.length; i++) {
    
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
};



document.getElementById('input').addEventListener('submit', function(event) {
    event.preventDefault(); 
 
    var water = document.getElementById('input-amount').value; 
    water = water.replace(/[a-zA-Z]/g, '');
    
    var powder = (water * 1.4).toFixed(2); 
    document.getElementById('powderOutput').textContent = 'You need ' + powder + ' grams of powder for ' + water + ' grams of water.'; 
});


document.getElementById('resetBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('input-amount').value = '';
    document.getElementById('powderOutput').textContent = "";
}); 
