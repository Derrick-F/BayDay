class Technician < ApplicationRecord
  validates :name, presence: true

  belongs_to :job

end