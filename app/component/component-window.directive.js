const injectMap = new WeakMap();
const $inject = [];
class SshWindowDirective {
  constructor(injects) {
    SshWindowDirective.directiveFactory.$inject.forEach((item, index) => {
      SshWindowDirective[item] = injects[index];
      injectMap.set(SshWindowDirective[item], injects[index]);
    });
    this.restrict = 'E';
    this.template = `<sanji-window window-id="sanji-ssh-ui"
                      window-name="{{'SSH' | translate}}" show-loading-btn>
                      <sanji-window-state default-state
                        state-name="sanji-form"
                        link-name="{{'SSH_FORM_SETTING' | translate}}"
                        icon="settings">
                        <sanji-ssh-container></sanji-ssh-container>
                      </sanji-window-state>
                    </sanji-window>`;
  }

  static directiveFactory(...injects) {
    SshWindowDirective.instance = new SshWindowDirective(injects);
    return SshWindowDirective.instance;
  }
}
SshWindowDirective.directiveFactory.$inject = $inject;
export default SshWindowDirective;
