import React from 'react';
import { SavedTextValue } from '../Common';
import { DataManager } from '../DataManager';

export interface ISavedTextProps {
  id: string;
  contClassName: string;
  name: string;
  defaultValue: string;
  isNumber: boolean;
  onValueChange(value: string): void;
}

interface ISavedTextState {
  value: string;
}

export class SavedText extends React.Component<ISavedTextProps, ISavedTextState> {
  public static defaultProps = {
    defaultValue: "",
    isNumber: false,
  };

  constructor(props: ISavedTextProps) {
    super(props);

    let value = props.defaultValue;
    const savedValue = DataManager.GetData(props.id, new SavedTextValue(""));
    if (savedValue !== null) {
      value = savedValue.Value;
    }

    this.state = { value: value };
  }

  public render() {
    return <div className={this.props.contClassName}>
      <label htmlFor={this.props.id} className="htmlForm-label text-white fw-bold">{this.props.name}</label>
      <div className="input-group ">
        <input type={this.props.isNumber ? "number" : "text"} className="htmlForm-control htmlForm-control-lg mb-3" id={this.props.id} value={this.state.value} onChange={(e) => { this.onChange(e.target.value) }} />
      </div>
    </div>;
  }

  private onChange(value: string) {
    DataManager.SetData(this.props.id, new SavedTextValue(value));
    this.props.onValueChange(value);
    this.setState({ value: value });
  }
}