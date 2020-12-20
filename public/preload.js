const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    showNotification(data) {
      ipcRenderer.send("show-notification", data);
    },
  },
});
