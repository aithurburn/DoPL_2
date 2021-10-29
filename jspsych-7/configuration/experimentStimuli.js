var contactNumber = (Math.floor((Math.random() * ((9999999 - 1000000) + 1))) + 1000000);

var genVar1 = ["he", "she"];

var genVar5 = ["He", "She"];

var genVar2 = ["him", "her"];

var genVar3 = ["his", "hers"];

var genVar4 = (genVar2[1] === "him") ? "himself" : "herself";

var nameBank1 = ["Alex", "Sam", "Jo", "Cameron", "Avery", "Sam", "Kai", "Cody", "Devin", "Dylan", "Cody", "Corey", "Kai", "Jae", "Sam", "Adrian", "Kellan", "Max", "Taylor", "Corey", "Jessie"];

var nameBank2 = ["Corey", "Kyle", "Ryan", "Taylor", "Jo", "Kam", "Cameron", "Jay", "Alex", "Jordan", "Kay", "Rudy", "Quinn", "Jaime"];
var nameBank3 = ["Blake", "Kyle", "Alex"];

//Demographic Stimuli
var ageStimulus = "What is your age?";

var genderStimulus = "What gender do you most closely identify with?";

var ethnicityStimulus = "What ethnicity do you most closely identify with?";

var ethnicOriginStimulus = "What best describes your ethnic origin or background?";

var educationStimulus = "What is the highest level of education you have attained so far?";

var realism = "This situation is realistic.";

//Scale Change
var scaleChangeStimulusOne = "You will now be presented with a series of statements, please be as truthful as possible. Please read each statement below and pay attention to the scale below each. Please confirm that you understand by selecting the number <u>1</u> below.";

var scaleChangeStimulusTwo = "Please note, the scale below each question is now about to change. Please confirm that you understand by selecting the number 2 below.";

var scaleChangeStimulusThree = "Please note, the scale below each question is now about to change. Please confirm that you understand by selecting the number 3 below.";

var scaleChangeStimulusFour = "Please note, the scale below each question is now about to change. Please confirm that you understand by selecting the number 4 below.";

var scaleChangeStimulusFive = "Please note, the scale below each question is now about to change. Please confirm that you understand by selecting the number 5 below.";

var vignetteScaleChange = "<p>Next you will be asked to read a number of short stories. At the end of each story there will be a question, please respond to the question as truthfully as possible. Please press 'Continue' or 'y' to proceed. If you choose not to, please press 'Do not continue' or 'n'. </p>";

//Instructions
var instructionsStimulus = "<p>Thank you for your interest in participating in our experiment. During this experiment you can input your responses using either your keyboard or mouse/touchpad.</p> <p>Below each question there will be a scale. Please enter the corresponding number in your numberpad on the keyboard or select with your mouse. If you wish to contact the experimenters of this study please record and use the number below in your correspondence.</p>" + "<u>" + contactNumber + "</u>" + "<p> Press any key to continue or select 'Begin Experiment' below. </p>"

var consentStimulus = "<p>This experiment is being conducted in JavaScript hosted on Pavlovia.org. Your anonymous data will be saved and stored securely on University of Edinburgh server. The collection of personal data will be kept to a minimum to ensure anonymity is maintained.</p>" + "<p>Please confirm that you have read and understood the participant information sheet and consent to participant in this experiment by pressing the 'Y' key. If you do not agree to the te;rms please indicate so by press the 'N' key.</p> <p> You may also use your mouse to select either 'Yes' or 'No' below </p>";

var debriefStimulus = "<p> This experiment had three goals. The first goal, we wanted to understand the relationship between vindictive behavior and (non)sexual behavior. We sought to contribute to our understanding of spiteful behavior outside of the traditional gaming tasks. </p><p> The second goal was to allow for a better understanding of spiteful behavior to allow for further experimentation and investigation of problematic social behaviors and sexuality. Finally, t;he experiment sought to further the findings from a previous experiment. </p><p> If you have any further questions or wish to withdraw your participation, please do not hesitate to contact the researchers. In your correspondence, please use only the unique number provided below. </p> " + "<u>" + contactNumber + "</u>" + "<br></br>" + "<div id = 'text' <p> Andrew Ithurburn: a.ithurburn@sms.ed.ac.uk <br> Dr. Adam Moore: amoore23@staffmail.ed.ac.uk <br> Thank you! Please press 'continue' to complete the study and return to Prolific Academic. </p> </div>";

