//import "./Header.css"

function HeaderProfile(props){
    let Logout = ()=>{
        props.logout()
    }
    return (
        <div className="header__profile header-profile">
            <img src="" alt=""/>
            <div>{props.login}</div>
            <button onClick={Logout}>logout</button>
        </div>
    );
}

export default HeaderProfile;