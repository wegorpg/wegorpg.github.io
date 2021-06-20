import React from 'react';

export interface IBioItemsProps {
}

interface IBioItemsState {

}

export class BioItems extends React.Component<IBioItemsProps, IBioItemsState> {
  constructor(props: IBioItemsProps) {
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
          <h1 className="text-white mb-4">Biography & items</h1>
          <p className="text-light">Tell us more about your character and what items they have.</p>
        </div>
        <div className="container border-bottom">
          <div className="row justify-content-between">
            <div className="col-md-7 pb-5">
              <div className="row pb-5 border-bottom">
                <h5 className="fw-bold text-white mb-4 mt-5">Biographical Information</h5>
                  <div className="container">
                      <label htmlFor="itemDescription" className="fw-bold text-white mb-2">Short Biography</label>
                      <textarea id="itemDescription" className="col form-control text-white"></textarea>
                  </div>
                  <div className="container mt-4">
                      <label htmlFor="itemDescription" className="fw-bold text-white mb-2">Extended Biography</label>
                      <textarea id="itemDescription" className="col form-control text-white"></textarea>
                  </div>
              </div>
              <div className="pt-5">
                  <h5 className="fw-bold text-white mb-4">Add Items</h5>
                  <div className="radio-card mb-4 p-3">
                    <div className="row">
                      <div className="col">
                        <label htmlFor="flaw-name" className="form-label text-white fw-bold">Item Name</label>
                        <div className="input-group ">
                          <input type="text" className="form-control form-control-lg mb-3" id="item-name" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="itemDescription" className="fw-bold text-white mb-2">Description</label>
                        <textarea id="itemDescription" className="col form-control text-white"></textarea>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button type="button" className="btn btn-link">
                      <img src="images/add_white.svg"/>
                      Add Additional Item
                    </button>
                  </div>
        </div>
          </div>
            <div className="col-md-4 mt-md-5 mb-5">
              <div className="p-4 bg-lighter point-calculator">
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
            <a className="justify-content-start text-white" href="#motive">Back to Motive</a>
            <a className="btn btn-primary d-flex align-items-center justify-content-end" href="#mgs">Finish Character</a>
          </div>
        </div>
      </div>
    );
  }
}
