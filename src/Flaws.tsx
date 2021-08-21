import React from 'react';

export interface IFlawsProps {
}

interface IFlawsState {

}

export class Flaws extends React.Component<IFlawsProps, IFlawsState> {
  constructor(props: IFlawsProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <>
        <div className="container  border-bottom mt-5 pb-5">
          <h1 className="text-white mb-4">Flaws</h1>
          <p className="text-light">This section describes flawed aspects of your character. For every Affliction you take, select the effect that affliction has on your character.</p>
        </div>
        <div className="container border-bottom">
          <div className="row justify-content-between">
            <div className="col-md-7 mt-5 pb-md-5">
              <div>
                <h5 className="fw-bold text-white mb-4">Add Flaws</h5>
                <div className="radio-card mb-4 p-3">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="flaw-name" className="form-label text-white fw-bold">Flaw Name</label>
                      <div className="input-group ">
                        <input type="text" className="form-control form-control-lg mb-3" id="flaw-name" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="species" className="form-label text-white fw-bold">Skill</label>
                      <select className="form-select form-select-lg " id="skill">
                        <option disabled>Select Category</option>
                        <option>Bias</option>
                        <option>Limitation</option>
                        <option>Imperfection</option>
                        <option>Problem</option>
                        <option>Personality Disorder</option>
                        <option>Vice</option>
                        <option>Phobia</option>
                        <option>Prejudice</option>
                        <option>Deficiency</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="species" className="form-label text-white fw-bold">DNA Affection</label>
                      <select className="form-select form-select-lg " id="skill">
                        <option disabled>Select DNA</option>
                        <option>Physical</option>
                        <option>Emotional</option>
                        <option>Intellectual</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="species" className="form-label text-white fw-bold">Intensity</label>
                      <select className="form-select form-select-lg " id="skill">
                        <option disabled>Select Intensity</option>
                        <option>Minor (-10 Points)</option>
                        <option>Major (-20 Points)</option>
                        <option>Fatal (-30 Points)</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <label htmlFor="species" className="form-label text-white fw-bold">Effect</label>
                      <select className="form-select form-select-lg " id="skill">
                        <option disabled>Select Effect</option>
                        <option>Start of the Session: The GM rolls a 6-sided die. If it lands on 1, then you will have to deal with this affliction throughout the session.</option>
                        <option>Every Roll: Every time you roll in the affected DNA category and fail, your affliction causes 1 extra damage.</option>
                        <option>When Encountering: If your character encouters your affliction then they suffer -1 to all skill checks in the DNA category.</option>
                        <option>Skill Effect: This affliction affects a skill by lowering it -1.</option>
                        <option>Special Effect: Roll willpower check, on failure you are affected by your affliction.</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" className="btn btn-link">
                    <img src="images/add_white.svg" alt="" />
                    Add Additional Flaw
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="p-4 bg-lighter point-calculator mb-5">
                <div className="border-bottom pb-4">
                  <h6 className="text-white fw-bold">DNA Balancer</h6>
                  <h6 className="text-white"><span className="utilized">0</span> Balance Level</h6>
                  <p className="text-light mb-0"><small>Your balance level must equal 0.</small></p>
                </div>
                <div className="mt-4">
                  <h6 className="text-white fw-bold">Total Points Calculator</h6>
                  <h6 className="text-white"><span className="utilized">0</span> / 150 Utilized</h6>
                  <p className="text-light mb-0"><small>This will be used for both abilities and skills. Choose wisely!</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="d-flex w-100 no-gutter align-items-center mb-2 mt-4 justify-content-between">
            <a className="justify-content-start text-white" href="#dnaSkills">Back to DNA & Skills</a>
            <a className="btn btn-primary d-flex align-items-center justify-content-end" href="#motive">Continue to Motive</a>
          </div>
        </div>
      </>
    );
  }
}
