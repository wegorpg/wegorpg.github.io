export interface ISavedData {
    getSaveData(): object;
    fillFromData(data: object): boolean;
}

export enum CustomizableDataType {
    Text = "Text",
    Select = "Select",
}

export interface ICustomizableData {
    _id: string;
    DataType: CustomizableDataType;
    Name: string;
    Description: string;

    getArg(key: string): any;
}

export interface ISelectDataOption {
    _id: string;
    Value: string;
}

export class SelectData implements ICustomizableData {
    private _args: Map<string, any>;

    public readonly _id: string;
    public readonly DataType = CustomizableDataType.Select;
    public readonly Name: string;
    public readonly Description: string;
    public Options: ReadonlyArray<ISelectDataOption>;

    constructor(_id: string, name: string, description: string, args: Map<string, any>, options: ISelectDataOption[]) {
        this._args = args;
        this._id = _id;
        this.Name = name;
        this.Description = description;

        const validatedOptions: ISelectDataOption[] = [];
        if (options !== null) {
            for (const option of options) {
                if (option === null || option._id === null || option._id.length < 1 || option.Value === null || option.Value.length < 1) {
                    continue;
                }

                for (let i = 0; i < validatedOptions.length; i++) {
                    if (validatedOptions[i]._id === option._id) {
                        validatedOptions.splice(i, 1);
                        break;
                    }
                }

                validatedOptions.push(option);
            }
        }

        this.Options = validatedOptions;
    }

    public getValueOfOption(id: string): string | null {
        for (const option of this.Options) {
            if (option._id === id) {
                return option.Value;
            }
        }

        return null;
    }

    public getArg(key: string): any {
        if (this._args.has(key)) {
            return this._args.get(key);
        }

        return null;
    }

    public static CreateFromDataObject(_id: string, name: string, description: string, args: any): SelectData | null {
        if (args === null || typeof args !== "object" || !args.hasOwnProperty('Options') || !Array.isArray(args.Options)) {
            return null;
        }

        const argsMap = new Map<string, any>();
        for (const key in args) {
            if (args.hasOwnProperty(key)) {
                argsMap.set(key, args[key]);
            }
        }

        const options: ISelectDataOption[] = [];
        for (const option of args.Options) {
            if (option === null || typeof option !== 'object'
                || !option.hasOwnProperty('_id') || typeof option._id !== 'string'
                || !option.hasOwnProperty('Value') || typeof option.Value !== 'string') {
                return null;
            }

            options.push({_id: option._id, Value: option.Value});
        }

        return new SelectData(_id, name, description, argsMap, options);
    }
}

export class TextInputData implements ICustomizableData {
    private _args: Map<string, any>;

    public readonly _id: string;
    public readonly DataType = CustomizableDataType.Text;
    public readonly Name: string;
    public readonly Description: string;
    public readonly DefaultValue: string;
    public readonly IsNumber: boolean;

    constructor(_id: string, name: string, description: string, args: Map<string, any>, defaultValue: string, isNumber: boolean) {
        this._args = args;
        this._id = _id;
        this.Name = name;
        this.Description = description;
        this.DefaultValue = defaultValue;
        this.IsNumber = isNumber;
    }

    public getArg(key: string): any {
        if (this._args.has(key)) {
            return this._args.get(key);
        }

        return null;
    }

    public static CreateFromDataObject(_id: string, name: string, description: string, args: any): TextInputData | null {
        if (args === null || typeof args !== "object"
            || !args.hasOwnProperty('DefaultValue') || typeof args.DefaultValue !== 'string'
            || !args.hasOwnProperty('IsNumber') || typeof args.IsNumber !== 'boolean') {
            return null;
        }

        const argsMap = new Map<string, any>();
        for (const key in args) {
            if (args.hasOwnProperty(key)) {
                argsMap.set(key, args[key]);
            }
        }

        return new TextInputData(_id, name, description, argsMap, args.DefaultValue as string, args.IsNumber as boolean);
    }
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
