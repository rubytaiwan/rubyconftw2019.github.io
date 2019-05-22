class Schedule < ActiveYaml::Base
  include ActiveHash::Associations
  set_root_path 'data'
  set_filename 'schedule'

  has_many :speakers

  def self.day_one
    where(day: 1)
  end

  def self.day_two
    where(day: 2)
  end

end

class Speaker < ActiveYaml::Base
  include ActiveHash::Associations
  set_root_path 'data'
  set_filename 'speaker'

  def self.sort_by_name
    all.sort_by { |speaker| speaker[:name] }
  end

end