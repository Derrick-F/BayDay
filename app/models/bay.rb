class Bay < ApplicationRecord
  validates :number, presence: true

  has_many :jobs

end