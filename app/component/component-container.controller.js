const $inject = ['sanjiWindowService', 'sshService'];
class SshContainerController {
  constructor(...injects) {
    SshContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    const WINDOW_ID = 'sanji-ssh-ui';
    const EDIT_STATE = 'sanji-edit';
    let sshService = this.sshService;
    let sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);

    this.data = sshService.data;

    this.sshService.get().then(() => {
      this.data = sshService.data;
      sanjiWindowMgr.navigateTo(EDIT_STATE);
    });
  }

  onSave(data) {
    this.sshService.update(data);
  }
}
SshContainerController.$inject = $inject;
export default SshContainerController;
