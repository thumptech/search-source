var currentVersion = '1.4.3';

Package.describe({
    summary: 'Reactive Data Source for Search',
    version: currentVersion,
    git: 'https://github.com/meteorhacks/search-source.git',
    name: 'meteorhacks:search-source'
});

Npm.depends({
    'body-parser': '1.10.1'
});

Package.onUse(function (api) {
    api.use([
        'tracker', 'underscore', 'mongo', 'reactive-var',
        'http', 'ejson', 'check', 'ddp'
    ], 'client');
    api.use('ejson', 'server');
    api.use('check', 'server');
    api.use('ddp', 'server');
    api.use('meteorhacks:picker@1.0.1', 'server');
    //This is needed for ES6 imports/exports to work
    api.use('ecmascript');
    api.addFiles('src/server.js', 'server');
    api.addFiles('src/client.js', 'client');
    api.mainModule('src/exports.js');
    //api.export(['SearchSource']);
});

Package.onTest(function (api) {

    api.use(['tinytest', 'mongo-livedata'], ['client', 'server']);
});


