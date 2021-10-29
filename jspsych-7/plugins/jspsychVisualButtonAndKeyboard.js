var jsPsychvisualButtonAndKeyboard = (function(jspsych) {
    'use strict';



    const info = {
        name: "visualButtonAndKeyboard",
        parameters: {
            stimulus: {
                type: jspsych.ParameterType.HTML_STRING,
                default: undefined,
            },
            ineligibleMessage: {
                type: jspsych.ParameterType.HTML_STRING,
                default: undefined,
            },
            choices: {
                type: jspsych.ParameterType.KEYS,
                array: true,
                pretty_name: 'Choices',
                default: "ALL_KEYS",
                description: 'The keys the subject is allowed to press to respond to the stimulus.'
            },
            labels: {
                type: jspsych.ParameterType.HTML_STRING,
                default: [],
                array: true
            },
            button_number: {
                type: jspsych.ParameterType.HTML_STRING,
                default: undefined,
                array: true
            },
            stimulus_duration: {
                type: jspsych.ParameterType.INT,
                pretty_name: 'Stimulus duration',
                default: null,
                description: 'How long to hide the stimulus.'
            },
            trial_duration: {
                type: jspsych.ParameterType.INT,
                pretty_name: 'Trial duration',
                default: null,
                description: 'How long to show trial before it ends.'
            },
            response_ends_trial: {
                type: jspsych.ParameterType.BOOL,
                default: true,
            }
        }
    }

    class visualButtonAndKeyboardPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            var new_html = "<img id = 'logo' src = 'logo.png'></img>";
            new_html += "<div id = 'jspsych-visual-button-stimulus';>" + trial.stimulus + "</div>"
            new_html += "<div id = 'total_wrapper' position = 'fixed'"
            new_html += "<div position = 'absolute' id = 'jspsych-html-visual-analog-wrapper' style = 'margin: 100px'"
            new_html += '<div class="lineContainer2"><div class="line2"></div>'
            new_html += '<div div class="line2"></div>'
            for (var j = 2; j < trial.labels.length; j++) {
                var width = 100 / (trial.labels.length - 1);
                var left_offset = (j * (100 / (trial.labels.length - 1))) - (width / 2);
                new_html += '<div class="line2" ></div >'
            }
            new_html += '<div class="line2">'
            new_html += '<div class="textContainer"><div class="textLeftEnd"></div>'
            for (var j = 0; j < trial.labels.length; j++) {
                var width = 100 / (trial.labels.length - 1);
                var left_offset = (j * (100 / (trial.labels.length - 1))) - (width / 2);
                new_html += '<button id = "consentButton" class="textButton">' + trial.labels[j] + '</button>'
            }
            new_html += "</div>"
            new_html += '</div></div>'


            if (trial.prompt !== null) {
                new_html += trial.prompt;
            }

            display_element.innerHTML = new_html;
            var endTime = performance.now();
            var response_time = Math.round(endTime - startTime);
            var labels = trial.labels[0];
            console.log(labels);
            var response = {
                rt: null,
                key: null,
                selection: null
            };
            var ineligibleMessage = ineligibleMessage;
            const end_trial = function() {

                if (typeof keyboardListener !== "undefined") {
                    this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                }
                var trial_data = {
                    rt: response.rt,
                    stimulus: trial.stimulus,
                    response: response.key,
                };


                display_element.innerHTML = '';


                this.jsPsych.finishTrial(trial_data);
            };


            var after_response = function(info) {




                display_element.querySelector('#jspsych-visual-button-stimulus').className += ' responded';

                if (response.key == null) {
                    response = info;
                }

                if (response.selection == null) {
                    response = info;
                }
                if (response.key_press != "n") {
                    end_trial();
                }
                if (trial.response_ends_trial) {
                    end_trial();
                }



            };




            if (trial.choices != "NO_KEYS") {
                var keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
                    callback_function: after_response,
                    valid_responses: trial.choices,
                    rt_method: 'performance',
                    persist: false,
                    allow_held_key: false
                });
            }
            if (trial.stimulus_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(function() {
                    display_element.querySelector('#jspsych-visual-button-stimulus').style.visibility = 'hidden';
                }, trial.stimulus_duration);
            }




            if (trial.trial_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(function() {
                    end_trial();
                }, trial.trial_duration);
            }
            var startTime = performance.now();
        }
    };

    visualButtonAndKeyboardPlugin.info = info;
    return visualButtonAndKeyboardPlugin;
})(jsPsychModule);