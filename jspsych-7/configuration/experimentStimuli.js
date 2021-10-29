var contactNumber = (Math.floor((Math.random() * ((9999999 - 1000000) + 1))) + 1000000);


//Demographic Stimuli
var ageStimulus = "What is your age?";

var genderStimulus = "What gender do you most closely identify with?";

var ethnicityStimulus = "What ethnicity do you most closely identify with?";

var ethnicOriginStimulus = "What best describes your ethnic origin or background?";

var educationStimulus = "What is the highest level of education you have attained so far?";

var realism = "This situation is realistic.";

//Scale Change
var scale_change_1 = "You will now be presented with a series of statements, please be as truthful as possible. Please read each statement below and pay attention to the scale below each. Please confirm that you understand by selecting the number <u>1</u> below.";

var scale_change_2 = "Please note, the scale below each question is now about to change. Please confirm that you understand by selecting the number 2 below.";

var scale_change_3 = "Please note, the scale below each question is now about to change. Please confirm that you understand by selecting the number 3 below.";

var scale_change_4 = "Please note, the scale below each question is now about to change. Please confirm that you understand by selecting the number 4 below.";

var scale_change_5 = "Please note, the scale below each question is now about to change. Please confirm that you understand by selecting the number 5 below.";

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




//DOSPERT
//Risk
var DOSPERT_Risk_1 = "Admitting that your tastes are different from those of your friends.";
var DOSPERT_Risk_2 = "Going camping in the wilderness, beyond the civilization of a campground.";
var DOSPERT_Risk_3 = "Betting a day’s income at the horse races.";
var DOSPERT_Risk_4 = "Buying an illegal drug for your own use.";
var DOSPERT_Risk_5 = "Cheating on an exam.";
var DOSPERT_Risk_6 = "Chasing a tornado or hurricane by car to take dramatic photos.";
var DOSPERT_Risk_7 = "Investing 10% of your annual income in a moderate growth mutual fund.";
var DOSPERT_Risk_8 = "Consuming five or more servings of alcohol in a single evening.";
var DOSPERT_Risk_9 = "Cheating by a significant amount on your income tax return.";
var DOSPERT_Risk_10 = "Disagreeing with your father on a major issue.";
var DOSPERT_Risk_11 = "Betting a day’s income at a high stake poker game.";
var DOSPERT_Risk_12 = "Having an affair with a married man or woman.";
var DOSPERT_Risk_13 = "Forging somebody’s signature.";
var DOSPERT_Risk_14 = "Passing off somebody else’s work as your own.";
var DOSPERT_Risk_15 = "Going on a vacation in a third-world country without prearranged travel and hotel accommodations.";
var DOSPERT_Risk_16 = "Arguing with a friend about an issue on which he or she has a very different opinion.";
var DOSPERT_Risk_17 = "Going down a ski run that is beyond your ability or closed.";
var DOSPERT_Risk_18 = "Investing 5% of your annual income in a very speculative stock.";
var DOSPERT_Risk_19 = "Approaching your boss to ask for a raise.";
var DOSPERT_Risk_20 = "Illegally copying a piece of software.";
var DOSPERT_Risk_21 = "Going whitewater rafting during rapid water flows in the spring.";
var DOSPERT_Risk_22 = "Betting a day’s income on the outcome of a sporting event (e.g. baseball, soccer, or football).";
var DOSPERT_Risk_23 = "Telling a friend if his or her significant other has made a pass at you.";
var DOSPERT_Risk_24 = "Investing 5% of your annual income in a conservative stock.";
var DOSPERT_Risk_25 = "Shoplifting a small item (e.g. a lipstick or a pen).";
var DOSPERT_Risk_26 = "Wearing provocative or unconventional clothes on occasion.";
var DOSPERT_Risk_27 = "Engaging in unprotected sex.";
var DOSPERT_Risk_28 = "Stealing an additional TV cable connection off the one you pay for.";
var DOSPERT_Risk_29 = "Not wearing a seatbelt when being a passenger in the front seat.";
var DOSPERT_Risk_30 = "Investing 10% of your annual income in government bonds (treasury bills).";
var DOSPERT_Risk_31 = "Periodically engaging in a dangerous sport (e.g. mountain climbing or sky diving).";
var DOSPERT_Risk_32 = "Not wearing a helmet when riding a motorcycle.";
var DOSPERT_Risk_33 = "Gambling a week’s income at a casino.";
var DOSPERT_Risk_34 = "Taking a job that you enjoy over one that is prestigious but less enjoyable.";
var DOSPERT_Risk_35 = "Defending an unpopular issue that you believe in at a social occasion.";
var DOSPERT_Risk_36 = "Exposing yourself to the sun without using sunscreen.";
var DOSPERT_Risk_37 = "Trying out bungee jumping at least once.";
var DOSPERT_Risk_38 = "Piloting your own small plane, if you could.";
var DOSPERT_Risk_39 = "Walking home alone at night in a somewhat unsafe area of town.";
var DOSPERT_Risk_40 = "Regularly eating high cholesterol foods.";

