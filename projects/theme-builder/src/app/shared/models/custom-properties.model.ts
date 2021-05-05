interface Input {
  title?: string;
  // example code
  code?: string;
  // file path
  path?: string;
}

export class CustomProperties {
  title: string;
  code: string;
  // general code to copy
  codeFunction: () => string;
  path: string;
  propertiesKeyList: string[] = [];
  propertiesObj: object = {};

  // load data from Storage model
  loadData(...value) {
    Object.assign(this, ...value);
  }

  generateCode() {
    delete this.code;
    this.code = this.codeFunction();
  }

  updateProperty(property: object) {
    Object.assign(this.propertiesObj, property);
  }

  stringToProperties(source: string, splits: string[] = [',', ':']) {
    const replaceList = ['!default', '\\s', '\\"', '\''].join('|');
    const rowData = source.replace(new RegExp(replaceList, 'g'), '');
    const dataList = rowData.split(splits[0]).filter(x => !!x);
    this.propertiesKeyList = [];
    this.propertiesObj = {};
    dataList.forEach((x) => {
      const [key, value] = x.split(splits[1]);
      this.propertiesKeyList.push(key);
      this.propertiesObj[key] = value;
      return [key, value];
    });
  }

  constructor(data: Input = {}) {
    this.title = data.title || '';
    this.code = data.code || '';
    this.path = data.path || '';
  }

}
