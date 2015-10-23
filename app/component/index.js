import sjCore from 'sanji-core-ui';

import './component-edit.tpl.html';
import './component.scss';
import i18nConfig from './component.i18n';
import SshService from './component.service';
import SshContainerController from './component-container.controller';
import SshController from './component.controller';
import SshContainerDirective from './component-container.directive';
import SshDirective from './component.directive';

let app = angular.module('sanji.ssh', [sjCore]);
app.config(i18nConfig);
app.service('sshService', SshService);
app.controller('SshContainerController', SshContainerController);
app.controller('SshController', SshController);
app.directive('sanjiSshContainer', SshContainerDirective.directiveFactory);
app.directive('sanjiSsh', SshDirective.directiveFactory);

export default app = app.name
