import React from 'react';
import {SelectData} from '../Customizable/SelectData';

export interface ISavedSelectProps {
  data: SelectData;
  contClassName: string;
  onValueChange(value: string): void;
}

interface ISavedSelectState {
  value: string;
}

export class SavedSelect extends React.Component<ISavedSelectProps, ISavedSelectState> {
  constructor(props: ISavedSelectProps) {
    super(props);

    const value = this.props.data.getDefaultValue();
    this.state = { value: value };
  }

  public render() {
    return <div className={this.props.contClassName}>
      <label htmlFor={this.props.data._id} className="htmlForm-label text-white fw-bold">{this.props.data.Name}</label>
      <select className="custom-select custom-select-lg mb-3" id={this.props.data._id} value={this.state.value} onChange={(e) => {this.onChange(e.target.value)}}>
        {
          this.props.data.Options.map((option) => {
            return <option key={option._id} value={option._id}>{option.Value}</option>;
          })
        }
      </select>
    </div>;
  }

  private onChange(value: string) {
    this.props.data.onValueChange(value);
    this.props.onValueChange(value);
    this.setState({ value: value });
  }
}