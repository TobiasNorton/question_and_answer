class Api::QuestionsController < ApplicationController

  def index
    questions = Question.all.sort_by { |question| question.created_at }

    render json: {
      questions: questions.map do |question|
        {
          id: question.id,
          header: question.header,
          body: question.body, 
          rating: question.rating ? question.rating : 0,
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
      question: { 
        id: question.id,
        header: question.header,
        body: question.body, 
        rating: question.rating ? question.rating : 0,
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
    questions = Question.where('header ILIKE ?', "%#{params[:input]}%")

    render json: {
      questions: questions.map do |question| 
        { 
          id: question.id,
          header: question.header,
          body: question.body, 
          rating: question.rating ? question.rating : 0,
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
  
  def upvote
    question = Question.find(params[:id])
    new_upvote = question.update(rating: question.rating.to_i + 1)
  end


  def downvote
  question = Question.find(params[:id])
    new_upvote = question.update(rating: question.rating.to_i - 1)
  end

  def delete
    Question.find(params[:id]).destroy
  end

  private

  def question_params
    params.require(:question).permit(:header, :body)
  end

end
