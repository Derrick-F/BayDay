class Truck < ApplicationRecord
  validates :company, presence: true
  validates :make, presence: true
  validates :model, presence: true
  validates :vin, presence: true

  has_many :jobs

end