//Dominance, Prestige, and Leadership Scale
var DoPL_1 = "I relish opportunities in which I can lead others.";
var DoPL_2 = "I enjoy bending others to my will.";
var DoPL_3 = "I try to control others rather than permit them to control me.";
var DoPL_4 = "I am willing to use aggressive tactics to get my way.";
var DoPL_5 = "I often share with others when I achieved something great.";
var DoPL_6 = "I have little interest in leading others.";
var DoPL_7 = "I feel sad if nobody recolonizes my unique talents and abilities.";
var DoPL_8 = "Success means being respected.";
var DoPL_9 = "When people challenge me I want to put them down hard.";
var DoPL_10 = "I want to twist others around my little finger.";
var DoPL_11 = "I feel conﬁdent when directing the activities of others.";
var DoPL_12 = "I am happy when I can present my achievements to others.";
var DoPL_13 = "I am often the leader.";
var DoPL_14 = "I avoid positions with responsibility over others.";
var DoPL_15 = "I often try to get my own way regardless of what others may want.";
var DoPL_16 = "Recognition from others.";
var DoPL_17 = "Be respected and admired by other people.";

//UMS
var UMS_1 = "Encounters with other people make me happy.";
var UMS_2 = "Engage in a lot of activities with other people.";
var UMS_3 = "Getting close to someone is the only thing that matters in life.";
var UMS_4 = "I go out of my way to meet people.";
var UMS_5 = "I like to fully immerse myself in a relationship.";
var UMS_6 = "I make a good leader.";
var UMS_7 = "I spend a lot of time visiting friends.";
var UMS_8 = "I try to be in the company of friends as much as possible.";
var UMS_9 = "I want to be able to share all the good and negative emotions in a relationship.";
var UMS_10 = "Often I would rather be alone than with a group of friends.";
var UMS_11 = "Recognition from others.";
var UMS_12 = "Be respected and admired by other people.";
var UMS_13 = "Have a close and intimate relationship with someone.";
var UMS_14 = "Give sympathy and love to other people.";
var UMS_15 = "Not being separated from the people I really care about.";

//Brief Pathological Narcissism Inventory
var npi_scale_instructions = "<p> For the next series of questions you will be presented with a statement.</p> <p> Please indicate how much you agree or relate to the statement with the scale provided below the statement.</p>"



var PNI_1 = "I can usually talk my way out of anything.";
var PNI_2 = "When people don't notice me, I start to feel bad about myself.";
var PNI_3 = "I often hide my needs for fear that others will see me as needy and dependent.";
var PNI_4 = "I can make anyone believe anything I want them to.";
var PNI_5 = "I get annoyed by people who are not interested in what I say or do.";
var PNI_6 = "I find it easy to manipulate people.";
var PNI_7 = "Sometimes I avoid people because I'm concerned that they'll disappoint me.";
var PNI_8 = "I typically get very angry when I'm unable to get what I want from others.";
var PNI_9 = "When others don't meet my expectations, I often feel ashamed about what I wanted.";
var PNI_10 = "I feel important when others rely on me.";
var PNI_11 = "I can read people like a book.";
var PNI_12 = "Sacrificing for others makes me the better person.";
var PNI_13 = "I often fantasize about accomplishing things that are probably beyond my means.";
var PNI_14 = "Sometimes I avoid people because I'm afraid they won't do what I want them to.";
var PNI_15 = "It's hard to show others the weaknesses I feel inside.";
var PNI_16 = "It's hard to feel good about myself unless I know other people admire me.";
var PNI_17 = "I often fantasize about being rewarded for my efforts.";
var PNI_18 = "I am preoccupied with thoughts and concerns that most people are not interested in me.";
var PNI_19 = "I like to have friends who rely on me because it makes me feel important.";
var PNI_20 = "Sometimes I avoid people because I'm concerned, they won't acknowledge what I do for them.";
var PNI_21 = "It's hard for me to feel good about myself unless I know other people like me.";
var PNI_22 = "It irritates me when people don't notice how good a person I am.";
var PNI_23 = "I will never be satisfied until I get all that I deserve.";
var PNI_24 = "I try to show what a good person I am through my sacrifices.";
var PNI_25 = "I often fantasize about performing heroic deeds.";
var PNI_26 = "I often fantasize about being recognized for my accomplishments.";
var PNI_27 = "I can't stand relying on other people because it makes me feel weak.";
var PNI_28 = "When others get a glimpse of my needs, I feel anxious and ashamed.";


