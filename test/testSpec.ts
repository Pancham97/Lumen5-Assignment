import { AnimationFrame } from '../src/AnimationFrame';

describe('Animation frame', function () {
  it('should call the callback after a delay', function () {
    const animFrame = new AnimationFrame();

    const callback = jasmine.createSpy();
    animFrame.requestAnimationFrame(callback, 2);

    expect(animFrame.callbackTracker.size).toEqual(1);
  });

  it('should update the callback tracker delay value', function () {
    const animFrame = new AnimationFrame();

    const callback = jasmine.createSpy();
    animFrame.requestAnimationFrame(callback, 1);

    animFrame.callbackTracker.forEach((value) => {
      expect(value).toEqual(1);
    });
  });

  it('should handle negative values of delay', function () {
    const animFrame = new AnimationFrame();

    const callback = jasmine.createSpy();
    animFrame.requestAnimationFrame(callback, -10);

    animFrame.callbackTracker.forEach((value) => {
      expect(value).toEqual(0);
    });
  });
});
