import React from 'react';
import { DataManager } from './DataManager';
import { CustomizableDataType, ICustomizableData, SelectData, TextInputData } from './Common';
import { SavedSelect } from './Components/SavedSelect';
import { SavedText } from './Components/SavedText';

export interface IPhysicalCharProps {
}

interface IPhysicalCharState {

}

export class PhysicalChar extends React.Component<IPhysicalCharProps, IPhysicalCharState> {
  private customizations: ICustomizableData[];

  constructor(props: IPhysicalCharProps) {
    super(props);
    this.state = {};

    this.customizations = [];
    const physicalData = DataManager.GetCustomData("PhysicalData");
    if (physicalData != null) {
      physicalData.forEach((data: ICustomizableData) => {
        if (data != null) {
          this.customizations.push(data);
        }
      });
    }
  }

  public render() {
    let items = [];
    for (const customization of this.customizations) {
      let item = null;
      if (customization.DataType === CustomizableDataType.Select) {
        const selectData = customization as SelectData;
        item = <SavedSelect key={"physElement" + selectData._id} id={selectData._id} contClassName="col-md-6" name={selectData.Name} options={selectData.Options}
          onValueChange={(value) => {
            //console.log(value);
          }} />
      }
      else if (customization.DataType === CustomizableDataType.Text) {
        const textInputData = customization as TextInputData;
        item = <SavedText key={"physElement" + textInputData._id} id={textInputData._id} contClassName="col-md-6" name={textInputData.Name}
          defaultValue={textInputData.DefaultValue} isNumber={textInputData.IsNumber} onValueChange={(value) => {
            //console.log(value);
          }} />
      }
      else {
        item = <SavedText key={"physElement" + customization._id} id={customization._id} contClassName="col-md-6" name={customization.Name} onValueChange={(value) => {
          //console.log(value);
        }} />;
      }

      items.push(item);
    }

    let grouped = [];
    for (let i = 0; i < items.length; i += 2) {
      grouped.push(
        <div key={"physGrouped" + i} className="row mb-2 align-items-center justify-content-between">
          {items[i]}
          {(i + 1) < items.length ? items[i + 1] : ""}
        </div>);
    }

    return (
      <>
        <div className="container container-xxs border-bottom mt-5 pb-5">
          <h1 className="text-white mb-4">Physical Characteristics</h1>
          <p className="text-light">This section helps to describe the look and feel of your character making it easier htmlFor you and other players visualise what you look like. </p>
        </div>
        <div className="container container-xxs border-bottom mt-5 pb-5">
          <div className="row mb-2 align-items-center justify-content-between">
            <div className="col-3 d-flex">
              <img className="col" alt="" src="images/camera-placeholder.svg" />
            </div>
            <div className="col-8">
              <label htmlFor="img-url" className="htmlForm-label text-white fw-bold">Character Portrait URL</label>
              <div className="input-group ">
                <input type="text" className="htmlForm-control htmlForm-control-lg mb-3" id="img-url" />
              </div>
            </div>
          </div>
        </div>
        <div className="container container-xxs mt-5 pb-5">
          {grouped}
          <div className="row mb-2 mt-4 float-right">
            <div className="col">
              <a className="btn btn-primary d-flex align-items-center justify-content-end mb-5" href="#personality">Continue to Personality</a>
            </div>
          </div>
        </div>

        <div className="modal fade" id="buildModal" tabIndex={-1} aria-labelledby="buildModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="buildModalLabel">Build types</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>There are three main build –or body– types we offer out of the box. Ectomorph, mesomorph, and endomorphs. These body types aren't set in stone, and your character may be a combination of types.</p>
                <h6>Ectomorph</h6>
                <p className="">
                  An ectomorph is a typical skinny person. They have a light build with small joints and lean muscle. Usually ectomorphs have long thin limbs with stringy muscles. Shoulders tend to be thin with little width.
                </p>
                <h6>Mesomorph</h6>
                <p className="">
                  Mesomorphs have a large bone structure, large muscles, and a naturally athletic physique.
                </p>
                <h6>Endomorph</h6>
                <p className="">
                  The endomorph body type is solid and generally soft.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">Okay, got it!</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
