class Api::QuestionsController < ApplicationController

  def index
    questions = Question.all.sort_by { |question| question.created_at }

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
    puts question_params
    puts "///////////"
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
      question: { 
        id: question.id,
        header: question.header,
        body: question.body, 
        rating: question.rating,
        answers: (question.answers.sort_by { |answer| answer.created_at }).map do |answer|
          {
            id: answer.id,
            body: answer.body,
            rating: answer.rating ? answer.rating : 0
          }
        end
      }
    }
  end

  def search
    puts "////////////////"
    puts params[:keyword]
    puts "////////////////"
    questions = Question.where('header ILIKE ?', "%#{params[:keyword]}%")

    render json: {
      question: questions.map do |question| 
        { 
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
    }
  end

  private

  def search_params
    params.require(:question).permit(:header)
  end

  def question_params
    params.require(:question).permit(:header, :body)
  end

end
