const avgMagnitude = (mags) => {
  let sum = 0;
  for (let i = 0; i < mags.length; i++) {
    sum += mags[i];
  }
  return Math.floor(sum / mags.length);
}

module.exports = { avgMagnitude }