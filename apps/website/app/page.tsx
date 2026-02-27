'use client'

import { useState, useEffect, useRef } from 'react'
import Editor from '@monaco-editor/react'

export default function Home() {
  const [playgroundCode, setPlaygroundCode] = useState(`bestie

periodt x = 10 + 20;
say x * 2;
slay y = "hello";
say y;
gtg`)

  const [playgroundOutput, setPlaygroundOutput] = useState<string | null>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  /* Define custom Monaco theme */

  const runCode = () => {
    // Placeholder for actual code execution
    setPlaygroundOutput('60\nhello')
  }

  const clearCode = () => {
    setPlaygroundCode(`bestie

gtg`)
    setPlaygroundOutput(null)
  }

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero Section - No shadow */}
      <header className="py-20 md:py-32 relative overflow-hidden fade-in" style={{ background: 'var(--background)' }}>
        {/* Gradient highlight behind title */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, var(--primary) 0%, transparent 50%)'
          }}
        />
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center">
            {/* Main Title - Extra Bold */}
            <h1 
              className="mb-12 fade-in-up"
              style={{
                fontSize: 'var(--text-h1)',
                lineHeight: '1.1',
                color: 'var(--primary)',
                fontFamily: 'var(--font-meow)',
                fontStyle: 'normal',
                letterSpacing: '0.04em',
                fontWeight: 400
              }}
            >
              Gurl-Lang
            </h1>
            
            {/* Subtitle Tagline */}
            <p 
              className="text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto fade-in-up"
              style={{ 
                color: 'var(--muted-foreground)',
                lineHeight: '1.75'
              }}
            >
              A toy programming language written in TypeScript
            </p>
            
            {/* Installation Code */}
            <div className="mb-10 md:mb-12 fade-in-up">
              <code 
                className="px-5 py-2.5 inline-block text-sm md:text-base"
                style={{ 
                  backgroundColor: 'var(--muted)',
                  color: 'var(--foreground)',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: 'var(--radius-button)',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                npm i -g gurl-lang
              </code>
            </div>
            
            {/* CTA Buttons - Improved with gradients and smooth transitions */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 fade-in-up">
              <a 
                href="#playground"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Playground
              </a>
              <a 
                href="https://github.com/byedeep/gurl-lang"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-center"
              >
                View Source
              </a>
            </div>
            
            {/* Footer Note - Lighter and smaller */}
            <p 
              className="text-sm fade-in-up" 
              style={{ color: 'var(--muted-foreground)' }}
            >
              Made by{' '}
              <a 
                href="https://github.com/VaidehiCodes" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--primary)', textDecoration: 'none' }}
                className="hover:underline"
              >
                @grg21
              </a>
              {' '}and{' '}
              <a 
                href="https://github.com/byedeep" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--primary)', textDecoration: 'none' }}
                className="hover:underline"
              >
                @byedeep
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* Playground Section - Strongest shadow */}
      <section 
        id="playground" 
        className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 fade-on-scroll"
        ref={(el) => { sectionRefs.current[0] = el }}
      >
        <div className="playground-container p-6 md:p-8">
          <h2 
            className="text-2xl md:text-3xl mb-6"
            style={{ 
              fontSize: 'var(--text-h2)',
              color: 'var(--primary)',
              fontFamily: 'var(--font-meow)',
              fontStyle: 'normal',
              letterSpacing: '0.04em',
              fontWeight: 400
            }}
          >
            Playground
          </h2>
          
          {/* Toolbar */}
          <div className="mb-6 flex flex-wrap gap-3">
            <button
              onClick={runCode}
              className="btn-primary px-5 py-2 text-sm md:text-base"
            >
              Run
            </button>
            <button
              onClick={clearCode}
              className="btn-secondary px-5 py-2 text-sm md:text-base"
            >
              Clear
            </button>
          </div>
          
          {/* Editor and Output Grid */}
          <div className={`grid gap-6 ${playgroundOutput !== null ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
            <div>
              <label 
                className="block text-sm font-medium mb-3"
                style={{ color: 'var(--foreground)' }}
              >
                Code Editor
              </label>
              <div 
                className="rounded-lg overflow-hidden"
                style={{ 
                  border: `1px solid var(--border)`,
                  height: '400px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <Editor
                  height="400px"
                  defaultLanguage="javascript"
                  value={playgroundCode}
                  onChange={(value) => setPlaygroundCode(value || '')}
                  theme="light"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    wordWrap: 'on',
                    padding: { top: 12, bottom: 12 },
                    fontFamily: 'var(--font-mono)',
                  }}
                />
              </div>
            </div>
            {playgroundOutput !== null && (
              <div>
                <label 
                  className="block text-sm font-medium mb-3"
                  style={{ color: 'var(--foreground)' }}
                >
                  Output
                </label>
                <div 
                  className="w-full p-4 rounded-lg overflow-auto whitespace-pre-wrap"
                  style={{ 
                    backgroundColor: 'var(--muted)',
                    color: 'var(--foreground)',
                    border: `1px solid var(--border)`,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    lineHeight: '1.7',
                    borderRadius: 'var(--radius-card)',
                    height: '400px',
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  {playgroundOutput}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section 
        className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 fade-on-scroll"
        ref={(el) => { sectionRefs.current[1] = el }}
      >
        <h2 
          className="text-2xl md:text-3xl mb-4"
          style={{ 
            fontSize: 'var(--text-h2)',
            color: 'var(--primary)',
            fontFamily: 'var(--font-meow)',
            fontStyle: 'normal',
            letterSpacing: '0.04em',
            fontWeight: 400
          }}
        >
          Gurl-Lang cheatsheet
        </h2>
        <p 
          className="mb-12 text-base md:text-lg" 
          style={{ color: 'var(--muted-foreground)', lineHeight: '1.75' }}
        >
          GurlLang is a dynamically typed toy programming language, written in TypeScript.
        </p>

        {/* Card-based grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* General Card */}
          <div 
            className="cheatsheet-card fade-on-scroll"
            style={{ padding: 'var(--space-md)' }}
            ref={(el) => { sectionRefs.current[2] = el }}
          >
            <h3 
              className="text-xl md:text-2xl mb-4"
              style={{ 
                fontSize: 'var(--text-h3)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-meow)',
                fontStyle: 'normal',
                letterSpacing: '0.04em',
                fontWeight: 400
              }}
            >
              General
            </h3>
            <p className="mb-4 text-sm md:text-base" style={{ color: 'var(--muted-foreground)', lineHeight: '1.75' }}>
              <code className="px-1.5 py-0.5 rounded text-xs md:text-sm" style={{ backgroundColor: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>bestie</code> is the entrypoint for the program and all programs must end with <code className="px-1.5 py-0.5 rounded text-xs md:text-sm" style={{ backgroundColor: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>gtg</code>. Anything outside of it will be ignored.
            </p>
            <pre 
              className="overflow-x-auto text-xs md:text-sm"
              style={{ 
                fontFamily: 'var(--font-mono)',
                backgroundColor: '#353042',
                color: '#FFF0F5',
                lineHeight: '1.7',
                marginTop: 'var(--space-sm)',
                padding: 'var(--space-md)',
                borderRadius: 'var(--radius-card)'
              }}
            >
{`This will be ignored

`}<span style={{ color: '#ff709b' }}>bestie</span>{`
`}<span style={{ color: '#857282' }}>// Write code here</span>{`
`}<span style={{ color: '#ff709b' }}>gtg</span>{`

This too`}
            </pre>
          </div>

          {/* Variables Card */}
          <div 
            className="cheatsheet-card fade-on-scroll"
            style={{ padding: 'var(--space-md)' }}
            ref={(el) => { sectionRefs.current[3] = el }}
          >
            <h3 
              className="text-xl md:text-2xl mb-4"
              style={{ 
                fontSize: 'var(--text-h3)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-meow)',
                fontStyle: 'normal',
                letterSpacing: '0.04em',
                fontWeight: 400
              }}
            >
              Variables
            </h3>
            
            <h4 className="text-base md:text-lg mb-3 mt-4" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-sans)' }}>Mutability</h4>
            <pre 
              className="overflow-x-auto text-xs md:text-sm"
              style={{ 
                fontFamily: 'var(--font-mono)',
                backgroundColor: '#353042',
                color: '#FFF0F5',
                lineHeight: '1.7',
                marginTop: 'var(--space-xs)',
                padding: 'var(--space-md)',
                borderRadius: 'var(--radius-card)'
              }}
            >
{`bestie
`}<span style={{ color: '#ff709b' }}>periodt</span>{` a = `}<span style={{ color: '#FFA7C4' }}>10</span>{`;  `}<span style={{ color: '#857282' }}>// constant</span>{`
`}<span style={{ color: '#ff709b' }}>slay</span>{` b = `}<span style={{ color: '#FFA7C4' }}>"two"</span>{`;  `}<span style={{ color: '#857282' }}>// mutable</span>{`
`}<span style={{ color: '#ff709b' }}>slay</span>{` c = `}<span style={{ color: '#FFA7C4' }}>15</span>{`;
b = `}<span style={{ color: '#FFA7C4' }}>21</span>{`;
c = c * `}<span style={{ color: '#FFA7C4' }}>2</span>{`;
gtg`}
            </pre>
          </div>

          {/* Types Card */}
          <div 
            className="cheatsheet-card fade-on-scroll"
            style={{ padding: 'var(--space-md)' }}
            ref={(el) => { sectionRefs.current[4] = el }}
          >
            <h3 
              className="text-xl md:text-2xl mb-4"
              style={{ 
                fontSize: 'var(--text-h3)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-meow)',
                fontStyle: 'normal',
                letterSpacing: '0.04em',
                fontWeight: 400
              }}
            >
              Types
            </h3>
            <pre 
              className="overflow-x-auto text-xs md:text-sm"
              style={{ 
                fontFamily: 'var(--font-mono)',
                backgroundColor: '#353042',
                color: '#FFF0F5',
                lineHeight: '1.7',
                marginTop: 'var(--space-xs)',
                padding: 'var(--space-md)',
                borderRadius: 'var(--radius-card)'
              }}
            >
{`bestie
`}<span style={{ color: '#ff709b' }}>periodt</span>{` a = `}<span style={{ color: '#FFA7C4' }}>10</span>{`;
`}<span style={{ color: '#ff709b' }}>periodt</span>{` b = `}<span style={{ color: '#FFA7C4' }}>10</span>{` + (`}<span style={{ color: '#FFA7C4' }}>15</span>{` * `}<span style={{ color: '#FFA7C4' }}>20</span>{`);
`}<span style={{ color: '#ff709b' }}>periodt</span>{` c = `}<span style={{ color: '#FFA7C4' }}>"two"</span>{`;
`}<span style={{ color: '#ff709b' }}>periodt</span>{` d = `}<span style={{ color: '#FFA7C4' }}>'ok'</span>{`;
`}<span style={{ color: '#ff709b' }}>periodt</span>{` e = `}<span style={{ color: '#FFA7C4' }}>null</span>{`;
`}<span style={{ color: '#ff709b' }}>periodt</span>{` f = `}<span style={{ color: '#FFA7C4' }}>true</span>{`;
`}<span style={{ color: '#ff709b' }}>periodt</span>{` g = `}<span style={{ color: '#FFA7C4' }}>false</span>{`;
gtg`}
            </pre>
          </div>

          {/* Built-ins Card */}
          <div 
            className="cheatsheet-card fade-on-scroll"
            style={{ padding: 'var(--space-md)' }}
            ref={(el) => { sectionRefs.current[5] = el }}
          >
            <h3 
              className="text-xl md:text-2xl mb-4"
              style={{ 
                fontSize: 'var(--text-h3)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-meow)',
                fontStyle: 'normal',
                letterSpacing: '0.04em',
                fontWeight: 400
              }}
            >
              Built-ins
            </h3>
            <p className="mb-4 text-sm md:text-base" style={{ color: 'var(--muted-foreground)', lineHeight: '1.75' }}>
              Use <code className="px-1.5 py-0.5 rounded text-xs md:text-sm" style={{ backgroundColor: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>say</code> to print anything to console.
            </p>
            <pre 
              className="overflow-x-auto text-xs md:text-sm"
              style={{ 
                fontFamily: 'var(--font-mono)',
                backgroundColor: '#353042',
                color: '#FFF0F5',
                lineHeight: '1.7',
                marginTop: 'var(--space-xs)',
                padding: 'var(--space-md)',
                borderRadius: 'var(--radius-card)'
              }}
            >
{`bestie
`}<span style={{ color: '#ff709b' }}>say</span>{` `}<span style={{ color: '#FFA7C4' }}>"Hello World"</span>{`;
`}<span style={{ color: '#ff709b' }}>periodt</span>{` a = `}<span style={{ color: '#FFA7C4' }}>10</span>{`;
{
  `}<span style={{ color: '#ff709b' }}>slay</span>{` b = `}<span style={{ color: '#FFA7C4' }}>20</span>{`;
  `}<span style={{ color: '#ff709b' }}>say</span>{` a + b;
}
`}<span style={{ color: '#ff709b' }}>say</span>{` `}<span style={{ color: '#FFA7C4' }}>5</span>{`, `}<span style={{ color: '#FFA7C4' }}>'ok'</span>{`, `}<span style={{ color: '#FFA7C4' }}>null</span>{`, `}<span style={{ color: '#FFA7C4' }}>true</span>{`, `}<span style={{ color: '#FFA7C4' }}>false</span>{`;
gtg`}
            </pre>
          </div>

          {/* Conditionals Card */}
          <div 
            className="cheatsheet-card md:col-span-2 fade-on-scroll"
            style={{ padding: 'var(--space-md)' }}
            ref={(el) => { sectionRefs.current[6] = el }}
          >
            <h3 
              className="text-xl md:text-2xl mb-4"
              style={{ 
                fontSize: 'var(--text-h3)',
                color: 'var(--primary)',
                fontFamily: 'var(--font-meow)',
                fontStyle: 'normal',
                letterSpacing: '0.04em',
                fontWeight: 400
              }}
            >
              Conditionals
            </h3>
            <pre 
              className="overflow-x-auto text-xs md:text-sm"
              style={{ 
                fontFamily: 'var(--font-mono)',
                backgroundColor: '#353042',
                color: '#FFF0F5',
                lineHeight: '1.7',
                marginTop: 'var(--space-xs)',
                padding: 'var(--space-md)',
                borderRadius: 'var(--radius-card)'
              }}
            >
{`bestie
`}<span style={{ color: '#ff709b' }}>periodt</span>{` a = `}<span style={{ color: '#FFA7C4' }}>10</span>{`;
`}<span style={{ color: '#ff709b' }}>spill</span>{`(a < `}<span style={{ color: '#FFA7C4' }}>20</span>{`){
  `}<span style={{ color: '#ff709b' }}>say</span>{` `}<span style={{ color: '#FFA7C4' }}>"a is less than 20"</span>{`;
} `}<span style={{ color: '#ff709b' }}>nvm</span>{` {
  `}<span style={{ color: '#ff709b' }}>say</span>{` `}<span style={{ color: '#FFA7C4' }}>"a is greater than or equal to 20"</span>{`;
}
gtg`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer - Lighter and smaller */}
      <footer 
        className="text-center py-8 px-4 border-t" 
        style={{ 
          borderColor: 'var(--border)',
          background: 'var(--background)'
        }}
      >
        <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
          © {new Date().getFullYear()} Gurl-Lang
        </p>
      </footer>
    </main>
  )
}
