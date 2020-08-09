//회원가입 로직(어디서 부터 틀리는지 보기) ==> 분리함

// 회원가입 작동 
const postJoin = (Form) => {
    return fetch(" http://222.251.129.150", Form)
      .then(alert("1"))
      .then(this.props.history.push("/"))
      .catch(err => {
          throw alert("DB오류");
      })
  };
//  회원가입 할 때 정보들을 담기
const postInfo = (Form) =>{
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const body = {
      id : ID,
      email: Email,
      password: Password,
      name:userName, 
      sex:Sex,
      birth:Birth,
      phone:Phone 
    };
    fetch(Form(body))
      .then((res) => {
        console.log(res);
        if (res.load.loginSuccess) {
          props.history.push("/");
        } else {
          alert("0");
        }
      })
      .catch((err) => {
        console.log("DB오류");
      });
  };


};