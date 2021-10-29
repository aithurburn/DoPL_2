var jsPsychAge = (function(jspsych) {
    'use strict';

    const info = {
        name: "Age",
        parameters: {
            questions: {
                type: jspsych.ParameterType.COMPLEX,
                array: true,
                pretty_name: "Questions",
                default: undefined,
                nested: {
                    /** Question prompt. */
                    prompt: {
                        type: jspsych.ParameterType.HTML_STRING,
                        pretty_name: "Prompt",
                        default: undefined,
                    },
                    /** Placeholder text in the response text box. */
                    placeholder: {
                        type: jspsych.ParameterType.STRING,
                        pretty_name: "Placeholder",
                        default: "",
                    },
                    /** The number of rows for the response text box. */
                    rows: {
                        type: jspsych.ParameterType.INT,
                        pretty_name: "Rows",
                        default: 1,
                    },
                    /** The number of columns for the response text box. */
                    columns: {
                        type: jspsych.ParameterType.INT,
                        pretty_name: "Columns",
                        default: 40,
                    },
                    /** Whether or not a response to this question must be given in order to continue. */
                    required: {
                        type: jspsych.ParameterType.BOOL,
                        pretty_name: "Required",
                        default: false,
                    },
                    /** Name of the question in the trial data. If no name is given, the questions are named Q0, Q1, etc. */
                    name: {
                        type: jspsych.ParameterType.STRING,
                        pretty_name: "Question Name",
                        default: "",
                    },
                    minAge: {
                        type: jspsych.ParameterType.INT,
                        prettyName: 'The minimum Age',
                        default: 18,
                        description: 'This controls the Age caps.'
                    }
                },
            },
            /** If true, the order of the questions in the 'questions' array will be randomized. */
            randomize_question_order: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Randomize Question Order",
                default: false,
            },
            /** HTML-formatted string to display at top of the page above all of the questions. */
            preamble: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Preamble",
                default: null,
            },
            /** Label of the button to submit responses. */
            button_label: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Button label",
                default: "Continue",
            },
            /** Setting this to true will enable browser auto-complete or auto-fill for the form. */
            autocomplete: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Allow autocomplete",
                default: false,
            },
        },
    };
    /**
     * **Age**
     *
     * jsPsych plugin for free text response survey questions
     *
     * @author Josh de Leeuw
     * @see {@link https://www.jspsych.org/plugins/jspsych-Age/ Age plugin documentation on jspsych.org}
     */
    class AgePlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            var minAge = [];
            minAge += trial.minAge;
            for (var i = 0; i < trial.questions.length; i++) {
                if (typeof trial.questions[i].rows == "undefined") {
                    trial.questions[i].rows = 1;
                }
            }
            for (var i = 0; i < trial.questions.length; i++) {
                if (typeof trial.questions[i].columns == "undefined") {
                    trial.questions[i].columns = 40;
                }
            }
            for (var i = 0; i < trial.questions.length; i++) {
                if (typeof trial.questions[i].value == "undefined") {
                    trial.questions[i].value = "";
                }
            }
            var html = "";
            // show preamble text
            if (trial.preamble !== null) {
                html +=
                    '<div id="jspsych-Age-preamble" class="jspsych-Age-preamble">' +
                    trial.preamble +
                    "</div>";
            }
            // start form
            if (trial.autocomplete) {
                html += '<form id="jspsych-Age-form">';
            } else {
                html += '<form id="jspsych-Age-form" autocomplete="off">';
            }
            // generate question order
            var question_order = [];
            for (var i = 0; i < trial.questions.length; i++) {
                question_order.push(i);
            }
            if (trial.randomize_question_order) {
                question_order = this.jsPsych.randomization.shuffle(question_order);
            }
            // add questions
            for (var i = 0; i < trial.questions.length; i++) {
                var question = trial.questions[question_order[i]];
                var question_index = question_order[i];
                html +=
                    '<div id="jspsych-Age-' +
                    question_index +
                    '" class="jspsych-Age-question" style="margin: 2em 0em;">';
                html += '<p class="jspsych-Age">' + question.prompt + "</p>";
                var autofocus = i == 0 ? "autofocus" : "";
                var req = question.required ? "required" : "";
                if (question.rows == 1) {
                    html += '<input type="number" required = "true" min = "' + trial.minAge + '" max = "' + trial.maxAge + '" id="input-' + question_index + '"  name="#jspsych-Age-response-' + question_index + '" data-name="' + question.name + '" size="' + question.columns + '" ' + autofocus + ' ' + req + ' placeholder="' + question.placeholder + '" onclick = "e();"></input>';
                } else {
                    html += '<textarea id="input-' + question_index + '" name="#jspsych-Age-response-' + question_index + '" data-name="' + question.name + '" cols="' + question.columns + '" rows="' + question.rows + '" ' + autofocus + ' ' + req + ' placeholder="' + question.placeholder + '"></textarea>';
                }
                html += '</div>';

            }
            // add submit button
            html += '<input type="submit" id="jspsych-Age-next" class="jspsych-btn jspsych-Age" value="' +
                trial.button_label +
                '"></input>';
            html += "</form>";
            display_element.innerHTML = html;
            // backup in case autofocus doesn't work
            display_element.querySelector("#input-" + question_order[0]).focus();
            display_element.querySelector("#jspsych-Age-form").addEventListener("submit", (e) => {
                e.preventDefault();
                // measure response time
                var endTime = performance.now();
                var response_time = Math.round(endTime - startTime);
                // create object to hold responses
                var question_data = {};
                for (var index = 0; index < trial.questions.length; index++) {
                    var id = "Q" + index;
                    var q_element = document
                        .querySelector("#jspsych-Age-" + index)
                        .querySelector("textarea, input");
                    var val = q_element.value;
                    var name = q_element.attributes["data-name"].value;
                    if (name == "") {
                        name = id;
                    }
                    var obje = {};
                    obje[name] = val;
                    Object.assign(question_data, obje);
                }
                // save data
                var trialdata = {
                    rt: response_time,
                    response: question_data,
                };
                display_element.innerHTML = "";
                // next trial
                this.jsPsych.finishTrial(trialdata);
            });
            var startTime = performance.now();
        }
    }
    AgePlugin.info = info;

    return AgePlugin;

})(jsPsychModule);