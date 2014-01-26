# encoding: utf-8
require 'csv'

task :wklej => :environment do
	flaga = 0
	pytanie_ustawione = false
	t = nil
	CSV.foreach("pytania.csv", "r:utf-8") do |row|
		tekst = row[0]

		if tekst.blank?
			unless t.nil? 
				t.save!
			end
			flaga = 0
			pytanie_ustawione = false
		else
			p "nie jest pusty"
			unless pytanie_ustawione
				p "tworzę topic"
				t = Topic.new(name: tekst)
				pytanie_ustawione = true
			else
				p "dodaje pytanie"
				niewiadomo = false
				niewiadomo = true if tekst=="X"
				tekst = true if tekst=="1"
				tekst = false if (tekst=="X" or tekst=="0")

				t.questions.new(name: row[1], value: tekst, niewiadomo: niewiadomo)
			end 
		end
	end

end