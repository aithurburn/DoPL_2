//Demographic questionnaire
var genderOptions = ["(1) <br><br> Female ",
    "(2) <br><br> Male ",
    "(3) <br><br> Gender Non-Binary",
    "(4) <br><br> Trans Male",
    "(5) <br><br> Trans Female",
    "(6) <br><br> Prefer not to respond "
];

var ethnicityOptions = ["(1) <br><br> White ",
    "(2) <br><br> Mixed <br> or <br> Multi-ethnic ",
    "(3) <br><br> Asian <br> or <br> Asian Scottish <br> or <br> Asian British",
    "(4) <br><br> African",
    "(5) <br><br> Caribbean <br> or <br> Black",
    "(6) <br><br> Arab ",
    "(7) <br><br> Other ethnicity",
    "(8) <br><br> Prefer not <br> to respond"
];

var ethnicOriginOptions = ["(1) <br><br> Scottish",
    "(2) <br><br> English",
    "(3) <br><br> European",
    "(4) <br><br> Latin <br> American",
    "(5) <br><br> Asian",
    "(6) <br><br> Arab",
    "(7) <br><br> African",
    "(8) <br><br> Other",
    "(9) <br><br> Prefer not <br> to respond"
];

var educationOptions = ["(1) <br><br> Primary School ",
    "(2) <br><br> GCSEs <br> or <br> Equivalent",
    "(3) <br><br> A-Levels <br> or <br> Equivalent",
    "(4) <br><br> University <br> Undergraduate <br> Program",
    "(5) <br><br> University <br> Post-Graduate <br> Program",
    "(6) <br><br> Doctoral <br> Degree",
    "(7) <br><br> Prefer not <br> to respond"
];

//Sexual Risk-taking Behavior Inventory Options
var srtbLikelihoodOptions = ["(1) <br><br> Extremely <br> Unlikely ",
    "(2) <br><br> Moderately <br> Unlikely",
    "(3) <br><br> Somewhat <br> Unlikely",
    "(4) <br><br> Not <br> Sure",
    "(5) <br><br> Somewhat <br> Likely",
    "(6) <br><br> Moderately <br> Likely",
    "(7) <br><br> Extremely <br> Likely"
];

var srtbRiskOptions = ["(1) <br><br> Not at <br> all Risky",
    "(2) <br><br> Slightly <br> Risky",
    "(3) <br><br> Somewhat <br> Risky",
    "(4) <br><br> Moderately <br> Risky",
    "(5) <br><br> Risky",
    "(6) <br><br> Very <br> Risky",
    "(7) <br><br> Extremely <br> Risky"
];

var srtbBenefitOptions = ["(1) <br><br> No benefits <br> at all ",
    "(2) <br><br> Slight <br> Benefits",
    "(3) <br><br> Some <br> Benefits",
    "(4) <br><br> Moderate <br> Benefits",
    "(5) <br><br> More <br> Benefits",
    "(6) <br><br> Very <br> Benefits",
    "(7) <br><br> Great <br> Benefits"
];

var srtbFrequencyOptions = [
    "(1) <br><br> Never",
    "(2) <br><br> Seldom",
    "(3) <br><br> Once in <br> two-three months",
    "(4) <br><br> Once a month",
    "(5) <br><br> Once in a <br> week-two weeks",
    "(6) <br><br> Numerous <br> times a week",
    "(7) <br><br> Almost every day",
    "(8) <br><br> At least <br> once a day",
];

//Domianance, Prestige, and Leadership Options
var doplOptions = ["(1) <br><br> Strongly <br> disagree ",
    "(2) <br><br> Disagree",
    "(3) <br><br> Somewhat <br> disagree",
    "(4) <br><br> Somewhat <br> agree",
    "(5) <br><br> Agree",
    "(6) <br><br> Strongly <br> agree"
];

