var solution = function(isBadVersion: any) {
  // this algo call an 'api' to get a boolean value (false or true)
  // with this value we verify its the desired number is a bad version
  // this is made with Binary Search to optimize the baddest case when you
  // would have a lot of version to verify.
  return function(n: number): number {
      let left = 1, right = n
      while(left < right) {
          // calculate where the middle of all version is
          const mid = left + Math.floor((right-left)/2)
          // verify if the middle already is a bad version by calling the API
          if(isBadVersion(mid)) {
              // if is a bad version we declare that this is the most near bad version
              right = mid
          } else {
              // if not we need to step the left one more position to right
              left = mid + 1
          }
      }
      // the main return here is left because left is the var that
      // will be step to the first position of the bad version, the first appearence
      // of a bad version.
      return left
  };
};