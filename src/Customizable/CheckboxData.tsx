import {CustomizableDataType, ICustomizableData} from '../Common';

export class CheckboxData implements ICustomizableData {
    private _args: Map<string, any>;

    public readonly _id: string;
    public readonly DataType = CustomizableDataType.Checkbox;
    public readonly Name: string;
    public readonly Description: string;
    public readonly IsDefaultChecked: boolean;

    protected constructor(_id: string, name: string, description: string, args: Map<string, any>, isDefaultChecked: boolean) {
        this._args = args;
        this._id = _id;
        this.Name = name;
        this.Description = description;
        this.IsDefaultChecked = isDefaultChecked;
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

    public static CreateFromDataObject(_id: string, name: string, description: string, args: any): CheckboxData | null {
        if (args === null || typeof args !== "object"
            || !args.hasOwnProperty('IsDefaultChecked') || typeof args.IsDefaultChecked !== 'boolean') {
            return null;
        }

        const argsMap = new Map<string, any>();
        for (const key in args) {
            if (args.hasOwnProperty(key)) {
                argsMap.set(key, args[key]);
            }
        }

        return new CheckboxData(_id, name, description, argsMap, args.IsDefaultChecked as boolean);
    }
}
