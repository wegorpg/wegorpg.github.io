export interface ISavedData {
    getSaveData(): object;
    fillFromData(data: object): boolean;
}

export enum CustomizableDataType {
    Text = "Text",
    Select = "Select",
    Checkbox = "Checkbox",
    Group = "Group",
    Personality = "Personality",
}

export interface ICustomizableData {
    _id: string;
    DataType: CustomizableDataType;
    Name: string;
    Description: string;

    getArg(key: string): any;
    calculatePoints(): number;
}

export class SavedTextValue implements ISavedData {
  public Value: string;

  constructor(value: string) {
    this.Value = value;
  }

  public getSaveData(): object {
      return this;
  }

  public fillFromData(data: object): boolean {
    try {
      this.Value = (data as SavedTextValue).Value;
      return true;
    } catch (e) {
      return false;
    }
  }
}

export class SavedArrayTextValue implements ISavedData {
  public Values: string[];

  constructor(values: string[]) {
    this.Values = values;
  }

  public getSaveData(): object {
      return this;
  }

  public fillFromData(data: object): boolean {
    if (typeof data !== "object" || !data.hasOwnProperty("Values") || !Array.isArray((data as any).Values)) {
      return false;
    }

    let values: string[] = [];
    for (const value of (data as any).Values) {
      if (typeof value !== "string") {
        return false;
      }

      values.push(value as string);
    }

    this.Values = values;
    return true;
  }
}