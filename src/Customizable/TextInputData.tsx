import {CustomizableDataType, ICustomizableData, SavedTextValue} from '../Common';
import {DataManager} from '../DataManager';

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

    public calculatePoints(): number {
        return 0;
    }

    public onValueChange(value: string): void {
        DataManager.SetData(this._id, new SavedTextValue(value));
    }

    public getDefaultValue(): string {
        const savedValue = DataManager.GetData(this._id, new SavedTextValue(""));
        if (savedValue !== null) {
            return savedValue.Value;
        }

        return this.DefaultValue;
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
