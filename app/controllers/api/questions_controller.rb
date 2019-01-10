class Api::QuestionsController < ApplicationController

  def index
    all_the_questions = Question.all

    render json: {
      questions: all_the_questions.map do |question|
        {
          id: question.id,
          header: question.header,
          body: question.body
        }
      end
    }
  end

end
