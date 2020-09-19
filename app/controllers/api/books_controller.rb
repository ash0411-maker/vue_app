class Api::BooksController < ApplicationController
    def index
        @books = Book.all
        render 'index', formats: :json, handlers: 'jbuilder'
    end
end
