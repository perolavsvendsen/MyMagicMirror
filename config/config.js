/* Magic Mirror Config
 *
 * Based on sample config by Michael Teeuw http://michaelteeuw.nl
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "localhost",
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
    language: "nb",
    timeFormat: 24,
    units: "metric",

    modules: [

        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "Nyheter fra NRK",
                        url: "https://www.nrk.no/toppsaker.rss"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
        {
            module: "MMM-YrNow",
            position: "top_right",
            config: {
                locationId: "1-500418",
                showWeatherForecast: true
            }
        },
        {
                module: "MMM-HS3_device_value",
                position: "top_right",
                config: {
                    ip: "192.168.0.XXX",
                    port: "XXXX",
                    ref: "216",
                    description: "UTE"
                }
        },
        {
            module: "MMM-CountDown",
            position: "top_left",
            config: {
                event: "Julaften",
                date: "2018-12-24",
                showHours: false,
                showMinutes: false,
                showSeconds: false,
                customInterval: 1000,
                daysLabel: " dager",
                hoursLabel: " timer",
                minutesLabel: " minutter",
                secondsLabel: " sekunder"
            }
        }
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

