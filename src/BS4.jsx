import { useEffect } from 'react';

export default function BeautifulSoupDocs() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.07 }
    );

    document.querySelectorAll('section').forEach((s) => observer.observe(s));

    // Active nav link highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navLinks.forEach((a) => {
              a.style.color = '';
              a.style.borderLeftColor = 'transparent';
            });
            const active = document.querySelector(`nav a[href="#${e.target.id}"]`);
            if (active) {
              active.style.color = 'var(--accent2)';
              active.style.borderLeftColor = 'var(--accent2)';
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => navObserver.observe(s));

    return () => {
      observer.disconnect();
      navObserver.disconnect();
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,400;0,9..144,700;1,9..144,300&family=Syne:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #0c0c0f;
          --surface: #13131a;
          --surface2: #1c1c27;
          --border: #252535;
          --accent: #7b61ff;
          --accent2: #00e5c0;
          --accent3: #ff6b6b;
          --text: #e8e8f0;
          --muted: #6b6b8a;
          --code-bg: #0f0f18;
          --string: #a8ff78;
          --keyword: #7b61ff;
          --func: #00e5c0;
          --comment: #4a4a6a;
          --number: #ffcc66;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          min-height: 100vh;
        }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 100;
          opacity: 0.4;
        }

        .layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          min-height: 100vh;
        }

        nav {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          background: var(--surface);
          border-right: 1px solid var(--border);
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        nav::-webkit-scrollbar { width: 4px; }
        nav::-webkit-scrollbar-track { background: transparent; }
        nav::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

        .nav-header {
          padding: 32px 24px 24px;
          border-bottom: 1px solid var(--border);
        }

        .nav-logo {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.5px;
          line-height: 1.2;
        }

        .nav-logo span {
          color: var(--accent2);
        }

        .nav-version {
          display: inline-block;
          margin-top: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          background: var(--surface2);
          border: 1px solid var(--border);
          padding: 2px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        .nav-section {
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
        }

        .nav-section-title {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--muted);
          padding: 0 24px 8px;
        }

        nav a {
          display: block;
          padding: 6px 24px;
          color: #9898b8;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 400;
          transition: all 0.15s;
          border-left: 2px solid transparent;
          line-height: 1.4;
        }

        nav a:hover {
          color: var(--text);
          background: var(--surface2);
          border-left-color: var(--accent);
        }

        main {
          padding: 0;
          max-width: 860px;
        }

        .hero {
          padding: 80px 64px 60px;
          border-bottom: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .hero::after {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--accent2);
          border: 1px solid rgba(0,229,192,0.25);
          background: rgba(0,229,192,0.05);
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 24px;
          letter-spacing: 0.5px;
        }

        .hero-badge::before {
          content: '';
          width: 6px; height: 6px;
          background: var(--accent2);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero h1 {
          font-family: 'Fraunces', serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 20px;
          color: var(--text);
        }

        .hero h1 em {
          font-style: italic;
          font-weight: 300;
          color: var(--accent);
        }

        .hero p {
          font-size: 16px;
          color: #8888aa;
          max-width: 540px;
          line-height: 1.75;
          font-weight: 400;
        }

        .content {
          padding: 0 64px 80px;
        }

        section {
          padding: 56px 0 0;
          border-bottom: 1px solid var(--border);
          opacity: 0; 
          transform: translateY(20px); 
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        section:last-child { border-bottom: none; }
        
        section.visible { opacity: 1; transform: translateY(0); }
        .hero { opacity: 1; transform: none; }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
          display: block;
        }

        h2 {
          font-family: 'Fraunces', serif;
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -1px;
          color: var(--text);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        h3 {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--text);
          margin: 32px 0 12px;
          letter-spacing: -0.3px;
        }

        h3::before {
          content: '→ ';
          color: var(--accent2);
          font-weight: 400;
        }

        p {
          color: #9898b8;
          margin-bottom: 16px;
          font-size: 14.5px;
          line-height: 1.8;
          font-weight: 400;
        }

        strong { color: var(--text); font-weight: 600; }

        .code-block {
          background: var(--code-bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          margin: 20px 0;
          position: relative;
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: var(--surface2);
          border-bottom: 1px solid var(--border);
        }

        .code-lang {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--muted);
        }

        .code-dots {
          display: flex;
          gap: 5px;
        }

        .code-dots span {
          width: 8px; height: 8px;
          border-radius: 50%;
        }
        .code-dots span:nth-child(1) { background: #ff6b6b; }
        .code-dots span:nth-child(2) { background: #ffcc66; }
        .code-dots span:nth-child(3) { background: #a8ff78; }

        pre {
          padding: 20px;
          overflow-x: auto;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          line-height: 1.8;
        }

        pre::-webkit-scrollbar { height: 4px; }
        pre::-webkit-scrollbar-track { background: transparent; }
        pre::-webkit-scrollbar-thumb { background: var(--border); }

        .kw { color: var(--keyword); }
        .fn { color: var(--func); }
        .st { color: var(--string); }
        .cm { color: var(--comment); font-style: italic; }
        .nm { color: var(--number); }
        .vr { color: #c0c0ff; }
        .at { color: #ffaa55; }

        code {
          font-family: 'DM Mono', monospace;
          font-size: 12.5px;
          background: var(--surface2);
          border: 1px solid var(--border);
          padding: 1px 6px;
          border-radius: 4px;
          color: var(--accent2);
        }

        .method-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 20px 0;
        }

        .method-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 18px;
          transition: border-color 0.2s, transform 0.2s;
        }

        .method-card:hover {
          border-color: rgba(123,97,255,0.4);
          transform: translateY(-1px);
        }

        .method-name {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: var(--accent2);
          font-weight: 500;
          margin-bottom: 6px;
        }

        .method-desc {
          font-size: 12.5px;
          color: var(--muted);
          line-height: 1.6;
          margin: 0;
        }

        .callout {
          border-radius: 8px;
          padding: 16px 20px;
          margin: 20px 0;
          font-size: 13.5px;
          line-height: 1.7;
          border-left: 3px solid;
        }

        .callout.info {
          background: rgba(123,97,255,0.06);
          border-color: var(--accent);
          color: #b0b0d8;
        }

        .callout.tip {
          background: rgba(0,229,192,0.05);
          border-color: var(--accent2);
          color: #90c0b8;
        }

        .callout.warn {
          background: rgba(255,107,107,0.06);
          border-color: var(--accent3);
          color: #c0a0a0;
        }

        .callout strong { font-weight: 700; }

        .table-wrap {
          overflow-x: auto;
          margin: 20px 0;
          border-radius: 10px;
          border: 1px solid var(--border);
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        thead {
          background: var(--surface2);
        }

        th {
          padding: 12px 16px;
          text-align: left;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 500;
        }

        td {
          padding: 11px 16px;
          border-top: 1px solid var(--border);
          color: #9898b8;
          vertical-align: top;
          line-height: 1.6;
        }

        td:first-child {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: var(--accent2);
        }

        tr:hover td { background: rgba(255,255,255,0.02); }

        @media (max-width: 900px) {
          .layout { grid-template-columns: 1fr; }
          nav { position: relative; height: auto; }
          .hero { padding: 40px 32px; }
          .hero h1 { font-size: 36px; }
          .content { padding: 0 32px 60px; }
          .method-grid { grid-template-columns: 1fr; }
        }
      `}} />

      <div className="layout">
        {/* SIDEBAR */}
        <nav>
          <div className="nav-header">
            <div className="nav-logo">Beautiful<br /><span>Soup</span> 4</div>
            <span className="nav-version">v4.12.x</span>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Getting Started</div>
            <a href="#install">Installation</a>
            <a href="#quickstart">Quick Start</a>
            <a href="#parsers">Parsers</a>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Core Concepts</div>
            <a href="#objects">Object Types</a>
            <a href="#navigating">Navigating the Tree</a>
            <a href="#searching">Searching</a>
            <a href="#css">CSS Selectors</a>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Manipulation</div>
            <a href="#modifying">Modifying the Tree</a>
            <a href="#output">Output & Encoding</a>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Advanced</div>
            <a href="#filters">Filters</a>
            <a href="#encoding">Encoding</a>
            <a href="#reference">Method Reference</a>
          </div>
        </nav>

        {/* MAIN */}
        <main>
          <div className="hero">
            <div className="hero-badge">Python Web Scraping Library</div>
            <h1>Beautiful<br /><em>Soup 4</em></h1>
            <p>A Python library for pulling data out of HTML and XML files. It works with your favorite parser to provide idiomatic ways of navigating, searching, and modifying the parse tree.</p>
          </div>

          <div className="content">

            {/* INSTALL */}
            <section id="install">
              <span className="section-label">01 — Setup</span>
              <h2>Installation</h2>
              <p>Install Beautiful Soup 4 via pip. You'll also want <code>lxml</code> or <code>html5lib</code> as your parser — <code>lxml</code> is recommended for speed.</p>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">bash</div>
                </div>
                <pre><span className="cm"># Install Beautiful Soup</span>
pip install beautifulsoup4

<span className="cm"># Install recommended parsers</span>
pip install lxml
pip install html5lib</pre>
              </div>
              <div className="callout tip"><strong>Tip:</strong> Use <code>lxml</code> for fast, lenient HTML parsing. Use <code>html5lib</code> for the most accurate parsing of modern HTML. Use Python's built-in <code>html.parser</code> when you have no external dependencies.</div>
            </section>

            {/* QUICKSTART */}
            <section id="quickstart">
              <span className="section-label">02 — Basics</span>
              <h2>Quick Start</h2>
              <p>Parse a document by passing a string or file handle to the <code>BeautifulSoup</code> constructor, along with the parser you want to use.</p>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="kw">from</span> bs4 <span className="kw">import</span> BeautifulSoup
<span className="kw">import</span> requests

<span className="cm"># From a URL</span>
<span className="vr">res</span> = requests.<span className="fn">get</span>(<span className="st">"https://example.com"</span>)
<span className="vr">soup</span> = <span className="fn">BeautifulSoup</span>(res.text, <span className="st">"lxml"</span>)

<span className="cm"># From a string</span>
<span className="vr">html</span> = <span className="st">"""
&lt;html&gt;
  &lt;head&gt;&lt;title&gt;My Page&lt;/title&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;p class="intro"&gt;Hello &lt;b&gt;world&lt;/b&gt;!&lt;/p&gt;
    &lt;a href="/about"&gt;About&lt;/a&gt;
  &lt;/body&gt;
&lt;/html&gt;
"""</span>
<span className="vr">soup</span> = <span className="fn">BeautifulSoup</span>(html, <span className="st">"lxml"</span>)

<span className="cm"># Basic access</span>
<span className="kw">print</span>(soup.title.string)       <span className="cm"># "My Page"</span>
<span className="kw">print</span>(soup.p[<span className="st">"class"</span>])         <span className="cm"># ["intro"]</span>
<span className="kw">print</span>(soup.a[<span className="st">"href"</span>])          <span className="cm"># "/about"</span></pre>
              </div>

            </section>

            {/* PARSERS */}
            <section id="parsers">
              <span className="section-label">03 — Parsers</span>
              <h2>Choosing a Parser</h2>
              <p>Beautiful Soup supports several HTML and XML parsers. Each has different trade-offs in speed, accuracy, and dependency requirements.</p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Parser</th><th>Usage String</th><th>Speed</th><th>Notes</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>lxml HTML</td><td><code>"lxml"</code></td><td>Very fast</td><td>Recommended. External dep.</td></tr>
                    <tr><td>lxml XML</td><td><code>"lxml-xml"</code> / <code>"xml"</code></td><td>Very fast</td><td>XML-only strict mode.</td></tr>
                    <tr><td>html.parser</td><td><code>"html.parser"</code></td><td>Moderate</td><td>Built-in, no deps.</td></tr>
                    <tr><td>html5lib</td><td><code>"html5lib"</code></td><td>Slow</td><td>Most accurate, pure Python.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* OBJECT TYPES */}
            <section id="objects">
              <span className="section-label">04 — Core Concepts</span>
              <h2>Object Types</h2>
              <p>Beautiful Soup transforms an HTML document into a tree of Python objects. There are four main types:</p>

              <h3>BeautifulSoup</h3>
              <p>Represents the entire document. It's the root of the tree and behaves like a <code>Tag</code> object.</p>

              <h3>Tag</h3>
              <p>Corresponds to an XML/HTML tag. Has a name, attributes, and can contain strings and other tags.</p>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="vr">tag</span> = soup.a
<span className="kw">print</span>(tag.name)          <span className="cm"># "a"</span>
<span className="kw">print</span>(tag.attrs)         <span className="cm"># {"{"}"href": "/about"{"}"}</span>
<span className="kw">print</span>(tag[<span className="st">"href"</span>])       <span className="cm"># "/about"</span>
<span className="kw">print</span>(tag.get(<span className="st">"class"</span>)) <span className="cm"># None (safe access)</span></pre>
              </div>

              <h3>NavigableString</h3>
              <p>A string inside a tag. Not a plain Python string — it knows where it is in the tree.</p>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="vr">s</span> = soup.p.string       <span className="cm"># NavigableString</span>
<span className="kw">print</span>(type(s))          <span className="cm"># &lt;class 'bs4.element.NavigableString'&gt;</span>
<span className="kw">print</span>(str(s))           <span className="cm"># "Hello world!"</span>
<span className="kw">print</span>(s.parent.name)    <span className="cm"># "p"</span></pre>
              </div>

              <h3>Comment</h3>
              <p>A special <code>NavigableString</code> subclass for HTML comments.</p>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="vr">html</span> = <span className="st">"&lt;p&gt;&lt;!-- A comment --&gt;&lt;/p&gt;"</span>
<span className="vr">soup</span> = <span className="fn">BeautifulSoup</span>(html, <span className="st">"lxml"</span>)
<span className="vr">comment</span> = soup.p.string
<span className="kw">print</span>(type(comment))    <span className="cm"># &lt;class 'bs4.element.Comment'&gt;</span></pre>
              </div>
            </section>

            {/* NAVIGATING */}
            <section id="navigating">
              <span className="section-label">05 — Navigation</span>
              <h2>Navigating the Tree</h2>
              <p>You can navigate the parse tree by going up, down, and sideways through the nodes.</p>

              <h3>Going Down</h3>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># Direct child access by tag name</span>
soup.head           <span className="cm"># first &lt;head&gt; tag</span>
soup.body.p         <span className="cm"># first &lt;p&gt; inside &lt;body&gt;</span>

<span className="cm"># .children — direct children as a list-iterator</span>
<span className="kw">for</span> child <span className="kw">in</span> soup.body.children:
    <span className="kw">print</span>(child)

<span className="cm"># .descendants — all nested descendants</span>
<span className="kw">for</span> desc <span className="kw">in</span> soup.body.descendants:
    <span className="kw">print</span>(desc)

<span className="cm"># .string — only if the tag has a single string</span>
soup.title.string   <span className="cm"># "My Page"</span>

<span className="cm"># .strings — iterate over all strings</span>
<span className="kw">for</span> s <span className="kw">in</span> soup.stripped_strings:
    <span className="kw">print</span>(repr(s))</pre>
              </div>

              <h3>Going Up</h3>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># .parent</span>
soup.p.parent.name          <span className="cm"># "body"</span>

<span className="cm"># .parents — iterate all ancestors</span>
<span className="kw">for</span> parent <span className="kw">in</span> soup.a.parents:
    <span className="kw">print</span>(parent.name)</pre>
              </div>

              <h3>Going Sideways</h3>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># .next_sibling / .previous_sibling</span>
soup.p.next_sibling
soup.p.previous_sibling

<span className="cm"># .next_siblings / .previous_siblings (iterators)</span>
<span className="kw">for</span> sib <span className="kw">in</span> soup.p.next_siblings:
    <span className="kw">print</span>(sib)

<span className="cm"># .next_element / .previous_element</span>
<span className="cm"># Navigate in document order (not just siblings)</span>
soup.p.next_element</pre>
              </div>
            </section>

            {/* SEARCHING */}
            <section id="searching">
              <span className="section-label">06 — Search</span>
              <h2>Searching the Tree</h2>
              <p><code>find()</code> returns the first match. <code>find_all()</code> returns a list of all matches. Both accept the same arguments.</p>

              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># By tag name</span>
soup.<span className="fn">find</span>(<span className="st">"p"</span>)
soup.<span className="fn">find_all</span>(<span className="st">"a"</span>)

<span className="cm"># By CSS class</span>
soup.<span className="fn">find</span>(<span className="st">"p"</span>, class_=<span className="st">"intro"</span>)
soup.<span className="fn">find_all</span>(class_=<span className="st">"highlight"</span>)

<span className="cm"># By ID</span>
soup.<span className="fn">find</span>(id=<span className="st">"main"</span>)

<span className="cm"># By attribute</span>
soup.<span className="fn">find_all</span>(<span className="st">"a"</span>, href=<span className="kw">True</span>)         <span className="cm"># any &lt;a&gt; with href</span>
soup.<span className="fn">find_all</span>(<span className="st">"a"</span>, href=<span className="st">"/about"</span>)    <span className="cm"># exact match</span>

<span className="cm"># With regex</span>
<span className="kw">import</span> re
soup.<span className="fn">find_all</span>(<span className="st">"a"</span>, href=re.<span className="fn">compile</span>(<span className="st">r"^https"</span>))

<span className="cm"># Multiple tags at once</span>
soup.<span className="fn">find_all</span>([<span className="st">"h1"</span>, <span className="st">"h2"</span>, <span className="st">"h3"</span>])

<span className="cm"># Limit results</span>
soup.<span className="fn">find_all</span>(<span className="st">"p"</span>, limit=<span className="nm">3</span>)

<span className="cm"># Search within a tag (not the whole document)</span>
<span className="vr">body</span> = soup.body
body.<span className="fn">find_all</span>(<span className="st">"p"</span>)

<span className="cm"># Text search</span>
soup.<span className="fn">find_all</span>(string=<span className="st">"Hello"</span>)
soup.<span className="fn">find_all</span>(string=re.<span className="fn">compile</span>(<span className="st">"hello"</span>, re.I))</pre>
              </div>

              <div className="callout info"><strong>Note:</strong> <code>soup("a")</code> is shorthand for <code>soup.find_all("a")</code>. Very useful in loops.</div>

              <h3>find_parents() & find_next_siblings()</h3>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># Directional search methods</span>
soup.a.<span className="fn">find_parent</span>(<span className="st">"div"</span>)
soup.a.<span className="fn">find_parents</span>(<span className="st">"div"</span>)

soup.p.<span className="fn">find_next_sibling</span>(<span className="st">"p"</span>)
soup.p.<span className="fn">find_next_siblings</span>(<span className="st">"p"</span>)

soup.p.<span className="fn">find_previous_sibling</span>()
soup.p.<span className="fn">find_all_next</span>(<span className="st">"a"</span>)
soup.p.<span className="fn">find_all_previous</span>(<span className="st">"p"</span>)</pre>
              </div>
            </section>

            {/* CSS SELECTORS */}
            <section id="css">
              <span className="section-label">07 — CSS</span>
              <h2>CSS Selectors</h2>
              <p>Use <code>.select()</code> for a list and <code>.select_one()</code> for the first match. Supports most CSS3 selectors.</p>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># Tag</span>
soup.<span className="fn">select</span>(<span className="st">"p"</span>)

<span className="cm"># Class</span>
soup.<span className="fn">select</span>(<span className="st">".intro"</span>)

<span className="cm"># ID</span>
soup.<span className="fn">select_one</span>(<span className="st">"#main"</span>)

<span className="cm"># Descendant</span>
soup.<span className="fn">select</span>(<span className="st">"div p"</span>)

<span className="cm"># Direct child</span>
soup.<span className="fn">select</span>(<span className="st">"div &gt; p"</span>)

<span className="cm"># Attribute selector</span>
soup.<span className="fn">select</span>(<span className="st">'a[href]'</span>)
soup.<span className="fn">select</span>(<span className="st">'a[href^="https"]'</span>)   <span className="cm"># starts with</span>
soup.<span className="fn">select</span>(<span className="st">'a[href$=".pdf"]'</span>)    <span className="cm"># ends with</span>
soup.<span className="fn">select</span>(<span className="st">'a[href*="example"]'</span>)  <span className="cm"># contains</span>

<span className="cm"># Pseudo-class</span>
soup.<span className="fn">select</span>(<span className="st">"li:nth-of-type(1)"</span>)
soup.<span className="fn">select</span>(<span className="st">"p:first-child"</span>)

<span className="cm"># Multiple selectors</span>
soup.<span className="fn">select</span>(<span className="st">"h1, h2, h3"</span>)</pre>
              </div>
            </section>

            {/* MODIFYING */}
            <section id="modifying">
              <span className="section-label">08 — Manipulation</span>
              <h2>Modifying the Tree</h2>
              <p>Beautiful Soup lets you add, remove, and modify nodes. Useful when you need to clean or transform HTML before saving it.</p>

              <h3>Changing Tag Attributes</h3>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="vr">tag</span> = soup.<span className="fn">find</span>(<span className="st">"p"</span>)

<span className="cm"># Set an attribute</span>
tag[<span className="st">"class"</span>] = <span className="st">"new-class"</span>
tag[<span className="st">"data-id"</span>] = <span className="st">"42"</span>

<span className="cm"># Delete an attribute</span>
<span className="kw">del</span> tag[<span className="st">"class"</span>]

<span className="cm"># Change the string inside a tag</span>
tag.string = <span className="st">"New text content"</span></pre>
              </div>

              <h3>Inserting & Moving Tags</h3>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="kw">from</span> bs4 <span className="kw">import</span> BeautifulSoup, Tag, NavigableString

<span className="cm"># append() — add to end of tag's children</span>
<span className="vr">new_tag</span> = soup.<span className="fn">new_tag</span>(<span className="st">"a"</span>, href=<span className="st">"/new"</span>)
new_tag.string = <span className="st">"Click here"</span>
soup.body.<span className="fn">append</span>(new_tag)

<span className="cm"># insert() — at a specific index</span>
soup.body.<span className="fn">insert</span>(<span className="nm">0</span>, new_tag)

<span className="cm"># insert_before() / insert_after()</span>
soup.p.<span className="fn">insert_before</span>(<span className="st">"Some text"</span>)
soup.p.<span className="fn">insert_after</span>(new_tag)

<span className="cm"># wrap() — wrap a tag in another tag</span>
soup.p.<span className="fn">wrap</span>(soup.<span className="fn">new_tag</span>(<span className="st">"div"</span>))

<span className="cm"># unwrap() — remove a tag but keep its children</span>
soup.p.<span className="fn">unwrap</span>()</pre>
              </div>

              <h3>Removing Tags</h3>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># decompose() — remove from tree AND destroy</span>
soup.<span className="fn">find</span>(<span className="st">"script"</span>).<span className="fn">decompose</span>()

<span className="cm"># extract() — remove and return the tag</span>
<span className="vr">removed</span> = soup.<span className="fn">find</span>(<span className="st">"style"</span>).<span className="fn">extract</span>()

<span className="cm"># remove all script tags</span>
<span className="kw">for</span> s <span className="kw">in</span> soup.<span className="fn">find_all</span>(<span className="st">"script"</span>):
    s.<span className="fn">decompose</span>()</pre>
              </div>
            </section>

            {/* OUTPUT */}
            <section id="output">
              <span className="section-label">09 — Output</span>
              <h2>Output & Text Extraction</h2>

              <h3>Prettify & Stringify</h3>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># Prettified HTML string</span>
<span className="kw">print</span>(soup.<span className="fn">prettify</span>())

<span className="cm"># Compact HTML string</span>
<span className="kw">print</span>(str(soup))
<span className="kw">print</span>(str(soup.p))

<span className="cm"># Get only text (no tags)</span>
soup.<span className="fn">get_text</span>()                     <span className="cm"># all text, concatenated</span>
soup.<span className="fn">get_text</span>(separator=<span className="st">"\n"</span>)       <span className="cm"># with custom separator</span>
soup.<span className="fn">get_text</span>(strip=<span className="kw">True</span>)          <span className="cm"># strip whitespace

# .text shorthand (same as get_text())</span>
soup.p.text</pre>
              </div>

              <div className="callout warn"><strong>Warning:</strong> <code>.string</code> returns <code>None</code> if a tag has more than one child. Use <code>.get_text()</code> when a tag contains mixed content.</div>

              <h3>Real-world Text Extraction</h3>
              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># Extract all paragraph texts</span>
texts = [p.<span className="fn">get_text</span>(strip=<span className="kw">True</span>) <span className="kw">for</span> p <span className="kw">in</span> soup.<span className="fn">find_all</span>(<span className="st">"p"</span>)]

<span className="cm"># Extract all links</span>
links = [(a.<span className="fn">get_text</span>(strip=<span className="kw">True</span>), a[<span className="st">"href"</span>])
         <span className="kw">for</span> a <span className="kw">in</span> soup.<span className="fn">find_all</span>(<span className="st">"a"</span>, href=<span className="kw">True</span>)]

<span className="cm"># Extract a table into a list of dicts</span>
<span className="vr">headers</span> = [th.<span className="fn">get_text</span>(strip=<span className="kw">True</span>) <span className="kw">for</span> th <span className="kw">in</span> soup.<span className="fn">select</span>(<span className="st">"thead th"</span>)]
<span className="vr">rows</span> = []
<span className="kw">for</span> tr <span className="kw">in</span> soup.<span className="fn">select</span>(<span className="st">"tbody tr"</span>):
    vals = [td.<span className="fn">get_text</span>(strip=<span className="kw">True</span>) <span className="kw">for</span> td <span className="kw">in</span> tr.<span className="fn">find_all</span>(<span className="st">"td"</span>)]
    rows.<span className="fn">append</span>(dict(<span className="fn">zip</span>(headers, vals)))</pre>
              </div>
            </section>

            {/* FILTERS */}
            <section id="filters">
              <span className="section-label">10 — Advanced</span>
              <h2>Filters</h2>
              <p>The first argument of <code>find()</code>/<code>find_all()</code> is a filter on tag names. Filters can be strings, regex, lists, <code>True</code>, or callables.</p>

              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># True — match any tag</span>
soup.<span className="fn">find_all</span>(<span className="kw">True</span>)

<span className="cm"># Callable filter — define custom logic</span>
<span className="kw">def</span> <span className="fn">has_class_not_id</span>(tag):
    <span className="kw">return</span> tag.<span className="fn">has_attr</span>(<span className="st">"class"</span>) <span className="kw">and not</span> tag.<span className="fn">has_attr</span>(<span className="st">"id"</span>)

soup.<span className="fn">find_all</span>(has_class_not_id)

<span className="cm"># Lambda shorthand</span>
soup.<span className="fn">find_all</span>(<span className="kw">lambda</span> tag: tag.name == <span className="st">"p"</span> <span className="kw">and</span> <span className="st">"intro"</span> <span className="kw">in</span> tag.get(<span className="st">"class"</span>, []))

<span className="cm"># Regex on tag name</span>
<span className="kw">import</span> re
soup.<span className="fn">find_all</span>(re.<span className="fn">compile</span>(<span className="st">r"^h[1-6]$"</span>))  <span className="cm"># all headings</span></pre>
              </div>
            </section>

            {/* ENCODING */}
            <section id="encoding">
              <span className="section-label">11 — Encoding</span>
              <h2>Encoding</h2>
              <p>Beautiful Soup automatically detects and converts encodings using the parser or <code>chardet</code>/<code>charset-normalizer</code>.</p>

              <div className="code-block">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-lang">python</div>
                </div>
                <pre><span className="cm"># Check detected encoding</span>
soup.original_encoding       <span className="cm"># e.g. "utf-8"</span>

<span className="cm"># Encode output</span>
soup.<span className="fn">prettify</span>(<span className="st">"utf-8"</span>)       <span className="cm"># returns bytes</span>
soup.<span className="fn">encode</span>(<span className="st">"latin-1"</span>)

<span className="cm"># Unicode, Dammit — standalone encoding detector</span>
<span className="kw">from</span> bs4 <span className="kw">import</span> UnicodeDammit
<span className="vr">dammit</span> = <span className="fn">UnicodeDammit</span>(raw_bytes)
<span className="kw">print</span>(dammit.unicode_markup)
<span className="kw">print</span>(dammit.original_encoding)</pre>
              </div>
            </section>

            {/* REFERENCE */}
            <section id="reference">
              <span className="section-label">12 — Reference</span>
              <h2>Method Reference</h2>
              <p>Quick reference for the most commonly used methods and properties.</p>

              <div className="method-grid">
                <div className="method-card">
                  <div className="method-name">find(name, attrs, **kwargs)</div>
                  <div className="method-desc">Returns the first matching tag, or <code>None</code>.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">find_all(name, attrs, limit, **kwargs)</div>
                  <div className="method-desc">Returns a ResultSet (list) of all matches.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">select(css_selector)</div>
                  <div className="method-desc">CSS selector — returns a list of matching tags.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">select_one(css_selector)</div>
                  <div className="method-desc">CSS selector — returns first match or <code>None</code>.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">get_text(separator, strip)</div>
                  <div className="method-desc">Returns all text content inside the tag.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">get(attr, default)</div>
                  <div className="method-desc">Safely get an attribute value with a fallback.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">has_attr(attr)</div>
                  <div className="method-desc">Returns <code>True</code> if the tag has the attribute.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">new_tag(name, **attrs)</div>
                  <div className="method-desc">Create a new Tag object to insert into the tree.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">decompose()</div>
                  <div className="method-desc">Remove a tag from the tree and destroy it.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">extract()</div>
                  <div className="method-desc">Remove a tag from the tree and return it.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">replace_with(tag_or_string)</div>
                  <div className="method-desc">Replace this tag with another in the tree.</div>
                </div>
                <div className="method-card">
                  <div className="method-name">prettify(encoding)</div>
                  <div className="method-desc">Return a nicely formatted HTML/XML string.</div>
                </div>
              </div>

              <div className="callout tip"><strong>Full docs:</strong> The official Beautiful Soup documentation is at <strong>beautiful-soup-4.readthedocs.io</strong> — it covers edge cases, encoding details, and parser quirks in depth.</div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
}