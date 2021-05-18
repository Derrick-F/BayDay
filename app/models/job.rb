class Job < ApplicationRecord
  validates :category, presence: true
  validates :description, presence: true

  # has_many :assignments
  # has_many :technicians, through: :assignments
end