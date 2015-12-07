import './component.tpl.html';
import route from './component.route';
import i18nConfig from './component.i18n';
import SshService from './component.service';
import SshContainerController from './component-container.controller';
import SshController from './component.controller';
import SshContainerDirective from './component-container.directive';
import SshDirective from './component.directive';
import SshWindowDirective from './component-window.directive';

let app = angular.module('sanji.ssh', ['sanji.core']);
app.constant('pkg', require('./package.json'));
app.constant('resource', require('./component.resource.json'));
app.config(i18nConfig);
app.service('sshService', SshService);
app.controller('SshContainerController', SshContainerController);
app.controller('SshController', SshController);
app.directive('sanjiSshContainer', SshContainerDirective.directiveFactory);
app.directive('sanjiSsh', SshDirective.directiveFactory);
app.directive('sanjiSshWindow', SshWindowDirective.directiveFactory);
app.run(route);

export default app = app.name
