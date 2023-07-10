import { Formik } from 'formik';
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";
function Login(props){
    return props.isAuth?
         <Navigate to="/home" replace={true}/>:
   (
        <div>
            <h1>Login</h1>
            <LoginForm login = {props.login}/>
        </div>
    );
}

let LoginForm = (props)=>{

    return (<Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            }else if (values.login>20)
              {
                errors.email = 'Login is to long';
            }
            if (!values.password){
                errors.password = 'Required';
            }else if (values.password>50)
            {
                errors.password = 'Password is to long';
            }

            return errors;

        }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
            props.login(values.email, values.password, values.rememberMe, setStatus);
            console.log(setStatus)
            setSubmitting(false);
        }}
    >
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              status,
              /* and other goodies */
          }) => (

            <form style={{display: 'flex', flexDirection: 'column', rowGap:'10px'}} onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={"Email"}
                />
                {errors.email && touched.email && errors.email}
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder={"Password"}
                />
                {errors.password && touched.password && errors.password}
                <div>
                    <input
                        type="checkbox"
                        name="rememberMe"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rememberMe}
                    />remember me
                </div>
                {status && <div>{status.error}</div>       }
                <button type="submit" disabled={isSubmitting}>
                    Sign in
                </button>
            </form>
        )}
    </Formik>)
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isLogin,
})
export default connect(mapStateToProps, {login})(Login);