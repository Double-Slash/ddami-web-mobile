import React from 'react';
import styled from 'styled-components';

const Button = styled.input`
width: 80px;
height: 40px;
margin-left:50px;
float:center;
clear:both;
`;
const Reply = styled.textarea`
width: 40%;
height:10px;
padding-bottom: 40px;
resize: none;
border: none;
font-size: 10px;
border-bottom: solid 2px #ababab;
background-color:#D8D8D8;
text-align:center;
border-radius: 10px 10px 10px 10px;
float:center;
margin-right:40px;
`;

const Profile = styled.div`
width: 30px;
height: 30px; 
border: 1px solid black;
border-radius: 70%;
float:left;
margin-right:40px;
margin-left:20px;
background-color:#585858;
`;
/**댓글 기능 동작 */  

/* const state = {
    write_replys:[]
    write_reply:""
    b = "댓글작성"
}*/

  const Changestate = (e) => {
      this.setState({
        write_reply: e.target.value,
      });//댓글 지정
    }; 
  
  const Enter = (e) => {
      if (e.key === "rs_button") {
        if (!this.state.write_reply) {
          e.preventDefault();
        } else {
          this.Replychange();
        }//덧글작성 버튼을 눌러야 작성됨
      }
    };
/*  
    const Replychange = (e) => {
      this.setState({
          write_replys: this.state.write_reply.concat({
          num: this.num,
          write_reply: this.state.write_reply,
        }),
        write_reply: "",
      });
      this.num += 1;// 댓글내용을 반환해줌
    }; 
    onClick={
              !this.state.comment
                ? (e) => {
                    e.preventDefault();
                  }
                  :  Changestate //댓글에 아무것도 입력되지 않았을 때는 댓글이 엔터되는걸 막아줌(버튼에 안에? 아니면 따로 컴포넌트?)
    return(
      <Profile/>{write_replys}//프로필,댓글 내용 반환
    )
                  */
function Replyspace(){
    return (
              <div name="reply">
              <Profile></Profile>
                <Reply type="textarea" rows='3'placeholder='댓글을 입력해주세요.'name='write_reply' onChange={Changestate} 
            onKeyUp={Enter}/>
                <Button type="button" value='덧글 작성' name='rs_button'/>
              </div>        
      );
  }
/*댓글에 아무것도 입력되지 않았을 때는 댓글이 엔터되는걸 막아줌*/
  export default Replyspace;
  