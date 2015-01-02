expert = require 'chai'
  .expect

greet = require '../'

describe 'greet', ->
  it 'should greet a person by name,', ->
    expect 'hello, foo'
      .to.eq greet 'foo'

  it 'should greet a person fliratiously if drunk.', ->
    drunk = true
    expect 'hello foo, you look sexy today'
      .to.eq greet 'foo', drunk

