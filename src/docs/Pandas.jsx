export default function PandasDocs() {
  const handleCopy = (e) => {
    const btn = e.currentTarget;
    const pre = btn.closest('.code-block').querySelector('pre');
    const text = pre.innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '\u2713 copiado';
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
          <div className="badge">Python &middot; Data Engineering</div>
          <h1>Pandas <span>&amp;</span><br />Gu&iacute;a Esencial</h1>
          <p className="subtitle">Desde la creaci&oacute;n de DataFrames hasta la transformaci&oacute;n, limpieza y exportaci&oacute;n de datos &mdash; todo lo b&aacute;sico para Data Engineering.</p>
        </header>

        <nav className="toc">
          <a href="#s1">01 &middot; Instalaci&oacute;n</a>
          <a href="#s2">02 &middot; Crear DataFrames</a>
          <a href="#s3">03 &middot; Leer datos</a>
          <a href="#s4">04 &middot; Explorar</a>
          <a href="#s5">05 &middot; Seleccionar</a>
          <a href="#s6">06 &middot; Filtrar</a>
          <a href="#s7">07 &middot; Limpiar</a>
          <a href="#s8">08 &middot; Transformar</a>
          <a href="#s9">09 &middot; Combinar</a>
          <a href="#s10">10 &middot; Fechas</a>
          <a href="#s11">11 &middot; Guardar</a>
          <a href="#s12">12 &middot; Referencia</a>
        </nav>

        {/* 01 */}
        <div className="section" id="s1">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>Instalaci&oacute;n e importaci&oacute;n</h2>
          </div>
          <p className="desc">Instal&aacute; Pandas con pip. Luego se importa siempre con el alias <strong>pd</strong> por convenci&oacute;n.</p>
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
            <pre dangerouslySetInnerHTML={{ __html: `<span class="kw">import</span> pandas <span class="kw">as</span> pd   <span class="cm"># alias est&aacute;ndar</span>` }}></pre>
          </div>
        </div>

        {/* 02 */}
        <div className="section" id="s2">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Crear DataFrames y Series</h2>
          </div>
          <p className="desc">No siempre los datos vienen de un archivo. Pod&eacute;s crear un <strong>DataFrame</strong> desde diccionarios, listas o arrays de NumPy. Un <strong>Series</strong> es una columna &uacute;nica.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Desde un diccionario (m&aacute;s usado)</span>
data = {
    <span class="st">"nombre"</span>: [<span class="st">"Ana"</span>, <span class="st">"Luis"</span>, <span class="st">"Mar&iacute;a"</span>, <span class="st">"Pedro"</span>],
    <span class="st">"edad"</span>:   [<span class="nm">28</span>, <span class="nm">34</span>, <span class="nm">25</span>, <span class="nm">42</span>],
    <span class="st">"ciudad"</span>: [<span class="st">"Panam&aacute;"</span>, <span class="st">"Col&oacute;n"</span>, <span class="st">"David"</span>, <span class="st">"Panam&aacute;"</span>],
    <span class="st">"salario"</span>: [<span class="nm">1200</span>, <span class="nm">980</span>, <span class="nm">1100</span>, <span class="nm">1500</span>]
}
df = pd.<span class="fn">DataFrame</span>(data)

<span class="cm"># Desde lista de listas</span>
filas = [
    [<span class="st">"Ana"</span>, <span class="nm">28</span>, <span class="st">"Panam&aacute;"</span>],
    [<span class="st">"Luis"</span>, <span class="nm">34</span>, <span class="st">"Col&oacute;n"</span>],
]
df = pd.<span class="fn">DataFrame</span>(filas, columns=[<span class="st">"nombre"</span>, <span class="st">"edad"</span>, <span class="st">"ciudad"</span>])

<span class="cm"># Desde un array NumPy</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np
arr = np.<span class="fn">array</span>([[<span class="nm">1</span>, <span class="nm">2</span>], [<span class="nm">3</span>, <span class="nm">4</span>]])
df = pd.<span class="fn">DataFrame</span>(arr, columns=[<span class="st">"A"</span>, <span class="st">"B"</span>])

<span class="cm"># Series: una columna sola</span>
edades = pd.<span class="fn">Series</span>([<span class="nm">28</span>, <span class="nm">34</span>, <span class="nm">25</span>], name=<span class="st">"edad"</span>)` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">💡</span>
            <span>El diccionario es la forma m&aacute;s intuitiva: cada clave es un nombre de columna y su valor es una lista con los datos de esa columna.</span>
          </div>
        </div>

        {/* 03 */}
        <div className="section" id="s3">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>Leer datos de distintos formatos</h2>
          </div>
          <p className="desc">Pandas lee directo de los formatos m&aacute;s comunes en Data Engineering. El resultado siempre es un <strong>DataFrame</strong>.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># CSV (el m&aacute;s com&uacute;n)</span>
df = pd.<span class="fn">read_csv</span>(<span class="st">"datos.csv"</span>)
df = pd.<span class="fn">read_csv</span>(
    <span class="st">"datos.csv"</span>,
    sep=<span class="st">";"</span>,          <span class="cm"># separador punto y coma</span>
    encoding=<span class="st">"utf-8"</span>,   <span class="cm"># para caracteres especiales</span>
    index_col=<span class="nm">0</span>       <span class="cm"># usar primera columna como &iacute;ndice</span>
)

<span class="cm"># JSON</span>
df = pd.<span class="fn">read_json</span>(<span class="st">"datos.json"</span>)

<span class="cm"># Excel (necesita openpyxl o xlrd)</span>
df = pd.<span class="fn">read_excel</span>(<span class="st">"datos.xlsx"</span>, sheet_name=<span class="st">"Hoja1"</span>)

<span class="cm"># Parquet (r&aacute;pido y comprimido)</span>
df = pd.<span class="fn">read_parquet</span>(<span class="st">"datos.parquet"</span>)` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">💡</span>
            <span>Si tu CSV tiene tildes o caracteres en espa&ntilde;ol y sale raro, prob&aacute; con <code>encoding="latin-1"</code> o <code>encoding="utf-8-sig"</code>.</span>
          </div>
          <div className="tip">
            <span className="tip-icon">⚡</span>
            <span><strong>Parquet</strong> es el formato preferido en Data Engineering: es comprimido, schematizado y mucho m&aacute;s r&aacute;pido que CSV para archivos grandes.</span>
          </div>
        </div>

        {/* 04 */}
        <div className="section" id="s4">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2>Explorar los datos</h2>
          </div>
          <p className="desc">Despu&eacute;s de cargar o crear un DataFrame, estos m&eacute;todos te dan un resumen r&aacute;pido de qu&eacute; contiene.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `df.<span class="fn">head</span>()            <span class="cm"># primeras 5 filas</span>
df.<span class="fn">tail</span>(<span class="nm">3</span>)           <span class="cm"># &uacute;ltimas 3 filas</span>
df.<span class="fn">sample</span>(<span class="nm">5</span>)          <span class="cm"># 5 filas aleatorias</span>
df.<span class="fn">shape</span>              <span class="cm"># (filas, columnas)</span>
df.<span class="fn">columns</span>            <span class="cm"># nombre de las columnas</span>
df.<span class="fn">dtypes</span>             <span class="cm"># tipo de dato por columna</span>
df.<span class="fn">info</span>()             <span class="cm"># resumen general + nulos</span>
df.<span class="fn">describe</span>()         <span class="cm"># estad&iacute;sticas: min, max, media...</span>
df[<span class="st">"ciudad"</span>].<span class="fn">value_counts</span>()  <span class="cm"># frecuencia de valores</span>
df[<span class="st">"ciudad"</span>].<span class="fn">nunique</span>()      <span class="cm"># cantidad de valores &uacute;nicos</span>` }}></pre>
          </div>
          
          <div className="output-block" dangerouslySetInnerHTML={{ __html: `<span class="output-label">&rarr; ejemplo: df.shape</span>
<span class="out-val">(<span class="nm" style="color:#ff6b6b">1000</span>, <span class="nm" style="color:#ff6b6b">5</span>)  <span class="cm"># 1000 filas, 5 columnas</span></span>` }}></div>

          <div className="output-block" style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: `<span class="output-label">&rarr; ejemplo: df.head()</span>
<span class="out-idx">   </span><span class="out-head">nombre    edad  ciudad   salario</span>
<span class="out-idx">0  </span><span class="out-val">Ana       28    Panam&aacute;   1200</span>
<span class="out-idx">1  </span><span class="out-val">Luis      34    Col&oacute;n     980</span>
<span class="out-idx">2  </span><span class="out-val">Mar&iacute;a     25    David     1100</span>
<span class="out-idx">3  </span><span class="out-val">Pedro     42    Panam&aacute;   1500</span>` }}></div>
        </div>

        {/* 05 */}
        <div className="section" id="s5">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2>Seleccionar columnas y filas</h2>
          </div>
          <p className="desc">Pandas tiene dos formas principales de seleccionar datos: <strong>por nombre</strong> (loc) y <strong>por posici&oacute;n num&eacute;rica</strong> (iloc).</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># --- Seleccionar columnas ---</span>
