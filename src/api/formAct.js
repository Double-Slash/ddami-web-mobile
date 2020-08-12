// membershipform api & url

const Membership_URL = "/user/join";

export function registerUser(onsubmit) {
    const data = request("Post", Membership_URL + "/", onsubmit);
    return {
      type: json,
      load: data,
    };
  }


