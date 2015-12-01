const $inject = ['$scope', 'sanjiWindowService', 'sshService'];
const WINDOW_ID = 'sanji-ssh-ui';
class SshContainerController {
  constructor(...injects) {
    SshContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.data = this.sshService.data;

    this.activate();

    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this))
  }

  activate() {
    this.sanjiWindowMgr.promise = this.sshService.get().then(() => {
      this.data = this.sshService.data;
    });
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.activate();
    }
  }

  onSave(data) {
    this.sanjiWindowMgr.promise = this.sshService.update(data);
  }
}
SshContainerController.$inject = $inject;
export default SshContainerController;