//Sexual Orientation Inventory Revised
var SOI_1 = "With how many different partners have you had sex within the past 12 months? ";
var SOI_2 = "With how many different partners have you had sexual intercourse on one and only one occasion? ";
var SOI_3 = "With how many different partners have you had sexual intercourse without having an interest in a long-term committed relationship with this person? ";
var SOI_4 = "Sex without love is OK. ";
var SOI_5 = 'I can imagine myself being comfortable and enjoying "casual" sex with different partners.';
var SOI_6 = "I do not want to have sex with a person until I am sure that we will have a long-term, serious relationship. ";
var SOI_7 = "How often do you have fantasies about having sex with someone you are not in a committed romantic relationship with? ";
var SOI_8 = "How often do you experience sexual arousal when you are in contact with someone you are not in a committed romantic relationship with? ";
var SOI_9 = "In everyday life, how often do you have spontaneous fantasies about having sex with someone you have just met?";

//Sexual Risk-taking Behavior Scale
//Risk
var SRTB_Risk_1 = "How much risk in: <br> Oral sex";
var SRTB_Risk_2 = "How much risk in: <br> Casual sexual intercourse";
var SRTB_Risk_3 = "How much risk in: <br> Having sex with multiple partners";
var SRTB_Risk_4 = "How much risk in: <br> Dangerous masturbation (such as, auto-erotic suffixation) ";
var SRTB_Risk_5 = "How much risk in: <br> Anal sex without a condom";
var SRTB_Risk_6 = "How much risk in: <br> Sexual activity with multiple participants";
var SRTB_Risk_7 = "How much risk in: <br> Sexual activity involving violence which may lead to significant injury ";
var SRTB_Risk_8 = "How much risk in: <br> Sex under influence of substances (drugs/alcohol)";
var SRTB_Risk_9 = "How much risk in: <br> Sex with a new partner: <br> when his/her STD history is unknown and without using protection of any kind.";
var SRTB_Risk_10 = "How much risk in: <br> Sex with a new partner: <br> when his/her STD history is unknown, without using a condom, yet using birth control ";
var SRTB_Risk_11 = "How much risk in: <br> Sex with a new partner: <br> when you know he/she doesn't have history of STD and without using protection of any kind.";
var SRTB_Risk_12 = "How much risk in: <br> Sex with a new partner: <br> when you know he/she doesn't have history of STD,  without using a condom, yet using birth control";
var SRTB_Risk_13 = "How much risk in: <br> Uncommitted yet stable sexual relationship <br> when his/her STD history is unknown and without using protection of any kind.";
var SRTB_Risk_14 = "How much risk in: <br> Uncommitted yet stable sexual relationship <br> when his/her STD history is unknown, without using a condom, yet using birth control ";
var SRTB_Risk_15 = "How much risk in: <br> Uncommitted yet stable sexual relationship <br> when you know he/she doesn't have history of STD and without using protection of any kind.";
var SRTB_Risk_16 = "How much risk in: <br> Uncommitted yet stable sexual relationship <br> when you know he/she doesn't have history of STD,  without using a condom, yet using birth control";

