function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplatesRows: "1fr auto 1fr"
      }}
    >
      <header style={{ padding: "26px 24px" }}>
        <img src="/images/logo1.svg" />
      </header>
      <main>
        <div style={{ padding: "0px 24px" }}>
          <h1>
            <p style={styles.headingtext}>Let’s help you </p>
            <p style={{ fontSize: 32, ontWeight: "700" }}>
              get your wears intact
            </p>
          </h1>
          <p
            style={{
              marginTop: 13,
              color: "rgba(114, 114, 114, 1)",
              fontSize: 14
            }}
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
                      width: "70%",
                      outline: "none"
                    }}
                  />
                  <button
                    style={{
                      background:
                        "radial-gradient(125.41% 427.67% at 28.78% -16.27%, #10D7B5 0%, #1B57CA 100%)",
                      padding: 13,
                      borderRadius: 16,
                      outline: "none",
                      whiteSpace: "nowrap",
                      position: "absolute",
                      right: 20
                    }}
                  >
                    Request Access
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div style={{ position: "relative", marginTop: 30 }}>
            <div>
              <img src="/images/img1.svg" />
            </div>
            <div style={{ position: "absolute", top: 80, right: -24 }}>
              <img src="/images/img2.svg" />
            </div>
          </div>
        </div>
      </main>
      <footer
        style={{
          textAlign: "center",
          position: "relative",
          bottom: 0,
          top: 120
        }}
      >
        <p>Copyright © 2022 Swags All Rights Reserved</p>
      </footer>
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
