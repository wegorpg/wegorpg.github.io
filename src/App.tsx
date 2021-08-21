import React from 'react';
import './App.css';
import {Utils} from './Utils';
import {DataManager} from './DataManager';
import {PhysicalChar} from './PhysicalChar';
import {Personality} from './Personality';
import {ActionAbilities} from './ActionAbilities';
import {DnaSkills} from './DnaSkills';
import {Flaws} from './Flaws';
import {Motive} from './Motive';
import {BioItems} from './BioItems';
import {CharacterSheet} from './CharacterSheet';

export interface IAppProps {

}

interface IAppState {
  loading: boolean;
  currentPage: string;
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { loading: false, currentPage: "" };

    DataManager.InitializeCustomData();
  }

  componentDidMount() {
    this.parseURL(true);
    const appInstance = this;
    window.addEventListener("hashchange", function(e){
      appInstance.parseURL();
    });
  }

  public render() {
    let loadingOverlay = <span />;
    if (this.state.loading) {
      loadingOverlay = <div id="loadingOverlay">
        <h1><span>Loading..</span></h1>
      </div>;
    }

    let currentPage = null;
    switch (this.state.currentPage) {
      case "personality":
        currentPage = <Personality />;
        break;
      case "actionAbilities":
        currentPage = <ActionAbilities />;
        break;
      case "dnaSkills":
        currentPage = <DnaSkills />;
        break;
      case "flaws":
        currentPage = <Flaws />;
        break;
      case "motive":
        currentPage = <Motive />;
        break;
      case "bioItems":
        currentPage = <BioItems />;
        break;
      case "mgs":
        currentPage = <CharacterSheet onLoadingStateChange={ (isLoading: boolean, onComplete: () => void) => { this.onLoadingStateChange(isLoading, onComplete) } } />;
        break;
      case "physical":
      default:
        currentPage = <PhysicalChar />;
        break;
    }

    return (
      <>
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
        {currentPage}
        {loadingOverlay}
      </>
    );
  }

  public parseURL(firstParse: boolean = false) {
    let loading = this.state.loading;
    if (firstParse) {
      const charId = Utils.GetCharId();
      if (charId !== null) {
        const appInstance = this;
        DataManager.LoadOnlineCharacter(charId, (isSuccesful: boolean) => { appInstance.onLoadDone(isSuccesful); });
        loading = true;
      }
    }

    const urlSplit = window.location.hash.split("#");
    this.setState({ loading: loading, currentPage: urlSplit.length > 1 ? urlSplit[1] : "" });
  }

  public onLoadDone(isSuccesful: boolean): void {
    this.setState({ loading: false}, () => {
      window.location.hash = "#mgs";
    });
  }

  public onLoadingStateChange(isLoading: boolean, onComplete: () => void): void {
    this.setState({ loading: isLoading}, () => { onComplete(); });
  }
}

export default App;