df[<span class="st">"nombre"</span>]              <span class="cm"># una columna &rarr; Serie</span>
df[[<span class="st">"nombre"</span>, <span class="st">"edad"</span>]]    <span class="cm"># varias columnas &rarr; DataFrame</span>

<span class="cm"># --- loc: por nombre ---</span>
df.<span class="at">loc</span>[<span class="nm">0</span>]                  <span class="cm"># fila con &iacute;ndice 0</span>
df.<span class="at">loc</span>[<span class="nm">0</span>, <span class="st">"nombre"</span>]       <span class="cm"># fila 0, columna "nombre"</span>
df.<span class="at">loc</span>[<span class="nm">0</span>:<span class="nm">2</span>, <span class="st">"nombre"</span>:<span class="st">"edad"</span>]  <span class="cm"># rango de filas y columnas</span>

<span class="cm"># --- iloc: por posici&oacute;n num&eacute;rica ---</span>
df.<span class="at">iloc</span>[<span class="nm">0</span>]                 <span class="cm"># primera fila</span>
df.<span class="at">iloc</span>[<span class="nm">0</span>, <span class="nm">1</span>]             <span class="cm"># fila 0, columna 1</span>
df.<span class="at">iloc</span>[:<span class="nm">5</span>, :<span class="nm">3</span>]           <span class="cm"># primeras 5 filas, 3 columnas</span>` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">⚡</span>
            <span><strong>loc</strong> usa nombres/etiquetas. <strong>iloc</strong> usa n&uacute;meros como si fuera una lista de Python. En la mayor&iacute;a de casos usar&aacute;s <strong>loc</strong>.</span>
          </div>
        </div>

        {/* 06 */}
        <div className="section" id="s6">
          <div className="section-header">
            <span className="section-num">06</span>
            <h2>Filtrar filas con condiciones</h2>
          </div>
          <p className="desc">Pod&eacute;s filtrar filas usando condiciones booleanas, igual que un <code>WHERE</code> en SQL.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Filtro simple</span>
