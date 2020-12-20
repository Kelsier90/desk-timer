export default class Notification {
  constructor({ title, body }) {
    this.data = { title, body };
  }

  show() {
    // eslint-disable-next-line no-undef
    electron.notificationApi.showNotification(this.data);
  }
}
