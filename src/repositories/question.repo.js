const QuestionNotFound = require("../errors/QuestionActions_Error/QuestionNotFound");
const { Question } = require("../models");

class QuestionRepository {
    async postQuestion(details) {
        try {
            const questionDetails = await Question.create({
                title: details.title,
                body: details.body,
                userID: details.userID,
                topics: details.topics
            });
            return questionDetails;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getQuestion(query) {
        try {
            const tagsArr = query.tags ? query.tags.split(',') : [];
            const searchText = query.text ? query.text.trim() : '';

            let filter = {};                         // to check condition for filtering, new type of syntax for me, IMPT
            if (tagsArr.length !== 0) {
                filter.topics = { $in: tagsArr };
            }
            if (searchText) {
                filter.$or = [
                    { title: { $regex: searchText, $options: 'i' } }, //  here $options:'i' is for case-insensitive regex match on title
                    { body: { $regex: searchText, $options: 'i' } }    // Case-insensitive regex match on body
                ];
            }

            const questions = await Question.find(filter);

            if (questions.length === 0) {
                throw new QuestionNotFound("No Questions Found", {});
            }

            return questions;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = QuestionRepository;
