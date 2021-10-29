var jsPsychBeginExperiment = (function(jspsych) {
    'use strict';

    const info = {
        name: "begin-experiment",
        parameters: {
            /**
             * The HTML string to be displayed.
             */
            stimulus: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Stimulus",
                default: undefined,
            },
            /**
             * Array containing the key(s) the subject is allowed to press to respond to the stimulus.
             */
            choices: {
                type: jspsych.ParameterType.KEYS,
                pretty_name: "Choices",
                default: "ALL_KEYS",
            },
            /**
             * Any content here will be displayed below the stimulus.
             */
            prompt: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Prompt",
                default: null,
            },
            labels: {
                type: jspsych.ParameterType.HTML_STRING,
                default: [],
                array: true
            },
            /**
             * How long to show the stimulus.
             */
            stimulus_duration: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Stimulus duration",
                default: null,
            },
            /**
             * How long to show trial before it ends.
             */
            trial_duration: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Trial duration",
                default: null,
            },
            /**
             * If true, trial will end when subject makes a response.
             */
            response_ends_trial: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Response ends trial",
                default: true,
            },
        },
    };
    /**
     * **begin-experiment**
     *
     * jsPsych plugin for displaying a stimulus and getting a keyboard response
     *
     * @author Josh de Leeuw
     * @see {@link https://www.jspsych.org/plugins/jspsych-begin-experiment/ begin-experiment plugin documentation on jspsych.org}
     */
    class BeginExperimentPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            var new_html = "<img id = 'logo' src = 'logo.png'></img>";
            new_html += "<div id = 'jspsych-begin-experiment-stimulus';>" + trial.stimulus + "</div>"
            new_html += "<div id = 'total_wrapper' position = 'fixed'"
            new_html += '<div class="textContainer2"><div class="textLeftEnd"></div>'
            for (var j = 0; j < trial.labels.length; j++) {
                var width = 100 / (trial.labels.length - 1);
                var left_offset = (j * (100 / (trial.labels.length - 1))) - (width / 2);
                new_html += '<button id = "beginexperimentbutton" class="textButton">' + trial.labels[j] + '</button>'
            }
            new_html += "</div>"
            new_html += '</div></div>'
                // add prompt
            if (trial.prompt !== null) {
                new_html += trial.prompt;
            }
            // draw
            display_element.innerHTML = new_html;

            var labels = [];
            labels += trial.labels[0];
            console.log(labels);
            // store response
            var response = {
                rt: null,
                key: null,
                selection: null
            };
            // function to end trial when it is time
            const end_trial = () => {
                // kill any remaining setTimeout handlers
                this.jsPsych.pluginAPI.clearAllTimeouts();
                // kill keyboard listeners
                if (typeof keyboardListener !== "undefined") {
                    this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                }
                // gather the data to store for the trial
                var trial_data = {
                    rt: response.rt,
                    stimulus: trial.stimulus,
                    response: response.key,
                    selection: selection[0]
                };
                // clear the display
                display_element.innerHTML = "";
                // move on to the next trial
                this.jsPsych.finishTrial(trial_data);
            };
            var endTime = performance.now();
            var response_time = Math.round(endTime - startTime);
            // function to handle responses by the subject
            var after_response = function(info) {
                // after a valid response, the stimulus will have the CSS class 'responded'
                // which can be used to provide visual feedback that a response was recorded
                display_element.querySelector("#jspsych-begin-experiment-stimulus").className +=
                    " responded";
                // only record the first response
                if (response.key == null) {
                    response = info;
                }
                if (trial.response_ends_trial) {
                    end_trial();
                }
            };
            var selection = [];

            var response_time = [];
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
            // start the response listener
            if (trial.choices != "NO_KEYS") {
                var keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
                    callback_function: after_response,
                    valid_responses: trial.choices,
                    rt_method: "performance",
                    persist: false,
                    allow_held_key: false,
                });
            }
            // hide stimulus if stimulus_duration is set
            if (trial.stimulus_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(function() {
                    display_element.querySelector("#jspsych-begin-experiment-stimulus").style.visibility = "hidden";
                }, trial.stimulus_duration);
            }
            // end trial if trial_duration is set
            if (trial.trial_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(function() {
                    end_trial();
                }, trial.trial_duration);
            }
            var startTime = performance.now();
        }
    }
    BeginExperimentPlugin.info = info;

    return BeginExperimentPlugin;

})(jsPsychModule);