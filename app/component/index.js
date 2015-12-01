import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import './component.style.scss';
import i18nConfig from './component.i18n';
import SshService from './component.service';
import SshContainerController from './component-container.controller';
import SshController from './component.controller';
import SshContainerDirective from './component-container.directive';
import SshDirective from './component.directive';
import SshWindowDirective from './component-window.directive';

let app = angular.module('sanji.ssh', [sjCore]);
app.config(i18nConfig);
app.service('sshService', SshService);
app.controller('SshContainerController', SshContainerController);
app.controller('SshController', SshController);
app.directive('sanjiSshContainer', SshContainerDirective.directiveFactory);
app.directive('sanjiSsh', SshDirective.directiveFactory);
app.directive('sanjiSshWindow', SshWindowDirective.directiveFactory);

export default app = app.name
