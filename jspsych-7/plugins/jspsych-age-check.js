/**
 * jspsych-age-check
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


var jsPsychagecheck = (function(jspsych) {
    'use strict';



    const info = {
        name: 'age-check',
        description: '',
        parameters: {
            questions: {
                type: jspsych.ParameterType.COMPLEX,
                array: true,
                pretty_name: 'Questions',
                default: undefined,
                nested: {
                    prompt: {
                        type: jspsych.ParameterType.HTML_STRING,
                        pretty_name: 'Prompt',
                        default: undefined,
                        description: 'Prompt for the subject to response'
                    },
                    placeholder: {
                        type: jspsych.ParameterType.STRING,
                        pretty_name: 'Value',
                        default: "",
                        description: 'Placeholder text in the textfield.'
                    },
                    rows: {
                        type: jspsych.ParameterType.INT,
                        pretty_name: 'Rows',
                        default: 1,
                        description: 'The number of rows for the response text box.'
                    },
                    columns: {
                        type: jspsych.ParameterType.INT,
                        pretty_name: 'Columns',
                        default: 40,
                        description: 'The number of columns for the response text box.'
                    },
                    required: {
                        type: jspsych.ParameterType.BOOL,
                        pretty_name: 'Required',
                        default: false,
                        description: 'Require a response'
                    },
                    name: {
                        type: jspsych.ParameterType.STRING,
                        pretty_name: 'Question Name',
                        default: '',
                        description: 'Controls the name of data values associated with this question'
                    },
                    minAge: {
                        type: jspsych.ParameterType.INT,
                        prettyName: 'The minimum age',
                        default: 18,
                        description: 'This controls the age caps.'
                    }
                }
            },
            preamble: {
                type: jspsych.ParameterType.STRING,
                pretty_name: 'Preamble',
                default: null,
                description: 'HTML formatted string to display at the top of the page above all the questions.'
            },
            button_label: {
                type: jspsych.ParameterType.STRING,
                pretty_name: 'Button label',
                default: 'Continue',
                description: 'The text that appears on the button to finish the trial.'
            }
        }
    }

    class jsPsychagecheckPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            var minAge = [];
            minAge += trial.minAge;
            for (var i = 0; i < trial.questions.length; i++) {
                if (typeof trial.questions[i].rows == 'undefined') {
                    trial.questions[i].rows = 1;
                }
            }
            for (var i = 0; i < trial.questions.length; i++) {
                if (typeof trial.questions[i].columns == 'undefined') {
                    trial.questions[i].columns = 40;
                }
            }
            for (var i = 0; i < trial.questions.length; i++) {
                if (typeof trial.questions[i].value == 'undefined') {
                    trial.questions[i].value = "";
                }
            }

            var html = '';

            if (trial.preamble !== null) {
                html += '<div id="jspsych-age-check-preamble" class="jspsych-age-check-preamble">' + trial.preamble + '</div>';
            }

            html += '<form id="jspsych-age-check-form">'


            var question_order = [];
            for (var i = 0; i < trial.questions.length; i++) {
                question_order.push(i);
            }
            if (trial.randomize_question_order) {
                question_order = this.jsPsych.randomization.shuffle(question_order);
            }


            for (var i = 0; i < trial.questions.length; i++) {
                var question = trial.questions[question_order[i]];
                var question_index = question_order[i];
                html += '<div id="jspsych-age-check-' + question_index + '" class="jspsych-age-check-question" style="margin: 2em 0em;">';
                html += '<p class="jspsych-age-check">' + question.prompt + '</p>';
                var autofocus = i == 0 ? "autofocus" : "";
                var req = question.required ? "required" : "";
                if (question.rows == 1) {
                    html += '<input type="number" required = "true" min = "' + trial.minAge + '" max = "' + trial.maxAge + '" id="input-' + question_index + '"  name="#jspsych-age-check-response-' + question_index + '" data-name="' + question.name + '" size="' + question.columns + '" ' + autofocus + ' ' + req + ' placeholder="' + question.placeholder + '" onclick = "e();"></input>';
                } else {
                    html += '<textarea id="input-' + question_index + '" name="#jspsych-age-check-response-' + question_index + '" data-name="' + question.name + '" cols="' + question.columns + '" rows="' + question.rows + '" ' + autofocus + ' ' + req + ' placeholder="' + question.placeholder + '"></textarea>';
                }
                html += '</div>';
            }


            html += '<input type="submit" id="jspsych-age-check-next" class="jspsych-btn jspsych-age-check" value="' + trial.button_label + '"></input>';

            html += '</form>'
            display_element.innerHTML = html;


            display_element.querySelector('#input-' + question_order[0]).focus();

            display_element.querySelector('#jspsych-age-check-form').addEventListener('submit', function(e) {
                e.preventDefault();

                var endTime = performance.now();
                var response_time = endTime - startTime;


                var question_data = {};

                for (var index = 0; index < trial.questions.length; index++) {
                    var id = "Q" + index;

                    var q_element = document.querySelector('#jspsych-age-check-' + index).querySelector('textarea, input');

                    var val = q_element.value;

                    var name = q_element.attributes['data-name'].value;
                    if (name == '') {
                        name = id;
                    }
                    var obje = {};
                    obje[name] = val;

                    Object.assign(question_data, obje);
                }


                var trialdata = {
                    "rt": response_time,
                    "responses": JSON.stringify(question_data)
                };

                display_element.innerHTML = '';


                this.jsPsych.finishTrial(trialdata);
            });

            var startTime = performance.now();
        }
    };
    jsPsychagecheckPlugin.info = info;
    return jsPsychagecheckPlugin;
})(jsPsychModule);