module ViewHelpers

  def root_url
    config[:protocol] + config[:host]
  end

  def inline_svg(name)
    root = Middleman::Application.root
    file_path = "#{root}/source/images/mixins/#{name}.svg"
    return File.read(file_path) if File.exists? (file_path)
    "(not found)"
  end

  def markdown(text)
    options = {
      link_attributes: { target: "_blank" },
      space_after_headers: true,
      fenced_code_blocks: true,
      prettify: true
    }

    extensions = {
      autolink: true,
      superscript: true,
      highlight: true,
      no_intra_emphasis: true,
      disable_indented_code_blocks: true
    }

    renderer = Redcarpet::Render::HTML.new(options)
    markdown = Redcarpet::Markdown.new(renderer, extensions)

    markdown.render(text).html_safe
  end

end