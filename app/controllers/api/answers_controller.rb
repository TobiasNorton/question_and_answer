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

  def delete
    deleted_answer = Answer.find(params[:id]).destroy
  end 

  private
  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end
end
