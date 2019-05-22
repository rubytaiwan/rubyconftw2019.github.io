Ruby Conf Taiwan 2019
===

## Development

Development environment requirements :

- Ruby 2.4.1
- middleman 4.2

```
$ gem install middleman
```

### Install dependencies
```
$ bundle install
```

### Starting Server
```
$ middleman
```

### Build
```
$ middleman build --clean
```

## CSS framework
[Bulma: Free, open source, & modern CSS framework based on Flexbox](https://bulma.io/)

## Update

### Speakers

Speakers' information are stored under `speaker.yml`, please fill out the following for every speaker:

```
- schedule_id:
  order:
  keynote:
  name:
  title:
  avatar:
  twitter:
  github:
  lang:
  subject:
  summary: |-
```
For example,
```
- schedule_id: 3
  order: 1
  keynote: true
  name: 'Yukihiro Matsumoto (Matz)'
  title: 'Creator of Ruby, Heroku'
  avatar: 'speakers/matz.jpg'
  twitter: https://twitter.com/yukihiro_matz
  github: https://github.com/matz
  lang: en
  subject: 'TBD'
  summary: |-
```

- `schedule_id`: refer to `schedule.yml` and fill in the `id` of which the speaker will present his talk
- `order`: `1` for 1001 Auditorium; `2` for 1002 Auditorium
- `keynote`: `true` for keynote speakers only; otherwise, can be omitted

### Schedule

```
- id: 1
  day: 1
  time: 9:00 am
  type: event
  agenda: Registration
```

- `day`: `1` for Day One; `2` for Day Two
- `time`: starting time of the session (12 hour format)
- `type`: `event` for conference's activites; `talk` for lecture
- `agenda`: description of the session; omitted when `type: talk`
