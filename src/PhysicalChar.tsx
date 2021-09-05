import React from 'react';
import {DataManager} from './DataManager';
import {CustomizableDataType, ICustomizableData} from './Common';
import {SelectData} from './Customizable/SelectData';
import {TextInputData} from './Customizable/TextInputData';
import {SavedSelect} from './Components/SavedSelect';
import {SavedText} from './Components/SavedText';
import {SavedPortrait} from './Components/SavedPortrait';

export interface IPhysicalCharProps {
}

interface IPhysicalCharState {

}

export class PhysicalChar extends React.Component<IPhysicalCharProps, IPhysicalCharState> {
  private customizations: ICustomizableData[];
  private portraitUrl: ICustomizableData | null;

  constructor(props: IPhysicalCharProps) {
    super(props);
    this.state = {};

    this.customizations = [];
    this.portraitUrl = null;
    const physicalData = DataManager.GetCustomData("PhysicalData");
    if (physicalData != null) {
      physicalData.forEach((data: ICustomizableData) => {
        if (data != null) {
          if (data._id === "physCharPortrait") {
            this.portraitUrl = data;
          }
          else {
            this.customizations.push(data);
          }
        }
      });
    }
  }

  public render() {
    let portrait = <span />;
    if (this.portraitUrl !== null) {
      const textInputData = this.portraitUrl as TextInputData;
      portrait = <SavedPortrait key={"physElement" + textInputData._id} data={textInputData} contClassName="row mb-2 align-items-center justify-content-between" onValueChange={(value) => { }} />;
    }

    let items = [];
    for (const customization of this.customizations) {
      if (customization.DataType === CustomizableDataType.Select) {
        const selectData = customization as SelectData;
        items.push(<SavedSelect key={"physElement" + selectData._id} data={selectData} contClassName="col-md-6" onValueChange={(value) => { }} />);
      }
      else if (customization.DataType === CustomizableDataType.Text) {
        const textInputData = customization as TextInputData;
        items.push(<SavedText key={"physElement" + textInputData._id} data={textInputData} contClassName="col-md-6" onValueChange={(value) => { }} />);
      }
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
          {portrait}
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
