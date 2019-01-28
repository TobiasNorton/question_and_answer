class Api::QuestionsController < ApplicationController

  def index
    questions = Question.all

    render json: {
      questions: questions.map do |question|
        {
          id: question.id,
          header: question.header,
          body: question.body, 
          rating: question.rating,
        }
      end
    }
  end

  def post_question
    new_question = Question.create(question_params)

    render json: {
      id: new_question.id,
      header: new_question.header,
      body: new_question.body, 
      rating: new_question.rating,
    }
  end

  def select_question
    question = Question.find(params[:id])

    render json: {
      id: question.id,
      header: question.header,
      body: question.body, 
      rating: question.rating,
      answers: question.answers.map do |answer|
        {
          id: answer.id,
          body: answer.body,
          rating: answer.rating ? answer.rating : 0
        }
      end
    }
  end

  private

  def question_params
    params.require(:question).permit(:header, :body)
  end

end
