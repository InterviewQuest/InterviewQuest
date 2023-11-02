function powerRule(mcq) {
  const terms = getRandomValue(3, 4, 0);
  var coefficients = [];
  var exponents = [];
  var expression = '';
  var answer = '';
  var formattedAnswer = '';
  for (var i = 0; i < terms; i++) {
    coefficients[i] = getRandomValue(0, 10, 0);
    exponents[i] = getRandomValue(0, 8, 0);
    while (coefficients[i] == 0) coefficients[i] = getRandomValue(0, 10, 0);
    while (exponents[i] == 0) exponents[i] = getRandomValue(0, 8, 0);

    if (i == 0) {
      if (Math.abs(coefficients[i]) == 1) {
        expression +=
          (Math.sign(coefficients[i]) == 1 ? '' : '-') +
          'x' +
          (exponents[i] == 1 ? '' : '<sup>' + exponents[i] + '</sup>');
        if (exponents[i] == 1) {
          answer += coefficients[i];
          formattedAnswer += coefficients[i];
        } else {
          answer += coefficients[i] * exponents[i] + 'x^' + (exponents[i] - 1);
          formattedAnswer +=
            coefficients[i] * exponents[i] +
            'x<sup>' +
            (exponents[i] - 1) +
            '</sup>';
        }
      } else {
        expression +=
          coefficients[i] +
          'x' +
          (exponents[i] == 1 ? '' : '<sup>' + exponents[i] + '</sup>');
        if (exponents[i] == 1) {
          answer += coefficients[i];
          formattedAnswer += coefficients[i];
        } else {
          answer +=
            coefficients[i] * exponents[i] +
            'x' +
            (exponents[i] - 1 == 1 ? '' : '^' + (exponents[i] - 1));
          formattedAnswer +=
            coefficients[i] * exponents[i] +
            'x' +
            (exponents[i] - 1 == 1
              ? ''
              : '<sup>' + (exponents[i] - 1) + '</sup>');
        }
      }
    } else {
      if (Math.abs(coefficients[i]) == 1) {
        expression +=
          (Math.sign(coefficients[i]) == 1 ? ' + ' : ' - ') +
          'x' +
          (exponents[i] == 1 ? '' : '<sup>' + exponents[i] + '</sup>');
        if (exponents[i] == 1) {
          answer += coefficients[i];
          formattedAnswer += coefficients[i];
        } else {
          answer +=
            (Math.sign(exponents[i]) == 1 ? ' + ' : ' - ') +
            Math.abs(exponents[i]) +
            'x' +
            (exponents[i] - 1 == 1 ? '' : '^' + (exponents[i] - 1));
          formattedAnswer +=
            (Math.sign(exponents[i]) == 1 ? ' + ' : ' - ') +
            Math.abs(exponents[i]) +
            'x' +
            (exponents[i] - 1 == 1
              ? ''
              : '<sup>' + (exponents[i] - 1) + '</sup>');
        }
      } else {
        expression +=
          (Math.sign(coefficients[i]) == 1 ? ' + ' : ' - ') +
          Math.abs(coefficients[i]) +
          'x' +
          (exponents[i] == 1 ? '' : '<sup>' + exponents[i] + '</sup>');
        if (exponents[i] == 1) {
          answer +=
            (Math.sign(coefficients[i]) == 1 ? ' + ' : ' - ') +
            Math.abs(coefficients[i]);
          formattedAnswer +=
            (Math.sign(coefficients[i]) == 1 ? ' + ' : ' - ') +
            Math.abs(coefficients[i]);
        } else {
          answer +=
            (Math.sign(coefficients[i] * exponents[i]) == 1 ? ' + ' : ' - ') +
            Math.abs(coefficients[i] * exponents[i]) +
            'x' +
            (exponents[i] - 1 == 1 ? '' : '^' + (exponents[i] - 1));
          formattedAnswer +=
            (Math.sign(coefficients[i] * exponents[i]) == 1 ? ' + ' : ' - ') +
            Math.abs(coefficients[i] * exponents[i]) +
            'x' +
            (exponents[i] - 1 == 1
              ? ''
              : '<sup>' + (exponents[i] - 1) + '</sup>');
        }
      }
    }
  }

  const tailing = getRandomValue(0, 20, 0);
  if (tailing != 0) {
    if (expression.length > 0)
      expression +=
        ' ' + (Math.sign(tailing) ? '+' : '-') + ' ' + Math.abs(tailing);
    else expression += (Math.sign(tailing) ? '' : '-') + Math.abs(tailing);
  }

  expression = 'f(x) = ' + expression + ". Find f'(x).";
  currentAnswer = [answer];
  if (mcq) currentPossibleAnswers = generateMCQAnswers(answer, true);
  else currentPossibleAnswers = ['shortresponse'];
  currentExplanation = `We can use the power rule to find the derivative of each term, then add them together. The power rule states that the derivative of x<sup>n</sup> is n * x<sup>n - 1</sup>. Therefore, f'(x) = ${formattedAnswer}.`;
  return expression;
}