//Likelihood
var DOSPERT_likelihood_1 = "Admitting that your tastes are different from those of your friends.";
var DOSPERT_likelihood_2 = "Going camping in the wilderness, beyond the civilization of a campground.";
var DOSPERT_likelihood_3 = "Betting a day’s income at the horse races.";
var DOSPERT_likelihood_4 = "Buying an illegal drug for your own use.";
var DOSPERT_likelihood_5 = "Cheating on an exam.";
var DOSPERT_likelihood_6 = "Chasing a tornado or hurricane by car to take dramatic photos.";
var DOSPERT_likelihood_7 = "Investing 10% of your annual income in a moderate growth mutual fund.";
var DOSPERT_likelihood_8 = "Consuming five or more servings of alcohol in a single evening.";
var DOSPERT_likelihood_9 = "Cheating by a significant amount on your income tax return.";
var DOSPERT_likelihood_10 = "Disagreeing with your father on a major issue.";
var DOSPERT_likelihood_11 = "Betting a day’s income at a high stake poker game.";
var DOSPERT_likelihood_12 = "Having an affair with a married man or woman.";
var DOSPERT_likelihood_13 = "Forging somebody’s signature.";
var DOSPERT_likelihood_14 = "Passing off somebody else’s work as your own.";
var DOSPERT_likelihood_15 = "Going on a vacation in a third-world country without prearranged travel and hotel accommodations.";
var DOSPERT_likelihood_16 = "Arguing with a friend about an issue on which he or she has a very different opinion.";
var DOSPERT_likelihood_17 = "Going down a ski run that is beyond your ability or closed.";
var DOSPERT_likelihood_18 = "Investing 5% of your annual income in a very speculative stock.";
var DOSPERT_likelihood_19 = "Approaching your boss to ask for a raise.";
var DOSPERT_likelihood_20 = "Illegally copying a piece of software.";
var DOSPERT_likelihood_21 = "Going whitewater rafting during rapid water flows in the spring.";
var DOSPERT_likelihood_22 = "Betting a day’s income on the outcome of a sporting event (e.g. baseball, soccer, or football).";
var DOSPERT_likelihood_23 = "Telling a friend if his or her significant other has made a pass at you.";
var DOSPERT_likelihood_24 = "Investing 5% of your annual income in a conservative stock.";
var DOSPERT_likelihood_25 = "Shoplifting a small item (e.g. a lipstick or a pen).";
var DOSPERT_likelihood_26 = "Wearing provocative or unconventional clothes on occasion.";
var DOSPERT_likelihood_27 = "Engaging in unprotected sex.";
var DOSPERT_likelihood_28 = "Stealing an additional TV cable connection off the one you pay for.";
var DOSPERT_likelihood_29 = "Not wearing a seatbelt when being a passenger in the front seat.";
var DOSPERT_likelihood_30 = "Investing 10% of your annual income in government bonds (treasury bills).";
var DOSPERT_likelihood_31 = "Periodically engaging in a dangerous sport (e.g. mountain climbing or sky diving).";
var DOSPERT_likelihood_32 = "Not wearing a helmet when riding a motorcycle.";
var DOSPERT_likelihood_33 = "Gambling a week’s income at a casino.";
var DOSPERT_likelihood_34 = "Taking a job that you enjoy over one that is prestigious but less enjoyable.";
var DOSPERT_likelihood_35 = "Defending an unpopular issue that you believe in at a social occasion.";
var DOSPERT_likelihood_36 = "Exposing yourself to the sun without using sunscreen.";
var DOSPERT_likelihood_37 = "Trying out bungee jumping at least once.";
var DOSPERT_likelihood_38 = "Piloting your own small plane, if you could.";
var DOSPERT_likelihood_39 = "Walking home alone at night in a somewhat unsafe area of town.";
var DOSPERT_likelihood_40 = "Regularly eating high cholesterol foods.";

