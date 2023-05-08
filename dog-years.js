/* 
Someone once said that a human year is equal to 7 dog years.

Create a function named dogYears, that accepts the name of a planet, and the age of the dog in seconds. Your function should return the age of the dog on that planet in dog years.

earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
mercury: orbital period 0.2408467 Earth years.
venus: orbital period 0.61519726 Earth years.
mars: orbital period 1.8808158 Earth years.
jupiter: orbital period 11.862615 Earth years.
saturn: orbital period 29.447498 Earth years.
uranus: orbital period 84.016846 Earth years.
neptune: orbital period 164.79132 Earth years.
If you were told that a dog was 1,000,000,000 seconds old, you should calculate that the dog would be 221.82 Earth-years old.

You will have to format the number so that the result is rounded like the example above.
*/

const dogYears = (planet, dogAge) => {
    const DOG_YEARS = 7;
    const EARTH_YEAR_IN_SECONDS = 31557600;
    const planetsYearsInSeconds = {
        earth: 1 * EARTH_YEAR_IN_SECONDS,
        mercury: 0.2408467 * EARTH_YEAR_IN_SECONDS,
        venus: 0.61519726 * EARTH_YEAR_IN_SECONDS,
        mars: 1.8808158 * EARTH_YEAR_IN_SECONDS,
        jupiter: 11.862615 * EARTH_YEAR_IN_SECONDS,
        saturn: 29.447498 * EARTH_YEAR_IN_SECONDS,
        uranus: 84.016846 * EARTH_YEAR_IN_SECONDS,
        neptune: 164.79132 * EARTH_YEAR_IN_SECONDS,
    }



    return (dogAge / planetsYearsInSeconds[planet] * DOG_YEARS).toFixed(2);
}

console.log(dogYears('earth', 1_000_000_000));