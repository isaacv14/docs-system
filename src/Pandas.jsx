export default function PandasDocs() {
  const handleCopy = (e) => {
    const btn = e.currentTarget;
    const pre = btn.closest('.code-block').querySelector('pre');
    const text = pre.innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '✓ copiado';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'copiar';
        btn.classList.remove('copied');
      }, 1800);
    });
  };

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Syne:wght@400;600;800&display=swap" 
        rel="stylesheet" 
      />
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #0d0f14;
          --surface: #151820;
          --surface2: #1c2030;
          --border: #252a3a;
          --accent: #5affc2;
          --accent2: #ff6b6b;
          --accent3: #ffd93d;
          --accent4: #a78bfa;
          --text: #e2e8f0;
          --muted: #6b7694;
          --code-bg: #0a0c10;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Syne', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(90,255,194,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(90,255,194,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .wrapper {
          max-width: 860px;
          margin: 0 auto;
          padding: 60px 24px 100px;
          position: relative;
          z-index: 1;
        }

        header {
          margin-bottom: 60px;
          border-left: 3px solid var(--accent);
          padding-left: 20px;
        }

        .badge {
          display: inline-block;
          background: rgba(90,255,194,0.1);
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          padding: 4px 12px;
          border-radius: 2px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        h1 {
          font-size: clamp(32px, 6vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        h1 span { color: var(--accent); }

        .subtitle {
          margin-top: 12px;
          color: var(--muted);
          font-size: 15px;
          font-weight: 400;
        }

        .toc {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 56px;
        }

        .toc a {
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 6px 14px;
          border-radius: 2px;
          text-decoration: none;
          transition: all 0.2s;
          letter-spacing: 0.5px;
        }

        .toc a:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(90,255,194,0.06);
        }

        .section {
          margin-bottom: 48px;
          animation: fadeUp 0.5s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .section-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          background: rgba(90,255,194,0.08);
          padding: 3px 8px;
          border-radius: 2px;
        }

        h2 {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.3px;
        }

        .desc {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 16px;
          font-weight: 400;
        }

        .desc strong {
          color: var(--text);
          font-weight: 600;
        }

        .code-block {
          background: var(--code-bg);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }

        .code-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 16px;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
        }

        .code-lang {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--muted);
          text-transform: uppercase;
        }

        .copy-btn {
          background: none;
          border: 1px solid var(--border);
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.5px;
        }

        .copy-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .copy-btn.copied {
          border-color: var(--accent);
          color: var(--accent);
        }

        pre {
          padding: 20px 20px;
          overflow-x: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 1.8;
          tab-size: 4;
        }

        .kw  { color: #a78bfa; }   
        .fn  { color: #5affc2; }   
        .st  { color: #ffd93d; }   
        .cm  { color: #3d4a6b; font-style: italic; }  
        .nm  { color: #ff6b6b; }   
        .at  { color: #60b8ff; }   
        .op  { color: #6b7694; }   

        .output-block {
          background: rgba(90,255,194,0.03);
          border: 1px solid rgba(90,255,194,0.12);
          border-left: 3px solid var(--accent);
          border-radius: 0 4px 4px 0;
          padding: 14px 18px;
          margin-top: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #8892b0;
          line-height: 1.7;
          white-space: pre;
        }

        .output-label {
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
          opacity: 0.7;
        }

        .out-head { color: var(--accent); font-weight: 600; }
        .out-val  { color: #e2e8f0; }
        .out-idx  { color: var(--muted); }

        .tip {
          display: flex;
          gap: 12px;
          background: rgba(167,139,250,0.05);
          border: 1px solid rgba(167,139,250,0.15);
          border-radius: 4px;
          padding: 14px 16px;
          margin-top: 12px;
          font-size: 13px;
          color: #b8c0d9;
          line-height: 1.6;
        }

        .tip-icon { font-size: 16px; flex-shrink: 0; }

        .method-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 10px;
          margin-top: 12px;
        }

        .method-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 14px;
          transition: border-color 0.2s;
        }

        .method-card:hover { border-color: var(--accent); }

        .method-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--accent);
          margin-bottom: 4px;
        }

        .method-desc {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.5;
        }

        hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 48px 0;
        }

        footer {
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 1px;
          padding-top: 40px;
          border-top: 1px solid var(--border);
        }

        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

        @media (max-width: 600px) {
          .wrapper { padding: 40px 16px 80px; }
        }
      `}} />

      <div className="wrapper">

        <header>
          <div className="badge">Python · Data Engineering</div>
          <h1>Pandas <span>&</span> CSV<br />Guía Esencial</h1>
          <p className="subtitle">Todo lo que necesitás saber para leer, explorar y guardar archivos CSV con Pandas.</p>
        </header>

        <nav className="toc">
          <a href="#s1">01 · Instalación</a>
          <a href="#s2">02 · Leer CSV</a>
          <a href="#s3">03 · Explorar datos</a>
          <a href="#s4">04 · Seleccionar</a>
          <a href="#s5">05 · Filtrar</a>
          <a href="#s6">06 · Limpiar datos</a>
          <a href="#s7">07 · Guardar CSV</a>
          <a href="#s8">08 · Referencia rápida</a>
        </nav>

        {/* 01 */}
        <div className="section" id="s1">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>Instalación e importación</h2>
          </div>
          <p className="desc">Primero instalá Pandas con pip. Luego se importa siempre con el alias <strong>pd</strong> por convención.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">bash</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="nm">$</span> pip install pandas` }}></pre>
          </div>
          <div className="code-block" style={{ marginTop: '10px' }}>
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="kw">import</span> pandas <span class="kw">as</span> pd   <span class="cm"># alias estándar</span>` }}></pre>
          </div>
        </div>

        {/* 02 */}
        <div className="section" id="s2">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Leer un archivo CSV</h2>
          </div>
          <p className="desc">La función <strong>pd.read_csv()</strong> carga el archivo y lo convierte en un <strong>DataFrame</strong> — la estructura principal de Pandas (como una tabla).</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Básico</span>
df = pd.<span class="fn">read_csv</span>("datos.csv")

<span class="cm"># Con opciones útiles</span>
df = pd.<span class="fn">read_csv</span>(
    "datos.csv",
    sep=";",          <span class="cm"># si el separador es punto y coma</span>
    encoding="utf-8", <span class="cm"># para caracteres especiales (ñ, tildes)</span>
    index_col=0      <span class="cm"># usar primera columna como índice</span>
)` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">💡</span>
            <span>Si tu CSV tiene tildes o caracteres en español y sale raro, probá con <code>encoding="latin-1"</code> o <code>encoding="utf-8-sig"</code>.</span>
          </div>
        </div>

        {/* 03 */}
        <div className="section" id="s3">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>Explorar los datos</h2>
          </div>
          <p className="desc">Después de cargar el CSV, estos métodos te dan un resumen rápido de qué contiene.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `df.<span class="fn">head</span>()       <span class="cm"># primeras 5 filas</span>
df.<span class="fn">tail</span>(3)      <span class="cm"># últimas 3 filas</span>
df.<span class="fn">shape</span>        <span class="cm"># (filas, columnas)</span>
df.<span class="fn">columns</span>      <span class="cm"># nombre de las columnas</span>
df.<span class="fn">dtypes</span>       <span class="cm"># tipo de dato por columna</span>
df.<span class="fn">info</span>()       <span class="cm"># resumen general + nulos</span>
df.<span class="fn">describe</span>()   <span class="cm"># estadísticas: min, max, media...</span>` }}></pre>
          </div>
          
          <div className="output-block" dangerouslySetInnerHTML={{ __html: `<span class="output-label">→ ejemplo: df.shape</span>
<span class="out-val">(<span class="nm" style="color:#ff6b6b">1000</span>, <span class="nm" style="color:#ff6b6b">5</span>)  <span class="cm"># 1000 filas, 5 columnas</span></span>` }}></div>

          <div className="output-block" style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: `<span class="output-label">→ ejemplo: df.head()</span>
<span class="out-idx">   </span><span class="out-head">nombre    edad  ciudad   salario</span>
<span class="out-idx">0  </span><span class="out-val">Ana       28    Panamá   1200</span>
<span class="out-idx">1  </span><span class="out-val">Luis      34    Colón    980</span>
<span class="out-idx">2  </span><span class="out-val">María     25    David    1100</span>` }}></div>
        </div>

        {/* 04 */}
        <div className="section" id="s4">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2>Seleccionar columnas y filas</h2>
          </div>
          <p className="desc">Pandas tiene dos formas principales de seleccionar datos: <strong>por nombre</strong> (loc) y <strong>por posición numérica</strong> (iloc).</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># ── Seleccionar columnas ──────────────────────</span>
