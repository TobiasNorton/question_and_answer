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

  # <input type="hidden" name="answer[question_id]" value={this.props.match.params.id}></input>
  # <textarea name="answer[body]" placeholder="Know the answer?" />

  private
  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end
end
