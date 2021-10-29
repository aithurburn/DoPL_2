var jspsychVisualContinueButton = (function(jspsych) {
    'use strict';



    const info = {
        name: "visualContinueButton",
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
                default: "ALL_KEYS"
            },
            labels: {
                type: jspsych.ParameterType.HTML_STRING,
                default: [],
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
    };
    class visualContinueButtonPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {

            var newHTML = "<div id = 'jspsych-visual-continue-stimulus';>" + trial.stimulus + "</div>";

            var new_html = "<div position = 'relative' id = 'jspsych-visual-continue-wrapper' style = 'margin:100px; display: block;'"

            new_html += '<div class="continueNewTextContainer"><div class="continueNewTextLeftEnd"></div>'
            for (var j = 0; j < trial.labels.length; j++) {
                var width = 100 / (trial.labels.length - 1);
                var left_offset = (j * (100 / (trial.labels.length - 1))) - (width / 2);
                new_html += '<button class = "continueButton" >' + trial.labels[j] + '</button>'
            }
            new_html += '</div></div>'


            if (trial.prompt !== null) {
                new_html += trial.prompt;
            }

            display_element.innerHTML = newHTML + new_html;
            var endTime = performance.now();
            var response_time = Math.round(endTime - startTime);
            var labels = [];
            labels += trial.labels[0];
            console.log(labels);
            var response = {
                rt: null,
                key: null,
                selection: null
            };
            var ineligibleMessage = ineligibleMessage;
            var end_trial = function() {

                if (typeof keyboarbuttonistener !== 'undefined') {
                    this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboarbuttonistener);
                }

                var trial_data = {
                    rt: response.rt,
                    stimulus: trial.stimulus,
                    response: response.key,
                    selection: selection[0]
                };


                display_element.innerHTML = '';


                this.jsPsych.finishTrial(trial_data);
            };


            var after_response = function(info) {




                display_element.querySelector('#jspsych-visual-continue-stimulus').className += ' responded';

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

            var selection = [];
            var response_Time = [];
            $('button').on('click', function(e) {
                e.preventDefault();
                selection.push($(this).text());
                console.log(selection);
                if (selection != labels) {
                    document.body.innerHTML =
                        trial.ineligibleMessage;
                    setTimeout(function() {}, 10000)
                };

                var endTime = performance.now();
                var response_time = Math.round(endTime - startTime);
                response.rt = response_time;
                end_trial();
            });


            if (trial.choices != "NO_KEYS") {
                var keyboarbuttonistener = this.jsPsych.pluginAPI.getKeyboardResponse({
                    callback_function: after_response,
                    valid_responses: trial.choices,
                    rt_method: 'performance',
                    persist: false,
                    allow_held_key: false
                });
            }
            if (trial.stimulus_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(function() {
                    display_element.querySelector('#jspsych-visual-continue-stimulus').style.visibility = 'hidden';
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

    visualContinueButtonPlugin.info = info;
    return visualContinueButtonPlugin;
})(jsPsychModule);