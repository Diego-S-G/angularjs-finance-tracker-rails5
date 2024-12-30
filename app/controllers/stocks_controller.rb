class StocksController < ApplicationController
  
  def search # o professor falou que esse código é uma REST API
    if params[:stock]
      # @stock ||= Stock.new_from_lookup(params[:stock]) # o que cai na API mas o site não existe mais então abaixo fiz o básico pra funcionar
      @stock ||= Stock.find_by(ticker: params[:stock])
    end

    if @stock
      @stock.can_be_added = current_user.can_add_stock?(@stock.ticker)

      render json: @stock, methods: [:can_be_added]
    else
      render status: 404, json: { response: 'No stocks exist for this symbol.' }
    end
  end
end