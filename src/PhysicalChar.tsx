import React from 'react';

export interface IPhysicalCharProps {
}

interface IPhysicalCharState {

}

export class PhysicalChar extends React.Component<IPhysicalCharProps, IPhysicalCharState> {
  constructor(props: IPhysicalCharProps) {
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
              <a href="#index" className="mr-3 text-white">Character Builder</a>
              <a href="#mgs" className="text-white">Your Character</a>
            </div>
          </div>
        </nav>
        <div className="container container-xxs border-bottom mt-5 pb-5">
          <h1 className="text-white mb-4">Physical Characteristics</h1>
          <p className="text-light">This section helps to describe the look and feel of your character making it easier htmlFor you and other players visualise what you look like. </p>
        </div>
        <div className="container container-xxs border-bottom mt-5 pb-5">
          <div className="row mb-2 align-items-center justify-content-between">
            <div className="col-3 d-flex">
              <img className="col" src="images/camera-placeholder.svg"/>
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
          <div className="row mb-2 align-items-center justify-content-between">
            <div className="col-md-6">
              <label htmlFor="char-name" className="htmlForm-label text-white fw-bold">Character Name</label>
              <div className="input-group ">
                <input type="text" className="htmlForm-control htmlForm-control-lg mb-3" id="char-name" />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="points" className="htmlForm-label text-white fw-bold">Max Points</label>
              <input type="number" className="htmlForm-control htmlForm-control-lg mb-3" id="points" defaultValue="150" />
            </div>
          </div>
          <div className="row mb-2 align-items-center justify-content-between ">
            <div className="col-md-6">
              <label htmlFor="species" className="htmlForm-label text-white fw-bold">Species</label>
              <select className="custom-select custom-select-lg mb-3" id="species">
                <option>Human</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="age" className="htmlForm-label text-white fw-bold">Age</label>
              <select className="custom-select custom-select-lg mb-3" id="age">
                <option>Infant</option>
                <option>Child</option>
                <option>Teenager</option>
                <option>Young Adult</option>
                <option>Adult</option>
                <option>Older Adult</option>
                <option>Senior</option>
              </select>
            </div>
          </div>
          <div className="row mb-2 align-items-center justify-content-between ">
            <div className="col-md-6">
              <label htmlFor="gender" className="htmlForm-label text-white fw-bold">Gender</label>
              <select className="custom-select custom-select-lg mb-3" id="gender">
                <option>Female</option>
                <option>Male</option>
                <option>Non-binary</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="hair" className="htmlForm-label text-white fw-bold">Hair Color</label>
              <select className="custom-select custom-select-lg mb-3" id="hair">
                <option>Black</option>
                <option>Blonde</option>
                <option>Blue</option>
                <option>Brow mb-2n</option>
                <option>Green</option>
                <option>Grey</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Red</option>
                <option>Yellow</option>
                <option>White</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="row mb-2 align-items-center justify-content-between ">
            <div className="col-md-6">
              <label htmlFor="eye" className="htmlForm-label text-white fw-bold">Eye Color</label>
              <select className="custom-select custom-select-lg mb-3" id="eye">
                <option>Black</option>
                <option>Blonde</option>
                <option>Blue</option>
                <option>Brow mb-2n</option>
                <option>Green</option>
                <option>Grey</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Red</option>
                <option>Yellow</option>
                <option>White</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="eye" className="htmlForm-label text-white fw-bold">Height</label>
              <select className="custom-select custom-select-lg mb-3" id="eye">
                <option>Dwarf</option>
                <option>Short</option>
                <option>Average Height</option>
                <option>Tall</option>
                <option>Giant</option>
                <option>Grey</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Red</option>
                <option>Yellow</option>
                <option>White</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="row mb-2 align-items-center justify-content-between ">
            <div className="col-md-6">
              <label htmlFor="eye" className="htmlForm-label text-white fw-bold">Eye Color</label>
              <select className="custom-select custom-select-lg mb-3" id="eye">
                <option>Black</option>
                <option>Blonde</option>
                <option>Blue</option>
                <option>Brow mb-2n</option>
                <option>Green</option>
                <option>Grey</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Red</option>
                <option>Yellow</option>
                <option>White</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between">
                <label htmlFor="build" className="htmlForm-label text-white fw-bold">Build</label>
                <a className="text-white" data-bs-toggle="modal" data-bs-target="#buildModal">Learn more</a>
              </div>
              <select className="custom-select custom-select-lg mb-3" id="build">
                <option>Ectomorph</option>
                <option>Mesomorph</option>
                <option>Endomorph</option>
              </select>
            </div>
          </div>
          <div className="row mb-2 align-items-center justify-content-between ">
            <div className="col-md-6">
              <label htmlFor="height" className="htmlForm-label text-white fw-bold">Height</label>
              <select className="custom-select custom-select-lg mb-3" id="height">
                <option>Dwarf</option>
                <option>Short</option>
                <option>Average Height</option>
                <option>Tall</option>
                <option>Giant</option>
                <option>Grey</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Red</option>
                <option>Yellow</option>
                <option>White</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="wealth" className="htmlForm-label text-white fw-bold">Wealth</label>
              <select className="custom-select custom-select-lg mb-3" id="wealth">
                <option>Homeless</option>
                <option>Lower className</option>
                <option>Middle className</option>
                <option>Upper className</option>
                <option>Ruling className</option>
              </select>
            </div>
          </div>
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
      </div>
    );
  }
}
