function timeToWalk(steps, stepInM, speedKmH) {
    let distanceInM = steps * stepInM;
    let speedMS = (speedKmH * 1000) / 3600;
    let restInSec = Math.floor(distanceInM / 500) * 60;
    let time = distanceInM / speedMS + restInSec;
    let hours = Math.floor(time / 3600).toString().padStart(2, 0);
    time -= hours * 3600;
    let minutes = Math.floor(time / 60).toString().padStart(2, 0);
    time -= minutes * 60;
    let seconds = Math.round(time).toString().padStart(2, 0);
    return `${hours}:${minutes}:${seconds}`;
}
console.log(timeToWalk(2564, 0.70, 5.5));