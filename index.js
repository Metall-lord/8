let SaStAvLaYsHiEs = [{"ImYa": "NaChAlO","PoMosHnIKSaStAvLaYsHiEs":[{"FaMiLImYa": 1},{"FaMiLImYa": 2}]},{"ImYa": "PrOdOlGeNiE","PoMosHnIKSaStAvLaYsHiEs":[{"FaMiLImYa": 3},{"FaMiLImYa": 1}]},{"ImYa": "KoNeTz","PoMosHnIKSaStAvLaYsHiEs": [{"FaMiLImYa": 2},{"FaMiLImYa": 5}]}];
var value = 1; var filteredArray = SaStAvLaYsHiEs.filter(SaStAvLaYsHiE => SaStAvLaYsHiE.PoMosHnIKSaStAvLaYsHiEs.some(PoMosHnIKSaStAvLaYsHiE => PoMosHnIKSaStAvLaYsHiE.FaMiLImYa === value)).map(SaStAvLaYsHiE =>
{let n = Object.assign({}, SaStAvLaYsHiE, {'PoMosHnIKSaStAvLaYsHiEs': SaStAvLaYsHiE.PoMosHnIKSaStAvLaYsHiEs.filter(PoMosHnIKSaStAvLaYsHiE => PoMosHnIKSaStAvLaYsHiE.FaMiLImYa === value)})
return n;})
console.log(filteredArray)