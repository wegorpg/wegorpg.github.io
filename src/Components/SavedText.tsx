import React from 'react';
import {TextInputData} from '../Customizable/TextInputData';

export interface ISavedTextProps {
  data: TextInputData;
  contClassName: string;
  onValueChange(value: string): void;
}

interface ISavedTextState {
  value: string;
}

export class SavedText extends React.Component<ISavedTextProps, ISavedTextState> {
  constructor(props: ISavedTextProps) {
    super(props);

    const value = props.data.getDefaultValue();
    this.state = { value: value };
  }

  public render() {
    return <div className={this.props.contClassName}>
      <label htmlFor={this.props.data._id} className="htmlForm-label text-white fw-bold">{this.props.data.Name}</label>
      <div className="input-group ">
        <input type={this.props.data.IsNumber ? "number" : "text"} className="htmlForm-control htmlForm-control-lg mb-3" id={this.props.data._id} value={this.state.value} onChange={(e) => { this.onChange(e.target.value) }} />
      </div>
    </div>;
  }

  private onChange(value: string) {
    this.props.data.onValueChange(value);
    this.props.onValueChange(value);
    this.setState({ value: value });
  }
}