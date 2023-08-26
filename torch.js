// torch.js
const toggleTorchButton = document.getElementById("toggleTorch");
toggleTorchButton.addEventListener("click", toggleTorch);

let torchEnabled = false;

function toggleTorch() {
    if (torchEnabled) {
        qrCodeScanner.turnOffFlash(); // Turn off the torch
    } else {
        qrCodeScanner.turnOnFlash(); // Turn on the torch
    }
    //torchEnabled = !torchEnabled; // Toggle torch status
}
