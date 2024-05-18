#!/usr/bin/env node

import {
    env,
    xlrsisVersion,
    Logger
} from './helpers/';

import {
    isAppRunning,
    showStartSystemInfo
} from './helpers/startup/';

if ( env.LOG_LEVEL === undefined ) {
    Logger.setLevel( env.isProduction );
}
else {
    Logger.setLogLevel( env.LOG_LEVEL );
}
const initLog = new Logger('[prepare]:');

(async () => {
    if ( await isAppRunning( env.PORT, initLog )) {
        initLog.warn('App has already been launched.');
        process.exit( 1 );
    }
    initLog.info('============ start xlrsis app ============');
    await showStartSystemInfo( xlrsisVersion );
    const { startServer } = await import('./1-http-base');
    startServer();

    initLog.info('=======================');
    initLog.info('End of prepare section.');
    initLog.info('=======================');
})();
