class StocksController < ApplicationController
  
  def search
    if params[:stock].blank?
      flash.now[:danger] = "You have entered an empty search string"
    else
      # @stock = Stock.new_from_lookup(params[:stock]) # aqui faz a busca usando API mas não existe mais o site então fiz o básico p funcionar
      @stock = Stock.find_by(ticker: params[:stock])
      flash.now[:danger] = "You have entered an incorrect symbol" unless @stock
    end
    respond_to do |format|
      format.js { render partial: 'users/result' }
    end
  end
end