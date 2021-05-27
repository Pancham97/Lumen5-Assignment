/** @fileoverview Declaration of the custom requestAnimationFrame and cancelAnimationFrame methods */

export class AnimationFrame {
  frameRate = 60;
  frameInterval = Math.ceil(1000 / this.frameRate);

  /** Tracker for all callbacks and their delays */
  callbackTracker = new Map();

  /**
   * Starts the animation based on the callback and optional delay
   * @param callback The callback method
   * @param delay Optional delay in ticks, not milliseconds
   * @returns An ID for the animated frame
   */
  requestAnimationFrame(callback: FrameRequestCallback, delay = 0) {
    let hasWaited = false;

    // To prevent negative delays
    delay = Math.max(0, delay);

    if (!this.callbackTracker.has(callback)) {
      this.callbackTracker.set(callback, delay);
    }

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
