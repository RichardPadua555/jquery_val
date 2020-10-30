class CreateUsers < ActiveRecord::Migration[5.2]
	def change
		create_table :users do |t|
			t.string :first_name
			t.string :middle_name
			t.string :last_name
			t.string :date_of_birth
			t.integer :age
			t.string :email
			t.string :mobile_number , unique: true , limit: 10
			t.string :address 
			t.string :qualification
			t.timestamps
		end
	end
end