df["nombre"]              <span class="cm"># una columna → Serie</span>
df[["nombre", "edad"]]    <span class="cm"># varias columnas → DataFrame</span>

<span class="cm"># ── loc: por nombre ───────────────────────────</span>
df.<span class="at">loc</span>[0]                  <span class="cm"># fila con índice 0</span>
df.<span class="at">loc</span>[0, "nombre"]       <span class="cm"># fila 0, columna "nombre"</span>
df.<span class="at">loc</span>[0:2, "nombre":"edad"]  <span class="cm"># rango de filas y columnas</span>

<span class="cm"># ── iloc: por posición numérica ───────────────</span>
df.<span class="at">iloc</span>[0]                 <span class="cm"># primera fila</span>
df.<span class="at">iloc</span>[0, 1]             <span class="cm"># fila 0, columna 1</span>
df.<span class="at">iloc</span>[:5, :3]           <span class="cm"># primeras 5 filas, 3 columnas</span>` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">⚡</span>
            <span><strong>loc</strong> usa nombres/etiquetas. <strong>iloc</strong> usa números como si fuera una lista de Python. En la mayoría de casos usarás <strong>loc</strong>.</span>
          </div>
        </div>

        {/* 05 */}
        <div className="section" id="s5">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2>Filtrar filas con condiciones</h2>
          </div>
          <p className="desc">Podés filtrar filas usando condiciones booleanas, igual que un <code>WHERE</code> en SQL.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Filtro simple</span>
