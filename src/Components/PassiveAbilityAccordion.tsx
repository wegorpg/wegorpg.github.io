import React from 'react';

export interface IPassiveAbilityAccordionProps {
  persName: string;
  abilityName: string;
  abilityDesc: string;
}

interface IPassiveAbilityAccordionState {
  isCollapsed: boolean;
}

export class PassiveAbilityAccordion extends React.Component<IPassiveAbilityAccordionProps, IPassiveAbilityAccordionState> {
  constructor(props: IPassiveAbilityAccordionProps) {
    super(props);

    this.state = { isCollapsed: true };
  }

  public render() {
    return <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false"
        onClick={ () => { this.setState({ isCollapsed: !this.state.isCollapsed }); } } >
        <span className="fw-bold me-2">{this.props.abilityName}</span> ({this.props.persName})
      </button>
    </h2>
    <div className={"accordion-collapse collapse" + (this.state.isCollapsed ? "" : " show")} >
      <div className="accordion-body">{this.props.abilityDesc}</div>
    </div>
  </div>;
  }
}