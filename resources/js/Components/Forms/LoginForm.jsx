import React from 'react'
import { Formik, Form } from 'formik'
import LoginInput from './Inputs/LoginInput'
import { Link } from '@inertiajs/react'

export default function LoginForm() {
  return (
    <div>
        <div className="login_wrap">
            <div className="login_1">
                <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="logo" />
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos inventore, suscipit maxime amet reprehenderit itaque, cumque aut nesciunt similique optio voluptas asperiores est quod vitae in natus soluta maiores.
                </span>
            </div>
            <div className="login_2">
                <div className="login_2_wrap">
                    <Formik>
                        {
                            (formik)=>(
                                <Form>
                                    <LoginInput 
                                       type="email"
                                       placeholder="Enter your Email"
                                       name="email"
                                    />
                                    <LoginInput 
                                       type="password"
                                       placeholder="Enter your password"
                                       name="password"
                                    />
                                    <button type='submit' className='blue_btn'>
                                        Log In
                                    </button>
                                </Form>
                            )
                        }
                    </Formik>
                    <Link href='' className='forgottenPassword'>
                        Forgot Password?
                    </Link>
                    <div className="sign_splitter"></div>
                    <button className='blue_btn open_signup'>
                        Creat Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
