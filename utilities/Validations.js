const validation = data => {
  if (!data.email && !data.password) {
    return {
      value: false,
      error: 'Email & Password are Mandatory!'
    };
  }

  if (!data.email) {
    return {
      value: false,
      error: 'Email is Mandatory!'
    };
  } else if (!data.password) {
    return {
      value: false,
      error: 'Password is Mandatory!'
    };
  }

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(data.email) === false) {
    console.log('Email is Not Correct');
    return {
      value: false,
      error: 'Email is not correct!'
    };
  }

  return {
    value: true
  };
};

export default validation;

export const signupValidations = data => {
  if (!data.name && !data.email && !data.password && !data.confirmPassword) {
    return {
      value: false,
      error: 'Following Fields are Mandatory!'
    };
  }

  if (!data.name) {
    return {
      value: false,
      error: 'Name is Mandatory!'
    };
  } else if (!data.email) {
    return {
      value: false,
      error: 'Email is Mandatory!'
    };
  } else if (!data.password) {
    return {
      value: false,
      error: 'Password is Mandatory!'
    };
  } else if (!data.confirmPassword) {
    return {
      value: false,
      error: 'Password does not match!'
    };
  } else if (data.password !== data.confirmPassword) {
    return {
      value: false,
      error: 'Password does not match!'
    };
  }

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(data.email) === false) {
    console.log('Email is Not Correct');
    return {
      value: false,
      error: 'Email is not correct!'
    };
  }

  return {
    value: true
  };
};
