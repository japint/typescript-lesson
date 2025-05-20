let userData: unknown;
let trueData: string;

userData = "now";
userData = 5;

// additional checking
if (typeof userData === "string") {
  trueData = userData;
}

// data type never, use for utility function
// use for error generated functions, generate logs

// never

function generateErrorCode(description: string, errorCode: number): never {
  throw { message: description, code: errorCode };
}

// another example
function infiniteLopp(): never {
  while (true) {}
}

generateErrorCode("Error happened", 502);
infiniteLopp();
