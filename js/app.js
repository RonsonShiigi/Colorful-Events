function booya(){
 
var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  document.body.style.backgroundColor = hue;

  var jue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  document.body.style.color = jue;

  var tree =  'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  document.getElementById('groovy').style.color = tree; 

  var four = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  document.getElementById('wicked').style.color = four; 

  var pic = document.getElementById('peace');
  if(pic.style.display === 'block'){
      pic.style.display = 'none'
  }else{pic.style.display ='block'}
}