mayores = df[df[<span class="st">"edad"</span>] &gt; <span class="nm">25</span>]

<span class="cm"># M&uacute;ltiples condiciones (AND)</span>
resultado = df[
    (df[<span class="st">"edad"</span>] &gt; <span class="nm">25</span>) &amp; (df[<span class="st">"ciudad"</span>] == <span class="st">"Panam&aacute;"</span>)
]

<span class="cm"># Condici&oacute;n OR</span>
resultado = df[
    (df[<span class="st">"ciudad"</span>] == <span class="st">"Panam&aacute;"</span>) | (df[<span class="st">"ciudad"</span>] == <span class="st">"Col&oacute;n"</span>)
]

<span class="cm"># Buscar valores en una lista (como IN en SQL)</span>
ciudades = [<span class="st">"Panam&aacute;"</span>, <span class="st">"David"</span>, <span class="st">"Col&oacute;n"</span>]
df[df[<span class="st">"ciudad"</span>].<span class="fn">isin</span>(ciudades)]

<span class="cm"># Buscar texto parcial</span>
df[df[<span class="st">"nombre"</span>].<span class="at">str</span>.<span class="fn">contains</span>(<span class="st">"Mar"</span>)]` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">⚠️</span>
            <span>Siempre us&aacute; par&eacute;ntesis <code>()</code> al combinar condiciones con <code>&amp;</code> (AND) o <code>|</code> (OR). Sin ellos, Python puede lanzar errores.</span>
          </div>
        </div>

        {/* 07 */}
        <div className="section" id="s7">
          <div className="section-header">
            <span className="section-num">07</span>
            <h2>Limpiar datos</h2>
          </div>
          <p className="desc">Casi todos los datos del mundo real tienen valores vac&iacute;os, duplicados o formatos incorrectos. Pandas te da herramientas para manejarlos.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># --- Valores nulos (NaN) ---</span>
df.<span class="fn">isnull</span>().<span class="fn">sum</span>()          <span class="cm"># cu&aacute;ntos nulos por columna</span>
df.<span class="fn">dropna</span>()                 <span class="cm"># eliminar filas con alg&uacute;n nulo</span>
df.<span class="fn">fillna</span>(<span class="nm">0</span>)               <span class="cm"># reemplazar nulos con 0</span>
df.<span class="fn">fillna</span>(<span class="st">"sin dato"</span>)      <span class="cm"># reemplazar con texto</span>

<span class="cm"># Rellenar con la media de esa columna</span>
media = df[<span class="st">"salario"</span>].<span class="fn">mean</span>()
df[<span class="st">"salario"</span>].<span class="fn">fillna</span>(media, inplace=<span class="kw">True</span>)

<span class="cm"># --- Duplicados ---</span>
df.<span class="fn">duplicated</span>().<span class="fn">sum</span>()      <span class="cm"># cu&aacute;ntos duplicados hay</span>
df.<span class="fn">drop_duplicates</span>()       <span class="cm"># eliminar duplicados</span>

<span class="cm"># --- Renombrar columnas ---</span>
df.<span class="fn">rename</span>(columns={<span class="st">"nombre"</span>: <span class="st">"name"</span>}, inplace=<span class="kw">True</span>)

<span class="cm"># --- Cambiar tipo de dato ---</span>
df[<span class="st">"edad"</span>] = df[<span class="st">"edad"</span>].<span class="fn">astype</span>(<span class="fn">int</span>)
df[<span class="st">"fecha"</span>] = pd.<span class="fn">to_datetime</span>(df[<span class="st">"fecha"</span>])

<span class="cm"># --- Reemplazar valores espec&iacute;ficos ---</span>
df[<span class="st">"ciudad"</span>] = df[<span class="st">"ciudad"</span>].<span class="fn">replace</span>(<span class="st">"CDE"</span>, <span class="st">"Ciudad de Panam&aacute;"</span>)

<span class="cm"># --- Recortar valores extremos (outliers) ---</span>
df[<span class="st">"salario"</span>] = df[<span class="st">"salario"</span>].<span class="fn">clip</span>(lower=<span class="nm">0</span>, upper=<span class="nm">10000</span>)` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">💡</span>
            <span><code>inplace=True</code> modifica el DataFrame original sin necesidad de reasignarlo. Sin eso, deber&iacute;as hacer: <code>df = df.dropna()</code>.</span>
          </div>
        </div>

        {/* 08 */}
        <div className="section" id="s8">
          <div className="section-header">
            <span className="section-num">08</span>
            <h2>Transformar datos</h2>
          </div>
          <p className="desc">El coraz&oacute;n de Data Engineering: agrupar, resumir y reorganizar datos para obtener informaci&oacute;n &uacute;til.</p>

          <p className="desc"><strong>groupby + agg</strong> &mdash; Agrupar filas y aplicar funciones de agregaci&oacute;n (como GROUP BY en SQL).</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Agrupar por ciudad y calcular el salario promedio</span>
