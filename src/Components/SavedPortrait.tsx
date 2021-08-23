import React from 'react';
import { SavedTextValue } from '../Common';
import { DataManager } from '../DataManager';

export interface ISavedPortraitProps {
  id: string;
  contClassName: string;
  name: string;
  defaultValue: string;
  onValueChange(value: string): void;
}

interface ISavedPortraitState {
  value: string;
}

export class SavedPortrait extends React.Component<ISavedPortraitProps, ISavedPortraitState> {
  public static defaultProps = {
    defaultValue: "",
  };

  constructor(props: ISavedPortraitProps) {
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
      <div className="col-3 d-flex">
        <img className="col img-fluid" alt="" src={this.state.value.length > 0 ? this.state.value : "images/camera-placeholder.svg"} />
      </div>
      <div className="col-8">
        <label htmlFor={this.props.id} className="htmlForm-label text-white fw-bold">{this.props.name}</label>
        <div className="input-group ">
          <input type="text" className="htmlForm-control htmlForm-control-lg mb-3" id={this.props.id} value={this.state.value} onChange={(e) => { this.onChange(e.target.value) }} />
        </div>
      </div>
    </div>;
  }

  private onChange(value: string) {
    DataManager.SetData(this.props.id, new SavedTextValue(value));
    this.props.onValueChange(value);
    this.setState({ value: value });
  }
}