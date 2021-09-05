import {CustomizableDataType, SavedTextValue, SavedArrayTextValue} from '../Common';
import {DataManager} from '../DataManager';
import {Utils} from '../Utils';
import {GroupData} from './GroupData';

export class PassiveAbilityData extends GroupData {
    public readonly DataType = CustomizableDataType.Personality;

    public calculatePoints(): number {
        return 0;
    }

    public onSelectedChange(selected: string): void {
        const savedValue = DataManager.GetData(this._id + "_selected", new SavedTextValue(""));
        if (savedValue !== null && selected === savedValue.Value) {
            return;
        }

        DataManager.SetData(this._id + "_selected", new SavedTextValue(selected));
    }

    public getDefaultSelected(): string {
        return "";
    }

    public static CreateFromDataObject(_id: string, name: string, description: string, args: any): PassiveAbilityData | null {
        const items = GroupData.GetItemsFromArgs(args);
        if (items === null) {
            return null;
        }

        return new PassiveAbilityData(_id, name, description, Utils.GetArgMap(args), items);
    }
}
