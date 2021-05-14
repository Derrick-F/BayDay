class Job < ActiveRecord
  validates :category, presence: true
  validates :description, presence: true

end