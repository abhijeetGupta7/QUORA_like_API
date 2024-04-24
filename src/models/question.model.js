const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        topics: {
            type: [String]
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId, // Type for userID referencing another document
            required: true
        }
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt fields
    }
);

const QuestionModel = mongoose.model("Question", QuestionSchema);

module.exports = QuestionModel;
