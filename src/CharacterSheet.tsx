import React from 'react';
import {Utils} from './Utils';
import {DataManager} from './DataManager';
import {CustomizableDataType, ICustomizableData, SelectData, SavedTextValue} from './Common';

export interface ICharacterSheetProps {
  onLoadingStateChange(isLoading: boolean, onComplete: () => void): void;
}

interface ICharacterSheetState {
  charUrl: string;
  authKey: string;
}

export class CharacterSheet extends React.Component<ICharacterSheetProps, ICharacterSheetState> {
  private physCustomizations: ICustomizableData[];

  constructor(props: ICharacterSheetProps) {
    super(props);
    const charId = Utils.GetCharId();
    this.state = { charUrl: charId !== null ? charId : "", authKey: "" };

    this.physCustomizations = [];
    const physicalData = DataManager.GetCustomData("PhysicalData");
    if (physicalData != null) {
      physicalData.forEach((data: ICustomizableData) => {
        if (data != null) {
          this.physCustomizations.push(data);
        }
      });
    }
  }

  public render() {
    let charName = "";
    let physItems = [];
    for (const customization of this.physCustomizations) {
      const savedValue = DataManager.GetData(customization._id, new SavedTextValue(""));
      if (savedValue !== null) {
        let value: string | null = savedValue.Value;
        if (customization.DataType === CustomizableDataType.Select) {
          const selectData = customization as SelectData;
          value = selectData.getValueOfOption(value);
        }

        if (value !== null && value.length > 0) {
          if (customization._id === "physCharName") {
            charName = value;
          }
          else if (customization._id === "physMaxPoints") {

          }
          else {
            physItems.push(<div className="col-6 col-md-3">
              <h6 className="fw-bold text-white">{customization.Name}</h6>
              <p className="text-light">{value}</p>
            </div>);
          }
        }
      }

    }

    let physGrouped = [];
    for (let i = 0; i < physItems.length; i += 4) {
      physGrouped.push(
        <div key={"physGrouped" + i} className="row mt-4">
          {physItems[i]}
          {(i + 1) < physItems.length ? physItems[i + 1] : ""}
          {(i + 2) < physItems.length ? physItems[i + 2] : ""}
          {(i + 3) < physItems.length ? physItems[i + 3] : ""}
        </div>);
    }

    const charLink = window.location.origin + "/?c=" + this.state.charUrl;

    return (
      <>
        <div className="container border-bottom mt-5 pb-5">
          <label className="form-input-label text-white mb-3">Load Your Character</label>
          <br />
          <label className="form-input-label text-white mb-3">Link to Character: <a href={charLink}>{charLink}</a></label>
          <div className="row">
            <div className="col-md-4">
              <div className="input-group mb-3">
                <label className="form-input-label text-white" id="charUrlLabel">Character URL</label>
                <input type="text" className="form-control" placeholder="" aria-describedby="charUrlLabel" value={this.state.charUrl} onChange={(e) => {
                  this.setState({ charUrl: e.target.value });
                }} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-3">
                <label className="form-input-label text-white" id="authKeyLabel">Auth Key</label>
                <input type="text" className="form-control" placeholder="" aria-describedby="authKeyLabel" value={this.state.authKey} onChange={(e) => {
                  this.setState({ authKey: e.target.value });
                }} />
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-secondary w-100" onClick={() => { this.loadOnline(); }}>Load</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary col-md-2 w-100" onClick={() => { this.saveOnline(); }}>Save</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="input-group mb-3">
                <button className="btn btn-secondary" type="button" id="button-addon1">Choose File</button>
                <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-secondary w-100">Load</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary col-md-2 w-100">Save</button>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-4">
              <img src="images/ex-image.jpg" alt="" className="w-100" />
              <div className="bg-lighter point-calculator p-4 mt-5">
                <h5 className="text-white">Items</h5>
                <div className="mt-4">
                  <h6 className="text-white fw-bold">Dévoiler</h6>
                  <p className="text-light">Mastercraft sword rewarded for his duty as a Les Dévotés agent</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex justify-content-between w-100">
                <h1 className="text-white fw-bold">{charName}</h1>
                <button className="btn btn-secondary">Edit</button>
              </div>
              <p className="text-light mt-3">
                "Merovech is a man of integrity, honor and devout devotion to his king, country and religious order: Les Dévotés. His morals are guided by the gods and his religious sect. When given a command he is unrelenting in his dedication to completing the task pushing the limits of his code of honor. He travels with his wife, Radagund, two squired sons Otto and Lothaire as well as a squad of soldiers: Chlotar, Pepin and Segibert."
              </p>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Overview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="personality-tab" data-bs-toggle="tab" data-bs-target="#personality" type="button" role="tab" aria-controls="personality" aria-selected="false">Personality & Skills</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Skills & Action</button>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active" id="overview" role="tabpanel" aria-labelledby="home-tab">
                  <div className="mt-5">
                    <div className="row">
                      <h5 className="fw-bold text-white">Basic Information</h5>
                    </div>
                    {physGrouped}
                  </div>
                  <div className="mt-5">
                    <div className="row">
                      <h5 className="fw-bold text-white">Character Traits</h5>
                    </div>
                    <div className="d-flex flex-wrap mt-4">
                      <p className="text-light me-3">
                        Dogmatic
                      </p>
                      <p className="text-light me-3">
                        Ceremonial
                      </p>
                      <p className="text-light me-3">
                        Unrelenting
                      </p>
                      <p className="text-light me-3">
                        Disciplined
                      </p>
                      <p className="text-light me-3">
                        Ambitious
                      </p>
                      <p className="text-light me-3">
                        Stubborn
                      </p>
                      <p className="text-light me-3">
                        Focused
                      </p>
                      <p className="text-light me-3">
                        Tough-Mindedness
                      </p>
                      <p className="text-light me-3">
                        Antagonistic
                      </p>
                      <p className="text-light me-3">
                        Realistic
                      </p>
                      <p className="text-light me-3">
                        Providing
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="row">
                      <h5 className="fw-bold text-white">Custom Motive</h5>
                    </div>
                    <div className="mt-4">
                      <h6 className="fw-bold text-white">Description</h6>
                      <p className="text-light">Merovech is hell bent on moving up the ranks of Les Dévotés and acquire land to go with his title.</p>
                    </div>
                    <div className="mt-4">
                      <h6 className="fw-bold text-white">Resolution</h6>
                      <p className="text-light">Moving up a rank and acquiring an estate will fulfill this need.</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="personality" role="tabpanel" aria-labelledby="personality-tab">
                  <div>
                    <div className="mt-5">
                      <h5 className="fw-bold text-white">Passive Abilities</h5>
                    </div>
                    <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span className="fw-bold me-2">Devout</span> (Traditional)
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">By retreating back into your faith you are able to gain back the stability you've been missing and regain your thoughts. Prolonged peaceful prayer from dogmatic religions, participating in religious practices and ceremony replenish 1 ability of your choosing. Can only be used once per session.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <span className="fw-bold me-2">Zealot</span> (Organized)
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Driven, disciplined, and deliberate. You will take any and all measures to achieve your goals. When working towards a goal you take reduced emotional and intellectual damage.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <span className="fw-bold me-2">Peace in Solitude</span> (Introvert)
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Recharge your HP meters through solitude and quiet.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            <span className="fw-bold me-2">Selfish</span> (Introvert)
                          </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Death has very little effect on you. Take no Emotional damage for killing or people dying near you.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-5">
                      <h5 className="fw-bold text-white">Character Flaws</h5>
                    </div>
                    <div className="accordion accordion-flush mt-4" id="accordionFlushFlaw">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-flawCollapseOne" aria-expanded="false" aria-controls="flush-flawCollapseOne">
                            <span className="fw-bold me-2">Temper</span> (Personality Disorder - Emotional - Major)
                          </button>
                        </h2>
                        <div id="flush-flawCollapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushFlaw">
                          <div className="accordion-body">Every Roll: Each time you roll in the affected DNA category and fail, your affliction causes 2 extra damage.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-flawCollapseTwo" aria-expanded="false" aria-controls="flush-flawCollapseTwo">
                            <span className="fw-bold me-2">Fanatic</span> ((Personality Disorder - Intellectual - Major)
                          </button>
                        </h2>
                        <div id="flush-flawCollapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushFlaw">
                          <div className="accordion-body">Start of the Session: The GM rolls a 6-sided die. If it lands on 1 or 2, you will have to deal with this affliction throughout the session.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-5">
                      <h5 className="fw-bold text-white">Progressive Skills</h5>
                    </div>
                    <p className="text-light"><i>No progressive skills available.</i></p>
                  </div>
                  <div>
                    <div className="mt-5">
                      <h5 className="fw-bold text-white">Sensitive Skills</h5>
                    </div>
                    <p className="text-light"><i>No progressive skills available.</i></p>
                  </div>
                  <div>
                    <div className="mt-5">
                      <h5 className="fw-bold text-white">Introvert Skills</h5>
                    </div>
                    <p className="text-light"><i>No progressive skills available.</i></p>
                  </div>
                </div>
                <div className="tab-pane" id="skills" role="tabpanel" aria-labelledby="skills-tab">...</div>
                <div className="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  public onSaveDone(isSuccessful: boolean): void {
    this.props.onLoadingStateChange(false, () => {});
  }

  private saveOnline(): void {
    const appInstance = this;
    this.props.onLoadingStateChange(true, () => {
      var saveData = DataManager.GetSaveData();
      DataManager.SaveOnlineData(this.state.charUrl, this.state.authKey, saveData, (isSuccesful: boolean) => {
        appInstance.onSaveDone(isSuccesful);
      });
    });
  }

  private loadOnline(): void {
    if (this.state.charUrl.length < 3) {
      console.log("Invalid Character URL");
      return;
    }

    window.location.href = "/?c=" + this.state.charUrl;
  }
}