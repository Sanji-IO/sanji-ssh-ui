export default (routerHelper, pkg) => {
  routerHelper.configureStates(getStates());

  function getStates() {
    return [{
      state: pkg.route.state,
      config: {
        url: pkg.route.url,
        template: `<div layout="row" layout-padding layout-align="center center">
                    <div flex="33">
                      <sanji-ssh-window></sanji-ssh-window>
                    </div>
                  </div>`,
        authenticate: pkg.authenticate,
        title: pkg.title
      }
    }];
  }
}
