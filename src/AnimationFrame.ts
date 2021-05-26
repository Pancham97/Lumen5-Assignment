/** @fileoverview Declaration of the custom requestAnimationFrame and cancelAnimationFrame methods */

interface ICallback {
  id?: number;
  callback: FrameRequestCallback;
}

export class AnimationFrame {
  frameRate = 60;
  frameInterval = Math.ceil(1000 / this.frameRate);
  callbackTracker: ICallback;

  constructor() {
    this.callbackTracker = {
      id: 0,
      callback: () => console.log('hello'),
    };
  }

  /**
   * Starts the animation based on the callback and optional delay
   * @param callback The callback method
   * @param delay Optional delay in ticks, not milliseconds
   * @returns An ID for the animated frame
   */
  requestAnimationFrame(callback: FrameRequestCallback, delay = 0) {
    let hasWaited = false;

    // If a delay is specified, call the callback after that delay
    if (delay > 0 && !hasWaited) {
      setTimeout(callback, delay * 1000);
      hasWaited = true;
    } else {
      const tickCounter = window.setTimeout(
        () => callback(performance.now()),
        // Using frameInterval instead of timeToCall to prevent frame drops
        this.frameInterval
      );

      return tickCounter;
    }

    return 0;
  }

  /**
   * Stops the animation based on the ID of the frame
   * @param id ID of the animated frame
   */
  cancelAnimationFrame(id: number) {
    clearTimeout(id as number);
  }
}
