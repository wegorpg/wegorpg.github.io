const Data = {
    "PhysicalData": [
        {
            _id: "physCharPortrait",
            DataType: "Text",
            Name: "Character Portrait URL",
            Description: "Portrait of your character",
            Args: {
                DefaultValue: "",
                IsNumber: false,
                HideOnMGS: true,
            }
        },
        {
            _id: "physCharName",
            DataType: "Text",
            Name: "Character Name",
            Description: "Name of your character",
            Args: {
                DefaultValue: "",
                IsNumber: false,
                HideOnMGS: true,
            }
        },
        {
            _id: "physMaxPoints",
            DataType: "Text",
            Name: "Max Points",
            Description: "Maximum points of your character",
            Args: {
                DefaultValue: "150",
                IsNumber: true,
                HideOnMGS: true,
            }
        },
        {
            _id: "physSpecies",
            DataType: "Select",
            Name: "Species",
            Description: "Species of your character",
            Args: {
                Options: [
                    {_id: "speciesOptHuman", Value: "Human"},
                ]
            }
        },
        {
            _id: "physAge",
            DataType: "Select",
            Name: "Age",
            Description: "Age of your character",
            Args: {
                Options: [
                    {_id: "ageOptInfant", Value: "Infant"},
                    {_id: "ageOptChild", Value: "Child"},
                    {_id: "ageOptTeenager", Value: "Teenager"},
                    {_id: "ageOptYoungAdult", Value: "Young Adult"},
                    {_id: "ageOptAdult", Value: "Adult"},
                    {_id: "ageOptOlderAdult", Value: "Older Adult"},
                    {_id: "ageOptSenior", Value: "Senior"},
                ]
            }
        },
        {
            _id: "physGender",
            DataType: "Select",
            Name: "Gender",
            Description: "Gender of your character",
            Args: {
                Options: [
                    {_id: "genderOptFemale", Value: "Female"},
                    {_id: "genderOptMale", Value: "Male"},
                    {_id: "genderOptNonBinary", Value: "Non-binary"},
                ]
            }
        },
        {
            _id: "physHairColor",
            DataType: "Select",
            Name: "Hair Color",
            Description: "Hair Color of your character",
            Args: {
                Options: [
                    {_id: "hairColorOptBlack", Value: "Black"},
                    {_id: "hairColorOptBlonde", Value: "Blonde"},
                    {_id: "hairColorOptBlue", Value: "Blue"},
                    {_id: "hairColorOptBrown", Value: "Brown"},
                    {_id: "hairColorOptGreen", Value: "Green"},
                    {_id: "hairColorOptGrey", Value: "Grey"},
                    {_id: "hairColorOptOrange", Value: "Orange"},
                    {_id: "hairColorOptPurple", Value: "Purple"},
                    {_id: "hairColorOptRed", Value: "Red"},
                    {_id: "hairColorOptYellow", Value: "Yellow"},
                    {_id: "hairColorOptWhite", Value: "White"},
                    {_id: "hairColorOptOther", Value: "Other"},
                ]
            }
        },
        {
            _id: "physEyeColor",
            DataType: "Select",
            Name: "Eye Color",
            Description: "Eye Color of your character",
            Args: {
                Options: [
                    {_id: "eyeColorOptBlack", Value: "Black"},
                    {_id: "eyeColorOptBlue", Value: "Blue"},
                    {_id: "eyeColorOptBrown", Value: "Brown"},
                    {_id: "eyeColorOptGreen", Value: "Green"},
                    {_id: "eyeColorOptGrey", Value: "Grey"},
                ]
            }
        },
        {
            _id: "physHeight",
            DataType: "Select",
            Name: "Height",
            Description: "Height of your character",
            Args: {
                Options: [
                    {_id: "heightOptDwarf", Value: "Dwarf"},
                    {_id: "heightOptShort", Value: "Short"},
                    {_id: "heightOptAverage", Value: "Average Height"},
                    {_id: "heightOptTall", Value: "Tall"},
                    {_id: "heightOptGiant", Value: "Giant"},
                ]
            }
        },
        {
            _id: "physBuild",
            DataType: "Select",
            Name: "Build",
            Description: "Build of your character",
            Args: {
                Options: [
                    {_id: "buildOptEctomorph", Value: "Ectomorph"},
                    {_id: "buildOptMesomorph", Value: "Mesomorph"},
                    {_id: "buildOptEndomorph", Value: "Endomorph"},
                ]
            }
        },
        {
            _id: "physWealth",
            DataType: "Select",
            Name: "Wealth",
            Description: "Wealth of your character",
            Args: {
                Options: [
                    {_id: "wealthOptHomeless", Value: "Homeless"},
                    {_id: "wealthOptLower", Value: "Lower class"},
                    {_id: "wealthOptMiddle", Value: "Middle class"},
                    {_id: "wealthOptUpper", Value: "Upper class"},
                    {_id: "wealthOptRuling", Value: "Ruling class"},
                ]
            }
        }
    ],
    "PersonalityData": [
        {
            _id: "persOpenness",
            DataType: "Personality",
            Name: "Openness",
            Description: "Openness is a general appreciation for art, emotion, adventure, unusual ideas, imagination, curiosity, and variety of experience. People who are open to experience are intellectually curious, open to emotion, sensitive to beauty and willing to try new things. They tend to be, when compared to closed people, more creative and more aware of their feelings. They are also more likely to hold unconventional beliefs. High openness can be perceived as unpredictability or lack of focus, and more likely to engage in risky behavior or drug-taking. Moreover, individuals with high openness are said to pursue self-actualization specifically by seeking out intense, euphoric experiences. Conversely, those with low openness seek to gain fulfillment through perseverance and are characterized as pragmatic and data-driven—sometimes even perceived to be dogmatic and closed-minded.",
            Args: {
                Items: [
                    {
                        _id: "persOpenProgressive",
                        DataType: "Group",
                        Name: "Progressive",
                        Description: "Progressive",
                        Args: {
                            Items: [
                                {
                                    _id: "persOpenProgThinking",
                                    DataType: "Checkbox",
                                    Name: "Thinking on Your Feet",
                                    Description: "In surprise conflict situations, ones without preparation, roll twice on your first round and take the better of the two.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persOpenProgCareCat",
                                    DataType: "Checkbox",
                                    Name: "No! Care killed the Cat",
                                    Description: "And satisfaction brought it back! Go up a skill category for 3 rounds when taking risks in unfamiliar places.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persOpenProgProgressive",
                                    DataType: "Checkbox",
                                    Name: "Progressive",
                                    Description: "You're forward thinking, always ready for change and get along best with people who drive society forward. Progressives react positively to you.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persOpenProgRockNRolla",
                                    DataType: "Checkbox",
                                    Name: "Rock N' Rolla",
                                    Description: "Sex drugs and rock and roll!  By taking your mind off things, destressing and getting wild you're able to give yourself a break from the monotony.While this might drain other people, once per session you may gain a state of existence by having fun.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persOpenProgTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persOpenProgTraitsCreative",
                                                DataType: "Checkbox",
                                                Name: "Creative",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenProgTraitsCurious",
                                                DataType: "Checkbox",
                                                Name: "Curious",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenProgTraitsUnorthodox",
                                                DataType: "Checkbox",
                                                Name: "Unorthodox",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenProgTraitsUnpredictable",
                                                DataType: "Checkbox",
                                                Name: "Unpredictable",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenProgTraitsExperimental",
                                                DataType: "Checkbox",
                                                Name: "Experimental",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenProgTraitsRisky",
                                                DataType: "Checkbox",
                                                Name: "Risky",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    },
                    {
                        _id: "persOpenTraditional",
                        DataType: "Group",
                        Name: "Traditional",
                        Description: "Traditional",
                        Args: {
                            Items: [
                                {
                                    _id: "persOpenTradRoutinePrec",
                                    DataType: "Checkbox",
                                    Name: "Routine Precision",
                                    Description: "You thrive in routine! Any conflict where you use the same skill 3 times in a row gives a bonus to your third roll and every third roll in the streak after.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persOpenTradCuriosityCat",
                                    DataType: "Checkbox",
                                    Name: "Curiosity Killed the Cat",
                                    Description: "Avoiding risky situations makes you feel safe, comfortable... efficient. When in a familiar setting the GM should offer you a bit extra information on your surroundings.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persOpenTradTraditional",
                                    DataType: "Checkbox",
                                    Name: "Traditional",
                                    Description: "You share the values of old and people who share those similar values fit in with you and vice versa. Reactions from conservative and traditionaly minded people should be positively affected.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persOpenTradDevout",
                                    DataType: "Checkbox",
                                    Name: "Devout",
                                    Description: "By retreating back into your faith you are able to gain back the stability you've been missing and regain your thoughts. Prolonged peaceful prayer from dogmatic religions, participating in religious practices and ceremony replenish your special, if you have more than one special, pick one to replenish. Can only be used once per session.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persOpenTradTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persOpenTradTraitsCeremonial",
                                                DataType: "Checkbox",
                                                Name: "Ceremonial",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenTradTraitsConventional",
                                                DataType: "Checkbox",
                                                Name: "Conventional",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenTradTraitsDataDriven",
                                                DataType: "Checkbox",
                                                Name: "Data-Driven",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenTradTraitsDogmatic",
                                                DataType: "Checkbox",
                                                Name: "Dogmatic",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenTradTraitsSafe",
                                                DataType: "Checkbox",
                                                Name: "Safe",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persOpenTradTraitsUnrelenting",
                                                DataType: "Checkbox",
                                                Name: "Unrelenting",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    }
                ],
            }
        },
        {
            _id: "persConscientiousness",
            DataType: "Personality",
            Name: "Conscientiousness",
            Description: "Conscientiousness is a tendency to display self-discipline, act dutifully, and strive for achievement against measures or outside expectations. It is related to the way in which people control, regulate, and direct their impulses. High conscientiousness is often perceived as being stubborn and focused. Low conscientiousness is associated with flexibility and spontaneity, but can also appear as sloppiness and lack of reliability. High scores on conscientiousness indicate a preference for planned rather than spontaneous behavior. The average level of conscientiousness rises among young adults and then declines among older adults.",
            Args: {
                Items: [
                    {
                        _id: "persConsOrganized",
                        DataType: "Group",
                        Name: "Organized",
                        Description: "Organized",
                        Args: {
                            Items: [
                                {
                                    _id: "persConsOrgZealot",
                                    DataType: "Checkbox",
                                    Name: "Zealot",
                                    Description: "Driven, disciplined, and deliberate. You will take any and all measures to achieve your goals. When working towards a minor motivation take one less emotional and intellectual damage per round. Conflicts must be directly related to the motivation ie. If your motivation is to find your missing daughter you would take a reduction in damage if you were finding clues to her dissapperance but not if you were helping someone that would eventually reveal a clue.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persConsOrgNeat",
                                    DataType: "Checkbox",
                                    Name: "Neat",
                                    Description: "You're never absent minded so you you always have what you need. You never forget important items behind.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persConsOrgWhiteCollar",
                                    DataType: "Checkbox",
                                    Name: "White Collar Man",
                                    Description: "You lived a life that brought you across the higher echelons of society. Local businessmen, nobles, priests and politicians, you know your ways around them all and get a bonus during Emotional and Intellectual conflicts with them.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persConsOrgDiplomatic",
                                    DataType: "Checkbox",
                                    Name: "Diplomatic",
                                    Description: "You know how to hold back and bite your tongue, respond appropriately and listen when you need to. Receive a bonus when befriending someone.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persConsOrgTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persConsOrgTraitsDisicplined",
                                                DataType: "Checkbox",
                                                Name: "Disicplined",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsOrgTraitsDutiful",
                                                DataType: "Checkbox",
                                                Name: "Dutiful",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsOrgTraitsStubborn",
                                                DataType: "Checkbox",
                                                Name: "Stubborn",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsOrgTraitsFocused",
                                                DataType: "Checkbox",
                                                Name: "Focused",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsOrgTraitsAmbitious",
                                                DataType: "Checkbox",
                                                Name: "Ambitious",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsOrgTraitsDependable",
                                                DataType: "Checkbox",
                                                Name: "Dependable",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    },
                    {
                        _id: "persConsCareless",
                        DataType: "Group",
                        Name: "Careless",
                        Description: "Careless",
                        Args: {
                            Items: [
                                {
                                    _id: "persConsCareFreeSpirit",
                                    DataType: "Checkbox",
                                    Name: "Free Spirit",
                                    Description: "Go as you will, go as you please, a free spirit thrives in non traditional roles and environments. Reduce negative effects of being in unfamiliar spaces and situations. Not only that but things seem to just go your way by sheer luck and you should expect random luck to occur when you're exploring such situations.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persConsCareWithFlow",
                                    DataType: "Checkbox",
                                    Name: "Go With the Flow",
                                    Description: "You are used to making it up as you go and making due with what you got! Who cares if you lost your job or you're in a sticky situation. You are highly resistant to adverse situations.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persConsCareOnStreets",
                                    DataType: "Checkbox",
                                    Name: "On the Streets",
                                    Description: "You've got connections! All that time growing up with the wrong crowd on the wrong streets going the wrong way. Maybe you've moved on from that now but you can still reach out. You know how to find those seedy bars and shady connections. They also know how to find you from time to time.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persConsCareHakunamatata",
                                    DataType: "Checkbox",
                                    Name: "Hakunamatata",
                                    Description: "You've got a gang. Not a violent one, just a little one. A couple of pals, maybe stoner friends, or buds down at the pub. They might not be bad ass but they don't work so you can always call them in a pinch. They can be reasonably helpful but also are able to pick you up when you're down. If they are around, once per session they are able to pick you up when incapacitated.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persConsCareTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persConsCareTraitsFlexible",
                                                DataType: "Checkbox",
                                                Name: "Flexible",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsCareTraitsEasyGoing",
                                                DataType: "Checkbox",
                                                Name: "Easy Going",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsCareTraitsSpontaneous",
                                                DataType: "Checkbox",
                                                Name: "Spontaneous",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsCareTraitsAdaptable",
                                                DataType: "Checkbox",
                                                Name: "Adaptable",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsCareTraitsUnreliable",
                                                DataType: "Checkbox",
                                                Name: "Unreliable",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persConsCareTraitsLaidBack",
                                                DataType: "Checkbox",
                                                Name: "Laid Back",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    }
                ],
            }
        },
        {
            _id: "persExtroversion",
            DataType: "Personality",
            Name: "Extroversion",
            Description: "Extroert is characterized by breadth of activities (as opposed to depth), surgency from external activity/situations, and energy creation from external means. The trait is marked by pronounced engagement with the external world. Extraverts enjoy interacting with people, and are often perceived as full of energy. They tend to be enthusiastic, action-oriented individuals. They possess high group visibility, like to talk, and assert themselves. Introverts have lower social engagement and energy levels than extraverts. They tend to seem quiet, low-key, deliberate, and less involved in the social world. Their lack of social involvement should not be interpreted as shyness or depression; instead they are more independent of their social world than extraverts. Introverts need less stimulation, and more time alone than extraverts. This does not mean that they are unfriendly or antisocial; rather, they are reserved in social situations.",
            Args: {
                Items: [
                    {
                        _id: "persExtExtrovert",
                        DataType: "Group",
                        Name: "Extrovert",
                        Description: "Extrovert",
                        Args: {
                            Items: [
                                {
                                    _id: "persExtExtSocialButt",
                                    DataType: "Checkbox",
                                    Name: "Social Butterfly",
                                    Description: "You are one of those people that will go out on the night and make a dozen new friends. Your character has the ability to befriend random people and strangers not in direct opposition to you. NPC's should react positively to you after a reasonable amount of time socialising with them.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persExtExtLifeParty",
                                    DataType: "Checkbox",
                                    Name: "Life of the Party",
                                    Description: "Receive a bonus to social skills and charm when partying or in party settings.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persExtExtFriendPlaces",
                                    DataType: "Checkbox",
                                    Name: "Friends in [all] Places",
                                    Description: "You have a large network of friends in a variety of places. They are typically people who would like to help you if they can, but aren't close enough to make large sacrifices for your goals. The GM will rule on what is reasonable.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persExtExtEmpassionedLead",
                                    DataType: "Checkbox",
                                    Name: "Empassioned Leadership",
                                    Description: "If you have time to give a speech, your entire party will get a bonus to their first role in the conflict immediately following.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persExtExtTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persExtExtTraitsOptimist",
                                                DataType: "Checkbox",
                                                Name: "Optimist",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtExtTraitsFlamboyant",
                                                DataType: "Checkbox",
                                                Name: "Flamboyant",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtExtTraitsTalkative",
                                                DataType: "Checkbox",
                                                Name: "Talkative",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtExtTraitsBubbly",
                                                DataType: "Checkbox",
                                                Name: "Bubbly",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtExtTraitsGregarious",
                                                DataType: "Checkbox",
                                                Name: "Gregarious",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtExtTraitsEnthusiastic",
                                                DataType: "Checkbox",
                                                Name: "Enthusiastic",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtExtTraitsAssertive",
                                                DataType: "Checkbox",
                                                Name: "Assertive",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    },
                    {
                        _id: "persExtIntrovert",
                        DataType: "Group",
                        Name: "Introvert",
                        Description: "Introvert",
                        Args: {
                            Items: [
                                {
                                    _id: "persExtIntPeaceSolitude",
                                    DataType: "Checkbox",
                                    Name: "Peace in Solitude",
                                    Description: "By taking time for yourself, through things like mediation, solitude or other solo activities that are calm and peaceful, you are able to recharge. Once per session you can go up a state of existence if your character is able to find a few hours of peaceful time to themself.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persExtIntPenMighty",
                                    DataType: "Checkbox",
                                    Name: "The Pen is Mighty",
                                    Description: "Receive a bonus to any written social interactions , this can be letters, texts, prepared speeches or dialogue.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persExtIntFriendsClose",
                                    DataType: "Checkbox",
                                    Name: "Keep your friends close",
                                    Description: "You have a small tight nit group of friends that are very loyal. They often have a single skill that can be useful and called upon when needed.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persExtIntFadeBack",
                                    DataType: "Checkbox",
                                    Name: "Fade to the back",
                                    Description: "Through your reserved demeanor and low profile you tend to blend into crowds. Get a bonus when hiding, losing a tail, avoiding being seen, and other such events when in a crowd or social function.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persExtIntTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persExtIntTraitsQuiet",
                                                DataType: "Checkbox",
                                                Name: "Quiet",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtIntTraitsReserved",
                                                DataType: "Checkbox",
                                                Name: "Reserved",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtIntTraitsShy",
                                                DataType: "Checkbox",
                                                Name: "Shy",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtIntTraitsAnalytical",
                                                DataType: "Checkbox",
                                                Name: "Analytical",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtIntTraitsIndependent",
                                                DataType: "Checkbox",
                                                Name: "Independent",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persExtIntTraitsReflective",
                                                DataType: "Checkbox",
                                                Name: "Reflective",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    }
                ],
            }
        },
        {
            _id: "persAgreeableness",
            DataType: "Personality",
            Name: "Agreeableness",
            Description: "The agreeableness trait reflects individual differences in general concern for social harmony. Agreeable/selfess individuals value getting along with others. They are generally considerate, kind, generous, trusting and trustworthy, helpful, and willing to compromise their interests with others. Agreeable people also have an optimistic view of human nature. Disagreeable/selfish individuals place self-interest above getting along with others. They are generally unconcerned with others' well-being, and are less likely to extend themselves for other people. Sometimes their skepticism about others' motives causes them to be suspicious, unfriendly, and uncooperative. Low agreeableness personalities are often competitive or challenging people, which can be seen as argumentative or untrustworthy.",
            Args: {
                Items: [
                    {
                        _id: "persAgreSelfless",
                        DataType: "Group",
                        Name: "Selfless",
                        Description: "Selfless",
                        Args: {
                            Items: [
                                {
                                    _id: "persAgreSelfKinship",
                                    DataType: "Checkbox",
                                    Name: "Kinship",
                                    Description: "You care for your people and they care for you. Or so it feels. Any big sacrifice for the party results in you gaining a state of existence. This sacrifice must be significant to the character and the GM has the final verdict. Sacrificing can including giving/buying gifts, taking hits for other people, putting yourself in a pricarious situation to help a team mate etc etc.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persAgreSelfLeadDoing",
                                    DataType: "Checkbox",
                                    Name: "Lead by doing",
                                    Description: "When you lead the charge, take on risk for the group or put others before you in a conflict situation, everyone in the party receives a bonus, if you drop a state of existence, for one round.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persAgreSelfMinimalism",
                                    DataType: "Checkbox",
                                    Name: "Minimalism",
                                    Description: "You have removed yourself from material attachment. You can survive off very little and have no issues with giving up valuable items. You have the ability to find use in reusable items, take no emotional damage from poor accommodations, rations or any other quality of life items.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persAgreSelfGoodPeople",
                                    DataType: "Checkbox",
                                    Name: "The good in people",
                                    Description: "You believe people are good by nature and  are willing to trust them easily.  Take intellectual damage when trusting someone doesn't work in your favor but gain 1 XP.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persAgreSelfTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persAgreSelfTraitsTrusting",
                                                DataType: "Checkbox",
                                                Name: "Trusting",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelfTraitsStraightforward",
                                                DataType: "Checkbox",
                                                Name: "Straightforward",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelfTraitsModest",
                                                DataType: "Checkbox",
                                                Name: "Modest",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelfTraitsAltruistic",
                                                DataType: "Checkbox",
                                                Name: "Altruistic",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelfTraitsCompliant",
                                                DataType: "Checkbox",
                                                Name: "Compliant",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelfTraitsTenderMindedness",
                                                DataType: "Checkbox",
                                                Name: "Tender-Mindedness",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    },
                    {
                        _id: "persAgreSelfish",
                        DataType: "Group",
                        Name: "Selfish",
                        Description: "Selfish",
                        Args: {
                            Items: [
                                {
                                    _id: "persAgreSelNoRemorse",
                                    DataType: "Checkbox",
                                    Name: "Kill; No Remorse",
                                    Description: "Death has very little effect on you. Take no Emotional damage for killing or people dying near you.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persAgreSelMachevellian",
                                    DataType: "Checkbox",
                                    Name: "Machevellian Tactics",
                                    Description: "You'll do whatever it takes to get to your goals. You have no remorse when manipulating people to your bidding. Use and abuse people without receiving any emotional damage.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persAgreSelMaterialism",
                                    DataType: "Checkbox",
                                    Name: "Materialism",
                                    Description: "Your desire for the material world is never ending! You derive great pleasure from acquiring things of value. From that you have a knack for making money, bartering and finding a good deal. Receive a bonus when involved in commerce conflict resolutions.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persAgreSelNarcisism",
                                    DataType: "Checkbox",
                                    Name: "Narcisism",
                                    Description: "You are so self absorbed you just know you're better than everyone else, and you look it too! Get a bonus to physical appearance and sex appeal. Reduce the difficulty of charming someone through appearance by 2.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persAgreSelTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persAgreSelTraitsCynical",
                                                DataType: "Checkbox",
                                                Name: "Cynical",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelTraitsDeceitful",
                                                DataType: "Checkbox",
                                                Name: "Deceitful",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelTraitsConceited",
                                                DataType: "Checkbox",
                                                Name: "Conceited",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelTraitsGreedy",
                                                DataType: "Checkbox",
                                                Name: "Greedy",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelTraitsAntagonistic",
                                                DataType: "Checkbox",
                                                Name: "Antagonistic",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persAgreSelTraitsToughMindedness",
                                                DataType: "Checkbox",
                                                Name: "Tough-Mindedness",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    }
                ],
            }
        },
        {
            _id: "persNeuroticism",
            DataType: "Personality",
            Name: "Neuroticism",
            Description: "Neuroticism is the tendency to experience negative emotions, such as anger, anxiety, or depression. It is sometimes called emotional instability, or is reversed and referred to as emotional stability. Those who score high in neuroticism are emotionally reactive and vulnerable to stress, also tending to be flippant in the way they express emotion. They are more likely to interpret ordinary situations as threatening, and minor frustrations as hopelessly difficult. Their negative emotional reactions tend to persist for unusually long periods of time, which means they are often in a bad mood. At the other end of the scale, individuals who score low in neuroticism are less easily upset and are less emotionally reactive. They tend to be calm, emotionally stable, and free from persistent negative feelings. Freedom from negative feelings does not mean that low-scorers experience a lot of positive feelings.",
            Args: {
                Items: [
                    {
                        _id: "persNeurSensitive",
                        DataType: "Group",
                        Name: "Sensitive",
                        Description: "Sensitive",
                        Args: {
                            Items: [
                                {
                                    _id: "persNeurSensRiskyBusiness",
                                    DataType: "Checkbox",
                                    Name: "No Risky Business",
                                    Description: "If the player has some time to think then the GM should offer a small warning if the player is about to enter a risky situation.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persNeurSensNoGhosts",
                                    DataType: "Checkbox",
                                    Name: "I don't believe in no ghosts",
                                    Description: "You are so anxious you have borderline trust issues, and so you don't believe a word anyone tells you without proof. Get a bonus when avoiding being deceived.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persNeurSensWhatForget",
                                    DataType: "Checkbox",
                                    Name: "What if I forget my...",
                                    Description: "You don't forget any items, but you also tend to bring too much.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persNeurSensBestCritic",
                                    DataType: "Checkbox",
                                    Name: "I'm my own best critic",
                                    Description: "Gain 1 xp when rolling a critical fail.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persNeurSensTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persNeurSensTraitsAnxious",
                                                DataType: "Checkbox",
                                                Name: "Anxious",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurSensTraitsCautious",
                                                DataType: "Checkbox",
                                                Name: "Cautious",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurSensTraitsPessimist",
                                                DataType: "Checkbox",
                                                Name: "Pessimist",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurSensTraitsDepressed",
                                                DataType: "Checkbox",
                                                Name: "Depressed",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurSensTraitsJealous",
                                                DataType: "Checkbox",
                                                Name: "Jealous",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurSensTraitsProviding",
                                                DataType: "Checkbox",
                                                Name: "Providing",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurSensTraitsSelfAware",
                                                DataType: "Checkbox",
                                                Name: "Self-Aware",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurSensTraitsRealistic",
                                                DataType: "Checkbox",
                                                Name: "Realistic",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    },
                    {
                        _id: "persNeurResilient",
                        DataType: "Group",
                        Name: "Resilient",
                        Description: "Resilient",
                        Args: {
                            Items: [
                                {
                                    _id: "persNeurResiFortuneBold",
                                    DataType: "Checkbox",
                                    Name: "Fortune Favors the bold",
                                    Description: "When this character charges forward into a situation bravely, not to be confused with recklessly, they get a bonus for one round. This could be running after captors of a kidnap situation, rushing towards a predator that has attacked a friend, or perhaps driving onto a battlefield to pick up the wounded.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persNeurResiGiftedLead",
                                    DataType: "Checkbox",
                                    Name: "Gifted leadership",
                                    Description: "Being calm under pressure means people look to you for leadership and guidance. Gain a bonus when trying to recruit NPC's to your cause.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persNeurResiNervesSteel",
                                    DataType: "Checkbox",
                                    Name: "Nerves of Steel",
                                    Description: "You don't crack under pressure! A person with this trait has a resistance to high tense situations or stress. Gain a bonus on the first round of conflict involving high emotional stakes or pressure.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persNeurResiEmotionalRock",
                                    DataType: "Checkbox",
                                    Name: "Emotional Rock",
                                    Description: "When reaching 0 in emotional health roll a 6 sided die. If it lands on odd, add that back to your HP and do not drop a state of existence.",
                                    Args: {
                                        IsDefaultChecked: false,
                                    }
                                },
                                {
                                    _id: "persNeurResiTraits",
                                    DataType: "Group",
                                    Name: "Traits",
                                    Description: "Traits",
                                    Args: {
                                        Items: [
                                            {
                                                _id: "persNeurResiTraitsCalm",
                                                DataType: "Checkbox",
                                                Name: "Calm",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurResiTraitsRealist",
                                                DataType: "Checkbox",
                                                Name: "Realist",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurResiTraitsStable",
                                                DataType: "Checkbox",
                                                Name: "Stable",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurResiTraitsResilient",
                                                DataType: "Checkbox",
                                                Name: "Resilient",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            },
                                            {
                                                _id: "persNeurResiTraitsUnintuitive",
                                                DataType: "Checkbox",
                                                Name: "Unintuitive",
                                                Description: "",
                                                Args: {
                                                    IsDefaultChecked: false,
                                                }
                                            }
                                        ],
                                    }
                                }
                            ],
                        }
                    }
                ],
            }
        }
    ]
};

module.exports = Data;