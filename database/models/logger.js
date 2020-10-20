const db = require('../database');
const Schema = db.Schema;
const time = require('moment');
const color = require('colors');
time.locale('ru');

const LogsSchema = new Schema({
    date: {
        type: String,
        default: time().format('HH:mm:ss, DD.MM.YYYY')         
    },
    type: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    }
});
const Logs = db.model('logs', LogsSchema);

module.exports = class Logger {
    constructor(filename){
        this.file = filename;
    }

    warn = {
        vk: async function(text){
            try {
                let log = new Logs({
                    date: time().format('HH:mm:ss, DD.MM.YYYY'),
                    type: 'warn',
                    from: 'vk',
                    text: text
                });
                await log.save();
                return console.warn(color.yellow(`[${log.date}] [${log.type}] [${log.from}] [${this.file}] > ${log.text}`));
            } catch(error) {
                console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.message}`);
                return console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.stack}`);
            }
        },
        app: async function(text){
            try {
                let log = new Logs({
                    date: time().format('HH:mm:ss, DD.MM.YYYY'),
                    type: 'warn',
                    from: 'app',
                    text: text
                });
                await log.save();
                return console.warn(color.yellow(`[${log.date}] [${log.type}] [${log.from}] [${this.file}] > ${log.text}`));
            } catch(error) {
                console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.message}`);
                return console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.stack}`);
            }
        },
        http: async function(text){
            try {
                let log = new Logs({
                    date: time().format('HH:mm:ss, DD.MM.YYYY'),
                    type: 'warn',
                    from: 'http',
                    text: text
                });
                await log.save();
                return console.warn(color.yellow(`[${log.date}] [${log.type}] [${log.from}] [${this.file}] > ${log.text}`));
            } catch(error) {
                console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.message}`);
                return console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.stack}`);
            }
        }
    }

    info = {
        vk: async function(text){
            try {
                let log = new Logs({
                    date: time().format('HH:mm:ss, DD.MM.YYYY'),
                    type: 'info',
                    from: 'vk',
                    text: text
                });
                await log.save();
                return console.info(color.green(`[${log.date}] [${log.type}] [${log.from}] [${this.file}] > ${log.text}`));
            } catch(error) {
                console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.message}`);
                return console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.stack}`);
            }
        },
        app: async function(text){
            try {
                let log = new Logs({
                    date: time().format('HH:mm:ss, DD.MM.YYYY'),
                    type: 'info',
                    from: 'app',
                    text: text
                });
                await log.save();
                return console.info(color.green(`[${log.date}] [${log.type}] [${log.from}] [${this.file}] > ${log.text}`));
            } catch(error) {
                console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.message}`);
                return console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.stack}`);
            }
        },
        http: async function(text){
            try {
                let log = new Logs({
                    date: time().format('HH:mm:ss, DD.MM.YYYY'),
                    type: 'info',
                    from: 'http',
                    text: text
                });
                await log.save();
                return console.info(color.green(`[${log.date}] [${log.type}] [${log.from}] [${this.file}] > ${log.text}`));
            } catch(error) {
                console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.message}`);
                return console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.stack}`);
            }
        }
    }

    error = {
        vk: async function(text){
            try {
                let log = new Logs({
                    date: time().format('HH:mm:ss, DD.MM.YYYY'),
                    type: 'error',
                    from: 'vk',
                    text: text
                });
                await log.save();
                return console.error(color.red(`[${log.date}] [${log.type}] [${log.from}] [${this.file}] > ${log.text}`));
            } catch(error) {
                console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.message}`);
                return console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.stack}`);
            }
        },
        app: async function(text){
            try {
                let log = new Logs({
                    date: time().format('HH:mm:ss, DD.MM.YYYY'),
                    type: 'error',
                    from: 'app',
                    text: text
                });
                await log.save();
                return console.error(color.red(`[${log.date}] [${log.type}] [${log.from}] [${this.file}] > ${log.text}`));
            } catch(error) {
                console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.message}`);
                return console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.stack}`);
            }
        },
        http: async function(text){
            try {
                let log = new Logs({
                    date: time().format('HH:mm:ss, DD.MM.YYYY'),
                    type: 'error',
                    from: 'http',
                    text: text
                });
                await log.save();
                return console.error(color.red(`[${log.date}] [${log.type}] [${log.from}] [${this.file}] > ${log.text}`));
            } catch(error) {
                console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.message}`);
                return console.error(`[${time().format('HH:mm:ss, DD.MM.YYYY')}] [Logger] > ${error.stack}`);
            }
        }
    }

    async serverMiddleware(req, res, next){
        this.info.http(`${req.ip} | ${req.path} | ${req.method}`);
        return next();    
    }
}