let btn = document.getElementById('Fetch from API')
let image = document.getElementById('image')

btn.addEventListener('click', function(){
  fetch('https://cataas.com/cat?json=true&' + new URLSearchParams({
    type: document.getElementById('type').value,
    filter: document.getElementById('filter').value,
    width: document.getElementById('width').value,
    height: document.getElementById('height').value
  }))
    .then(res => (res.json()))
    .then(result => {
      image.src = "https://cataas.com" + result.url 
      }) 
    .catch(error => console.log(error));
})