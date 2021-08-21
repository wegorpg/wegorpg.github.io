import React from 'react';

export interface IPersonalityProps {
}

interface IPersonalityState {

}

export class Personality extends React.Component<IPersonalityProps, IPersonalityState> {
  constructor(props: IPersonalityProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <>
        <div className="container  border-bottom mt-5 pb-5">
          <h1 className="text-white mb-4">Personality</h1>
          <p className="text-light">This section is used to describe how your character acts, what choices they would make and how they would feel in different situations. Need more help getting started? Check out the personality trait section of the character sheet.</p>
        </div>
        <div className="container border-bottom">
          <div className="row justify-content-between">
            <div className="col-md-7 mt-5 pb-5">
              <div className="pb-5 border-bottom">
                <h3 className="text-white fw-bold mb-3">Openness</h3>
                <p className="text-light">Openness is a general appreciation for art, emotion, adventure, unusual ideas, imagination, curiosity, and variety of experience. People who are open to experience are intellectually curious, open to emotion, sensitive to beauty and willing to try new things.</p>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">How open is your character? This will change the abilities and traits available.</h5>
                  <div className="d-flex">
                    <div className=" form-check me-3">
                      <input type="radio" aria-label="progressive" name="openness" id="progressive" className="me-2 form-check-input" defaultChecked /><label htmlFor="progressive" className="text-white form-check-label fw-normal">Progressive</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" aria-label="progressive" name="openness" id="traditional" className="me-2 form-check-input" /><label htmlFor="traditional" className="text-white form-check-label fw-normal">Traditional</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Passive Abilities (10 Points Each)</h5>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Thinking on your feet" id="thinking-on-feet" className="form-check-input" />
                    <label htmlFor="thinking-on-feet" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Thinking on Your Feet</h6>
                      <p className="text-light mb-0">In surprise conflict situations, ones without preparation, roll twice on your first round and take the better of the two.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Thinking on your feet" id="cat-curiosity" className="form-check-input" />
                    <label htmlFor="cat-curiosity" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">No! Curiosity Killed the Cat</h6>
                      <p className="text-light mb-0">And satisfaction brought it back! Get extra rewards when taking risks in unfamiliar places.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Thinking on your feet" id="progress-passive" className="form-check-input" />
                    <label htmlFor="progressive-passive" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Progressive</h6>
                      <p className="text-light mb-0">You're forward thinking, always ready for change and get along best with people who drive society forward. Progressives react positively to you.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Thinking on your feet" id="rock" className="form-check-input" />
                    <label htmlFor="rock" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Rock 'n Rolla</h6>
                      <p className="text-light mb-0">Sex drugs and rock and roll! By taking your mind off things, destressing and getting wild you're able to give yourself a break from the monotony. While this might drain other people, you gain back intellectual HP by having fun.</p>
                    </label>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Character Traits</h5>
                  <div className="d-flex flex-wrap">
                    <div className="custom-control custom-checkbox me-3 mb-3">
                      <input type="checkbox" aria-label="Ceremonial" name="openness-traits" id="ceremonial" className="me-2 form-check-input" /><label htmlFor="ceremonial" className="text-white form-check-label fw-normal">Ceremonial</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Conventional" name="openness-traits" id="conventional" className="me-2 form-check-input" /><label htmlFor="conventional" className="text-white form-check-label fw-normal">Conventional</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Data Driven" name="openness-traits" id="dataDriven" className="me-2 form-check-input" /><label htmlFor="dataDriven" className="text-white form-check-label fw-normal">Data-Driven</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Dogmatic" name="openness-traits" id="dogmatic" className="me-2 form-check-input" /><label htmlFor="dogmatic" className="text-white form-check-label fw-normal">Dogmatic</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Safe" name="openness-traits" id="safe" className="me-2 form-check-input" /><label htmlFor="safe" className="text-white form-check-label fw-normal">Safe</label>
                    </div>
                    <div>
                      <input type="checkbox" aria-label="Unrelenting" name="openness-traits" id="Unrelenting" className="me-2 form-check-input" /><label htmlFor="Unrelenting" className="text-white form-check-label fw-normal">Unrelenting</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-5 border-bottom">
                <h3 className="text-white fw-bold mb-3 mt-5">Extroversion</h3>
                <p className="text-light">The trait is marked by pronounced engagement with the external world. Extroverts enjoy interacting with people, and are often perceived as full of energy. They tend to be enthusiastic, action-oriented individuals. They possess high group visibility, like to talk, and assert themselves.  Introverts have lower social engagement and energy levels than extroverts. They tend to seem quiet, low-key, deliberate, and less involved in the social world.</p>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Is your character extroverted or introverted? This will change the abilities and traits available.</h5>
                  <div className="d-flex">
                    <div className="custom-control form-check me-3">
                      <input type="radio" aria-label="Extroverted" name="extroversion" id="Extroverted" className="me-2 form-check-input" defaultChecked /><label htmlFor="Extroverted" className="text-white form-check-label fw-normal">Extroverted</label>
                    </div>
                    <div className="custom-control form-check">
                      <input type="radio" aria-label="Introverted" name="extroversion" id="Introverted" className="me-2 form-check-input" /><label htmlFor="Introverted" className="text-white form-check-label fw-normal">Introverted</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Passive Abilities (10 Points Each)</h5>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="social butterfly" id="social-butterfly" className="form-check-input" />
                    <label htmlFor="social-butterfly" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Social Butterfly</h6>
                      <p className="text-light mb-0">Recharge your HP meters through social events and interactions.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Life of the Party" id="life-party" className="form-check-input" />
                    <label htmlFor="life-party" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Life of the Party</h6>
                      <p className="text-light mb-0">Receive a bonus to social skills and charm.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Friends in All Places" id="friends" className="form-check-input" />
                    <label htmlFor="friends" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Friends in [All] Places</h6>
                      <p className="text-light mb-0">You have a large network of friends in a variety of places but few close friends. It's also quite a bit easier for you to make new friends.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Empassioned Leadership" id="empassioned" className="form-check-input" />
                    <label htmlFor="empassioned" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Empassioned Leadership</h6>
                      <p className="text-light mb-0">If you have time to give a speech, your party will get -1 to their first role in that conflict.</p>
                    </label>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Character Traits</h5>
                  <div className="d-flex flex-wrap">
                    <div className="custom-control custom-checkbox me-3 mb-3">
                      <input type="checkbox" aria-label="Optimist" name="extroversion-traits" id="Optimist" className="me-2 form-check-input" /><label htmlFor="Optimist" className="text-white form-check-label fw-normal">Optimist</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Flamboyant" name="extroversion-traits" id="Flamboyant" className="me-2 form-check-input" /><label htmlFor="Flamboyant" className="text-white form-check-label fw-normal">Flamboyant</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Talkative" name="extroversion-traits" id="Talkative" className="me-2 form-check-input" /><label htmlFor="Talkative" className="text-white form-check-label fw-normal">Talkative</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Bubbly" name="extroversion-traits" id="Bubbly" className="me-2 form-check-input" /><label htmlFor="Bubbly" className="text-white form-check-label fw-normal">Bubbly</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Gregarious" name="extroversion-traits" id="Gregarious" className="me-2 form-check-input" /><label htmlFor="Gregarious" className="text-white form-check-label fw-normal">Gregarious</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Enthusiastic" name="extroversion-traits" id="Enthusiastic" className="me-2 form-check-input" /><label htmlFor="Enthusiastic" className="text-white form-check-label fw-normal">Enthusiastic</label>
                    </div>
                    <div>
                      <input type="checkbox" aria-label="Asserting" name="extroversion-traits" id="Asserting" className="me-2 form-check-input" /><label htmlFor="Asserting" className="text-white form-check-label fw-normal">Asserting</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-5 border-bottom">
                <h3 className="text-white fw-bold mb-3 mt-5">Agreeableness</h3>
                <p className="text-light">The agreeableness trait reflects individual differences in general concern for social harmony. Agreeable/selfess individuals value getting along with others. They are generally considerate, kind, generous, trusting and trustworthy, helpful, and willing to compromise their interests with others. Agreeable people also have an optimistic view of human nature. Disagreeable/selfish individuals place self-interest above getting along with others.</p>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Is your character selfless or selfish? This will change the abilities and traits available.</h5>
                  <div className="d-flex">
                    <div className="custom-control form-check me-3">
                      <input type="radio" aria-label="Selfless" name="selflessness" id="Selfless" className="me-2 form-check-input" defaultChecked /><label htmlFor="Selfless" className="text-white form-check-label fw-normal">Selfless</label>
                    </div>
                    <div className="custom-control form-check">
                      <input type="radio" aria-label="Selfish" name="selflessness" id="Selfish" className="me-2 form-check-input" /><label htmlFor="Selfish" className="text-white form-check-label fw-normal">Selfish</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Passive Abilities (10 Points Each)</h5>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="social butterfly" id="kinship" className="form-check-input" />
                    <label htmlFor="kinship" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Kinship</h6>
                      <p className="text-light mb-0">You care for your people and they care for you. Or so it feels. Any time you sacrifice for the party you can receive emotional HP back. Sacrificing can include giving/buying gifts, taking hits for other people, putting yourself in a precarious situation to help a team mate, etc.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Lead by Doing" id="lead-by-doing" className="form-check-input" />
                    <label htmlFor="lead-by-doing" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Lead By Doing</h6>
                      <p className="text-light mb-0">When you lead the charge, take on risk for the group or put others before you in a conflict situation, subtract 1 to everyone else's rolls.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Minimalism" id="Minimalism" className="form-check-input" />
                    <label htmlFor="Minimalism" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Minimalism</h6>
                      <p className="text-light mb-0">You have removed yourself from material attachment. You can survive off very little and have no issues with giving up valuable items. You have the ability to find use in reusable items, take no emotional damage from poor accommodations, rations or any other quality of life items.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Empassioned Leadership" id="empassioned" className="form-check-input" />
                    <label htmlFor="empassioned" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Empassioned Leadership</h6>
                      <p className="text-light mb-0">If you have time to give a speech, your party will get -1 to their first role in that conflict.</p>
                    </label>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Character Traits</h5>
                  <div className="d-flex flex-wrap">
                    <div className="custom-control custom-checkbox me-3 mb-3">
                      <input type="checkbox" aria-label="Optimist" name="extroversion-traits" id="Optimist" className="me-2 form-check-input" /><label htmlFor="Optimist" className="text-white form-check-label fw-normal">Optimist</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Flamboyant" name="extroversion-traits" id="Flamboyant" className="me-2 form-check-input" /><label htmlFor="Flamboyant" className="text-white form-check-label fw-normal">Flamboyant</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Talkative" name="extroversion-traits" id="Talkative" className="me-2 form-check-input" /><label htmlFor="Talkative" className="text-white form-check-label fw-normal">Talkative</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Bubbly" name="extroversion-traits" id="Bubbly" className="me-2 form-check-input" /><label htmlFor="Bubbly" className="text-white form-check-label fw-normal">Bubbly</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Gregarious" name="extroversion-traits" id="Gregarious" className="me-2 form-check-input" /><label htmlFor="Gregarious" className="text-white form-check-label fw-normal">Gregarious</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Enthusiastic" name="extroversion-traits" id="Enthusiastic" className="me-2 form-check-input" /><label htmlFor="Enthusiastic" className="text-white form-check-label fw-normal">Enthusiastic</label>
                    </div>
                    <div>
                      <input type="checkbox" aria-label="Asserting" name="extroversion-traits" id="Asserting" className="me-2 form-check-input" /><label htmlFor="Asserting" className="text-white form-check-label fw-normal">Asserting</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                <h3 className="text-white fw-bold mb-3 mt-5">Neuroticism</h3>
                <p className="text-light">The trait is marked by pronounced engagement with the external world. Extroverts enjoy interacting with people, and are often perceived as full of energy. They tend to be enthusiastic, action-oriented individuals. They possess high group visibility, like to talk, and assert themselves.  Introverts have lower social engagement and energy levels than extroverts. They tend to seem quiet, low-key, deliberate, and less involved in the social world.</p>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Is your character extroverted or introverted? This will change the abilities and traits available.</h5>
                  <div className="d-flex">
                    <div className="custom-control form-check me-3">
                      <input type="radio" aria-label="Extroverted" name="extroversion" id="Extroverted" className="me-2 form-check-input" defaultChecked /><label htmlFor="Extroverted" className="text-white form-check-label fw-normal">Extroverted</label>
                    </div>
                    <div className="custom-control form-check">
                      <input type="radio" aria-label="Introverted" name="extroversion" id="Introverted" className="me-2 form-check-input" /><label htmlFor="Introverted" className="text-white form-check-label fw-normal">Introverted</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Passive Abilities (10 Points Each)</h5>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="social butterfly" id="social-butterfly" className="form-check-input" />
                    <label htmlFor="social-butterfly" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Social Butterfly</h6>
                      <p className="text-light mb-0">Recharge your HP meters through social events and interactions.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Life of the Party" id="life-party" className="form-check-input" />
                    <label htmlFor="life-party" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Life of the Party</h6>
                      <p className="text-light mb-0">Receive a bonus to social skills and charm.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Friends in All Places" id="friends" className="form-check-input" />
                    <label htmlFor="friends" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Friends in [All] Places</h6>
                      <p className="text-light mb-0">You have a large network of friends in a variety of places but few close friends. It's also quite a bit easier for you to make new friends.</p>
                    </label>
                  </div>
                  <div className="radio-card d-flex align-items-center p-3 mb-3">
                    <input type="checkbox" aria-label="Empassioned Leadership" id="empassioned" className="form-check-input" />
                    <label htmlFor="empassioned" className="text-white form-check-label fw-normal p-3 w-100">
                      <h6 className="text-white fw-bold">Empassioned Leadership</h6>
                      <p className="text-light mb-0">If you have time to give a speech, your party will get -1 to their first role in that conflict.</p>
                    </label>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold text-white mb-4 mt-5">Character Traits</h5>
                  <div className="d-flex flex-wrap">
                    <div className="custom-control custom-checkbox me-3 mb-3">
                      <input type="checkbox" aria-label="Optimist" name="extroversion-traits" id="Optimist" className="me-2 form-check-input" /><label htmlFor="Optimist" className="text-white form-check-label fw-normal">Optimist</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Flamboyant" name="extroversion-traits" id="Flamboyant" className="me-2 form-check-input" /><label htmlFor="Flamboyant" className="text-white form-check-label fw-normal">Flamboyant</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Talkative" name="extroversion-traits" id="Talkative" className="me-2 form-check-input" /><label htmlFor="Talkative" className="text-white form-check-label fw-normal">Talkative</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Bubbly" name="extroversion-traits" id="Bubbly" className="me-2 form-check-input" /><label htmlFor="Bubbly" className="text-white form-check-label fw-normal">Bubbly</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Gregarious" name="extroversion-traits" id="Gregarious" className="me-2 form-check-input" /><label htmlFor="Gregarious" className="text-white form-check-label fw-normal">Gregarious</label>
                    </div>
                    <div className="custom-control custom-checkbox me-3">
                      <input type="checkbox" aria-label="Enthusiastic" name="extroversion-traits" id="Enthusiastic" className="me-2 form-check-input" /><label htmlFor="Enthusiastic" className="text-white form-check-label fw-normal">Enthusiastic</label>
                    </div>
                    <div>
                      <input type="checkbox" aria-label="Asserting" name="extroversion-traits" id="Asserting" className="me-2 form-check-input" /><label htmlFor="Asserting" className="text-white form-check-label fw-normal">Asserting</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="p-4 bg-lighter point-calculator">
                <h6 className="text-white fw-bold">Total Points Calculator</h6>
                <h6 className="text-white"><span className="utilized">0</span> / 150 Utilized</h6>
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
}
