function generateNormalRandom(mean, stdDev) { // математическое ожидание (mean) и стандартное отклонение (stdDev)
  var u1 = Math.random(); // Генерация случайной величины
  var u2 = Math.random();
  var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2); // Box-Muller transform

  // Преобразование в нормальное распределение с указанным мат. ожиданием и стандартным отклонением
  return z0 * stdDev + mean;
}


// Norminv
// https://m.blog.naver.com/raon_pgm/222930026665

// Horner's method using rest parameters
function hornerMethodRest(x, a0, ...args) {
    if (args.length === 0) return a0;
    return a0 + x * hornerMethodRest(x, ...args);
}

/*
// Horner's method
function hornerMethod(x, a0, a1) {
    return a0 + x * a1;
}

// Square root of 2 * PI
const Sqrt2Pi = Math.sqrt(2.0 * Math.PI);

// The Normal Cumulative Distribution Function using Polynomial Equation
function normcdf(x) {
    if (x < 0) return 1 - normcdf(-x);
    const k = 1 / (1 + 0.2316419 * x);
    const poly = k * (0.319381530 + k * (-0.356563782 + k * (1.781477937 + k * (-1.821255978 + 1.330274429 * k))));
    const approx = 1.0 - 1.0 / Sqrt2Pi * Math.exp(-0.5 * x * x) * poly;
    return approx;
}

// The Normal Cumulative Distribution Function using Horner's method
function normcdfHorner(x) {
    if (x < 0) return 1 - normcdfHorner(-x);
    const k = 1 / (1 + 0.2316419 * x);
    const poly = hornerMethodRest(k, 0.0, 0.319381530, -0.356563782, 1.781477937, -1.821255978, 1.330274429);
    const approx = 1.0 - 1.0 / Sqrt2Pi * Math.exp(-0.5 * x * x) * poly;
    return approx;
}*/

// Inverse of The Normal Cumulative Distribution Function using Beasley-Springer-Moro Algorithm and Horner's method
function norminv(x) {
    const a0 = 2.50662823884;
    const a1 = -18.61500062529;
    const a2 = 41.39119773534;
    const a3 = -25.44106049637;
    const b1 = -8.47351093090;
    const b2 = 23.08336743743;
    const b3 = -21.06224101826;
    const b4 = 3.13082909833;
    const c0 = 0.3374754822726147;
    const c1 = 0.9761690190917186;
    const c2 = 0.1607979714918209;
    const c3 = 0.0276438810333863;
    const c4 = 0.0038405729373609;
    const c5 = 0.0003951896511919;
    const c6 = 0.0000321767881768;
    const c7 = 0.0000002888167364;
    const c8 = 0.0000003960315187;

    const y = x - 0.5;
    if (y < 0.42 && y > -0.42) {
        const r = y * y;
        return y * hornerMethodRest(r, a0, a1, a2, a3) / hornerMethodRest(r, 1.0, b1, b2, b3, b4);
    } else {
        let r;
        if (y < 0) r = x;
        else r = 1.0 - x;
        const s = Math.log(-Math.log(r));
        const t = hornerMethodRest(s, c0, c1, c2, c3, c4, c5, c6, c7, c8);
        if (x > 0.5) return t;
        else return -t;
    }
}
