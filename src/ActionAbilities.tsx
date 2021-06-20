import React from 'react';

export interface IActionAbilitiesProps {
}

interface IActionAbilitiesState {

}

export class ActionAbilities extends React.Component<IActionAbilitiesProps, IActionAbilitiesState> {
  constructor(props: IActionAbilitiesProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#index">
              WEGO RPG
            </a>
            <div className="d-flex align-items-center">
              <a href="#index" className="me-3 text-white">Character Builder</a>
              <a href="#mgs" className="text-white">Your Character</a>
            </div>
          </div>
        </nav>
        <div className="container  border-bottom mt-5 pb-5">
          <h1 className="text-white mb-4">Personality</h1>
          <p className="text-light">This section lists all your action abilities by conflict state. For more detailed information please see the Skills & Abilities sheet such as descriptions of the actions as well as their prerequisites.</p>
        </div>
        <div className="container">
          <div className="row border-bottom justify-content-between">
            <div className="col-md-7 mt-5 pb-5">
              <div>
                <h3 className="text-white fw-bold mb-5">Physical Abilities</h3>
                <div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                      <input type="checkbox" aria-label="social butterfly" id="precision" className="form-check-input" />
                      <label htmlFor="precision" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Precision Strike</h6>
                        <p className="text-light mb-0">Find a weak spot on your opponent and use the difference in skill contest between you and the oppoent as extra damage by targeting their weakenss. Alternatively prevent your opponent from doing damage this round by targeting their ability to attack. Maybe by hitting their weapon hand, or stunning them with a smash to the nose.</p>
                        <p className="text-light mt-2 mb-0"><small><b>Must have:</b> Resilient</small></p>
                      </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                      <input type="checkbox" aria-label="Trick Shot" id="trickShot" className="form-check-input" />
                      <label htmlFor="trickShot" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Trick Shot</h6>
                        <p className="text-light mb-0">Reduce your physical skill by 4; triple your damage.</p>
                        <div className="d-flex mt-2">
                          <p className="text-light me-3 mb-0"><small><b>Must have:</b> Careless</small></p>
                          <p className="text-light mb-0"><small><b>Cannot have:</b> Sensitive</small></p>
                        </div>
                      </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">

                      <input type="checkbox" aria-label="Dig Down Deep" id="ddd" className="form-check-input" disabled />
                      <label htmlFor="ddd" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Dig Down Deep <span className="fw-normal ml-2">(Requirements Not Met)</span></h6>
                        <p className="text-light mb-0">Reduce your physical skill by 4; triple your damage.</p>
                        <div className="d-flex mt-2">
                          <p className="text-light me-3 mb-0"><small><b>Must have:</b> Careless</small></p>
                        </div>
                      </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                      <input type="checkbox" aria-label="Stalwart Defense" id="sd" className="form-check-input" />
                      <label htmlFor="sd" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Stalwart Defense</h6>
                        <p className="text-light mb-0">Instead of causing damage, use your damage role and deduct it from your skill roll.</p>
                      </label>
                  </div>
                </div>
              </div>
              <div className="pb-5 border-bottom">
                <h3 className="text-white fw-bold mb-5 mt-5">Emotional Fortitude Abilities</h3>
                <div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                      <input type="checkbox" aria-label="social butterfly" id="precision" className="form-check-input" />
                      <label htmlFor="precision" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Precision Strike</h6>
                        <p className="text-light mb-0">Find a weak spot on your opponent and use the difference in skill contest between you and the oppoent as extra damage by targeting their weakenss. Alternatively prevent your opponent from doing damage this round by targeting their ability to attack. Maybe by hitting their weapon hand, or stunning them with a smash to the nose.</p>
                        <p className="text-light mt-2 mb-0"><small><b>Must have:</b> Resilient</small></p>
                      </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">

                      <input type="checkbox" aria-label="Trick Shot" id="trickShot" className="form-check-input" />
                      <label htmlFor="trickShot" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Trick Shot</h6>
                        <p className="text-light mb-0">Reduce your physical skill by 4; triple your damage.</p>
                        <div className="d-flex mt-2">
                          <p className="text-light me-3 mb-0"><small><b>Must have:</b> Careless</small></p>
                          <p className="text-light mb-0"><small><b>Cannot have:</b> Sensitive</small></p>
                        </div>
                      </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">

                      <input type="checkbox" aria-label="Dig Down Deep" id="ddd" className="form-check-input" disabled />
                      <label htmlFor="ddd" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Dig Down Deep <span className="fw-normal ml-2">(Requirements Not Met)</span></h6>
                        <p className="text-light mb-0">Reduce your physical skill by 4; triple your damage.</p>
                        <div className="d-flex mt-2">
                          <p className="text-light me-3 mb-0"><small><b>Must have:</b> Careless</small></p>
                        </div>
                      </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">

                      <input type="checkbox" aria-label="Stalwart Defense" id="sd" className="form-check-input" />
                      <label htmlFor="sd" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Stalwart Defense</h6>
                        <p className="text-light mb-0">Instead of causing damage, use your damage role and deduct it from your skill roll.</p>
                      </label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-white fw-bold mb-5 mt-5">Intellect Abilities</h3>
                <div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">

                      <input type="checkbox" aria-label="social butterfly" id="precision" className="form-check-input" />
                      <label htmlFor="precision" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Precision Strike</h6>
                        <p className="text-light mb-0">Find a weak spot on your opponent and use the difference in skill contest between you and the oppoent as extra damage by targeting their weakenss. Alternatively prevent your opponent from doing damage this round by targeting their ability to attack. Maybe by hitting their weapon hand, or stunning them with a smash to the nose.</p>
                        <p className="text-light mt-2 mb-0"><small><b>Must have:</b> Resilient</small></p>
                      </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">

                      <input type="checkbox" aria-label="Trick Shot" id="trickShot" className="form-check-input" />
                      <label htmlFor="trickShot" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Trick Shot</h6>
                        <p className="text-light mb-0">Reduce your physical skill by 4; triple your damage.</p>
                        <div className="d-flex mt-2">
                          <p className="text-light me-3 mb-0"><small><b>Must have:</b> Careless</small></p>
                          <p className="text-light mb-0"><small><b>Cannot have:</b> Sensitive</small></p>
                        </div>
                      </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">

                      <input type="checkbox" aria-label="Dig Down Deep" id="ddd" className="form-check-input" disabled />
                      <label htmlFor="ddd" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Dig Down Deep <span className="fw-normal ml-2">(Requirements Not Met)</span></h6>
                        <p className="text-light mb-0">Reduce your physical skill by 4; triple your damage.</p>
                        <div className="d-flex mt-2">
                          <p className="text-light me-3 mb-0"><small><b>Must have:</b> Careless</small></p>
                        </div>
                      </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">

                      <input type="checkbox" aria-label="Stalwart Defense" id="sd" className="form-check-input" />
                      <label htmlFor="sd" className="text-white custom-control-label fw-normal  p-3 w-100">
                        <h6 className="text-white fw-bold">Stalwart Defense</h6>
                        <p className="text-light mb-0">Instead of causing damage, use your damage role and deduct it from your skill roll.</p>
                      </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-md-5 mb-3">
            <div className="p-4 bg-lighter point-calculator">
              <h6 className="text-white fw-bold">Total Points Calculator</h6>
              <h6 className="text-white"><span className="utilized">0</span> / 150 Utilized</h6>
              <p className="text-light mb-0"><small>This will be used for both abilities and skills. Choose wisely!</small></p>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="d-flex w-100 no-gutter align-items-center mb-2 mt-4 justify-content-between">
            <a className="justify-content-start text-white" href="#personality">Back to Personality</a>
            <a className="btn btn-primary d-flex align-items-center justify-content-end" href="#dnaSkills">Continue to DNA & Skills</a>
          </div>
        </div>
      </div>
    );
  }
}
