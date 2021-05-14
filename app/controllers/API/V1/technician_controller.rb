class Api::V1::TechniciansController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Technician.all
  end

  def create
    technician = Technician.new(technician_params)
    if technician.save 
      render json: technician.all
    else
      render json: {errors: technician.errors.full_messages}
    end
  end

  private

  def technician_params
    params.require(:technician).permit(:name)
  end

end