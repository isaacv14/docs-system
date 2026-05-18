export default function MysqlConnectorDocs() {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;600;800&display=swap');

    :root {
      --bg: #0d0f14;
      --surface: #13161e;
      --surface2: #1a1e2a;
      --border: #252a38;
      --accent: #00c4a0;
      --accent2: #f7c948;
      --accent3: #7b8cff;
      --text: #dde3f0;
      --muted: #6b7591;
      --danger: #ff5f6d;
      --code-bg: #0a0c10;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Syne', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.65;
      font-size: 15px;
    }

    /* ── LAYOUT ── */
    .shell { display: flex; min-height: 100vh; }

    /* ── SIDEBAR ── */
    nav {
      width: 260px;
      flex-shrink: 0;
      background: var(--surface);
      border-right: 1px solid var(--border);
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
      padding: 0 0 2rem;
    }

    .nav-logo {
      padding: 1.6rem 1.4rem 1.2rem;
      border-bottom: 1px solid var(--border);
      margin-bottom: 1rem;
    }

    .nav-logo h1 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--accent);
      letter-spacing: 0.05em;
    }

    .nav-logo small {
      font-size: 0.72rem;
      color: var(--muted);
      font-family: 'JetBrains Mono', monospace;
    }

    .nav-section {
      padding: 0.5rem 1.4rem 0.2rem;
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
    }

    nav a {
      display: block;
      padding: 0.38rem 1.4rem;
      font-size: 0.82rem;
      font-family: 'JetBrains Mono', monospace;
      color: #8d97b8;
      text-decoration: none;
      transition: color 0.15s, background 0.15s;
      border-left: 2px solid transparent;
    }

    nav a:hover {
      color: var(--accent);
      background: rgba(0, 196, 160, 0.06);
      border-left-color: var(--accent);
    }

    /* ── MAIN ── */
    main {
      flex: 1;
      padding: 3rem 4rem 6rem;
      max-width: 900px;
    }

    /* ── HERO ── */
    .hero {
      border: 1px solid var(--border);
      background: var(--surface);
      border-radius: 10px;
      padding: 2.4rem 2.6rem;
      margin-bottom: 3rem;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -60px; right: -60px;
      width: 220px; height: 220px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,196,160,0.12) 0%, transparent 70%);
      pointer-events: none;
    }

    .hero-badge {
      display: inline-block;
      background: rgba(0,196,160,0.12);
      border: 1px solid rgba(0,196,160,0.3);
      color: var(--accent);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      padding: 0.2rem 0.7rem;
      border-radius: 4px;
      margin-bottom: 0.9rem;
    }

    .hero h2 {
      font-size: 2rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }

    .hero h2 span { color: var(--accent); }

    .hero p {
      color: var(--muted);
      font-size: 0.9rem;
      max-width: 560px;
    }

    .hero-meta {
      display: flex;
      gap: 1.4rem;
      margin-top: 1.4rem;
      flex-wrap: wrap;
    }

    .hero-meta span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--muted);
    }

    .hero-meta span b { color: var(--accent2); }

    /* ── SECTIONS ── */
    section {
      margin-bottom: 3.5rem;
    }

    .section-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 1.2rem;
      padding-bottom: 0.6rem;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .section-title .dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--accent);
      display: inline-block;
      flex-shrink: 0;
    }

    /* ── API CARD ── */
    .api-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      margin-bottom: 1.2rem;
      overflow: hidden;
      transition: border-color 0.2s;
    }

    .api-card:hover { border-color: rgba(0,196,160,0.35); }

    .api-header {
      padding: 0.95rem 1.2rem;
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;
      cursor: pointer;
      background: var(--surface2);
      border-bottom: 1px solid var(--border);
    }

    .method-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.62rem;
      font-weight: 700;
      padding: 0.15rem 0.5rem;
      border-radius: 3px;
      flex-shrink: 0;
      margin-top: 3px;
      letter-spacing: 0.04em;
    }

    .badge-func { background: rgba(123,140,255,0.18); color: var(--accent3); border: 1px solid rgba(123,140,255,0.3); }
    .badge-class { background: rgba(247,201,72,0.15); color: var(--accent2); border: 1px solid rgba(247,201,72,0.3); }
    .badge-method { background: rgba(0,196,160,0.12); color: var(--accent); border: 1px solid rgba(0,196,160,0.3); }
    .badge-attr { background: rgba(255,95,109,0.12); color: var(--danger); border: 1px solid rgba(255,95,109,0.3); }

    .api-sig {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      color: #d0d9f0;
      flex: 1;
    }

    .api-sig .fn-name { color: var(--accent3); font-weight: 600; }
    .api-sig .param { color: var(--accent2); }
    .api-sig .type-hint { color: var(--muted); }

    .api-body {
      padding: 1rem 1.2rem;
    }

    .api-desc {
      font-size: 0.87rem;
      color: #9aa3c0;
      margin-bottom: 0.8rem;
    }

    /* ── PARAMS TABLE ── */
    .params-label {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 0.5rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.82rem;
      font-family: 'JetBrains Mono', monospace;
      margin-bottom: 1rem;
    }

    th {
      text-align: left;
      padding: 0.4rem 0.7rem;
      font-size: 0.68rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
      border-bottom: 1px solid var(--border);
    }

    td {
      padding: 0.42rem 0.7rem;
      border-bottom: 1px solid rgba(37,42,56,0.6);
      vertical-align: top;
    }

    td:first-child { color: var(--accent2); font-weight: 600; }
    td:nth-child(2) { color: var(--accent3); }
    td:last-child { color: #8d97b8; font-family: 'Syne', sans-serif; font-size: 0.82rem; }

    /* ── CODE BLOCK ── */
    .code-block {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 1.1rem 1.3rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      line-height: 1.75;
      overflow-x: auto;
      position: relative;
      margin: 0.7rem 0;
    }

    .code-label {
      position: absolute;
      top: 0.5rem; right: 0.8rem;
      font-size: 0.62rem;
      color: var(--muted);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .kw { color: #c792ea; }
    .fn { color: var(--accent3); }
    .str { color: #c3e88d; }
    .num { color: var(--accent2); }
    .cm { color: #4a5269; font-style: italic; }
    .cls { color: var(--accent2); }
    .attr { color: var(--accent); }
    .punct { color: var(--muted); }

    /* ── RETURN ROW ── */
    .returns {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      font-size: 0.82rem;
      margin-top: 0.5rem;
    }

    .returns-label {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
      flex-shrink: 0;
    }

    .returns-type {
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent3);
    }

    .returns-desc { color: #8d97b8; }

    /* ── EXCEPTION BLOCK ── */
    .exc-list { list-style: none; margin-top: 0.4rem; }
    .exc-list li {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      padding: 0.28rem 0;
      font-size: 0.82rem;
      font-family: 'JetBrains Mono', monospace;
    }
    .exc-name { color: var(--danger); font-weight: 600; }
    .exc-desc { color: #8d97b8; font-family: 'Syne', sans-serif; font-size: 0.8rem; }

    /* ── CALLOUT ── */
    .callout {
      border-left: 3px solid var(--accent2);
      background: rgba(247,201,72,0.05);
      border-radius: 0 6px 6px 0;
      padding: 0.8rem 1rem;
      font-size: 0.84rem;
      color: #b8a870;
      margin: 1rem 0;
    }

    .callout.info { border-color: var(--accent3); background: rgba(123,140,255,0.05); color: #8d97c8; }
    .callout.danger { border-color: var(--danger); background: rgba(255,95,109,0.05); color: #c08080; }

    /* ── SCROLLBAR ── */
    nav::-webkit-scrollbar { width: 4px; }
    nav::-webkit-scrollbar-track { background: transparent; }
    nav::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

    /* ── INLINE CODE ── */
    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82em;
      background: rgba(123,140,255,0.1);
      border: 1px solid rgba(123,140,255,0.2);
      color: var(--accent3);
      padding: 0.1em 0.4em;
      border-radius: 3px;
    }

    /* ── QUICK REF TABLE ── */
    .qref {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.82rem;
    }

    .qref th {
      background: var(--surface2);
      padding: 0.6rem 0.9rem;
      text-align: left;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
      border: 1px solid var(--border);
    }

    .qref td {
      padding: 0.5rem 0.9rem;
      border: 1px solid var(--border);
      vertical-align: top;
    }

    .qref td:first-child {
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent3);
      white-space: nowrap;
    }

    .qref td:last-child {
      color: #8d97b8;
      font-family: 'Syne', sans-serif;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="shell">
        {/* ── SIDEBAR ── */}
        <nav>
          <div className="nav-logo">
            <h1>mysql.connector</h1>
            <small>Python Module Docs · v9.x</small>
          </div>

          <div className="nav-section">Overview</div>
          <a href="#overview">Introduction</a>
          <a href="#install">Installation</a>
          <a href="#quickstart">Quick Start</a>

          <div className="nav-section">Connection</div>
          <a href="#connect">connect()</a>
          <a href="#MySQLConnection">MySQLConnection</a>
          <a href="#pooling">Connection Pooling</a>

          <div className="nav-section">Cursor</div>
          <a href="#cursor">cursor()</a>
          <a href="#execute">execute()</a>
          <a href="#executemany">executemany()</a>
          <a href="#fetch">fetch methods</a>
          <a href="#callproc">callproc()</a>

          <div className="nav-section">Transactions</div>
          <a href="#commit">commit()</a>
          <a href="#rollback">rollback()</a>
          <a href="#autocommit">autocommit</a>

          <div className="nav-section">Exceptions</div>
          <a href="#exceptions">Exception Hierarchy</a>

          <div className="nav-section">Reference</div>
          <a href="#constants">Constants</a>
          <a href="#patterns">Common Patterns</a>
        </nav>

        {/* ── MAIN ── */}
        <main>
          {/* HERO */}
          <div className="hero" id="overview">
            <div className="hero-badge">Module Reference</div>
            <h2><span>mysql</span>.connector</h2>
            <p>Official MySQL driver for Python. Implements the DB-API 2.0 specification (PEP 249) and provides a pure-Python interface to MySQL server.</p>
            <div className="hero-meta">
              <span><b>Version</b> 9.x</span>
              <span><b>Spec</b> PEP 249 / DB-API 2.0</span>
              <span><b>Python</b> 3.8+</span>
              <span><b>License</b> GPL 2.0</span>
            </div>
          </div>

          {/* INSTALL */}
          <section id="install">
            <div className="section-title"><span className="dot"></span>Installation</div>
            <div className="code-block">
              <span className="code-label">bash</span>
              <span className="cm"># Standard install (pure Python)</span><br />
              pip install mysql-connector-python<br /><br />
              <span className="cm"># With C extension (faster, requires MySQL client libs)</span><br />
              pip install mysql-connector-python[cext]
            </div>
            <div className="callout info">
              The <code>mysql-connector-python</code> package from PyPI is the official Oracle distribution. Do not confuse it with the third-party <code>mysqlclient</code> package.
            </div>
          </section>

          {/* QUICK START */}
          <section id="quickstart">
            <div className="section-title"><span className="dot"></span>Quick Start</div>
            <div className="code-block">
              <span className="code-label">python</span>
              <span className="kw">import</span> mysql.connector<br /><br />
              <span className="cm"># 1. Establish connection</span><br />
              cnx <span className="punct">=</span> mysql.connector.<span className="fn">connect</span><span className="punct">(</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;host<span className="punct">=</span><span className="str">"localhost"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;user<span className="punct">=</span><span className="str">"root"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;password<span className="punct">=</span><span className="str">"secret"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;database<span className="punct">=</span><span className="str">"mydb"</span><br />
              <span className="punct">)</span><br /><br />
              <span className="cm"># 2. Create cursor &amp; execute</span><br />
              cur <span className="punct">=</span> cnx.<span className="fn">cursor</span><span className="punct">()</span><br />
              cur.<span className="fn">execute</span><span className="punct">(</span><span className="str">"SELECT %s + %s AS result"</span>, <span className="punct">(</span><span className="num">3</span>, <span className="num">7</span><span className="punct">))</span><br /><br />
              <span className="cm"># 3. Fetch &amp; print</span><br />
              <span className="kw">for</span> row <span className="kw">in</span> cur<span className="punct">:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">print</span><span className="punct">(</span>row<span className="punct">)</span>  <span className="cm"># (10,)</span><br /><br />
              <span className="cm"># 4. Always close</span><br />
              cur.<span className="fn">close</span><span className="punct">()</span><br />
              cnx.<span className="fn">close</span><span className="punct">()</span>
            </div>
          </section>

          {/* connect() */}
          <section id="connect">
            <div className="section-title"><span className="dot"></span>Connection Functions</div>

            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-func">FUNC</span>
                <div className="api-sig">
                  mysql.connector.<span className="fn-name">connect</span>(<span className="param">**kwargs</span>) <span className="type-hint">→ MySQLConnection | CMySQLConnection</span>
                </div>
              </div>
              <div className="api-body">
                <div className="api-desc">Creates and returns a MySQL connection object. Accepts keyword arguments for all connection parameters. Returns a C-extension connection if available, otherwise pure-Python.</div>

                <div className="params-label">Parameters</div>
                <table>
                  <tbody>
                    <tr><th>Name</th><th>Type</th><th>Description</th></tr>
                    <tr><td>host</td><td>str</td><td>Hostname or IP address of MySQL server. Default: <code>127.0.0.1</code></td></tr>
                    <tr><td>port</td><td>int</td><td>TCP port. Default: <code>3306</code></td></tr>
                    <tr><td>user</td><td>str</td><td>MySQL username.</td></tr>
                    <tr><td>password</td><td>str</td><td>User password.</td></tr>
                    <tr><td>database</td><td>str</td><td>Default schema to use after connecting.</td></tr>
                    <tr><td>charset</td><td>str</td><td>Connection character set. Default: <code>'utf8mb4'</code></td></tr>
                    <tr><td>use_unicode</td><td>bool</td><td>If True, strings are returned as Unicode. Default: <code>True</code></td></tr>
                    <tr><td>autocommit</td><td>bool</td><td>Enable/disable autocommit mode. Default: <code>False</code></td></tr>
                    <tr><td>ssl_ca</td><td>str</td><td>Path to CA certificate file for SSL connections.</td></tr>
                    <tr><td>ssl_cert</td><td>str</td><td>Path to client certificate file.</td></tr>
                    <tr><td>ssl_key</td><td>str</td><td>Path to client private key file.</td></tr>
                    <tr><td>connect_timeout</td><td>int</td><td>Timeout in seconds for establishing connection.</td></tr>
                    <tr><td>connection_timeout</td><td>int</td><td>Alias for <code>connect_timeout</code>.</td></tr>
                    <tr><td>buffered</td><td>bool</td><td>If True, cursor fetches all rows immediately. Default: <code>False</code></td></tr>
                    <tr><td>raw</td><td>bool</td><td>If True, data returned as-is from server (no Python conversion). Default: <code>False</code></td></tr>
                    <tr><td>unix_socket</td><td>str</td><td>Path to Unix socket file (alternative to host/port).</td></tr>
                    <tr><td>auth_plugin</td><td>str</td><td>Force specific auth plugin, e.g. <code>'mysql_native_password'</code></td></tr>
                  </tbody>
                </table>

                <div className="returns">
                  <span className="returns-label">Returns</span>
                  <span className="returns-type">MySQLConnection</span>
                  <span className="returns-desc">— A connected connection object.</span>
                </div>

                <div className="params-label" style={{ marginTop: '0.9rem' }}>Raises</div>
                <ul className="exc-list">
                  <li><span className="exc-name">mysql.connector.errors.InterfaceError</span> <span className="exc-desc">Connection parameter errors.</span></li>
                  <li><span className="exc-name">mysql.connector.errors.DatabaseError</span> <span className="exc-desc">Server-side errors during connect.</span></li>
                  <li><span className="exc-name">mysql.connector.errors.OperationalError</span> <span className="exc-desc">Network or server unreachable.</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* MySQLConnection */}
          <section id="MySQLConnection">
            <div className="section-title"><span className="dot"></span>MySQLConnection Class</div>

            {/* cursor() */}
            <div className="api-card" id="cursor">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">
                  cnx.<span className="fn-name">cursor</span>(<span className="param">buffered=None, raw=None, prepared=None, cursor_class=None, dictionary=False, named_tuple=False</span>) <span className="type-hint">→ MySQLCursor</span>
                </div>
              </div>
              <div className="api-body">
                <div className="api-desc">Instantiates and returns a cursor object for executing queries on this connection.</div>
                <table>
                  <tbody>
                    <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
                    <tr><td>buffered</td><td>bool</td><td>Fetch all rows immediately into memory.</td></tr>
                    <tr><td>raw</td><td>bool</td><td>Return data without Python type conversion.</td></tr>
                    <tr><td>prepared</td><td>bool</td><td>Use server-side prepared statements.</td></tr>
                    <tr><td>dictionary</td><td>bool</td><td>Return rows as <code>dict</code> instead of <code>tuple</code>.</td></tr>
                    <tr><td>named_tuple</td><td>bool</td><td>Return rows as named tuples.</td></tr>
                  </tbody>
                </table>
                <div className="code-block">
                  <span className="code-label">example</span>
                  <span className="cm"># Dict cursor — rows as {"{"}"col": value{"}"}</span><br />
                  cur <span className="punct">=</span> cnx.<span className="fn">cursor</span><span className="punct">(</span>dictionary<span className="punct">=</span><span className="kw">True</span><span className="punct">)</span><br />
                  cur.<span className="fn">execute</span><span className="punct">(</span><span className="str">"SELECT id, name FROM users"</span><span className="punct">)</span><br />
                  <span className="kw">for</span> row <span className="kw">in</span> cur.<span className="fn">fetchall</span><span className="punct">():</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">print</span><span className="punct">(</span>row<span className="punct">[</span><span className="str">"name"</span><span className="punct">])</span>
                </div>
              </div>
            </div>

            {/* is_connected / ping / reconnect */}
            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">
                  cnx.<span className="fn-name">is_connected</span>() <span className="type-hint">→ bool</span>
                </div>
              </div>
              <div className="api-body">
                <div className="api-desc">Returns <code>True</code> if the connection to MySQL server is still active. Does not send a ping — checks local state only.</div>
              </div>
            </div>

            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">
                  cnx.<span className="fn-name">ping</span>(<span className="param">reconnect=False, attempts=1, delay=0</span>) <span className="type-hint">→ None</span>
                </div>
              </div>
              <div className="api-body">
                <div className="api-desc">Sends a ping to the MySQL server to verify the connection. Optionally reconnects if the server is unreachable.</div>
                <table>
                  <tbody>
                    <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
                    <tr><td>reconnect</td><td>bool</td><td>Attempt to reconnect on failure.</td></tr>
                    <tr><td>attempts</td><td>int</td><td>Number of reconnection attempts.</td></tr>
                    <tr><td>delay</td><td>int</td><td>Seconds to wait between attempts.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Connection Pooling */}
          <section id="pooling">
            <div className="section-title"><span className="dot"></span>Connection Pooling</div>
            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-class">CLASS</span>
                <div className="api-sig">
                  mysql.connector.pooling.<span className="fn-name">MySQLConnectionPool</span>(<span className="param">pool_name, pool_size=5, pool_reset_session=True, **kwargs</span>)
                </div>
              </div>
              <div className="api-body">
                <div className="api-desc">Creates a pool of reusable database connections, reducing overhead of repeatedly opening/closing connections.</div>
                <table>
                  <tbody>
                    <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
                    <tr><td>pool_name</td><td>str</td><td>Unique name for this pool.</td></tr>
                    <tr><td>pool_size</td><td>int</td><td>Number of connections in pool. Default: <code>5</code>. Max: <code>32</code>.</td></tr>
                    <tr><td>pool_reset_session</td><td>bool</td><td>Reset session vars when connection is returned to pool.</td></tr>
                    <tr><td>**kwargs</td><td>—</td><td>Same connection parameters as <code>connect()</code>.</td></tr>
                  </tbody>
                </table>
                <div className="code-block">
                  <span className="code-label">example</span>
                  <span className="kw">from</span> mysql.connector <span className="kw">import</span> pooling<br /><br />
                  pool <span className="punct">=</span> pooling.<span className="cls">MySQLConnectionPool</span><span className="punct">(</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;pool_name<span className="punct">=</span><span className="str">"main"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;pool_size<span className="punct">=</span><span className="num">10</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;host<span className="punct">=</span><span className="str">"localhost"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;database<span className="punct">=</span><span className="str">"mydb"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;user<span className="punct">=</span><span className="str">"root"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;password<span className="punct">=</span><span className="str">"secret"</span><br />
                  <span className="punct">)</span><br /><br />
                  <span className="cm"># Get a connection from the pool</span><br />
                  cnx <span className="punct">=</span> pool.<span className="fn">get_connection</span><span className="punct">()</span><br />
                  <span className="cm"># ... use it ...</span><br />
                  cnx.<span className="fn">close</span><span className="punct">()</span>  <span className="cm"># returns to pool, not truly closed</span>
                </div>
              </div>
            </div>
          </section>

          {/* execute() */}
          <section id="execute">
            <div className="section-title"><span className="dot"></span>Cursor — execute()</div>

            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">
                  cursor.<span className="fn-name">execute</span>(<span className="param">operation, params=None, multi=False</span>) <span className="type-hint">→ None | iterator</span>
                </div>
              </div>
              <div className="api-body">
                <div className="api-desc">Executes a single SQL statement. Use <code>%s</code> placeholders — never string-format user input directly.</div>
                <table>
                  <tbody>
                    <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
                    <tr><td>operation</td><td>str</td><td>SQL statement with <code>%s</code> placeholders.</td></tr>
                    <tr><td>params</td><td>tuple | dict | list</td><td>Values to bind to placeholders.</td></tr>
                    <tr><td>multi</td><td>bool</td><td>If True, allows multiple statements separated by semicolons. Returns an iterator.</td></tr>
                  </tbody>
                </table>

                <div className="callout danger">
                  Never use Python string formatting (<code>f"...{'{user_input}'}..."</code>) to build SQL. Always use parameterized queries with <code>%s</code> to prevent SQL injection.
                </div>

                <div className="code-block">
                  <span className="code-label">example</span>
                  <span className="cm"># Positional params (tuple)</span><br />
                  cur.<span className="fn">execute</span><span className="punct">(</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"INSERT INTO users (name, age) VALUES (%s, %s)"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="punct">(</span><span className="str">"Alice"</span>, <span className="num">30</span><span className="punct">)</span><br />
                  <span className="punct">)</span><br /><br />
                  <span className="cm"># Named params (dict) — use %(name)s</span><br />
                  cur.<span className="fn">execute</span><span className="punct">(</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"SELECT * FROM users WHERE name = %(name)s"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="punct">{"{"}</span><span className="str">"name"</span>: <span className="str">"Alice"</span><span className="punct">{"}"}</span><br />
                  <span className="punct">)</span><br /><br />
                  <span className="cm"># Multi-statement</span><br />
                  results <span className="punct">=</span> cur.<span className="fn">execute</span><span className="punct">(</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"SELECT 1; SELECT 2;"</span>, multi<span className="punct">=</span><span className="kw">True</span><br />
                  <span className="punct">)</span><br />
                  <span className="kw">for</span> res <span className="kw">in</span> results<span className="punct">:</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">print</span><span className="punct">(</span>res.<span className="fn">fetchall</span><span className="punct">())</span>
                </div>
              </div>
            </div>
          </section>

          {/* executemany() */}
          <section id="executemany">
            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">
                  cursor.<span className="fn-name">executemany</span>(<span className="param">operation, seq_of_params</span>) <span className="type-hint">→ None</span>
                </div>
              </div>
              <div className="api-body">
                <div className="api-desc">Executes the same SQL statement for each parameter set in a sequence. Optimized for bulk INSERT/UPDATE operations.</div>
                <div className="code-block">
                  <span className="code-label">example</span>
                  users <span className="punct">= [</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="punct">(</span><span className="str">"Bob"</span>, <span className="num">25</span><span className="punct">),</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="punct">(</span><span className="str">"Carol"</span>, <span className="num">28</span><span className="punct">),</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="punct">(</span><span className="str">"Dave"</span>, <span className="num">35</span><span className="punct">),</span><br />
                  <span className="punct">]</span><br />
                  cur.<span className="fn">executemany</span><span className="punct">(</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"INSERT INTO users (name, age) VALUES (%s, %s)"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;users<br />
                  <span className="punct">)</span><br />
                  cnx.<span className="fn">commit</span><span className="punct">()</span><br />
                  <span className="fn">print</span><span className="punct">(</span>cur.rowcount<span className="punct">)</span>  <span className="cm"># 3</span>
                </div>
              </div>
            </div>
          </section>

          {/* Fetch Methods */}
          <section id="fetch">
            <div className="section-title"><span className="dot"></span>Cursor — Fetch Methods</div>

            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">cursor.<span className="fn-name">fetchone</span>() <span className="type-hint">→ tuple | dict | None</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">Fetches the next row from the result set. Returns <code>None</code> when no more rows are available.</div>
              </div>
            </div>

            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">cursor.<span className="fn-name">fetchmany</span>(<span className="param">size=cursor.arraysize</span>) <span className="type-hint">→ list[tuple]</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">Fetches the next <code>size</code> rows. Returns an empty list when no rows remain. Useful for memory-efficient processing of large result sets.</div>
              </div>
            </div>

            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">cursor.<span className="fn-name">fetchall</span>() <span className="type-hint">→ list[tuple]</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">Fetches all remaining rows from the result set as a list. Returns an empty list if no rows.</div>
                <div className="callout">
                  For large result sets, prefer <code>fetchmany()</code> or iterating over the cursor directly to avoid loading everything into memory.
                </div>
              </div>
            </div>

            {/* Useful Cursor Attributes */}
            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-attr">ATTR</span>
                <div className="api-sig">cursor.<span className="fn-name">description</span> <span className="type-hint">→ tuple | None</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">Sequence of 7-item tuples describing each column: <code>(name, type_code, display_size, internal_size, precision, scale, null_ok)</code>. <code>None</code> if no query has been executed.</div>
              </div>
            </div>

            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-attr">ATTR</span>
                <div className="api-sig">cursor.<span className="fn-name">rowcount</span> <span className="type-hint">→ int</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">Number of rows that the last <code>execute*()</code> produced or affected. <code>-1</code> if unknown.</div>
              </div>
            </div>

            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-attr">ATTR</span>
                <div className="api-sig">cursor.<span className="fn-name">lastrowid</span> <span className="type-hint">→ int | None</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">The auto-generated <code>AUTO_INCREMENT</code> id of the last <code>INSERT</code>. <code>None</code> if the last operation wasn't an insert with an auto-increment column.</div>
              </div>
            </div>
          </section>

          {/* callproc() */}
          <section id="callproc">
            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">cursor.<span className="fn-name">callproc</span>(<span className="param">procname, args=()</span>) <span className="type-hint">→ tuple</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">Calls a stored procedure. Returns the modified copies of input parameters (reflecting any OUT/INOUT parameters set by the procedure).</div>
                <div className="code-block">
                  <span className="code-label">example</span>
                  <span className="cm"># Call stored procedure "get_user" with one IN param</span><br />
                  args <span className="punct">=</span> cur.<span className="fn">callproc</span><span className="punct">(</span><span className="str">"get_user"</span>, <span className="punct">(</span><span className="num">42</span>,<span className="punct">))</span><br /><br />
                  <span className="cm"># Retrieve result sets</span><br />
                  <span className="kw">for</span> result <span className="kw">in</span> cur.<span className="fn">stored_results</span><span className="punct">():</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">print</span><span className="punct">(</span>result.<span className="fn">fetchall</span><span className="punct">())</span>
                </div>
              </div>
            </div>
          </section>

          {/* Transactions */}
          <section id="commit">
            <div className="section-title"><span className="dot"></span>Transactions</div>

            <div className="api-card">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">cnx.<span className="fn-name">commit</span>() <span className="type-hint">→ None</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">Commits the current transaction, making all changes permanent in the database. Has no effect when <code>autocommit=True</code>.</div>
              </div>
            </div>

            <div className="api-card" id="rollback">
              <div className="api-header">
                <span className="method-badge badge-method">METHOD</span>
                <div className="api-sig">cnx.<span className="fn-name">rollback</span>() <span className="type-hint">→ None</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">Rolls back all changes made since the last commit, reverting the database to its prior state. Typically called in an <code>except</code> block.</div>
                <div className="code-block">
                  <span className="code-label">pattern</span>
                  <span className="kw">try</span><span className="punct">:</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;cur.<span className="fn">execute</span><span className="punct">(</span><span className="str">"UPDATE accounts SET balance = balance - %s WHERE id = %s"</span>, <span className="punct">(</span><span className="num">100</span>, <span className="num">1</span><span className="punct">))</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;cur.<span className="fn">execute</span><span className="punct">(</span><span className="str">"UPDATE accounts SET balance = balance + %s WHERE id = %s"</span>, <span className="punct">(</span><span className="num">100</span>, <span className="num">2</span><span className="punct">))</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;cnx.<span className="fn">commit</span><span className="punct">()</span><br />
                  <span className="kw">except</span> mysql.connector.<span className="cls">Error</span> <span className="kw">as</span> err<span className="punct">:</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;cnx.<span className="fn">rollback</span><span className="punct">()</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">print</span><span className="punct">(</span><span className="str">f"Transaction failed: {'{err}'}"</span><span className="punct">)</span>
                </div>
              </div>
            </div>

            <div className="api-card" id="autocommit">
              <div className="api-header">
                <span className="method-badge badge-attr">ATTR</span>
                <div className="api-sig">cnx.<span className="fn-name">autocommit</span> <span className="type-hint">bool — settable</span></div>
              </div>
              <div className="api-body">
                <div className="api-desc">Read/write property. When set to <code>True</code>, each statement is committed immediately without needing an explicit <code>commit()</code>. Default is <code>False</code>.</div>
                <div className="code-block">
                  <span className="code-label">example</span>
                  cnx.autocommit <span className="punct">=</span> <span className="kw">True</span>   <span className="cm"># enable</span><br />
                  cnx.autocommit <span className="punct">=</span> <span className="kw">False</span>  <span className="cm"># disable (default)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Exceptions */}
          <section id="exceptions">
            <div className="section-title"><span className="dot"></span>Exception Hierarchy</div>
            <div className="code-block">
              <span className="code-label">hierarchy</span>
              <span className="cls">StandardError</span><br />
              └── <span className="cls">Error</span>                      <span className="cm"># mysql.connector.errors.Error — base class</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;├── <span className="cls">InterfaceError</span>          <span className="cm"># Driver / API usage errors</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;└── <span className="cls">DatabaseError</span>           <span className="cm"># Server-side errors</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="cls">DataError</span>           <span className="cm"># Bad data values</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="cls">OperationalError</span>    <span className="cm"># Connection drops, timeouts</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="cls">IntegrityError</span>      <span className="cm"># FK / UNIQUE constraint violations</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="cls">InternalError</span>       <span className="cm"># Internal MySQL errors</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="cls">ProgrammingError</span>    <span className="cm"># Bad SQL, wrong table/column</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="cls">NotSupportedError</span>   <span className="cm"># Unsupported feature</span>
            </div>

            <div className="code-block">
              <span className="code-label">example</span>
              <span className="kw">import</span> mysql.connector<br />
              <span className="kw">from</span> mysql.connector <span className="kw">import</span> errorcode<br /><br />
              <span className="kw">try</span><span className="punct">:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;cnx <span className="punct">=</span> mysql.connector.<span className="fn">connect</span><span className="punct">(</span>user<span className="punct">=</span><span className="str">"bad"</span>, database<span className="punct">=</span><span className="str">"test"</span><span className="punct">)</span><br />
              <span className="kw">except</span> mysql.connector.<span className="cls">Error</span> <span className="kw">as</span> err<span className="punct">:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">if</span> err.errno <span className="punct">==</span> errorcode.<span className="attr">ER_ACCESS_DENIED_ERROR</span><span className="punct">:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">print</span><span className="punct">(</span><span className="str">"Wrong user or password"</span><span className="punct">)</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">elif</span> err.errno <span className="punct">==</span> errorcode.<span className="attr">ER_BAD_DB_ERROR</span><span className="punct">:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">print</span><span className="punct">(</span><span className="str">"Database does not exist"</span><span className="punct">)</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">else</span><span className="punct">:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">print</span><span className="punct">(</span>err<span className="punct">)</span>
            </div>
          </section>

          {/* Constants */}
          <section id="constants">
            <div className="section-title"><span className="dot"></span>Constants</div>
            <table className="qref">
              <tbody>
                <tr><th>Constant</th><th>Description</th></tr>
                <tr><td>mysql.connector.apilevel</td><td>DB-API level string, value: <code>"2.0"</code></td></tr>
                <tr><td>mysql.connector.threadsafety</td><td>Thread safety level: <code>1</code> (connections must not be shared across threads)</td></tr>
                <tr><td>mysql.connector.paramstyle</td><td>Param placeholder style: <code>"format"</code> (i.e., <code>%s</code>)</td></tr>
                <tr><td>errorcode.ER_ACCESS_DENIED_ERROR</td><td>MySQL error 1045 — bad credentials</td></tr>
                <tr><td>errorcode.ER_BAD_DB_ERROR</td><td>MySQL error 1049 — unknown database</td></tr>
                <tr><td>errorcode.ER_DUP_ENTRY</td><td>MySQL error 1062 — duplicate key entry</td></tr>
              </tbody>
            </table>
          </section>

          {/* Common Patterns */}
          <section id="patterns">
            <div className="section-title"><span className="dot"></span>Common Patterns</div>

            <div className="params-label" style={{ marginBottom: '0.6rem' }}>Context Manager (recommended)</div>
            <div className="code-block">
              <span className="code-label">python</span>
              <span className="kw">import</span> mysql.connector<br /><br />
              <span className="kw">with</span> mysql.connector.<span className="fn">connect</span><span className="punct">(</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;host<span className="punct">=</span><span className="str">"localhost"</span>, user<span className="punct">=</span><span className="str">"root"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;password<span className="punct">=</span><span className="str">"secret"</span>, database<span className="punct">=</span><span className="str">"mydb"</span><br />
              <span className="punct">)</span> <span className="kw">as</span> cnx<span className="punct">:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">with</span> cnx.<span className="fn">cursor</span><span className="punct">(</span>dictionary<span className="punct">=</span><span className="kw">True</span><span className="punct">)</span> <span className="kw">as</span> cur<span className="punct">:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cur.<span className="fn">execute</span><span className="punct">(</span><span className="str">"SELECT * FROM products WHERE price &gt; %s"</span>, <span className="punct">(</span><span className="num">50</span>,<span className="punct">))</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rows <span className="punct">=</span> cur.<span className="fn">fetchall</span><span className="punct">()</span><br />
              <span className="cm"># cnx and cur auto-closed here</span>
            </div>

            <div className="params-label" style={{ marginBottom: '0.6rem', marginTop: '1.2rem' }}>Using .env config</div>
            <div className="code-block">
              <span className="code-label">python</span>
              <span className="kw">import</span> os, mysql.connector<br />
              <span className="kw">from</span> dotenv <span className="kw">import</span> load_dotenv<br /><br />
              load_dotenv<span className="punct">()</span><br /><br />
              config <span className="punct">= {"{"}</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"host"</span>: os.getenv<span className="punct">(</span><span className="str">"DB_HOST"</span>, <span className="str">"localhost"</span><span className="punct">),</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"user"</span>: os.getenv<span className="punct">(</span><span className="str">"DB_USER"</span><span className="punct">),</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"password"</span>: os.getenv<span className="punct">(</span><span className="str">"DB_PASS"</span><span className="punct">),</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="str">"database"</span>: os.getenv<span className="punct">(</span><span className="str">"DB_NAME"</span><span className="punct">),</span><br />
              <span className="punct">{"}"}</span><br /><br />
              cnx <span className="punct">=</span> mysql.connector.<span className="fn">connect</span><span className="punct">(**</span>config<span className="punct">)</span>
            </div>

            <div className="params-label" style={{ marginBottom: '0.6rem', marginTop: '1.2rem' }}>Batch insert with executemany</div>
            
            <div className="code-block">
              <span className="code-label">python</span>
              data <span className="punct">= [(</span><span className="str">"Alice"</span>, <span className="num">90</span><span className="punct">), (</span><span className="str">"Bob"</span>, <span className="num">85</span><span className="punct">), (</span><span className="str">"Carol"</span>, <span className="num">92</span><span className="punct">)]</span><br />
              sql <span className="punct">=</span> <span className="str">"INSERT INTO scores (name, score) VALUES (%s, %s)"</span><br /><br />
              <span className="kw">with</span> cnx.<span className="fn">cursor</span><span className="punct">()</span> <span className="kw">as</span> cur<span className="punct">:</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;cur.<span className="fn">executemany</span><span className="punct">(</span>sql, data<span className="punct">)</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;cnx.<span className="fn">commit</span><span className="punct">()</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">print</span><span className="punct">(</span><span className="str">f"Inserted {'{cur.rowcount}'} rows"</span><span className="punct">)</span>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
