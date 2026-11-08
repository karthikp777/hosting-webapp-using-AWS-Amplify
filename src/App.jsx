
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">

      {/* Navigation */}
      <nav className="navbar">
        <a className="brand" href="/">
          Cloud<span>Launch</span>
        </a>

        <a className="nav-link" href="#about">
          About
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="eyebrow">
          REACT + AWS AMPLIFY
        </div>

        <h1>
          Your website is ready
          <br />
          <span>for the cloud.</span>
        </h1>

        <p className="intro">
          A clean starter React application.
          Push it to GitHub, connect the repository
          to AWS Amplify, and deploy your website.
        </p>

        <div className="actions">

          <a className="primary-button" href="#about">
            Explore the project
          </a>

          <button
            className="secondary-button"
            onClick={() => setCount(count + 1)}
          >
            Clicked {count} times
          </button>

        </div>

        {/* Application Status */}
        <div className="status-card">
          <span className="status-dot"></span>

          <div>
            <strong>Application running</strong>
            <small>
              React frontend · Vite build · Amplify-ready
            </small>
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="features" id="about">

        <article className="feature-card">
          <div className="feature-icon">⚛</div>

          <h2>React frontend</h2>

          <p>
            Reusable components and a simple
            interactive example.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">▤</div>

          <h2>Separate CSS</h2>

          <p>
            Styles are organized in dedicated
            CSS files inside src.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">☁</div>

          <h2>Cloud deployment</h2>

          <p>
            Build the project and publish the
            dist folder with Amplify.
          </p>
        </article>

      </section>

      {/* Footer */}
      <footer>
        Built with React · Ready for AWS Amplify
      </footer>

    </main>
  );
}
