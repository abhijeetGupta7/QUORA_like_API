class QuestionService {
    constructor(QuestionRepository) {
        this.QuestionRepository=QuestionRepository;
    }

    async getQuestion(query) {
        const questions=await this.QuestionRepository.getQuestion(query);
        return questions;
    }

    async postQuestion(details) {
        const QuestionDetails=await this.QuestionRepository.postQuestion(details);
        return QuestionDetails;
    }
}

module.exports=QuestionService;