//Likelihood
var SRTB_Likelihood_1 = "The likelihood of you: <br> Oral sex";
var SRTB_Likelihood_2 = "The likelihood of you: <br> Casual sexual intercourse";
var SRTB_Likelihood_3 = "The likelihood of you: <br> Having sex with multiple partners";
var SRTB_Likelihood_4 = "The likelihood of you: <br> Dangerous masturbation (such as, auto-erotic suffixation) ";
var SRTB_Likelihood_5 = "The likelihood of you: <br> Anal sex without a condom";
var SRTB_Likelihood_6 = "The likelihood of you: <br> Sexual activity with multiple participants";
var SRTB_Likelihood_7 = "The likelihood of you: <br> Sexual activity involving violence which may lead to significant injury ";
var SRTB_Likelihood_8 = "The likelihood of you: <br> Sex under influence of substances (drugs/alcohol)";
var SRTB_Likelihood_9 = "The likelihood of you: <br> Sex with a new partner: <br> when his/her STD history is unknown and without using protection of any kind.";
var SRTB_Likelihood_10 = "The likelihood of you: <br> Sex with a new partner: <br> when his/her STD history is unknown, without using a condom, yet using birth control ";
var SRTB_Likelihood_11 = "The likelihood of you: <br> Sex with a new partner: <br> when you know he/she doesn't have history of STD and without using protection of any kind.";
var SRTB_Likelihood_12 = "The likelihood of you: <br> Sex with a new partner: <br> when you know he/she doesn't have history of STD,  without using a condom, yet using birth control";
var SRTB_Likelihood_13 = "The likelihood of you: <br> Uncommitted yet stable sexual relationship <br> when his/her STD history is unknown and without using protection of any kind.";
var SRTB_Likelihood_14 = "The likelihood of you: <br> Uncommitted yet stable sexual relationship <br> when his/her STD history is unknown, without using a condom, yet using birth control ";
var SRTB_Likelihood_15 = "The likelihood of you: <br> Uncommitted yet stable sexual relationship <br> when you know he/she doesn't have history of STD and without using protection of any kind.";
var SRTB_Likelihood_16 = "The likelihood of you: <br> Uncommitted yet stable sexual relationship <br> when you know he/she doesn't have history of STD,  without using a condom, yet using birth control";

//Expected Benefits
var SRTB_Benefit_1 = "The benefit of: <br> Oral sex";
var SRTB_Benefit_2 = "The benefit of: <br> Casual sexual intercourse";
var SRTB_Benefit_3 = "The benefit of: <br> Having sex with multiple partners";
var SRTB_Benefit_4 = "The benefit of: <br> Dangerous masturbation (such as, auto-erotic suffixation) ";
var SRTB_Benefit_5 = "The benefit of: <br> Anal sex without a condom";
var SRTB_Benefit_6 = "The benefit of: <br> Sexual activity with multiple participants";
var SRTB_Benefit_7 = "The benefit of: <br> Sexual activity involving violence which may lead to significant injury ";
var SRTB_Benefit_8 = "The benefit of: <br> Sex under influence of substances (drugs/alcohol)";
var SRTB_Benefit_9 = "The benefit of: <br> Sex with a new partner: <br> when his/her STD history is unknown and without using protection of any kind.";
var SRTB_Benefit_10 = "The benefit of: <br> Sex with a new partner: <br> when his/her STD history is unknown, without using a condom, yet using birth control ";
var SRTB_Benefit_11 = "The benefit of: <br> Sex with a new partner: <br> when you know he/she doesn't have history of STD and without using protection of any kind.";
var SRTB_Benefit_12 = "The benefit of: <br> Sex with a new partner: <br> when you know he/she doesn't have history of STD,  without using a condom, yet using birth control";
var SRTB_Benefit_13 = "The benefit of: <br> Uncommitted yet stable sexual relationship <br> when his/her STD history is unknown and without using protection of any kind.";
var SRTB_Benefit_14 = "The benefit of: <br> Uncommitted yet stable sexual relationship <br> when his/her STD history is unknown, without using a condom, yet using birth control ";
var SRTB_Benefit_15 = "The benefit of: <br> Uncommitted yet stable sexual relationship <br> when you know he/she doesn't have history of STD and without using protection of any kind.";
var SRTB_Benefit_16 = "The benefit of: <br> Uncommitted yet stable sexual relationship <br> when you know he/she doesn't have history of STD,  without using a condom, yet using birth control";

