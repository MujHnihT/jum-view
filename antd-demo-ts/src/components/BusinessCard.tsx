import React from "react";
import ReactDOM from "react-dom";
import Icon, { CompassOutlined, HomeFilled, MailFilled, PhoneOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';


function BusinessCard({
    
    headerColor = "#fff",
    headerBg = "#4285F4",
    headerStyle = {},
    shadow = true,
    style = {},
    ...props
  }) {
    return (
      <div
        className="card-business"
        style={{
          background: "#fff",
          width: "90mm",
          height: "50mm",
          borderRadius: "5px",
          boxShadow: shadow !== false ? "#9E9E9E 0px 0px 10px" : "",
          ...style
        }}
        {...props}
      >
        <div
          style={{
            background: headerBg,
            height: "12mm",
            padding: 10,
            paddingTop: 15,
            paddingLeft: 20,
            position: "relative",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            ...headerStyle
          }}
        >
          <img
            width={"60mm"}
            height={"60mm"}
            alt="avatar"
            style={{
              position: "absolute",
              right: 15,
              top: 5,
              borderRadius: "100%",
              float: "right",
              background: "#fff"
            }}
            src={"https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-1/330189067_1224117681538548_7164572300257346993_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=VFaZagb97RoAX9ElbgZ&_nc_ht=scontent-hkt1-2.xx&oh=00_AfCILgj-0NhzD1EGY81-8d8wc-1Oxu7esnPe28-yTv8yHw&oe=642C818E"}
          />
          {/* https://pbs.twimg.com/profile_images/1215572708336865280/_8lVTX2z_400x400.jpg */}
          <h1
            style={{
              fontSize: "17pt",
              margin: 0,
              marginRight: -50,
              color: headerColor
            }}
          >
            Toàn
          </h1>
          {/* {people.tagline && ( */}
            <p
              style={{
                margin: 0,
                fontSize: "10pt",
                marginRight: -50,
                color: "#ccc"
              }}
            >
              <span>Ăn hại</span>
            </p>
          {/* )} */}
        </div>
        <div style={{ padding: 10, paddingLeft: 20, position: "relative" }}>
          {/* <img
            alt="qr-code"
            style={{
              position: "absolute",
              right: 15,
              top: 10,
              float: "right"
            }}
            src="/qr.png"
          /> */}
          <ul
            style={{
              fontSize: "10pt",
              listStyle: "none",
              lineHeight: "15pt",
              margin: 0,
              padding: 0
            }}
          >
            {/* {people.title && ( */}
              <li>
                <StarOutlined/> Ăn hại
              </li>
            {/* )} */}
            {/* {people.phone && ( */}
              <li>
                <PhoneOutlined /> 0378130034
              </li>
            {/* )} */}
            {/* {people.mail && ( */}
              <li>
                <MailFilled /> toanvan
              </li>
            {/* )} */}
            {/* {people.socials && people.socials.length > 0 && ( */}
              <li>
                <ShareAltOutlined />{" "}
                {/* {people.socials.map(([type, text]) => ( */}
                  <span style={{ marginRight: 5 }}>https://www.facebook.com/toan.van.77312</span>
                {/* ))} */}
              </li>
            {/* )} */}
            {/* {people.location && ( */}
              <li>
                <CompassOutlined /> Lagi
              </li>
            {/* )} */}
          </ul>
        </div>
      </div>
    );
  }

  export default BusinessCard;