mayores = df[df["edad"] &gt; 25]

<span class="cm"># Múltiples condiciones</span>
resultado = df[
    (df["edad"] &gt; 25) &amp; (df["ciudad"] == "Panamá")
]

<span class="cm"># Condición OR</span>
resultado = df[
    (df["ciudad"] == "Panamá") | (df["ciudad"] == "Colón")
]

<span class="cm"># Buscar valores en una lista (como IN en SQL)</span>
ciudades = ["Panamá", "David", "Colón"]
df[df["ciudad"]].<span class="fn">isin</span>(ciudades)

<span class="cm"># Buscar texto parcial (contains)</span>
df[df["nombre"]].<span class="fn">str</span>.<span class="fn">contains</span>("Mar")` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">⚠️</span>
            <span>Siempre usá paréntesis <code>()</code> al combinar condiciones con <code>&amp;</code> (AND) o <code>|</code> (OR). Sin ellos, Python puede lanzar errores.</span>
          </div>
        </div>

        {/* 06 */}
        <div className="section" id="s6">
          <div className="section-header">
            <span className="section-num">06</span>
            <h2>Limpiar datos</h2>
          </div>
          <p className="desc">Casi todos los CSVs del mundo real tienen valores vacíos o duplicados. Pandas te da herramientas para manejarlos.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># ── Valores nulos (NaN) ───────────────────────</span>
df.<span class="fn">isnull</span>().<span class="fn">sum</span>()       <span class="cm"># cuántos nulos hay por columna</span>
df.<span class="fn">dropna</span>()              <span class="cm"># eliminar filas con algún nulo</span>
df.<span class="fn">fillna</span>(0)            <span class="cm"># reemplazar nulos con 0</span>
df.<span class="fn">fillna</span>("sin dato")   <span class="cm"># reemplazar con texto</span>

<span class="cm"># Rellenar con la media de esa columna</span>
media = df["salario"].<span class="fn">mean</span>()
df["salario"].<span class="fn">fillna</span>(media, inplace=<span class="kw">True</span>)

<span class="cm"># ── Duplicados ────────────────────────────────</span>
df.<span class="fn">duplicated</span>().<span class="fn">sum</span>()   <span class="cm"># cuántos duplicados hay</span>
df.<span class="fn">drop_duplicates</span>()    <span class="cm"># eliminar duplicados</span>

<span class="cm"># ── Renombrar columnas ────────────────────────</span>
df.<span class="fn">rename</span>(columns={"nombre": "name"}, inplace=<span class="kw">True</span>)

<span class="cm"># ── Cambiar tipo de dato ──────────────────────</span>
df["edad"] = df["edad"].<span class="fn">astype</span>(<span class="fn">int</span>)
df["fecha"] = pd.<span class="fn">to_datetime</span>(df["fecha"])` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">💡</span>
            <span><code>inplace=True</code> modifica el DataFrame original sin necesidad de reasignarlo. Sin eso, deberías hacer: <code>df = df.dropna()</code>.</span>
          </div>
        </div>

        {/* 07 */}
        <div className="section" id="s7">
          <div className="section-header">
            <span className="section-num">07</span>
            <h2>Guardar a CSV</h2>
          </div>
          <p className="desc">Cuando terminás de procesar los datos, podés exportar el DataFrame de vuelta a un CSV.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Básico (incluye índice por defecto)</span>
