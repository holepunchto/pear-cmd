'use strict'
const test = require('brittle')
const { command } = require('paparam')
const cmd = require('..')

test('returns paparam command instance', (t) => {
  const res = cmd(['-v'])
  const Command = command('dummy').constructor
  t.is(res.flags.v, true)
  t.ok(res instanceof Command)
})