//Frequency
var SRTB_Frequency_1 = "What is your frequency for: <br> Oral sex";
var SRTB_Frequency_2 = "What is your frequency for: <br> Casual sexual intercourse";
var SRTB_Frequency_3 = "What is your frequency for: <br> Having sex with multiple partners";
var SRTB_Frequency_4 = "What is your frequency for: <br> Dangerous masturbation (such as, auto-erotic suffixation) ";
var SRTB_Frequency_5 = "What is your frequency for: <br> Anal sex without a condom";
var SRTB_Frequency_6 = "What is your frequency for: <br> Sexual activity with multiple participants";
var SRTB_Frequency_7 = "What is your frequency for: <br> Sexual activity involving violence which may lead to significant injury ";
var SRTB_Frequency_8 = "What is your frequency for: <br> Sex under influence of substances (drugs/alcohol)";
var SRTB_Frequency_9 = "What is your frequency for: <br> Sex with a new partner: <br> when his/her STD history is unknown and without using protection of any kind.";
var SRTB_Frequency_10 = "What is your frequency for: <br> Sex with a new partner: <br> when his/her STD history is unknown, without using a condom, yet using birth control ";
var SRTB_Frequency_11 = "What is your frequency for: <br> Sex with a new partner: <br> when you know he/she doesn't have history of STD and without using protection of any kind.";
var SRTB_Frequency_12 = "What is your frequency for: <br> Sex with a new partner: <br> when you know he/she doesn't have history of STD,  without using a condom, yet using birth control";
var SRTB_Frequency_13 = "What is your frequency for: <br> Uncommitted yet stable sexual relationship <br> when his/her STD history is unknown and without using protection of any kind.";
var SRTB_Frequency_14 = "What is your frequency for: <br> Uncommitted yet stable sexual relationship <br> when his/her STD history is unknown, without using a condom, yet using birth control ";
var SRTB_Frequency_15 = "What is your frequency for: <br> Uncommitted yet stable sexual relationship <br> when you know he/she doesn't have history of STD and without using protection of any kind.";
var SRTB_Frequency_16 = "What is your frequency for: <br> Uncommitted yet stable sexual relationship <br> when you know he/she doesn't have history of STD,  without using a condom, yet using birth control";

//SRTB Scale Change
var srtb_change_1 = 'Your participation in this survey is anonymous and part of a research study. You may refuse to take part in the study or leave the study at any time. You may answer only part of the questions. For each of the following statements, please indicate the likelihood that you would engage in the described activity or behavior, if you were to find yourself in that situation. Provide a rating from "Extremely Unlikely" to "Extremely Likely". Please confirm th;at you understand this by selecting the number "1" below'

var srtb_change_2 = 'Your participation in this survey is anonymous and part of a research study. You may refuse to take part in the study or leave the study at any time. You may answer only part of the questions. For each of the following statements, please indicate how risky you perceive each situation.  Provide a rating from "Not at all Risky" to "Extremely Risky",  Please confirm that you understand this by selecting the number "2" below';

var srtb_change_3 = 'Your participation in this survey is anonymous and part of a research study. You may refuse to take part in the study or leave the study at any time. You may answer only part of the questions. For each of the following statements, please indicate how beneficial you perceive each situation. Provide a rating from "No benefits at all" to "Great benefits". Please confirm that you understand this by selecting the number "3" below';

var srtb_change_4 = 'Your participation in this survey is anonymous and part of a research study. You may refuse to take part in the study or leave the study at any time. You may answer only part of the questions. For each of the following statements, please indicate the frequency you participate in these activities/behaviors. Provide a rating from "Never" to "At least once a day". Please confirm that you understand this by selecting the number "4" below';