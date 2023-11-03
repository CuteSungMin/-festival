import '../pageCss/SignUp.css'
import headerImg from '../img/headerImg.png'

const SignUp = () => {
  

    return (  
        <section className='SignUp'>
               <div className='w1500'>
                    <div className='SignUpHeader'>
                        <div><img src={headerImg}></img></div>
                        <h2>회원가입</h2>
                    </div>
                    <h3 className='titBox2'>회원가입</h3>
                    <div className='SignUpMain'>
                        <div className='labelBox'>
                            <label>이름</label>
                            <label>아이디</label>
                            <label>비밀번호</label>
                            <label>비밀번호 확인</label>
                            <label>생년월일</label>
                            <label>휴대전화</label>
                            <label>이메일</label>
                            <label>이용약관 동의</label>
                            <label>개인정보/선택정보</label>
                            <label>수집 및 이용 동의</label>
                        </div>
                        <div className='inputBox'>
                            <div className='inputDiv'>
                                <input type='text'></input>
                            </div>
                            <div className='inputDiv'>
                                <input type='text'></input><button>중복확인</button>
                                <p>*이용자ID의 길이는 8 ~ 16자 입니다.</p>
                            </div>
                            <div className='inputDiv'>
                                <input type='text' placeholder='8~16자 영문대소문,숫자,특수문'></input>
                            </div>
                            <div className='inputDiv'>
                                <input type='text'></input>
                            </div>
                            <div className='inputDiv'>
                                <input type="radio" name="y"></input><span>양력</span>
                                <input type="radio" name="y"></input><span>음력</span>
                            </div>

                        </div>
                       
                    </div>
                </div>
        </section>
    );
}
 
export default SignUp;