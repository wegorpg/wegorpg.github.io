import React from 'react';
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
  currentPage: string;
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { currentPage: "" };
  }

  componentDidMount() {
    this.parseURL();
    const appInstance = this;
    window.addEventListener("hashchange", function(e){
      appInstance.parseURL();
    });
  }

  public render() {
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
        currentPage = <CharacterSheet />;
        break;
      case "physical":
      default:
        currentPage = <PhysicalChar />;
        break;
    }

    return currentPage;
  }

  public parseURL() {
    const urlSplit = window.location.hash.split("#");
    console.log(urlSplit);
    this.setState({ currentPage: urlSplit.length > 1 ? urlSplit[1] : "" });
  }
}

export default App;
