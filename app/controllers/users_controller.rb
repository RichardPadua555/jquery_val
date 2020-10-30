class UsersController < ApplicationController

layout 'jquery_val'

	def index
		@users = User.all
	end

	def new
		@user = User.new
	end

	def create
		@user = User.create(permitted_params)
		if @user.valid?
			@user.save
			redirect_to users_path
		else
			render 'new'	
		end	
		
	end

	def edit
		@user = User.find(params[:id])
	end

	def update
		@user = User.find(params[:id])
		@user.update(permitted_params)
		if @user.save
			redirect_to users_path
		else
			render 'edit'	 
		end	
	end

	def destroy
		@user = User.find(params[:id])
		if @user
			@user.destroy
			redirect_to users_path
		end	
	end


	private

	def permitted_params
		params.require(:user).permit(
			:first_name ,
		 	:middle_name ,
		 	:last_name ,
		 	:date_of_birth , 
		 	:age , 
		 	:email , 
		 	:mobile_number,
		 	:address,
		 	:qualification 
		)
	end

end