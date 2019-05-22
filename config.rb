set :protocol, 'https://'
set :host, '2019.rubyconf.tw'

set :images_dir, 'images'

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

activate :asset_hash, :ignore => %w(.svg)

activate :directory_indexes

activate :livereload

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Helpers
require 'lib/view_helpers'

require 'lib/models'

helpers ViewHelpers

require 'pry'

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.build_before = true
end