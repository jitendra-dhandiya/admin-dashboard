// For SignUp & Register User

export function createUserAPI(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://admin-dashboard-api-mu.vercel.app/api/user/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function loginUserAPI(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://admin-dashboard-api-mu.vercel.app/api/user/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function signOutUser(userid) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
