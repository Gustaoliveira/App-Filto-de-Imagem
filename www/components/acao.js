$(document).on("click","#camera",function(){

  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true,
});

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});

function editImage() {
              
  var escala  = $("#escala").val();
  var blur 	  = $("#blur").val();
  var opaci   = $("#opaci").val();
  var saturacao = $("#saturacao").val();

  var filter = 'grayscale(' + escala+ '%) blur(' + blur + 'px) opacity(' + opaci + '%) saturate(' + saturacao + '%)';

$("img").css("filter", filter);

}
$("input[type=range]").change(editImage).mousemove(editImage);