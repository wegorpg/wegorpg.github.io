import React from 'react';
import {DataManager} from './DataManager';
import {CustomizableDataType, ICustomizableData} from './Common';
import {PersonalityData} from './Customizable/PersonalityData';
import {SavedPersonality} from './Components/SavedPersonality';

export interface IPersonalityProps {
}

interface IPersonalityState {
  points: number;
  maxPoints: number;
}

export class Personality extends React.Component<IPersonalityProps, IPersonalityState> {
  private personalities: PersonalityData[];
  constructor(props: IPersonalityProps) {
    super(props);

    DataManager.CalculatePoints();
    const maxPoints = DataManager.GetMaxPoints();
    const points = DataManager.GetPoints();
    this.state = { points: points, maxPoints: maxPoints };

    this.personalities = [];
    const personalityData = DataManager.GetCustomData("PersonalityData");
    if (personalityData != null) {
      personalityData.forEach((data: ICustomizableData) => {
        if (data != null && data.DataType === CustomizableDataType.Personality) {
          this.personalities.push(data as PersonalityData);
        }
      });
    }
  }

  public render() {
    let items = [];
    for (const personality of this.personalities) {
      items.push(<SavedPersonality key={"persElement" + personality._id} data={personality} contClassName="pb-5 border-bottom" onValueChange={(value) => { this.onRecalculatePoints(); }} />);
    }

    return (
      <>
        <div className="container  border-bottom mt-5 pb-5">
          <h1 className="text-white mb-4">Personality</h1>
          <p className="text-light">This section is used to describe how your character acts, what choices they would make and how they would feel in different situations. Need more help getting started? Check out the personality trait section of the character sheet.</p>
        </div>
        <div className="container border-bottom">
          <div className="row justify-content-between">
            <div className="col-md-7 mt-5 pb-5">
              {items}
            </div>
            <div className="col-md-4 mt-5">
              <div className="p-4 bg-lighter point-calculator">
                <h6 className="text-white fw-bold">Total Points Calculator</h6>
                <h6 className="text-white"><span className="utilized">{this.state.points}</span> / {this.state.maxPoints} Utilized</h6>
                <p className="text-light mb-0"><small>This will be used for both abilities and skills. Choose wisely!</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="d-flex w-100 no-gutter align-items-center mb-2 mt-4 justify-content-between">
            <a className="justify-content-start text-white" href="#physical">Back to Physical</a>
            <a className="btn btn-primary d-flex align-items-center justify-content-end" href="#actionAbilities">Continue to Action Abilities</a>
          </div>
        </div>
      </>
    );
  }

  private onRecalculatePoints() {
    DataManager.CalculatePoints();
    const maxPoints = DataManager.GetMaxPoints();
    const points = DataManager.GetPoints();
    this.setState({ points: points, maxPoints: maxPoints })
  }
}
