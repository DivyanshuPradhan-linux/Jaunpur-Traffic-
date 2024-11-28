function generateQrCode() {
  var routeName = document.getElementById("routeName").value;
  var vehicleNumber = document.getElementById("vehicleNumber").value;

  var text = routeName + " " + vehicleNumber;

  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000",
    colorLight: "#18FFAC",
    correctLevel: QRCode.CorrectLevel.H
  });
}
