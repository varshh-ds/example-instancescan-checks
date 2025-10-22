// Send email when incident priority is high
(function execute(inputs, outputs) {
    var inc = new GlideRecord('incident');
    if (inc.get(inputs.incident_sys_id) && inc.priority == 1) {
        gs.eventQueue('incident.high_priority', inc, inc.caller_id, 'High priority incident detected');
    }
})(inputs, outputs);
