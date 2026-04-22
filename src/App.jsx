export default function App() {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
        textAlign: "left",
      }}
    >
      {/* 🔥 HERO (WOW) */}
      <section
        style={{
          marginBottom: "80px",
          padding: "40px",
          borderRadius: "16px",
          background:
            "linear-gradient(135deg, rgba(170,59,255,0.15), rgba(255,100,100,0.1))",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
          Interaktivt lyssystem
        </h1>

        <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
          Et eksperimentelt designprojekt der undersøger hvordan lys kan skabe
          interaktion i undervisning gennem kropslig og rumlig feedback.
        </p>
      </section>

      {/* PROBLEM */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Problem</h2>
        <p>
          Mange elever deltager ikke aktivt i undervisningen. Hvordan kan vi gøre
          det mere trygt og inkluderende at stille spørgsmål?
        </p>
      </section>

      {/* PROCES */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Proces</h2>

        <p>
          Vi arbejdede iterativt med prototyper og eksperimenter med lys, form og
          teknologi.
        </p>

        {/* IDE */}
        <h3>Idé og skitser</h3>
        <div style={gridStyle}>
          <img className="hover-img" src="/1st_sketch.jpg" style={imgStyle} />
          <img className="hover-img" src="/sketch.jpg" style={imgStyle} />
        </div>

        <p className="caption">
          Tidlige idéer og skitser hvor vi undersøgte koncept og form.
        </p>

        {/* FIRST LIGHT */}
        <h3>Første lys</h3>
        <div style={gridStyle}>
          <img className="hover-img" src="/1st_light.jpg" style={imgStyle} />
          <img className="hover-img" src="/1sttest.jpg" style={imgStyle} />
          <img className="hover-img" src="/play.jpg" style={imgStyle} />
        </div>

        <p className="caption">
          Første forsøg med lys og teknologi.
        </p>

        {/* PROTOTYPE */}
        <h3>Prototype udvikling</h3>
        <div style={gridStyle}>
          <img className="hover-img" src="/prototypedismantled.jpg" style={imgStyle} />
          <img className="hover-img" src="/prototype2.jpg" style={imgStyle} />
          <img className="hover-img" src="/prototype2light.jpg" style={imgStyle} />
        </div>

        <p className="caption">
          Iterationer hvor vi testede form, lys og funktionalitet.
        </p>

        {/* LENS */}
        <h3>Eksperiment med linse</h3>
        <div style={gridStyle}>
          <img className="hover-img" src="/kodaklens.jpg" style={imgStyle} />
          <img className="hover-img" src="/lens.jpg" style={imgStyle} />
        </div>

        <p className="caption">
          Brug af kameralinse forbedrede lyskontrol og fokus markant.
        </p>

        {/* FINAL */}
        <h3>Final prototype</h3>
        <img className="hover-img" src="/prototypelight1.jpg" style={imgStyle} />

        <p className="caption">
          Den endelige prototype med forbedret lys og funktionalitet.
        </p>
      </section>

      {/* RESULTAT */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Resultat</h2>
        <p>
          En interaktiv løsning hvor elever kan kommunikere diskret via lys.
        </p>
      </section>
    </div>
  );
}