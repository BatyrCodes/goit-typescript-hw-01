// Функция принимает строку и ничего не возвращает (void)
function showMessage(message: string): void {
  console.log(message);
}

// Функция принимает два числа и возвращает число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функция не возвращает значение, так как всегда выбрасывает ошибку (never)

function customError(): never {
  throw new Error("Error");
}
