class Api::V1::JobsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  
  def index
    render json: Job.all
  end

  def create
    job = Job.new(job_params)
      if job.save
        render json: Job.all
      else
        render json: {errors: truck.errors.full_messages}
      end
    end

    private

  def job_params
    params.require(:job).permit(:category, :description)
  end

end