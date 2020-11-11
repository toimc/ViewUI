// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import iView from './iview'

declare global {
  interface Window {
    WebKitMutationObserver: any;
    MozMutationObserver: any;
    mozRequestAnimationFrame: any;
    msRequestAnimationFrame: any;
  }
}

export default iView
export as namespace iView;

export * from './iview.components'
