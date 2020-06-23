cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-backbutton/www/Backbutton.js",
        "id": "cordova-plugin-backbutton.Backbutton",
        "clobbers": [
            "navigator.Backbutton"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-backbutton": "0.3.0",
    "cordova-plugin-splashscreen": "5.0.4"
};
// BOTTOM OF METADATA
});