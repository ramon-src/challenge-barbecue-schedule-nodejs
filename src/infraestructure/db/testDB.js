
const mongoose = require('mongoose');
const config = require('../../app/config')

module.exports = {
    connect: function (done) {
        try {
            if (mongoose.connection.db) return done();
            mongoose.connect(config.db, { useNewUrlParser: true }, done);
            mongoose.connection
                .once('open', () => console.log('Connected!'))
                .once('close', () => console.log('Closed :('))
                .on('error', (error) => {
                    console.warn('Error : ', error);
                });
        } catch (err) {
            //eslint-disable-next-line
            console.log('Error to connect on mongo', err);
        }
    },
    drop: function () {
        mongoose.connection.db.dropDatabase()
    },
    close: function () {
        mongoose.connection.close()
    }
}