import React from 'react';
import { SavedTextValue, ISelectDataOption } from '../Common';
import { DataManager } from '../DataManager';

export interface ISavedSelectProps {
  id: string;
  contClassName: string;
  name: string;
  options: readonly ISelectDataOption[];
  onValueChange(value: string): void;
}

interface ISavedSelectState {
  value: string;
}

export class SavedSelect extends React.Component<ISavedSelectProps, ISavedSelectState> {
  constructor(props: ISavedSelectProps) {
    super(props);

    let value = "";
    const savedValue = DataManager.GetData(props.id, new SavedTextValue(""));
    if (savedValue !== null) {
      value = savedValue.Value;
    }

    let isValid = false;
    for (const option of props.options) {
      if (value === option._id) {
        isValid = true;
        break;
      }
    }

    if (!isValid && props.options.length > 0) {
      value = props.options[0]._id;
      DataManager.SetData(props.id, new SavedTextValue(value));
      props.onValueChange(value);
    }

    this.state = { value: value };
  }

  public render() {
    return <div className={this.props.contClassName}>
      <label htmlFor={this.props.id} className="htmlForm-label text-white fw-bold">{this.props.name}</label>
      <select className="custom-select custom-select-lg mb-3" id={this.props.id} value={this.state.value} onChange={(e) => {this.onChange(e.target.value)}}>
        {
          this.props.options.map((option: ISelectDataOption) => {
            return <option key={option._id} value={option._id}>{option.Value}</option>;
          })
        }
      </select>
    </div>;
  }

  private onChange(value: string) {
    DataManager.SetData(this.props.id, new SavedTextValue(value));
    this.props.onValueChange(value);
    this.setState({ value: value });
  }
}