const assert = require('assert')
const request = require('supertest')
const app = require('../index.js')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(false)
    })
})

describe('GET "/item"', ()=>{
    it('Something', (done)=>{
        let want = [
            {id: '1', name: 'Chanel Boy'},
            {id: '2', name: 'Hermes'}
        ]

        request(app).get('/item').expect(want, done)
    })
})