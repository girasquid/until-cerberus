 var app = {
  initialize: function() {
    this.bindEvents();
    console.log("Starting..");
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {
    nfc.addTagDiscoveredListener(
      app.onNfc,  // successful scan
      function (status) {
        app.display("Tap");
      },
      function (error) {
        app.display("Failed to initialize:" + JSON.stringify(error));
      }
    );
  },
  onNfc: function(nfcEvent) {
    var tag = nfcEvent.tag;
    console.log("tag: " + JSON.stringify(tag));
    app.display("Read tag: " + nfc.bytesToHexString(tag.id));
  },
  display: function(message) {
    var label = document.createTextNode(message),
      lineBreak = document.createElement("br");
    messages.appendChild(lineBreak);
    messages.appendChild(label);
  },
  clear: function() {
    messages.innerHTML = "";
  }
};

app.initialize();