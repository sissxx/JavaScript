function meeting(input) {

    let meetingApointments = {};

    for (let list of input) {
        let [weekday, name] = list.split(' ');

        if (meetingApointments.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);

        } else {
            meetingApointments[weekday] = name;
            console.log(`Scheduled for ${weekday}`);

        }

    }

    for (let key in meetingApointments) {
        console.log(`${key} -> ${ meetingApointments[key]}`);
    }
}
meeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])