df.<span class="fn">to_csv</span>("resultado.csv")

<span class="cm"># Sin guardar el índice (más limpio)</span>
df.<span class="fn">to_csv</span>("resultado.csv", index=<span class="kw">False</span>)

<span class="cm"># Con encoding para español</span>
df.<span class="fn">to_csv</span>(
    "resultado.csv",
    index=<span class="kw">False</span>,
    encoding="utf-8-sig"  <span class="cm"># compatible con Excel</span>
)` }}></pre>
          </div>
        </div>

        {/* 08 */}
        <div className="section" id="s8">
          <div className="section-header">
            <span className="section-num">08</span>
            <h2>Referencia rápida</h2>
          </div>
          <p className="desc">Los métodos más usados en el día a día.</p>
          <div className="method-grid">
            <div className="method-card">
              <div className="method-name">pd.read_csv()</div>
              <div className="method-desc">Leer un archivo CSV y convertirlo en DataFrame</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.head(n)</div>
              <div className="method-desc">Primeras n filas (por defecto 5)</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.info()</div>
              <div className="method-desc">Resumen general: columnas, tipos, nulos</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.describe()</div>
              <div className="method-desc">Estadísticas de columnas numéricas</div>
            </div>
            <div className="method-card">
              <div className="method-name">df["col"]</div>
              <div className="method-desc">Seleccionar una columna</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.loc[ ]</div>
              <div className="method-desc">Acceso por nombre de fila/columna</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.iloc[ ]</div>
              <div className="method-desc">Acceso por posición numérica</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.dropna()</div>
              <div className="method-desc">Eliminar filas con valores nulos</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.fillna(val)</div>
              <div className="method-desc">Reemplazar nulos con un valor</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.drop_duplicates()</div>
              <div className="method-desc">Eliminar filas duplicadas</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.rename(columns={"{"}{"}"})</div>
              <div className="method-desc">Renombrar columnas</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.to_csv()</div>
              <div className="method-desc">Exportar el DataFrame a un archivo CSV</div>
            </div>
          </div>
        </div>

        <footer>
          PANDAS BÁSICO · DATA ENGINEERING · PYTHON
        </footer>

      </div>
    </>
  );
}