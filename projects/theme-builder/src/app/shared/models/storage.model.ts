import { CustomProperties } from './custom-properties.model';

interface StorageItem {
  name: string;
  value: any;
  editable: boolean;
}

export class Storage {
  key: string;
  default: StorageItem;
  // current setting
  current: StorageItem;
  // save to page
  storeList: StorageItem[];

  constructor({ key, ...rest }) {
    this.key = `storage-${key}`;
    this.default = {
      name: 'default',
      value: this.clone(rest),
      editable: false,
    };
    this.current = {
      name: 'current',
      value: rest,
      editable: false,
    };
    this.load();
  }

  private clone(data: any) {
    return JSON.parse(JSON.stringify(data));
  }

  save() {
    const currentIdx = this.storeList.findIndex(x => x.name === 'current');
    this.storeList[currentIdx] = this.current;
    const storeListStr = JSON.stringify(this.storeList);
    localStorage.setItem(this.key, storeListStr);
  }

  private load() {
    const storeListStr = localStorage.getItem(this.key);
    if (storeListStr) {
      this.storeList = (JSON.parse(storeListStr) as StorageItem[]);
    } else {
      this.storeList = [this.default, this.current];
    }
    this.restoreTheme('current');
  }

  themeList() {
    return this.storeList.filter(x => x.name !== 'current');
  }

  saveTheme(name: string) {
    const isExist = this.storeList.some(x => x.name === name);
    if (isExist || !name) {
      return;
    }
    this.storeList.push({
      name,
      value: this.clone(this.current.value),
      editable: true,
    });
    this.save();
  }

  deleteTheme(name: string) {
    this.storeList = this.storeList.filter(x => x.name !== name);
    this.save();
  }

  restoreTheme(name: string) {
    const storageItem = this.storeList.find(x => x.name === name).value;
    for (const key of Object.keys(this.current.value)) {
      if (storageItem[key]) {
        (this.current.value[key] as CustomProperties).loadData(this.clone(storageItem[key]));
      }
    }
    this.save();
  }

  importAll(storageItemStr: string) {
    try {
      const storeList = (JSON.parse(storageItemStr) as StorageItem[]);
      storeList.forEach(x => {
        const isExistIdx = this.storeList.findIndex(y => y.name === x.name);
        if (isExistIdx >= 0) {
          // overwrite
          this.storeList[isExistIdx] = x;
        } else {
          this.storeList.push(x);
        }
      });
    } catch (e) { }
    this.save();
  }

  exportAll() {
    const passList = ['default', 'current'];
    return JSON.stringify(this.storeList.filter(x => !passList.includes(x.name)));
  }

}

