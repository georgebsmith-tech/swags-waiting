import React, { useState } from "react";
function App() {
  const [email, setEmail] = useState();
  const handleRequest = async (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplatesRows: "1fr auto 1fr"
      }}
    >
      <div style={{ position: "absolute", zIndex: -1, left: "13vw", top: 80 }}>
        <div style={{}}>
          <img src="/images/bg1.svg" alt="background" />
        </div>
        <div style={{ position: "absolute", top: 20, right: 40 }}>
          <img src="/images/bg3.svg" alt="background" />
        </div>
        <div style={{}}>
          <img src="/images/bg2.svg" alt="background" />
        </div>
      </div>
      <div style={{ position: "absolute", zIndex: -1, right: "13vw", top: 80 }}>
        <div style={{}}>
          <img src="/images/Ellipse 3.svg" alt="background" />
        </div>
        <div style={{ position: "absolute", top: 20, right: 40 }}>
          <img src="/images/Ellipse 4.svg" alt="background" />
        </div>
      </div>
      <header className="page-padding ">
        <img src="/images/logo1.svg" alt="logo" className="logo mobile" />
        <img src="/images/logo2.svg" alt="logo" className="logo desktop" />
        <div
          style={{
            borderBottom: "2px solid rgba(238, 238, 238, 1)",
            marginTop: 40
          }}
        />
      </header>
      <main>
        <div className="page-padding container">
          <section className="cta">
            <h1 className="cta-text ">
              <p>Let’s help you </p>
              <p>get your wears intact</p>
            </h1>
            <p
              style={{
                marginTop: 13,
                color: "rgba(114, 114, 114, 1)",
                fontSize: 14
              }}
              className="cta-text-text"
            >
              Be the first to know when we get to your location, send us your
              email address to gain access.
            </p>
            <div>
              <div style={{ marginTop: 32, position: "relative" }}>
                <form>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="email"
                      placeholder="Your Email address"
                      style={{
                        padding: "17px 40px 17px 20px",
                        borderRadius: 16,
                        backgroundColor: "#F4F4F4",
                        border: "1px solid rgba(237, 235, 235, 1)",
                        width: "80%",
                        outline: "none"
                      }}
                    />
                    <button
                      onClick={handleRequest}
                      style={{
                        background:
                          "radial-gradient(125.41% 427.67% at 28.78% -16.27%, #10D7B5 0%, #1B57CA 100%)",
                        padding: 13,
                        borderRadius: 16,
                        outline: "none",
                        border: "1px solid transparent",
                        whiteSpace: "nowrap",
                        position: "absolute",
                        right: 20,
                        color: "#fff"
                      }}
                    >
                      Request Access
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <section className="images-wrapper">
            <div className="image-wrapper">
              <img src="/images/img1.svg" alt="brand one" />
            </div>
            <div
              style={{ position: "absolute", top: 80, right: -24 }}
              className="mobile image-move"
            >
              <img src="/images/img2.svg" alt="brand two" />
            </div>

            <div className="desktop  image-move image-wrapper">
              <img src="/images/img3.svg" alt="brand two" />
            </div>
          </section>
        </div>
      </main>

      <footer
        style={{
          textAlign: "center",
          position: "relative",
          bottom: -150
        }}
      >
        <p>Copyright © 2022 Swags All Rights Reserved</p>
      </footer>
      <div style={{ position: "absolute", bottom: -80, left: 30 }}>
        <img src="/images/ring.svg" alt="brand two" />
      </div>
      <div
        style={{ position: "absolute", right: "10vw", top: 150 }}
        className="desktop"
      >
        <img src="/images/straight-write.svg" alt="brand two" />
      </div>
    </div>
  );
}

export default App;

const styles = {
  headingtext: {
    fontSize: 32,
    fontWeight: "700"
  }
};
