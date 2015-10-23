const $inject = [];
class SshController {
  constructor(...injects) {
    SshController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data) {
    this.submitCallback({data: data});
  }
}
SshController.$inject = $inject;
export default SshController;