//UMS Options
var umsOptions = ["(1) <br><br> Not <br> Important <br> Me",
    "(2) <br><br> Of Little <br> Importance To Me",
    "(3) <br><br> Of Some <br> Importance To Me",
    "(4) <br><br> Important <br> To Me",
    "(5) <br><br> Very <br> Important To Me",
    "(6) <br><br> Extremely Important <br> To Me"
];

//Sexual Orientation Inventory Options
var soiOptionsa = ["(1) <br><br> 0",
    "(2) <br><br> 1",
    "(3) <br><br> 2",
    "(4) <br><br> 3",
    "(5) <br><br> 4",
    "(6) <br><br> 5-6",
    "(7) <br><br> 7-9",
    "(8) <br><br> 10-19",
    "(9) <br><br> 20 or more"
]

var soiOptionsb = [
    "(1)  <br> Strongly disagree",
    "(2)  <br> Moderately disagree",
    "(3)  <br> Disagree",
    "(4)  <br> Somewhat disagree",
    "(5)  <br> Neither agree nor disagree",
    "(6)  <br> Somewhat agree",
    "(7)  <br> Agree",
    "(8)  <br> Moderately agree",
    "(9)  <br> Strongly agree"
]

var soiOptionsc = [
    "(1)  <br>  Never ",
    "(2)  <br>  Very seldom",
    "(3)  <br>  About once every two or three months",
    "(4)  <br>  About once a month",
    "(5)  <br>  About once every two weeks",
    "(6)  <br>  About once a week",
    "(7)  <br>  Several times per week",
    "(8)  <br>  Nearly every day",
    "(9)  <br>  At least once a day"
]

var pniOptions = ["(1) <br><br> Not like <br> me at all",
    "(2) <br><br> Not like me",
    "(3) <br><br> Somewhat <br> like me",
    "(4) <br><br> Like <br> me",
    "(5) <br><br> Very much <br> like me"
];


var optionsChange = ["(1)", "(2)", "(3)", "(4)", "(5)"];

var fairnessOptions = ["(1) <br><br> Not fair <br> at all", "(2) <br><br> Somewhat <br> unfair", "(3) <br><br> Neither fair <br> nor <br> unfair", "(4) <br><br> Slightly <br> fair", "(5) <br><br> Very fair"]

var realismOptions = ["(1) <br><br> Strongly agree", "(2) <br><br> Agree", "(3) <br><br> Neither agree <br> nor <br> disagree", "(4) <br><br> Disagree", "(5) <br><br> Strongly disagree"];

var justificationOptions = ["(1) <br><br> Not justified <br> at all", "(2) <br><br> Somewhat <br> unjustified", "(3) <br><br> Neither justified <br> nor <br> unjustified", "(4) <br><br> Slightly <br> justified", "(5) <br><br> Very justified"];

var punishmentOptions = ["(1) <br><br> Should not <br> be punished", "(2) <br><br> Lightly punished", "(3) <br><br> Moderately punished", "(4) <br><br> Severely punished"];

var spiteOptions = ["(1) <br><br> Strongly disagree", "(2) <br><br> Moderately <br> disagree", "(3) <br><br> Neither agree <br> nor <br> disagree", "(4) <br><br> Moderately <br> agree", "(5) <br><br> Strongly agree"];

var sjsOptions = ["(1) <br><br> Strongly disagree", "(2) <br><br> Disagree", "(3) <br><br> Somewhat <br> disagree", "(4) <br><br> Somewhat <br> agree", "(5) <br><br> Agree", "(6) <br><br> Strongly <br> agree"];

var sessOptions = ["(1) <br><br> Agree", "(2) <br><br> Slightly <br> agree", "(3) <br><br> Neither agree <br> nor <br> disagree", "(4) <br><br> Slightly <br> disagree", "(5) <br><br> Disagree"];

var srpsOptions = ["(1) <br><br> Strongly <br> agree", "(2) <br><br> Agree", "(3) <br><br> Disagree", " (4) <br><br> Strongly <br> disagree"];

var srpsOptions2 = ["(1) <br><br> Your <br> partner", "(2) <br><br> Both <br> of you", "(3) <br><br> You"];