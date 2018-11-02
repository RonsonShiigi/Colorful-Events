function booya(){
    // document.body.style.backgroundColor="red";
//     var letters = '0123456789ABCDEF';
//     var colors  = '#';
//     for(var i=0; i<6; i++){
//         colors += letters[Math.floor(Math.random()*16)];
//         return colors;
// }
var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  document.body.style.backgroundColor = hue;

  var jue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  document.body.style.color = jue;
}

