import 'mocha'
import { expect } from 'chai'
import { systemClock, constantClock, Clock } from  'clock'
import { ClockUtil } from './.'
import { stub, SinonStub } from 'sinon'

describe('ClockUtils', () => {
  const epochClock = constantClock()
  let testClock: (time: number) => Clock


  beforeEach(() => {
    testClock = (time) => ({
      now: stub().returns(time)
    })
  })

  it('takes a Clock constructor arg', () => {
    const c = new ClockUtil(epochClock)
    expect(c.clock).to.equal(epochClock)
  })

  it('defaults to system clock', () => {
    const c = new ClockUtil()
    expect(c.clock).to.equal(systemClock)
  })

  describe('when time is 123456', () => {
    let instance: ClockUtil
    let stubNow: SinonStub
    beforeEach(() => {
      stubNow = stub().returns(123456)
      instance = new ClockUtil({now: stubNow})
    })

    describe('#now', () => {
      it('returns current time', () => {
        expect(instance.now()).to.equal(123456)
        expect(stubNow.calledOnce).to.equal(true)
      })
    })

    describe('#date', () => {
      it('returns Date object', () => {
        expect(instance.date()).to.be.instanceof(Date)
        expect(stubNow.calledOnce).to.equal(true)
      })
      it('returned Date object is set to the current time', () => {
        expect(instance.date().valueOf()).to.equal(123456)
      })
    })

    describe('#nowSeconds', () => {
      it('returns current time rounded to seconds', () => {
        expect(instance.nowSeconds()).to.equal(123)
        expect(stubNow.calledOnce).to.equal(true)
      })
    })

  })
})