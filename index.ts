import {Clock, systemClock} from 'clock'

/**
 * Returns a Date object from the current clock time
 */
export function getDate(clock: Clock): Date {
  return new Date(clock.now())
}

/**
 * Returns the number of seconds since the Unix epoch
 */
export function getSSE(clock: Clock): number {
  return Math.round(clock.now() / 1000)
}

/**
 * An extended Clock with additional functionality
 */
export class ClockUtil implements Clock {
  clock: Clock

  /**
   * @param clock Defaults to system clock
   *
   */
  constructor(clock: Clock = systemClock) {
    this.clock = clock
  }

  /**
   * Returns the timestamp in milliseconds since the Unix epoch
   *
   */
  now (): number {
    return this.clock.now()
  }

  /**
   * Returns a Date object from the current clock time
   *
   */
  date (): Date {
    return getDate(this.clock)
  }

  /**
   * Returns the number of seconds since the Unix epoch
   *
   */
  nowSeconds (): number {
    return getSSE(this.clock)
  }
}

export default ClockUtil
