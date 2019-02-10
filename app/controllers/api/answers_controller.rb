class Api::AnswersController < ApplicationController

  def create 
    answer = Answer.create(answer_params)

    if answer.valid?
      render json: {
        is_added: "Your answer has been submitted!"
      }
    else
      render json: {
        error: answer.errors.full_messages
      }
    end
  end


  def upvote
    answer = Answer.find(params[:id])
    new_upvote = answer.update(rating: answer.rating.to_i + 1)

    # if new_upvote.valid?
    #   render json: {
    #     is_added: "You added one vote"
    #   }
    # else
    #   render json: {
    #     error: new_upvote.errors.full_messages
    #   }
    # end
  end


  def downvote
    answer = Answer.find(params[:id])
    new_upvote = answer.update(rating: answer.rating.to_i - 1)

  end


  def delete
    deleted_answer = Answer.find(params[:id]).destroy
  end 


  private
  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end

  def vote_params
    params.require(:answer).permit(:rating, :question_id)
  end
end
