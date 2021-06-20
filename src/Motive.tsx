import React from 'react';

export interface IMotiveProps {
}

interface IMotiveState {

}

export class Motive extends React.Component<IMotiveProps, IMotiveState> {
  constructor(props: IMotiveProps) {
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
          <h1 className="text-white mb-4">Motive</h1>
          <p className="text-light">This section describes the motivation of your character.</p>
        </div>
        <div className="container border-bottom">
          <div className="row justify-content-between">
            <div className="col-md-7 mt-5 pb-5">
              <div>
                  <h5 className="fw-bold text-white mb-4">Create Motivation</h5>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="species" className="form-label text-white fw-bold">Motivation Type</label>
                      <select className="form-select form-select-lg" id="skill">
                        <option disabled>Select Motivation</option>
                        <option>CUSTOM</option>
                        <option>ACHIEVING DOMINION OVER ANOTHER (DARK)</option>
                        <option>ACHIEVING SPIRITUAL ENLIGHTENMENT</option>
                        <option>AVOIDING CERTAIN DEATH</option>
                        <option>AVOIDING FINANCIAL RUIN</option>
                        <option>BEATING A DIAGNOSIS OR CONDITION</option>
                        <option>BECOMING A LEADER OF OTHERS</option>
                        <option>BECOMING THE SOLE POWER OR AUTHORITY (DARK)</option>
                        <option>BEING ACCEPTED BY OTHERS</option>
                        <option>BEING ACKNOWLEDGED OR APPRECIATED BY FAMILY</option>
                        <option>BEING A PHILANTHROPIST</option>
                        <option>BEING THE BEST AT SOMETHING</option>
                        <option>BREAKING PEOPLE SO THEY ABANDON THEIR BELIEFS (DARK)</option>
                        <option>CARING FOR AN AGING PARENT</option>
                        <option>CARRYING ON A LEGACY</option>
                        <option>CATCHING THE BAD GUY OR GIRL</option>
                        <option>CAUSING SOMEONE PAIN (DARK)</option>
                        <option>COMING TO GRIPS WITH A MENTAL DISORDER</option>
                        <option>CONTROLLING OTHERS (DARK)</option>
                        <option>COPING WITH A LEARNING DISABILITY OR ILLNESS (KIDLIT)</option>
                        <option>CORRECTING A PERCEIVED MISTAKE (DARK)</option>
                        <option>CREATING OR DISCOVERING SOMETHING IMPORTANT</option>
                        <option>DEALING WITH BULLIES (KIDLIT)</option>
                        <option>DISCOVERING ONE'S TRUE SELF</option>
                        <option>DOING THE RIGHT THING</option>
                        <option>DOING THE RIGHT THING (KIDLIT)</option>
                        <option>EMBRACING A PERSONAL IDENTITY (KIDLIT)</option>
                        <option>ESCAPING A DANGEROUS LIFE ONE NO LONGER WANTS TO LIVE</option>
                        <option>ESCAPING A KILLER</option>
                        <option>ESCAPING CONFINEMENT</option>
                        <option>ESCAPING DANGER (KIDLIT)</option>
                        <option>ESCAPING HOMELESSNESS</option>
                        <option>ESCAPING INVADERS</option>
                        <option>ESCAPING WIDESPREAD DISASTER</option>
                        <option>EVADING RESPONSIBILITY (DARK)</option>
                        <option>EXPLORING ONE'S BIOLOGICAL ROOTS</option>
                        <option>FINDING A LIFELONG PARTNER</option>
                        <option>FINDING FRIENDSHIP OR COMPANIONSHIP</option>
                        <option>FINDING ONE'S PURPOSE</option>
                        <option>FINDING SOMETHING LOST</option>
                        <option>FITTING IN (KIDLIT)</option>
                        <option>FORCING A BIG CHANGE (DARK)</option>
                        <option>FORCING CONVERSION (DARK)</option>
                        <option>FORGIVING ONESELF</option>
                        <option>GAINING CONTROL OVER ONE'S OWN LIFE</option>
                        <option>GETTING REVENGE (DARK)</option>
                        <option>GIVING UP A CHILD</option>
                        <option>HAVING A CHILD</option>
                        <option>HAVING IT ALL (DARK)</option>
                        <option>HELPING A LOVED ONE RECOGNIZE THEY ARE HURTING THEMSELVES AND OTHERS</option>
                        <option>KEEPING WHAT ONE HAS NO MATTER WHAT (DARK)</option>
                        <option>LEARNING TO TRUST (KIDLIT)</option>
                        <option>MAKING SOMEONE PROUD</option>
                        <option>NAVIGATING A CHANGING FAMILY SITUATION (KIDLIT)</option>
                        <option>OBLITERATING AN ENEMY (DARK)</option>
                        <option>OBSESSIVELY PURSUING A RELATIONSHIP (DARK)</option>
                        <option>OBTAINING GLORY WHATEVER THE COST (DARK)</option>
                        <option>OBTAINING SHELTER FROM THE ELEMENTS</option>
                        <option>OVERCOMING ABUSE AND LEARNING TO TRUST</option>
                        <option>OVERCOMING ADDICTION</option>
                        <option>OVERCOMING A DEBILITATING FEAR</option>
                        <option>OVERCOMING A FEAR (KIDLIT)</option>
                        <option>OVERTHROWING GOOD WITH EVIL (DARK)</option>
                        <option>PROFITEERING (DARK)</option>
                        <option>PROMOTING CHAOS (DARK)</option>
                        <option>PROTECTING A LOVED ONE</option>
                        <option>PROTECTING ONE'S HOME OR PROPERTY</option>
                        <option>PROVIDING FOR ONE'S FAMILY</option>
                        <option>PROVIDING SECURITY FOR FUTURE GENERATIONS</option>
                        <option>PROVING SOMEONE WRONG</option>
                        <option>PURSUING A PASSION</option>
                        <option>PURSUING A TOXIC DESIRE (DARK)</option>
                        <option>PURSUING JUSTICE FOR ONESELF OR OTHERS</option>
                        <option>PURSUING KNOWLEDGE</option>
                        <option>PURSUING MASTERY OF A SKILL OR TALENT</option>
                        <option>REALIZING A DREAM</option>
                        <option>RECONCILING WITH AN ESTRANGED FAMILY MEMBER</option>
                        <option>REPAYING A DEBT</option>
                        <option>RESCUING A LOVED ONE FROM A CAPTOR</option>
                        <option>RESISTING PEER PRESSURE (KIDLIT)</option>
                        <option>RESTORING ONE'S NAME OR REPUTATION</option>
                        <option>RIGHTING A DEEP WRONG</option>
                        <option>RUINING SOMEONE'S LIFE (DARK)</option>
                        <option>RUINING SOMEONE'S REPUTATION (DARK)</option>
                        <option>SAVING THE WORLD</option>
                        <option>SEEKING DEATH (DARK)</option>
                        <option>SERVING OTHERS</option>
                        <option>SOLVING A PROBLEM (KIDLIT)</option>
                        <option>STOPPING AN EVENT FROM HAPPENING</option>
                        <option>SUPPORTING ONESELF FINANCIALLY</option>
                        <option>SURVIVING LOSS</option>
                        <option>SURVIVING THE DEATH OF A LOVED ONE</option>
                        <option>TAKING WHAT ONE IS OWED (DARK)</option>
                        <option>TRYING SOMETHING NEW (KIDLIT)</option>
                        <option>TRYING TO SUCCEED WHERE ONE HAS PREVIOUSLY FAILED</option>
                        <option>WINNING A COMPETITION</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="motiveDescription" className="fw-bold text-white mb-2">Description</label>
                    <textarea id="motiveDescription" className="col form-control"></textarea>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="resolution" className="fw-bold text-white mb-2">Resolution</label>
                    <textarea id="resolution" className="col form-control"></textarea>
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
            <a className="justify-content-start text-white" href="#flaws">Back to Flaws</a>
            <a className="btn btn-primary d-flex align-items-center justify-content-end" href="#bioItems">Continue to Bio & Items</a>
          </div>
        </div>
      </div>
    );
  }
}
