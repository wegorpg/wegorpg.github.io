import {CustomizableDataType, ICustomizableData} from './Common';
import {TextInputData} from './Customizable/TextInputData';
import {SelectData} from './Customizable/SelectData';
import {CheckboxData} from './Customizable/CheckboxData';
import {GroupData} from './Customizable/GroupData';
import {PersonalityData} from './Customizable/PersonalityData';

export class Utils {
    public static GetCharId(): string | null {
        const urlParams = new URLSearchParams(window.location.search);
        const charId = urlParams.has("c") ? urlParams.get("c") : "";
        if (!!charId && charId.length > 0) {
            return charId;
        }

        return null;
    }

    public static GetCustomizableDataFromAny(dataItem: any): ICustomizableData | null {
        if (dataItem === null || typeof dataItem !== 'object'
          || !dataItem.hasOwnProperty('_id') || dataItem._id === null || typeof dataItem._id !== 'string' || dataItem._id.length < 1
          || !dataItem.hasOwnProperty('DataType') || dataItem.DataType === null || typeof dataItem.DataType !== 'string' || dataItem.DataType.length < 1
          || !dataItem.hasOwnProperty('Name') || dataItem.Name === null || typeof dataItem.Name !== 'string' || dataItem.Name.length < 1
          || !dataItem.hasOwnProperty('Description') || dataItem.Description === null || typeof dataItem.Description !== 'string') {
          return null;
        }

        if (!CustomizableDataType.hasOwnProperty(dataItem.DataType)) {
            return null;
        }

        const args = dataItem.hasOwnProperty('Args') ? dataItem.Args : null;
        switch(dataItem.DataType) {
            case CustomizableDataType.Text:
                return TextInputData.CreateFromDataObject(dataItem._id, dataItem.Name, dataItem.Description, args);
            case CustomizableDataType.Select:
                return SelectData.CreateFromDataObject(dataItem._id, dataItem.Name, dataItem.Description, args);
            case CustomizableDataType.Checkbox:
                return CheckboxData.CreateFromDataObject(dataItem._id, dataItem.Name, dataItem.Description, args);
            case CustomizableDataType.Group:
                return GroupData.CreateFromDataObject(dataItem._id, dataItem.Name, dataItem.Description, args);
            case CustomizableDataType.Personality:
                return PersonalityData.CreateFromDataObject(dataItem._id, dataItem.Name, dataItem.Description, args);
            default:
                return null;
        }
    }

    public static GetArgMap(args: any): Map<string, any> {
        const argsMap = new Map<string, any>();
        if (typeof args === "object") {
            for (const key in args) {
                if (args.hasOwnProperty(key)) {
                    argsMap.set(key, args[key]);
                }
            }
        }

        return argsMap;
    }
}