import {CustomizableDataType, ICustomizableData, SavedTextValue} from '../Common';
import {DataManager} from '../DataManager';

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

    public calculatePoints(): number {
        return 0;
    }

    public onValueChange(value: string): void {
        DataManager.SetData(this._id, new SavedTextValue(value));
    }

    public getDefaultValue(): string {
        const savedValue = DataManager.GetData(this._id, new SavedTextValue(""));
        let isValid = false;
        if (savedValue !== null) {
            for (const option of this.Options) {
              if (savedValue.Value === option._id) {
                isValid = true;
                break;
              }
            }
        }
    
        if (isValid && savedValue !== null) {
            return savedValue.Value;
        }

        if (this.Options.length > 0) {
            this.onValueChange(this.Options[0]._id);
            return this.Options[0]._id;
        }

        return "";
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
