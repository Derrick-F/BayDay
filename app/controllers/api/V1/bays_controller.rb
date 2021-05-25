class Api::V1::BaysController < ApplicationController
  def index
    render json: Bay.all
  end

end