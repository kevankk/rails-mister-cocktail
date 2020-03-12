class Dose < ApplicationRecord
  validates :cocktail, presence: true, uniqueness: { scope: :ingredient }
  validates :ingredient, presence: true
  validates :description, presence: true
  belongs_to :cocktail
  belongs_to :ingredient
end
