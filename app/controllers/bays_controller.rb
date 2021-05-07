class BayController < ApplicationController
  def index
    @bays = Bay.all
  end
end


    