import React from 'react';
import {TextInputData} from '../Customizable/TextInputData';

export interface ISavedPortraitProps {
  data: TextInputData;
  contClassName: string;
  onValueChange(value: string): void;
}

interface ISavedPortraitState {
  value: string;
}

export class SavedPortrait extends React.Component<ISavedPortraitProps, ISavedPortraitState> {
  constructor(props: ISavedPortraitProps) {
    super(props);

    const value = props.data.getDefaultValue();
    this.state = { value: value };
  }

  public render() {
    return <div className={this.props.contClassName}>
      <div className="col-3 d-flex">
        <img className="col img-fluid" alt="" src={this.state.value.length > 0 ? this.state.value : "images/camera-placeholder.svg"} />
      </div>
      <div className="col-8">
        <label htmlFor={this.props.data._id} className="htmlForm-label text-white fw-bold">{this.props.data.Name}</label>
        <div className="input-group ">
          <input type="text" className="htmlForm-control htmlForm-control-lg mb-3" id={this.props.data._id} value={this.state.value} onChange={(e) => { this.onChange(e.target.value) }} />
        </div>
      </div>
    </div>;
  }

  private onChange(value: string) {
    this.props.data.onValueChange(value);
    this.props.onValueChange(value);
    this.setState({ value: value });
  }
}