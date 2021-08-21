const Data = {
    "PhysicalData": [
        {
            _id: "physCharName",
            DataType: "Text",
            Name: "Character Name",
            Description: "Name of your character",
            Args: {
                DefaultValue: "",
                IsNumber: false,
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
            }
        },
        {
            _id: "physSpecies",
            DataType: "Select",
            Name: "Species",
            Description: "Species of your character",
            Args: [
                {_id: "speciesOptHuman", Value: "Human"},
            ]
        },
        {
            _id: "physAge",
            DataType: "Select",
            Name: "Age",
            Description: "Age of your character",
            Args: [
                {_id: "ageOptInfant", Value: "Infant"},
                {_id: "ageOptChild", Value: "Child"},
                {_id: "ageOptTeenager", Value: "Teenager"},
                {_id: "ageOptYoungAdult", Value: "Young Adult"},
                {_id: "ageOptAdult", Value: "Adult"},
                {_id: "ageOptOlderAdult", Value: "Older Adult"},
                {_id: "ageOptSenior", Value: "Senior"},
            ]
        },
        {
            _id: "physGender",
            DataType: "Select",
            Name: "Gender",
            Description: "Gender of your character",
            Args: [
                {_id: "genderOptFemale", Value: "Female"},
                {_id: "genderOptMale", Value: "Male"},
                {_id: "genderOptNonBinary", Value: "Non-binary"},
            ]
        },
        {
            _id: "physHairColor",
            DataType: "Select",
            Name: "Hair Color",
            Description: "Hair Color of your character",
            Args: [
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
        },
        {
            _id: "physEyeColor",
            DataType: "Select",
            Name: "Eye Color",
            Description: "Eye Color of your character",
            Args: [
                {_id: "eyeColorOptBlack", Value: "Black"},
                {_id: "eyeColorOptBlue", Value: "Blue"},
                {_id: "eyeColorOptBrown", Value: "Brown"},
                {_id: "eyeColorOptGreen", Value: "Green"},
                {_id: "eyeColorOptGrey", Value: "Grey"},
            ]
        },
        {
            _id: "physHeight",
            DataType: "Select",
            Name: "Height",
            Description: "Height of your character",
            Args: [
                {_id: "heightOptDwarf", Value: "Dwarf"},
                {_id: "heightOptShort", Value: "Short"},
                {_id: "heightOptAverage", Value: "Average Height"},
                {_id: "heightOptTall", Value: "Tall"},
                {_id: "heightOptGiant", Value: "Giant"},
            ]
        },
        {
            _id: "physBuild",
            DataType: "Select",
            Name: "Build",
            Description: "Build of your character",
            Args: [
                {_id: "buildOptEctomorph", Value: "Ectomorph"},
                {_id: "buildOptMesomorph", Value: "Mesomorph"},
                {_id: "buildOptEndomorph", Value: "Endomorph"},
            ]
        },
        {
            _id: "physWealth",
            DataType: "Select",
            Name: "Wealth",
            Description: "Wealth of your character",
            Args: [
                {_id: "wealthOptHomeless", Value: "Homeless"},
                {_id: "wealthOptLower", Value: "Lower class"},
                {_id: "wealthOptMiddle", Value: "Middle class"},
                {_id: "wealthOptUpper", Value: "Upper class"},
                {_id: "wealthOptRuling", Value: "Ruling class"},
            ]
        }
    ]
};

module.exports = Data;