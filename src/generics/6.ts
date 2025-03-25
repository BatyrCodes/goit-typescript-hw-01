type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const formParams: Params = {
  email: "userInfo1@gamil.com",
  firstName: "Jack",
  lastName: "Smith",
  phone: "010101010",
};

console.log(formParams);
