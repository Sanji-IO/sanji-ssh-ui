const injectMap = new WeakMap();
const $inject = [];
class SshContainerDirective {
  constructor(injects) {
    SshContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      SshContainerDirective[item] = injects[index];
      injectMap.set(SshContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'SshContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-ssh data="vm.data" on-submit="vm.onSave(data)"></sanji-ssh>`;
  }

  static directiveFactory(...injects) {
    SshContainerDirective.instance = new SshContainerDirective(injects);
    return SshContainerDirective.instance;
  }
}
SshContainerDirective.directiveFactory.$inject = $inject;
export default SshContainerDirective;
