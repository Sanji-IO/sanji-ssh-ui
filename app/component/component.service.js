const $inject = ['$q', 'rest', 'exception', '_', 'pathToRegexp', 'resource'];
class SshService {
  constructor(...injects) {
    SshService.$inject.forEach((item, index) => this[item] = injects[index]);
    switch(this.resource.get.type) {
      case 'collection':
        this.data = [];
        break;
      case 'model':
        this.data = {};
        break;
      default:
        this.data = [];
    }
  }

  _transform(data) {
    let config = this.resource;
    switch(config.get.type) {
      case 'collection':
        return this._.map(data, (item, index) => {
          return {
            title: (config.get.titlePrefix || 'tab') + index,
            content: item,
            formOptions: {},
            fields: config.fields
          };
        });
      case 'model':
        return {
          content: data,
          formOptions: {},
          fields: config.fields
        };
      default:
        return this._.map(data, (item, index) => {
          return {
            title: (config.get.titlePrefix || 'tab') + index,
            content: item,
            formOptions: {},
            fields: config.fields
          };
        });
    }
  }

  get() {
    let toPath = this.pathToRegexp.compile(this.resource.get.url);
    return this.rest.get(toPath(), (__DEV__) ? 'http://private-15522-sanjiapi.apiary-mock.com' : undefined)
    .then(res => {
      this.data = this._transform(res.data);
    })
    .catch(err => {
      this.exception.catcher('[SshService] Get data error.')(err);
      return this.$q.reject();
    });
  }

  update(data) {
    let toPath = this.pathToRegexp.compile(this.resource.put.url);
    let path = (undefined !== data.content.id) ? toPath({id: data.content.id}) : toPath();
    return this.rest.put(path, data.content, data.formOptions.files, (__DEV__) ? 'http://private-15522-sanjiapi.apiary-mock.com' : undefined)
    .catch(err => {
      this.exception.catcher('[SshService] Update data error.')(err);
      return this.$q.reject();
    });
  }
}
SshService.$inject = $inject;
export default SshService;
