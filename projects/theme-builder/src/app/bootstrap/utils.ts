export class Utils {

  toolFunction() {
    function stringToProperties(s) {
      const replaceList = ['!default', '\\s', '\\"'].join('|');
      const rowData = s.replace(new RegExp(replaceList, 'g'), '');
      const dataList = rowData.split(',').filter(x => !!x);
      const result = dataList.map((x) => x.split(':'));
      return new Map(result);
    }

    // color should be unique
    function stringToCodeFunction(s, properties) {
      Object.keys(properties).forEach((key) => {
        s = s.replace(properties[key], "${cp.propertiesObj['" + key + "']}");
      });
      return s;
    }
  }
}
