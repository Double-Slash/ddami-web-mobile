// membershipform api & url

const Membership_URL = "/user/join";

export function registerUser(submit) {
    const data = request("Post", Membership_URL, submit);
    return {
      type: String,
      load: data,
    };
  }


