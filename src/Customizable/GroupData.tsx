import {CustomizableDataType, ICustomizableData} from '../Common';
import {Utils} from '../Utils';

export class GroupData implements ICustomizableData {
    private _args: Map<string, any>;

    public readonly _id: string;
    public readonly DataType: CustomizableDataType = CustomizableDataType.Group;
    public readonly Name: string;
    public readonly Description: string;
    public readonly Items: ReadonlyArray<ICustomizableData>;

    constructor(_id: string, name: string, description: string, args: Map<string, any>, items: ICustomizableData[]) {
        this._args = args;
        this._id = _id;
        this.Name = name;
        this.Description = description;
        this.Items = items;
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

    public static GetItemsFromArgs(args: any): ICustomizableData[] | null {
        if (args === null || typeof args !== "object"
            || !args.hasOwnProperty('Items') || !Array.isArray(args.Items)) {
            return null;
        }

        const items: ICustomizableData[] = [];
        for (const item of args.Items as any[]) {
            const dataItem = Utils.GetCustomizableDataFromAny(item);
            if (dataItem === null) {
                return null;
            }

            items.push(dataItem);
        }

        return items;
    }

    public static CreateFromDataObject(_id: string, name: string, description: string, args: any): GroupData | null {
        const items = GroupData.GetItemsFromArgs(args);
        if (items === null) {
            return null;
        }

        return new GroupData(_id, name, description, Utils.GetArgMap(args), items);
    }
}

export default GroupData;
