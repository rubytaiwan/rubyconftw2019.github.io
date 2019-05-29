module ViewHelpers
  RendererOptions = {
    link_attributes: { target: "_blank" },
    space_after_headers: true,
    fenced_code_blocks: true,
    prettify: true,
    hard_wrap: true
  }

  MarkDownExtensions = {
    autolink: true,
    superscript: true,
    highlight: true,
    no_intra_emphasis: true,
    disable_indented_code_blocks: true
  }
  Renderer = Redcarpet::Render::HTML.new(RendererOptions)
  MarkDown = Redcarpet::Markdown.new(Renderer, MarkDownExtensions)

  def root_url
    config[:protocol] + config[:host]
  end

  def inline_svg(name)
    root = Middleman::Application.root
    file_path = "#{root}/source/images/mixins/#{name}.svg"
    return File.read(file_path) if File.exists? (file_path)
    "(not found)"
  end

  def format_date(date)
    date = Date.parse(date)
    date.strftime("%b %d, %Y")
  end

  def markdown(text)
    MarkDown.render(text).html_safe
  end

end