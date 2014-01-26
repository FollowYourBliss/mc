class Topic < ActiveRecord::Base
	has_many :questions
	def previous
  		Topic.where('topics.id < ?', self.id).last
	end

	def next
  		Topic.where('topics.id > ?', self.id).first
	end
	def first
  		Topic.first
	end
	def last
  		Topic.last
	end
end
