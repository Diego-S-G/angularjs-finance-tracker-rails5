source("https://rubygems.org")
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end
gem("rails", "~> 5.2.4.4")
gem("devise")
gem("execjs")
gem("twitter-bootstrap-rails")
gem("jquery-rails")
gem("devise-bootstrap-views")
gem("iex-ruby-client")
gem("font-awesome-rails")
gem("puma", "~> 3.12")
gem("sass-rails", "~> 5.0")
gem("uglifier", ">= 1.3.0")
gem("coffee-rails", "~> 4.2")
gem("turbolinks", "~> 5")
gem("jbuilder", "~> 2.5")

gem("webpacker", "~> 3.4.1")

group(:development, :test) do
  gem("sqlite3")
  gem("byebug", :platforms => ([:mri, :mingw, :x64_mingw]))
  gem("capybara", "~> 2.13")
  gem("selenium-webdriver")
end
group(:development) do
  gem("web-console", ">= 3.3.0")
  gem("listen", ">= 3.0.5", "< 3.2")
  gem("spring")
  gem("spring-watcher-listen", "~> 2.0.0")
end
group(:production) { gem("pg") }
gem("tzinfo-data", :platforms => ([:mingw, :mswin, :x64_mingw, :jruby]))
