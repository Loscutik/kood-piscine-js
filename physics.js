/*
Isaac Newton has forgotten his laws of physics and needs your help to animate an object on his game.

He must use the Second Law of Motion that states, "when the forces acting on an object are unbalanced, the object will accelerate."

This acceleration is dependent upon the force that acts upon the object and the object's mass.

So he wants to know what the acceleration of that object is, depending on its properties:

mass of xx
Δv of xx
Δt of xx
force of xx
distance xx
time xx
Create a function named getAcceleration that calculates the acceleration of a given object. For example:

{
  f: 10,
  m: 5,
  Δv: 100,
  Δt: 50,
  t:1,
  d: 10
}
If it is not possible to calculate it, it must return the string "impossible".

Formulas
a = F/m
a = Δv/Δt
a = 2d/t^2

a = acceleration
m = mass
F = force
Δv = final velocity - initial velocity
Δt = final time - initial time
d = distance
t = time
*/

const getAcceleration = (obj) => {
    const a = obj.f / obj.m;
    if (isNaN(a)) return "impossible";
    return a;
}

console.log(getAcceleration({
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t: 1,
    d: 10
}));

