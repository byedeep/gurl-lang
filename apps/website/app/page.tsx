'use client'

import { useState } from 'react'
import Editor from '@monaco-editor/react'

export default function Home() {
  const [playgroundCode, setPlaygroundCode] = useState(`bestie

periodt x = 10 + 20;
say x * 2;
slay y = "hello";
say y;
gtg`)

  const [playgroundOutput, setPlaygroundOutput] = useState<string | null>(null)

  const runCode = () => {
    // Placeholder for actual code execution
    setPlaygroundOutput('60\nhello')
  }

  const clearCode = () => {
    setPlaygroundCode(`bestie

gtg`)
    setPlaygroundOutput(null)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="text-center py-20 md:py-24 px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-10 md:mb-12 neon-text">
          GurlLang
        </h1>
        <p className="text-lg md:text-xl mb-10 md:mb-12" style={{ color: 'var(--muted-foreground)' }}>
          A toy programming language written in TypeScript
        </p>
        <div className="mb-10 md:mb-12">
          <code 
            className="px-4 py-2 rounded-md inline-block text-sm md:text-base"
            style={{ 
              backgroundColor: 'var(--muted)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            npm i -g gurl-lang
          </code>
        </div>
        <div className="flex justify-center gap-4 text-sm md:text-base mb-10 md:mb-12">
          <a 
            href="#playground"
            className="px-4 py-2 rounded-md transition-opacity hover:opacity-80"
            style={{ 
              color: 'var(--primary)',
              border: '1px solid var(--border)'
            }}
          >
            Playground
          </a>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md transition-opacity hover:opacity-80"
            style={{ 
              color: 'var(--primary)',
              border: '1px solid var(--border)'
            }}
          >
            View Source
          </a>
        </div>
        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
          Made with 💖
        </p>
      </header>

      {/* Playground Section */}
      <section id="playground" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 neon-text">Playground</h2>
        <div className="mb-6 flex gap-2">
          <button
            onClick={runCode}
            className="px-4 py-2 rounded-md font-medium transition-opacity hover:opacity-80"
            style={{ 
              color: 'var(--primary-foreground)',
              backgroundColor: 'var(--primary)'
            }}
          >
            Run
          </button>
          <button
            onClick={clearCode}
            className="px-4 py-2 rounded-md font-medium transition-opacity hover:opacity-80"
            style={{ 
              color: 'var(--foreground)',
              border: '1px solid var(--border)'
            }}
          >
            Clear
          </button>
        </div>
        <div className={`grid gap-6 ${playgroundOutput !== null ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
          <div>
            <label 
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--primary)' }}
            >
              Code Editor
            </label>
            <div 
              className="border rounded-md overflow-hidden"
              style={{ 
                borderColor: 'var(--border)',
                height: '400px'
              }}
            >
              <Editor
                height="400px"
                defaultLanguage="javascript"
                value={playgroundCode}
                onChange={(value) => setPlaygroundCode(value || '')}
                theme="vs"
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
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--primary)' }}
              >
                Output
              </label>
              <div 
                className="w-full h-64 p-2 rounded-md overflow-auto whitespace-pre-wrap font-mono text-xs"
                style={{ 
                  backgroundColor: 'var(--card)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {playgroundOutput}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Documentation Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <h2 className="text-3xl font-bold mb-3 neon-text">GurlLang cheatsheet</h2>
        <p className="mb-8 text-base" style={{ color: 'var(--muted-foreground)' }}>
          GurlLang is a dynamically typed toy programming language, written in TypeScript.
        </p>

        {/* Responsive dual column grid layout */}
        <div className="grid md:grid-cols-2 md:gap-x-8 lg:gap-x-12 md:gap-y-0 gap-y-6">
          {/* General */}
          <div>
            <h3 className="text-xl font-bold mb-2 neon-text">General</h3>
            <p className="mb-2 text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              <code>bestie</code> is the entrypoint for the program and all programs must end with <code>gtg</code>. Anything outside of it will be ignored.
            </p>
            <pre 
              className="font-mono"
              style={{ 
                fontFamily: 'var(--font-mono)'
              }}
            >
{`This will be ignored

bestie
// Write code here
gtg

This too`}
            </pre>
          </div>

          {/* Variables */}
          <div>
            <h3 className="text-xl font-bold mb-2 neon-text">Variables</h3>
            
            <h4 className="text-base font-semibold mb-2 mt-3" style={{ color: 'var(--foreground)' }}>Mutability</h4>
            <pre 
              className="font-mono"
              style={{ 
                fontFamily: 'var(--font-mono)'
              }}
            >
{`bestie
periodt a = 10;  // constant
slay b = "two";  // mutable
slay c = 15;
b = 21;
c = c * 2;
gtg`}
            </pre>
          </div>

          {/* Types */}
          <div>
            <h3 className="text-xl font-bold mb-2 neon-text">Types</h3>
            <pre 
              className="font-mono"
              style={{ 
                fontFamily: 'var(--font-mono)'
              }}
            >
{`bestie
periodt a = 10;
periodt b = 10 + (15 * 20);
periodt c = "two";
periodt d = 'ok';
periodt e = null;
periodt f = true;
periodt g = false;
gtg`}
            </pre>
          </div>

          {/* Built-ins */}
          <div>
            <h3 className="text-xl font-bold mb-2 neon-text">Built-ins</h3>
            <p className="mb-2 text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Use <code>say</code> to print anything to console.
            </p>
            <pre 
              className="font-mono"
              style={{ 
                fontFamily: 'var(--font-mono)'
              }}
            >
{`bestie
say "Hello World";
periodt a = 10;
{
  slay b = 20;
  say a + b;
}
say 5, 'ok', null, true, false;
gtg`}
            </pre>
          </div>

          {/* Conditionals */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2 neon-text">Conditionals</h3>
            <pre 
              className="font-mono"
              style={{ 
                fontFamily: 'var(--font-mono)'
              }}
            >
{`bestie
periodt a = 10;
spill(a < 20){
  say "a is less than 20";
} nvm {
  say "a is greater than or equal to 20";
}
gtg`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t" style={{ borderColor: 'var(--border)' }}>
        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
          © {new Date().getFullYear()} GurlLang
        </p>
      </footer>
    </main>
  )
}