df.<span class="fn">groupby</span>(<span class="st">"ciudad"</span>)[<span class="st">"salario"</span>].<span class="fn">mean</span>()

<span class="cm"># M&uacute;ltiples agregaciones</span>
df.<span class="fn">groupby</span>(<span class="st">"ciudad"</span>).<span class="fn">agg</span>({
    <span class="st">"salario"</span>: [<span class="st">"mean"</span>, <span class="st">"sum"</span>, <span class="st">"count"</span>],
    <span class="st">"edad"</span>: <span class="st">"max"</span>
})

<span class="cm"># groupby + agg con nombre personalizado</span>
df.<span class="fn">groupby</span>(<span class="st">"ciudad"</span>).<span class="fn">agg</span>(
    salario_promedio=(<span class="st">"salario"</span>, <span class="st">"mean"</span>),
    empleados=(<span class="st">"nombre"</span>, <span class="st">"count"</span>)
)` }}></pre>
          </div>
          <div className="output-block" dangerouslySetInnerHTML={{ __html: `<span class="output-label">&rarr; ejemplo: groupby("ciudad")["salario"].mean()</span>
<span class="out-idx">ciudad        </span><span class="out-head"></span>
<span class="out-idx">Col&oacute;n        </span><span class="out-val"> 992.5</span>
<span class="out-idx">David         </span><span class="out-val">1100.0</span>
<span class="out-idx">Panam&aacute;        </span><span class="out-val">1350.0</span>` }}></div>

          <p className="desc" style={{ marginTop: '20px' }}><strong>pivot_table</strong> &mdash; Tabla din&aacute;mica estilo Excel.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `pd.<span class="fn">pivot_table</span>(
    df,
    values=<span class="st">"salario"</span>,
    index=<span class="st">"ciudad"</span>,
    columns=<span class="st">"sexo"</span>,
    aggfunc=<span class="st">"mean"</span>
)` }}></pre>
          </div>

          <p className="desc" style={{ marginTop: '20px' }}><strong>apply</strong> &mdash; Aplicar una funci&oacute;n a cada fila o columna.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Crear una columna categ&oacute;rica</span>
df[<span class="st">"categoria"</span>] = df[<span class="st">"edad"</span>].<span class="fn">apply</span>(
    <span class="kw">lambda</span> x: <span class="st">"joven"</span> <span class="kw">if</span> x &lt; <span class="nm">30</span> <span class="kw">else</span> <span class="st">"adulto"</span>
)` }}></pre>
          </div>
        </div>

        {/* 09 */}
        <div className="section" id="s9">
          <div className="section-header">
            <span className="section-num">09</span>
            <h2>Combinar DataFrames</h2>
          </div>
          <p className="desc">En Data Engineering es muy com&uacute;n combinar datos de m&uacute;ltiples or&iacute;genes. Pandas ofrece dos formas principales: <strong>merge</strong> y <strong>concat</strong>.</p>

          <p className="desc"><strong>merge</strong> &mdash; Combina DataFrames como un JOIN en SQL.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Dos DataFrames con una columna en com&uacute;n</span>
