///////////////////////////////////////////////////////
//
// Application: Multi-Party RTC: Sample Web App
// Version: 1.0.0
// The Sample Web App demonstrates the use of EnableX Server API & Web Toolkit
// to develop a Multi-Party RTC Application. The main motivation behind this
// application is to demonstrate usage of APIs and allow developers to ramp up
// on app by hosting on their own devices instead of directly using servers.
//
// Released: Nov 26, 2018
//
// File: config.js
// Service Configuration File, need to be modified as needed.
//
/////////////////////////////////////////////////////


var vcxconfig = {};
global.__basedir = __dirname;
vcxconfig.pwdFilePath = "files/users.htpasswd"

vcxconfig.SERViCE = {
    name: "EnableX Sample Web App",                // Name of the App
    version: "1.0.0",                               // Version
    path: "/v1",                                    // EnableX Server API Version Route to access
    domain: "enablex-demo.herokuapp.com",                       // Domain / Sub-Domain to host this Service
    port: "3000",                                 // Port No. of this Service
    listen_ssl: false                               // Enable SSL. Set always to "true"
};



// SSL Certificate (Self Signed or Registered)

vcxconfig.Certificate = {
    ssl_key: "certs/localhost.key",               // Path to .key file
    ssl_cert: "certs/localhost.crt",             // Path to .crt file
    //sslCaCerts : ["certs/localhost.ca-bundle"]    // Path to CA[chain]
};



// Enbalex Server API Infomration

vcxconfig.SERVER_API_SERVER = {
    host: 'api-qa.enablex.io',                 // FQDN of Service
    port: '443',                                       // PORT of Service (If specified by EnableX)
};

vcxconfig.APP_ID = "5e707188e865dc5b724b28e2";               // APP ID to access Server API
vcxconfig.APP_KEY = "uMeVany7aPapetamy8uZyMeSuSymyeytaJaN";   // APP KEY to access Server API


console.log(__basedir);
vcxconfig.clientPath = "client";                 // Client End Point UI Route

var module = module || {};
module.exports = vcxconfig;
