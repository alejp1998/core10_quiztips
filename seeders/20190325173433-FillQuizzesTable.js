'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('quizzes', [
            {
                question: 'Quiz1',
                answer: '1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Quiz2',
                answer: '2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Quiz3',
                answer: '3',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                question: 'Quiz4',
                answer: '4',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('quizzes', null, {});
    }
};