df_ventas = pd.<span class="fn">DataFrame</span>({
    <span class="st">"id"</span>: [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>],
    <span class="st">"total"</span>: [<span class="nm">100</span>, <span class="nm">200</span>, <span class="nm">150</span>]
})
df_clientes = pd.<span class="fn">DataFrame</span>({
    <span class="st">"id"</span>: [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">4</span>],
    <span class="st">"nombre"</span>: [<span class="st">"Ana"</span>, <span class="st">"Luis"</span>, <span class="st">"Mar&iacute;a"</span>]
})

<span class="cm"># INNER JOIN por defecto</span>
pd.<span class="fn">merge</span>(df_ventas, df_clientes, on=<span class="st">"id"</span>)

<span class="cm"># LEFT JOIN</span>
pd.<span class="fn">merge</span>(df_ventas, df_clientes, on=<span class="st">"id"</span>, how=<span class="st">"left"</span>)

<span class="cm"># con diferentes nombres de columna</span>
pd.<span class="fn">merge</span>(df1, df2, left_on=<span class="st">"empleado_id"</span>, right_on=<span class="st">"id"</span>)` }}></pre>
          </div>

          <p className="desc" style={{ marginTop: '20px' }}><strong>concat</strong> &mdash; Apila DataFrames vertical o horizontalmente.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Apilar verticalmente (m&aacute;s filas)</span>
df_total = pd.<span class="fn">concat</span>([df_enero, df_febrero, df_marzo])

<span class="cm"># Apilar horizontalmente (m&aacute;s columnas)</span>
df_completo = pd.<span class="fn">concat</span>([df_info, df_salarios], axis=<span class="nm">1</span>)` }}></pre>
          </div>

          <div className="tip">
            <span className="tip-icon">⚡</span>
            <span>Pens&aacute; en <strong>merge</strong> como JOIN de SQL y <strong>concat</strong> como UNION. Con <code>how="left"</code>, <code>"right"</code>, <code>"inner"</code>, <code>"outer"</code> control&aacute;s qu&eacute; filas se conservan.</span>
          </div>
        </div>

        {/* 10 */}
        <div className="section" id="s10">
          <div className="section-header">
            <span className="section-num">10</span>
            <h2>Fechas y tiempos</h2>
          </div>
          <p className="desc">Trabajar con fechas es clave en Data Engineering. Pandas tiene un soporte robusto para columnas de tipo datetime.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># Convertir columna a datetime</span>
