class Api::V1::JobsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user, except: [:index, :show]
  
  def index
    render json: Job.all
  end

  def create
    truck = Truck.find(params[:truckId])
    job = Job.new(job_params)
    job[:truck_id] = params[:truckId]
    
    if job.save
      render json: Job.all
    else
        render json: {errors: truck.errors.full_messages}
      end
    end

  def destroy
    job = Job.find(params[:id])

    if job.destroy
      head :no_content
    else
      render json: {errors: truck.errors.full_messages}
    end
  end

    private

  def authenticate_user
    if !user_signed_in?
      render json: {errors: ["You must be signed in to create or clear a bay."]}
    end
  end

  def job_params
    params.require(:job).permit(:category, :description, :truckId, :bay_id)
  end

end