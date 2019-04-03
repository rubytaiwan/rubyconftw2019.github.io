module ViewHelpers

  def root_url
    config[:protocol] + config[:host]
  end

  def inline_svg(name)
    root = Middleman::Application.root
    file_path = "#{root}/source/assets/images/#{name}.svg"
    return File.read(file_path) if File.exists? (file_path)
    "(not found)"
  end

end