df[<span class="st">"fecha"</span>] = pd.<span class="fn">to_datetime</span>(df[<span class="st">"fecha"</span>])

<span class="cm"># Extraer componentes con dt accessor</span>
df[<span class="st">"a&ntilde;o"</span>]  = df[<span class="st">"fecha"</span>].<span class="at">dt</span>.<span class="at">year</span>
df[<span class="st">"mes"</span>]   = df[<span class="st">"fecha"</span>].<span class="at">dt</span>.<span class="at">month</span>
df[<span class="st">"d&iacute;a"</span>]   = df[<span class="st">"fecha"</span>].<span class="at">dt</span>.<span class="at">day</span>
df[<span class="st">"d&iacute;a_sem"</span>] = df[<span class="st">"fecha"</span>].<span class="at">dt</span>.<span class="at">day_name</span>()

<span class="cm"># Filtrar por rango de fechas</span>
df[df[<span class="st">"fecha"</span>].<span class="fn">between</span>(<span class="st">"2024-01-01"</span>, <span class="st">"2024-12-31"</span>)]

<span class="cm"># Re-muestreo temporal (resample)</span>
df.<span class="fn">set_index</span>(<span class="st">"fecha"</span>) \
  .<span class="fn">resample</span>(<span class="st">"M"</span>)[<span class="st">"ventas"</span>].<span class="fn">sum</span>()  <span class="cm"># total mensual</span>

