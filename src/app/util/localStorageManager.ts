class LocalStorageManager {
    static setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static setItemObject(key: string, value: object) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItemObject(key: string) {
      if(localStorage.getItem(key) === null) {
        return null;
      } else {
        const value = localStorage.getItem(key) as string;
        return JSON.parse(value);
      }
    }

    static appendItem(key: string, value: object) {
        const currentValue = localStorage.getItem(key);
        if(currentValue === null) {
            this.setItemObject(key, value);
        } else {
            const newValue = this.getItemObject(key);
            newValue.push(value);
            this.setItemObject(key, newValue);
        }
    }

    static getItem(key: string) {
        return localStorage.getItem(key);
    }

    static removeItem(key: string) {
        localStorage.removeItem(key);
    }
}

export default LocalStorageManager;