//Expected Benefits
var DOSPERT_benefits_1 = "Admitting that your tastes are different from those of your friends.";
var DOSPERT_benefits_2 = "Going camping in the wilderness, beyond the civilization of a campground.";
var DOSPERT_benefits_3 = "Betting a day’s income at the horse races.";
var DOSPERT_benefits_4 = "Buying an illegal drug for your own use.";
var DOSPERT_benefits_5 = "Cheating on an exam.";
var DOSPERT_benefits_6 = "Chasing a tornado or hurricane by car to take dramatic photos.";
var DOSPERT_benefits_7 = "Investing 10% of your annual income in a moderate growth mutual fund.";
var DOSPERT_benefits_8 = "Consuming five or more servings of alcohol in a single evening.";
var DOSPERT_benefits_9 = "Cheating by a significant amount on your income tax return.";
var DOSPERT_benefits_10 = "Disagreeing with your father on a major issue.";
var DOSPERT_benefits_11 = "Betting a day’s income at a high stake poker game.";
var DOSPERT_benefits_12 = "Having an affair with a married man or woman.";
var DOSPERT_benefits_13 = "Forging somebody’s signature.";
var DOSPERT_benefits_14 = "Passing off somebody else’s work as your own.";
var DOSPERT_benefits_15 = "Going on a vacation in a third-world country without prearranged travel and hotel accommodations.";
var DOSPERT_benefits_16 = "Arguing with a friend about an issue on which he or she has a very different opinion.";
var DOSPERT_benefits_17 = "Going down a ski run that is beyond your ability or closed.";
var DOSPERT_benefits_18 = "Investing 5% of your annual income in a very speculative stock.";
var DOSPERT_benefits_19 = "Approaching your boss to ask for a raise.";
var DOSPERT_benefits_20 = "Illegally copying a piece of software.";
var DOSPERT_benefits_21 = "Going whitewater rafting during rapid water flows in the spring.";
var DOSPERT_benefits_22 = "Betting a day’s income on the outcome of a sporting event (e.g. baseball, soccer, or football).";
var DOSPERT_benefits_23 = "Telling a friend if his or her significant other has made a pass at you.";
var DOSPERT_benefits_24 = "Investing 5% of your annual income in a conservative stock.";
var DOSPERT_benefits_25 = "Shoplifting a small item (e.g. a lipstick or a pen).";
var DOSPERT_benefits_26 = "Wearing provocative or unconventional clothes on occasion.";
var DOSPERT_benefits_27 = "Engaging in unprotected sex.";
var DOSPERT_benefits_28 = "Stealing an additional TV cable connection off the one you pay for.";
var DOSPERT_benefits_29 = "Not wearing a seatbelt when being a passenger in the front seat.";
var DOSPERT_benefits_30 = "Investing 10% of your annual income in government bonds (treasury bills).";
var DOSPERT_benefits_31 = "Periodically engaging in a dangerous sport (e.g. mountain climbing or sky diving).";
var DOSPERT_benefits_32 = "Not wearing a helmet when riding a motorcycle.";
var DOSPERT_benefits_33 = "Gambling a week’s income at a casino.";
var DOSPERT_benefits_34 = "Taking a job that you enjoy over one that is prestigious but less enjoyable.";
var DOSPERT_benefits_35 = "Defending an unpopular issue that you believe in at a social occasion.";
var DOSPERT_benefits_36 = "Exposing yourself to the sun without using sunscreen.";
var DOSPERT_benefits_37 = "Trying out bungee jumping at least once.";
var DOSPERT_benefits_38 = "Piloting your own small plane, if you could.";
var DOSPERT_benefits_39 = "Walking home alone at night in a somewhat unsafe area of town.";
var DOSPERT_benefits_40 = "Regularly eating high cholesterol foods.";


//SRTB Scale Change
var srtb_change_1 = 'Your participation in this survey is anonymous and part of a research study. You may refuse to take part in the study or leave the study at any time. You may answer only part of the questions. For each of the following statements, please indicate the likelihood that you would engage in the described activity or behavior, if you were to find yourself in that situation. Provide a rating from "Extremely Unlikely" to "Extremely Likely". Please confirm th;at you understand this by selecting the number "1" below'

var srtb_change_2 = 'Your participation in this survey is anonymous and part of a research study. You may refuse to take part in the study or leave the study at any time. You may answer only part of the questions. For each of the following statements, please indicate how risky you perceive each situation.  Provide a rating from "Not at all Risky" to "Extremely Risky",  Please confirm that you understand this by selecting the number "2" below';

var srtb_change_3 = 'Your participation in this survey is anonymous and part of a research study. You may refuse to take part in the study or leave the study at any time. You may answer only part of the questions. For each of the following statements, please indicate how beneficial you perceive each situation. Provide a rating from "No benefits at all" to "Great benefits". Please confirm that you understand this by selecting the number "3" below';

var srtb_change_4 = 'Your participation in this survey is anonymous and part of a research study. You may refuse to take part in the study or leave the study at any time. You may answer only part of the questions. For each of the following statements, please indicate the frequency you participate in these activities/behaviors. Provide a rating from "Never" to "At least once a day". Please confirm that you understand this by selecting the number "4" below';