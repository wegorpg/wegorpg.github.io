import {CustomizableDataType, ICustomizableData, SavedTextValue, SavedArrayTextValue} from '../Common';
import {DataManager} from '../DataManager';
import {Utils} from '../Utils';
import {GroupData} from './GroupData';

export class PersonalityData extends GroupData {
    public readonly DataType = CustomizableDataType.Personality;

    public calculatePoints(): number {
        const abilities = this.getDefaultAbilities();
        return abilities.length * 10;
    }

    public onSelectedChange(selected: string): void {
        const savedValue = DataManager.GetData(this._id + "_selected", new SavedTextValue(""));
        if (savedValue !== null && selected === savedValue.Value) {
            return;
        }

        DataManager.SetData(this._id + "_traits", new SavedArrayTextValue([]));
        DataManager.SetData(this._id + "_abilities", new SavedArrayTextValue([]));
        DataManager.SetData(this._id + "_selected", new SavedTextValue(selected));
    }

    public getDefaultSelected(): string {
        const savedValue = DataManager.GetData(this._id + "_selected", new SavedTextValue(""));
        let isValid = false;
        if (savedValue !== null) {
            for (const item of this.Items) {
              if (savedValue.Value === item._id) {
                isValid = true;
                break;
              }
            }
        }
    
        if (isValid && savedValue !== null) {
            return savedValue.Value;
        }

        if (this.Items.length > 0) {
            this.onSelectedChange(this.Items[0]._id);
            return this.Items[0]._id;
        }

        return "";
    }

    public onAbilitiesChange(abilities: string[]): void {
        DataManager.SetData(this._id + "_abilities", new SavedArrayTextValue(abilities));
    }

    public getDefaultAbilities(): ICustomizableData[] {
        const savedAbilities = DataManager.GetData(this._id + "_abilities", new SavedArrayTextValue([]));
        if (savedAbilities !== null && savedAbilities.Values.length > 0) {
            const selected = this.getDefaultSelected();
            for (const item of this.Items) {
                if (item._id === selected) {
                    const groupData = item as GroupData;
                    let validItems: ICustomizableData[] = [];
                    for (const ability of savedAbilities.Values) {
                        for (const abilityItem of groupData.Items) {
                            if (abilityItem.DataType === CustomizableDataType.Checkbox && ability === abilityItem._id) {
                                validItems.push(abilityItem);
                                break;
                            }
                        }
                    }

                    return validItems;
                }
            }
        }

        return [];
    }

    public onTraitsChange(traits: string[]): void {
        DataManager.SetData(this._id + "_traits", new SavedArrayTextValue(traits));
    }

    public getDefaultTraits(): ICustomizableData[] {
        const savedTraits = DataManager.GetData(this._id + "_traits", new SavedArrayTextValue([]));
        if (savedTraits !== null && savedTraits.Values.length > 0) {
            const selected = this.getDefaultSelected();
            for (const item of this.Items) {
                if (item._id === selected) {
                    const groupData = item as GroupData;
                    let validItems: ICustomizableData[] = [];
                    for (const trait of savedTraits.Values) {
                        for (const abilityItem of groupData.Items) {
                            if (abilityItem.DataType === CustomizableDataType.Group) {
                                const traitGroup = abilityItem as GroupData;
                                for (const traitItem of traitGroup.Items) {
                                    if (trait === traitItem._id) {
                                        validItems.push(traitItem);
                                        break;
                                    }
                                }
                            }
                        }
                    }

                    return validItems;
                }
            }
        }

        return [];
    }

    public static CreateFromDataObject(_id: string, name: string, description: string, args: any): PersonalityData | null {
        const items = GroupData.GetItemsFromArgs(args);
        if (items === null) {
            return null;
        }

        return new PersonalityData(_id, name, description, Utils.GetArgMap(args), items);
    }
}