<span class="cm"># Fechas: D=d&iacute;a, M=mes, Y=a&ntilde;o, h=hora</span>` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">💡</span>
            <span>El <strong>dt accessor</strong> solo funciona si la columna es de tipo datetime. Si ten&eacute;s dudas, us&aacute; <code>pd.to_datetime()</code> primero.</span>
          </div>
        </div>

        {/* 11 */}
        <div className="section" id="s11">
          <div className="section-header">
            <span className="section-num">11</span>
            <h2>Guardar / Exportar datos</h2>
          </div>
          <p className="desc">Cuando termin&aacute;s de procesar los datos, pod&eacute;s exportar el DataFrame a varios formatos seg&uacute;n lo que necesite el pr&oacute;ximo paso del pipeline.</p>
          <div className="code-block">
            <div className="code-toolbar">
              <span className="code-lang">python</span>
              <button className="copy-btn" onClick={handleCopy}>copiar</button>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: `<span class="cm"># CSV</span>
df.<span class="fn">to_csv</span>(<span class="st">"resultado.csv"</span>, index=<span class="kw">False</span>)
df.<span class="fn">to_csv</span>(<span class="st">"resultado.csv"</span>, index=<span class="kw">False</span>,
          encoding=<span class="st">"utf-8-sig"</span>)   <span class="cm"># compatible con Excel</span>

<span class="cm"># JSON</span>
df.<span class="fn">to_json</span>(<span class="st">"resultado.json"</span>, orient=<span class="st">"records"</span>)  <span class="cm"># lista de objetos</span>

<span class="cm"># Parquet (r&aacute;pido y comprimido)</span>
df.<span class="fn">to_parquet</span>(<span class="st">"resultado.parquet"</span>, index=<span class="kw">False</span>)

<span class="cm"># Excel (necesita openpyxl)</span>
df.<span class="fn">to_excel</span>(<span class="st">"resultado.xlsx"</span>, sheet_name=<span class="st">"Datos"</span>, index=<span class="kw">False</span>)` }}></pre>
          </div>
          <div className="tip">
            <span className="tip-icon">⚡</span>
            <span>En Data Engineering, <strong>Parquet</strong> es el formato m&aacute;s usado para guardar datos procesados: es comprimido, preserva los tipos de datos y es mucho m&aacute;s r&aacute;pido que CSV.</span>
          </div>
        </div>

        {/* 12 */}
        <div className="section" id="s12">
          <div className="section-header">
            <span className="section-num">12</span>
            <h2>Referencia r&aacute;pida</h2>
          </div>
          <p className="desc">Los m&eacute;todos m&aacute;s usados en el d&iacute;a a d&iacute;a de un Data Engineer.</p>
          <div className="method-grid">
            <div className="method-card">
              <div className="method-name">pd.DataFrame(dict)</div>
              <div className="method-desc">Crear DataFrame desde diccionario</div>
            </div>
            <div className="method-card">
              <div className="method-name">pd.Series(list, name)</div>
              <div className="method-desc">Crear una Serie (columna &uacute;nica)</div>
            </div>
            <div className="method-card">
              <div className="method-name">pd.read_csv()</div>
              <div className="method-desc">Leer CSV &rarr; DataFrame</div>
            </div>
            <div className="method-card">
              <div className="method-name">pd.read_json()</div>
              <div className="method-desc">Leer JSON &rarr; DataFrame</div>
            </div>
            <div className="method-card">
              <div className="method-name">pd.read_parquet()</div>
              <div className="method-desc">Leer Parquet &rarr; DataFrame</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.head(n)</div>
              <div className="method-desc">Primeras n filas (default 5)</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.info()</div>
              <div className="method-desc">Resumen: columnas, tipos, nulos</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.describe()</div>
              <div className="method-desc">Estad&iacute;sticas de columnas num&eacute;ricas</div>
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
              <div className="method-desc">Acceso por posici&oacute;n num&eacute;rica</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.dropna()</div>
              <div className="method-desc">Eliminar filas con nulos</div>
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
              <div className="method-name">df.groupby("col")</div>
              <div className="method-desc">Agrupar filas para agregar</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.merge(df2, on="key")</div>
              <div className="method-desc">Combinar DataFrames (JOIN)</div>
            </div>
            <div className="method-card">
              <div className="method-name">pd.concat([df1, df2])</div>
              <div className="method-desc">Apilar DataFrames</div>
            </div>
            <div className="method-card">
              <div className="method-name">pd.to_datetime(col)</div>
              <div className="method-desc">Convertir columna a datetime</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.dt.year</div>
              <div className="method-desc">Extraer a&ntilde;o de una fecha</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.to_csv()</div>
              <div className="method-desc">Exportar a CSV</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.to_parquet()</div>
              <div className="method-desc">Exportar a Parquet</div>
            </div>
            <div className="method-card">
              <div className="method-name">df.rename(columns={'{}'})</div>
              <div className="method-desc">Renombrar columnas</div>
            </div>
          </div>
        </div>

        <footer>
          PANDAS PARA DATA ENGINEERING &middot; PYTHON
        </footer>

      </div>
    </>
  );
}
