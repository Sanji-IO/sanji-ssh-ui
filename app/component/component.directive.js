const injectMap = new WeakMap();
const $inject = [];
class SshDirective {
  constructor(injects) {
    SshDirective.directiveFactory.$inject.forEach((item, index) => {
      SshDirective[item] = injects[index];
      injectMap.set(SshDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-ssh-edit.tpl.html'
    this.restrict = 'EA';
    this.controller = 'SshController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = {
      
      data: '=',
      
      submitCallback: '&onSubmit'
    };
  }

  static directiveFactory(...injects) {
    SshDirective.instance = new SshDirective(injects);
    return SshDirective.instance;
  }
}
SshDirective.directiveFactory.$inject = $inject;
export default SshDirective;
