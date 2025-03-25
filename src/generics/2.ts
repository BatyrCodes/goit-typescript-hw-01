type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, keyof AllType>>(
  top: T,
  bottom: T
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Пример использования
const obj1 = { name: "Box", position: 1, color: "red", weight: 10 };
const obj2 = { name: "Ball", position: 2, color: "blue", weight: 5 };

const result = compare(obj1, obj2);
console.log(result);
// { name: "Box", color: "red", position: 2, weight: 5 }
