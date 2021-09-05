import React from 'react';
import {CustomizableDataType} from '../Common';
import {GroupData} from '../Customizable/GroupData';
import {PersonalityData} from '../Customizable/PersonalityData';

export interface ISavedPersonalityProps {
  data: PersonalityData;
  contClassName: string;
  onValueChange(value: string): void;
}

interface ISavedPersonalityState {
  selected: string;
  abilities: string[];
  traits: string[];
}

export class SavedPersonality extends React.Component<ISavedPersonalityProps, ISavedPersonalityState> {
  constructor(props: ISavedPersonalityProps) {
    super(props);

    const selected = props.data.getDefaultSelected();
    const abilityItems = props.data.getDefaultAbilities();
    const abilities: string[] = [];
    for (const item of abilityItems) { abilities.push(item._id) }
    const traitItems = props.data.getDefaultTraits();
    const traits: string[] = [];
    for (const item of traitItems) { traits.push(item._id) }
    this.state = { selected: selected, abilities: abilities, traits: traits };
  }

  public render() {
    let abilities = [];
    let traits = [];
    for (const item of this.props.data.Items) {
      if (item._id === this.state.selected) {
        const abilityGroup = item as GroupData;
        const keyPrefix = this.props.data._id + "_item_" + item._id + "_check_";
        const traitKeyPrefix = this.props.data._id + "_item_" + item._id + "_trait_";
        for (const abilityItem of abilityGroup.Items) {
          if (abilityItem.DataType === CustomizableDataType.Checkbox) {
            let isChecked = false;
            for (const ability of this.state.abilities) {
              if (ability === abilityItem._id) {
                isChecked = true;
                break;
              }
            }
  
            abilities.push(<div key={keyPrefix + abilityItem._id} className="radio-card d-flex align-items-center p-3 mb-3">
              <input type="checkbox" aria-label={abilityItem.Name} id={keyPrefix + "input_" + abilityItem._id} className="form-check-input" defaultChecked={isChecked}
                onChange={(e) => { this.onAbilityStateChange(abilityItem._id, e.target.checked) }} />
              <label htmlFor={keyPrefix + "input_" + abilityItem._id} className="text-white form-check-label fw-normal p-3 w-100">
                <h6 className="text-white fw-bold">{abilityItem.Name}</h6>
                <p className="text-light mb-0">{abilityItem.Description}</p>
              </label>
            </div>);
          }
          else if (abilityItem.DataType === CustomizableDataType.Group) {
            const traitGroup = abilityItem as GroupData;
            for (const traitItem of traitGroup.Items) {
              let isChecked = false;
              for (const trait of this.state.traits) {
                if (trait === traitItem._id) {
                  isChecked = true;
                  break;
                }
              }
    
              traits.push(<div key={traitKeyPrefix + traitItem._id} className="custom-control custom-checkbox me-3 mb-3">
                <input type="checkbox" aria-label={traitItem.Name} id={traitKeyPrefix + "input_" + traitItem._id} className="me-2 form-check-input" defaultChecked={isChecked}
                onChange={(e) => { this.onTraitStateChange(traitItem._id, e.target.checked) }} />
                <label htmlFor={traitKeyPrefix + "input_" + traitItem._id} className="text-white form-check-label fw-normal">{traitItem.Name}</label>
              </div>);
            }
          }
        }

        break;
      }
    }

    return <div className={this.props.contClassName}>
      <h3 className="text-white fw-bold mb-3">{this.props.data.Name}</h3>
      <p className="text-light">{this.props.data.Description}</p>
      <div>
        <h5 className="fw-bold text-white mb-4 mt-5">How open is your character? This will change the abilities and traits available.</h5>
        <div className="d-flex">
          {
            this.props.data.Items.map((item) => {
              return <div key={this.props.data._id + "_item_" + item._id} className=" form-check me-3">
                <input type="radio" aria-label="progressive" name={this.props.data._id} id={this.props.data._id + "_item_id_" + item._id} className="me-2 form-check-input" defaultChecked={this.state.selected === item._id}
                  value={item._id} onChange={(e) => { this.onChange(e.target.value) }} />
                <label htmlFor={this.props.data._id + "_item_id_" + item._id} className="text-white form-check-label fw-normal">{item.Name}</label>
              </div>;
            })
          }
        </div>
      </div>
      <div>
        <h5 className="fw-bold text-white mb-4 mt-5">Passive Abilities (10 Points Each)</h5>
        {abilities}
      </div>
      <div>
        <h5 className="fw-bold text-white mb-4 mt-5">Character Traits</h5>
        <div className="d-flex flex-wrap">
          {traits}
        </div>
      </div>
    </div>;
  }

  private onChange(value: string) {
    this.props.data.onSelectedChange(value);
    this.setState({ selected: value, abilities: this.state.selected !== value ? [] : this.state.abilities }, ()=> { this.props.onValueChange(""); });
  }

  private onAbilityStateChange(value: string, isChecked: boolean) {
    let abilities = this.state.abilities.slice();
    const index = abilities.indexOf(value);
    if (index >= 0) {
      abilities.splice(index, 1);
    }

    if (isChecked) {
      abilities.push(value);
    }

    this.props.data.onAbilitiesChange(abilities);
    this.setState({ abilities: abilities }, ()=> { this.props.onValueChange(""); });
  }

  private onTraitStateChange(value: string, isChecked: boolean) {
    let traits = this.state.traits.slice();
    const index = traits.indexOf(value);
    if (index >= 0) {
      traits.splice(index, 1);
    }

    if (isChecked) {
      traits.push(value);
    }

    this.props.data.onTraitsChange(traits);
    this.setState({ traits: traits });
  }
}