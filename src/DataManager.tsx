import {ISavedData, ICustomizableData, SavedTextValue} from './Common';
import {Utils} from './Utils';
import * as Data from './Data';

export class DataManager {
  private static _customData: Map<string, Map<string, ICustomizableData>> = new Map<string, Map<string, ICustomizableData>>();
  private static _data: Map<string, object> = new Map<string, object>();
  private static _maxPoints: number = 150;
  private static _points: number = 0;

  public static InitializeCustomData(): void {
    if (typeof Data !== "object") {
      return;
    }

    const dataObj = Data as any;
    const keys: string[] = Object.keys(dataObj);
    for (const key of keys) {
      if (!Array.isArray(dataObj[key])) {
        continue;
      }

      const customData = new Map<string, ICustomizableData>();
      for (const dataItem of dataObj[key]) {
        const customizableData = Utils.GetCustomizableDataFromAny(dataItem);
        if (customizableData !== null) {
          customData.set(customizableData._id, customizableData);
        }
      }

      if (customData.size > 0) {
        this._customData.set(key, customData);
      }
    }
  }

  public static SetData(key: string, data: ISavedData): void {
    this._data.set(key, data.getSaveData());
    this.CalculatePoints();
  }

  public static GetData<T extends ISavedData>(key: string, dataObj: T): T | null {
    if (this._data.has(key) && dataObj.fillFromData(this._data.get(key) as object)) {
      return dataObj;
    }

    return null;
  }

  public static GetCustomData(key: string): Map<string, ICustomizableData> | null {
    if (this._customData.has(key)) {
      return this._customData.get(key) as Map<string, ICustomizableData>;
    }

    return null;
  }

  public static GetSaveData(): string {
    const jsonStr = JSON.stringify(this._data, DataManager.MapReplacer);
    const saveData = window.btoa(unescape(encodeURIComponent(jsonStr)));
    return saveData;
  }

  public static SetSaveData(saveData: Map<string, object>, clearOld: boolean = true): void {
    if (!(saveData instanceof Map)) {
      console.log("Save data isn't valid");
      return;
    }

    if (clearOld) {
      this._data = new Map<string, object>();
    }

    const dataEntries = Array.from(saveData.entries());
    for (const [key, value] of dataEntries) {
      if (typeof key !== "string") {
        continue;
      }

      if (typeof value !== "object") {
        continue;
      }

      this._data.set(key, value);
    }
  }

  public static LoadSaveData(savedData: string): Map<string, object> | null {
    try {
      const dataParsed = JSON.parse(savedData);
      if (!!dataParsed && dataParsed.hasOwnProperty("success") && !dataParsed.success) {
        console.log("Failed: " + dataParsed.error);
        return null;
      }
    } catch(e) {}

    let atobValue = "";
    try {
      atobValue = window.atob(savedData);
    }
    catch(e) {
      console.log("Invalid content");
      return null;
    }

    let value = atobValue;
    try {
      value = decodeURIComponent(escape(atobValue));
      // Parse here just to make sure it s valid
      JSON.parse(value);
    }
    catch(e) {
      value = atobValue;
    }
  
    if (value !== "") {
      try {
        const parsed: Map<string, object> = JSON.parse(value, DataManager.MapReviver);
        if (parsed instanceof Map) {
          return parsed;
        }
        else {
          console.log("Invalid data type");
        }
      }
      catch(e) {
        console.log("Invalid content");
      }
    }
    else {
      console.log("Invalid content");
    }

    return null;
  }

  public static SaveOnlineData(charUrl: string, authKey: string, saveData: string, onSaveDone: (isSuccesful: boolean) => void): void {
    if (charUrl.length < 3) {
      console.log("Invalid Character URL");
      onSaveDone(false);
    }
    else if (authKey.length < 1) {
      console.log("Invalid Auth Key");
      onSaveDone(false);
    }
    else {
      fetch('https://wgrpg.herokuapp.com/char', {
        method: 'POST',
        body: '{"id":"' + charUrl + '","data":"' + saveData + '","authKey":"' + authKey + '"}'
      })
      .then((response) => response.json())
      .then((json) => {
        onSaveDone(json.success);
      })
      .catch((error) => {
        console.log(error);
        onSaveDone(false);
      });
    }
  }

  public static LoadOnlineCharacter(charId: string, onLoadDone: (isSuccesful: boolean) => void): void {
    if (charId.length < 3) {
      console.log("Invalid Character URL");
      return;
    }

    fetch('https://wgrpg.herokuapp.com/char/' + charId, {
      method: 'GET'
    })
    .then((response) => response.text())
    .then((text) => {
      try {
        const parsed: ICharFailResponse = JSON.parse(text);
        console.log(parsed);
        onLoadDone(false);
      }
      catch(e) {
        const loaded = this.LoadSaveData(text);
        if (loaded != null) {
          this.SetSaveData(loaded);
          onLoadDone(true);
        }
        else {
          onLoadDone(false);
        }
      }
    })
    .catch((error) => {
      console.log(error);
      onLoadDone(false);
    });
  }

  public static CalculatePoints(): void {
    const savedValue = DataManager.GetData("physMaxPoints", new SavedTextValue(""));
    if (savedValue !== null) {
      const parsed = parseInt(savedValue.Value);
      if (!isNaN(parsed)) {
        this._maxPoints = parsed;
      }
    }

    let points = 0;
    this._customData.forEach((val) => {
      val.forEach((data) => {
        points += data.calculatePoints();
      });
    });
    this._points = points;
  }

  public static GetMaxPoints(): number {
    return this._maxPoints;
  }

  public static GetPoints(): number {
    return this._points;
  }

  private static MapReplacer(key: any, value: any) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }

  private static MapReviver(key: any, value: any) {
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
  }
}

export default DataManager;

interface ICharFailResponse {
  success: boolean;
  error: string;
}