import React, { useCallback, useState } from "react";
import "./app.css";
// import { User } from "./User";
import {
    LoginSocialGoogle,
    LoginSocialFacebook,
    LoginSocialInstagram,
    LoginSocialTwitter,
    IResolveParams,
} from "reactjs-social-login";

import {
    FacebookLoginButton,
    GoogleLoginButton,
    InstagramLoginButton,
    TwitterLoginButton,
} from "react-social-login-buttons";

const REDIRECT_URI = "http://localhost:3000/";

const SocialLogin = () => {
    const [provider, setProvider] = useState("");
    const [profile, setProfile] = useState<any>();

    const onLoginStart = useCallback(() => {
        alert("login start");
    }, []);

    const onLogoutSuccess = useCallback(() => {
        setProfile(null);
        setProvider("");
        alert("logout success");
    }, []);

    // const onLogout = useCallback(() => {}, []);

    return (
        <>
            {/* {provider && profile && (
                <User
                    provider={provider}
                    profile={profile}
                    onLogout={onLogout}
                />
            )} */}
            <div className={`App ${provider && profile ? "hide" : ""}`}>
                {/* <h1 className="title">ReactJS Social Login</h1> */}
                <LoginSocialFacebook
                    appId={process.env.REACT_APP_FB_APP_ID || ""}
                    fieldsProfile={
                        "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                    }
                    onLoginStart={onLoginStart}
                    onLogoutSuccess={onLogoutSuccess}
                    redirect_uri={REDIRECT_URI}
                    onResolve={({ provider, data }: IResolveParams) => {
                        setProvider(provider);
                        setProfile(data);
                    }}
                    onReject={(err) => {
                        console.log(err);
                    }}>
                    <FacebookLoginButton />
                </LoginSocialFacebook>

                <LoginSocialGoogle
                    client_id={process.env.REACT_APP_GG_APP_ID || ""}
                    onLoginStart={onLoginStart}
                    redirect_uri={REDIRECT_URI}
                    scope="openid profile email"
                    discoveryDocs="claims_supported"
                    access_type="offline"
                    onResolve={({ provider, data }: IResolveParams) => {
                        setProvider(provider);
                        setProfile(data);
                    }}
                    onReject={(err) => {
                        console.log(err);
                    }}>
                    <GoogleLoginButton />
                </LoginSocialGoogle>

                <LoginSocialInstagram
                    client_id={process.env.REACT_APP_INSTAGRAM_APP_ID || ""}
                    client_secret={
                        process.env.REACT_APP_INSTAGRAM_APP_SECRET || ""
                    }
                    redirect_uri={REDIRECT_URI}
                    onLoginStart={onLoginStart}
                    onLogoutSuccess={onLogoutSuccess}
                    onResolve={({ provider, data }: IResolveParams) => {
                        setProvider(provider);
                        setProfile(data);
                    }}
                    onReject={(err: any) => {
                        console.log(err);
                    }}>
                    <InstagramLoginButton />
                </LoginSocialInstagram>

                <LoginSocialTwitter
                    client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY || ""}
                    // client_secret={process.env.REACT_APP_TWITTER_V2_APP_SECRET || ''}
                    redirect_uri={REDIRECT_URI}
                    onLoginStart={onLoginStart}
                    onLogoutSuccess={onLogoutSuccess}
                    onResolve={({ provider, data }: IResolveParams) => {
                        setProvider(provider);
                        setProfile(data);
                    }}
                    onReject={(err: any) => {
                        console.log(err);
                    }}>
                    <TwitterLoginButton />
                </LoginSocialTwitter>
            </div>
        </>
    );
};

export default SocialLogin;
